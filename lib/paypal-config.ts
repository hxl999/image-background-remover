// PayPal 配置
export const PAYPAL_CONFIG = {
  clientId: 'AQb1RA9EfdF2Uv6h2VVXp0LBF5-AIe7hOtRJ4HroBjAvap0WeF70mzwQC__NO7HjIbrzvRNXinL9kMfh',
  mode: 'sandbox',
  currency: 'USD'
}

// 积分包
export const CREDIT_PACKAGES = [
  { id: 'pack_10', name: 'Starter', credits: 10, price: 0.99 },
  { id: 'pack_50', name: 'Popular', credits: 50, price: 3.99 },
  { id: 'pack_100', name: 'Pro Pack', credits: 100, price: 6.99 }
]

// 订阅计划
export const SUBSCRIPTION_PLANS = [
  { id: 'basic', name: 'Basic', price: 4.99, credits: 100 },
  { id: 'pro', name: 'Pro', price: 9.99, credits: 300 },
  { id: 'premium', name: 'Premium', price: 19.99, credits: 1000 }
]
