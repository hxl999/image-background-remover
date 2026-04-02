// PayPal Webhook Handler - Cloudflare Pages Function
const PAYPAL_CLIENT_ID = 'AQb1RA9EfdF2Uv6h2VVXp0LBF5-AIe7hOtRJ4HroBjAvap0WeF70mzwQC__NO7HjIbrzvRNXinL9kMfh'
const PAYPAL_SECRET = 'EBKscI9yHQLEJFlRNYfa_Q6dOfAKw2D_9CkdYJQnqrZr1qYiffc73aXnbzCOmfdGOJY-2wKeigQqDc9C'
const PAYPAL_WEBHOOK_ID = '3F404434KP705680M'
const PAYPAL_API = 'https://api-m.sandbox.paypal.com'

// 验证 Webhook 签名
async function verifyWebhook(request, body) {
  const headers = Object.fromEntries(request.headers.entries())
  
  const tokenRes = await fetch(`${PAYPAL_API}/v1/oauth2/token`, {
    method: 'POST',
    headers: {
      'Authorization': 'Basic ' + btoa(`${PAYPAL_CLIENT_ID}:${PAYPAL_SECRET}`),
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'grant_type=client_credentials'
  })
  const { access_token } = await tokenRes.json()

  const verifyRes = await fetch(`${PAYPAL_API}/v1/notifications/verify-webhook-signature`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${access_token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      auth_algo: headers['paypal-auth-algo'],
      cert_url: headers['paypal-cert-url'],
      transmission_id: headers['paypal-transmission-id'],
      transmission_sig: headers['paypal-transmission-sig'],
      transmission_time: headers['paypal-transmission-time'],
      webhook_id: PAYPAL_WEBHOOK_ID,
      webhook_event: JSON.parse(body)
    })
  })
  const result = await verifyRes.json()
  return result.verification_status === 'SUCCESS'
}

export async function onRequestPost(context) {
  const { env } = context
  const body = await context.request.text()
  
  try {
    // 验证签名
    const isValid = await verifyWebhook(context.request, body)
    if (!isValid) {
      return new Response('Invalid signature', { status: 401 })
    }

    const event = JSON.parse(body)
    const eventType = event.event_type

    // 处理一次性支付完成
    if (eventType === 'PAYMENT.CAPTURE.COMPLETED') {
      const capture = event.resource
      const amount = parseFloat(capture.amount.value)
      const payerEmail = capture.payer?.email_address || ''
      
      // 根据金额确定积分包
      let credits = 0
      if (amount <= 1) credits = 10
      else if (amount <= 4) credits = 50
      else if (amount <= 7) credits = 100

      // 更新数据库
      if (credits > 0 && env.DB) {
        // 查找或创建用户
        let user = await env.DB.prepare('SELECT * FROM users WHERE email = ?').bind(payerEmail).first()
        if (!user) {
          await env.DB.prepare('INSERT INTO users (email, credits) VALUES (?, ?)').bind(payerEmail, credits).run()
        } else {
          await env.DB.prepare('UPDATE users SET credits = credits + ? WHERE email = ?').bind(credits, payerEmail).run()
        }

        // 记录交易
        await env.DB.prepare(
          'INSERT INTO usage_records (user_email, action, credits, amount, paypal_order_id, created_at) VALUES (?, ?, ?, ?, ?, ?)'
        ).bind(payerEmail, 'purchase', credits, amount, capture.id, new Date().toISOString()).run()
      }
    }

    // 处理订阅激活
    if (eventType === 'BILLING.SUBSCRIPTION.ACTIVATED') {
      const subscription = event.resource
      const subscriberEmail = subscription.subscriber?.email_address || ''
      const planId = subscription.plan_id

      if (env.DB) {
        await env.DB.prepare(
          'UPDATE users SET subscription_plan = ?, subscription_id = ?, subscription_status = ? WHERE email = ?'
        ).bind(planId, subscription.id, 'active', subscriberEmail).run()
      }
    }

    // 处理订阅取消
    if (eventType === 'BILLING.SUBSCRIPTION.CANCELLED') {
      const subscription = event.resource
      const subscriberEmail = subscription.subscriber?.email_address || ''

      if (env.DB) {
        await env.DB.prepare(
          'UPDATE users SET subscription_status = ? WHERE email = ?'
        ).bind('cancelled', subscriberEmail).run()
      }
    }

    return new Response(JSON.stringify({ status: 'ok' }), {
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (error) {
    console.error('Webhook error:', error)
    return new Response(JSON.stringify({ error: 'Internal error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
}
