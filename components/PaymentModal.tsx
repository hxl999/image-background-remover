'use client'

import { useState } from 'react'
import PayPalButton from './PayPalButton'

interface PaymentModalProps {
  isOpen: boolean
  onClose: () => void
  amount: string
  description: string
  packageId: string
}

export default function PaymentModal({ isOpen, onClose, amount, description, packageId }: PaymentModalProps) {
  if (!isOpen) return null

  const handleSuccess = (details: any) => {
    console.log('Payment successful:', details)
    alert('Payment successful! Your credits will be added shortly.')
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold">Complete Payment</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-black text-2xl">&times;</button>
        </div>
        <div className="mb-6">
          <p className="text-gray-600 mb-2">{description}</p>
          <p className="text-3xl font-bold">${amount}</p>
        </div>
        <PayPalButton amount={amount} description={description} onSuccess={handleSuccess} />
      </div>
    </div>
  )
}
