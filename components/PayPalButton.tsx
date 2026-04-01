'use client'

import { useEffect, useRef } from 'react'

interface PayPalButtonProps {
  amount: string
  description: string
  onSuccess: (details: any) => void
}

export default function PayPalButton({ amount, description, onSuccess }: PayPalButtonProps) {
  const paypalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (paypalRef.current && (window as any).paypal) {
      (window as any).paypal.Buttons({
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
  }, [amount, description, onSuccess])

  return <div ref={paypalRef}></div>
}
