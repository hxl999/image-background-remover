'use client'

import { useEffect, useRef, useState } from 'react'

interface PayPalButtonProps {
  amount: string
  description: string
  onSuccess: (details: any) => void
}

export default function PayPalButton({ amount, description, onSuccess }: PayPalButtonProps) {
  const paypalRef = useRef<HTMLDivElement>(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if ((window as any).paypal) {
      setLoaded(true)
      return
    }

    const script = document.createElement('script')
    script.src = 'https://www.paypal.com/sdk/js?client-id=AQb1RA9EfdF2Uv6h2VVXp0LBF5-AIe7hOtRJ4HroBjAvap0WeF70mzwQC__NO7HjIbrzvRNXinL9kMfh&currency=USD'
    script.onload = () => setLoaded(true)
    document.body.appendChild(script)
  }, [])

  useEffect(() => {
    if (loaded && paypalRef.current && (window as any).paypal) {
      paypalRef.current.innerHTML = ''
      ;(window as any).paypal.Buttons({
        createOrder: (data: any, actions: any) => {
          return actions.order.create({
            purchase_units: [{
              description: description,
              amount: { value: amount }
            }]
          })
        },
        onApprove: async (data: any, actions: any) => {
          const details = await actions.order.capture()
          onSuccess(details)
        }
      }).render(paypalRef.current)
    }
  }, [loaded, amount, description, onSuccess])

  return <div ref={paypalRef}>{!loaded && <div className="text-center py-4">Loading PayPal...</div>}</div>
}
