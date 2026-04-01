'use client'

import { useState } from 'react'
import PaymentModal from '@/components/PaymentModal'

export default function PricingPage() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedPackage, setSelectedPackage] = useState({ amount: '', description: '', id: '' })

  const openPayment = (amount: string, description: string, id: string) => {
    setSelectedPackage({ amount, description, id })
    setModalOpen(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="text-xl font-bold">BG Remover</a>
          <a href="/" className="text-sm text-gray-600 hover:text-black">Home</a>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-600">Choose credits or subscription · No hidden fees</p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Credits · Buy Once, Use Forever</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold mb-4">Starter</h3>
              <div className="mb-2"><span className="text-5xl font-bold">$0.99</span></div>
              <p className="text-gray-600 mb-6">10 credits · $0.10 each</p>
              <button onClick={() => openPayment('0.99', 'Starter - 10 credits', 'pack_10')} className="w-full py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 mb-6">Buy Now</button>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>10 HD removals</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>Never expires</span></li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 border-2 border-blue-500 shadow-xl relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</div>
              <h3 className="text-2xl font-bold mb-4">Popular</h3>
              <div className="mb-2"><span className="text-5xl font-bold">$3.99</span></div>
              <p className="text-gray-600 mb-6">50 credits · $0.08 each</p>
              <button onClick={() => openPayment('3.99', 'Popular - 50 credits', 'pack_50')} className="w-full py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 mb-6">Buy Now</button>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>50 HD removals</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>Never expires</span></li>
                <li className="flex items-start"><span className="text-blue-500 mr-2">✓</span><span className="font-semibold">Save 20%</span></li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:shadow-xl transition-all relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Best Value</div>
              <h3 className="text-2xl font-bold mb-4">Pro Pack</h3>
              <div className="mb-2"><span className="text-5xl font-bold">$6.99</span></div>
              <p className="text-gray-600 mb-6">100 credits · $0.07 each</p>
              <button onClick={() => openPayment('6.99', 'Pro Pack - 100 credits', 'pack_100')} className="w-full py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 mb-6">Buy Now</button>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>100 HD removals</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>Never expires</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span className="font-semibold">Save 30%</span></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Monthly Subscription · Cancel Anytime</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold mb-4">Basic</h3>
              <div className="mb-2"><span className="text-5xl font-bold">$4.99</span><span className="text-gray-600">/mo</span></div>
              <p className="text-gray-600 mb-6">100 removals/month</p>
              <button onClick={() => openPayment('4.99', 'Basic Subscription', 'sub_basic')} className="w-full py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 mb-6">Subscribe</button>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>100 HD removals/mo</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>Cancel anytime</span></li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 border-2 border-purple-500 shadow-xl relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Best Deal</div>
              <h3 className="text-2xl font-bold mb-4">Pro</h3>
              <div className="mb-2"><span className="text-5xl font-bold">$9.99</span><span className="text-gray-600">/mo</span></div>
              <p className="text-gray-600 mb-6">300 removals/month</p>
              <button onClick={() => openPayment('9.99', 'Pro Subscription', 'sub_pro')} className="w-full py-3 bg-purple-500 text-white rounded-lg font-semibold hover:bg-purple-600 mb-6">Subscribe</button>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>300 HD removals/mo</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>Priority support</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>Cancel anytime</span></li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold mb-4">Premium</h3>
              <div className="mb-2"><span className="text-5xl font-bold">$19.99</span><span className="text-gray-600">/mo</span></div>
              <p className="text-gray-600 mb-6">1000 removals/month</p>
              <button onClick={() => openPayment('19.99', 'Premium Subscription', 'sub_premium')} className="w-full py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 mb-6">Subscribe</button>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>1000 HD removals/mo</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>Priority support</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>Batch processing</span></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center gap-8 text-gray-600 text-sm">
          <div className="flex items-center gap-2"><span className="text-green-500">✓</span><span>Secure payment</span></div>
          <div className="flex items-center gap-2"><span className="text-green-500">✓</span><span>Cancel anytime</span></div>
          <div className="flex items-center gap-2"><span className="text-green-500">✓</span><span>No hidden fees</span></div>
          <div className="flex items-center gap-2"><span className="text-green-500">✓</span><span>7-day refund</span></div>
        </div>
      </div>

      <PaymentModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        amount={selectedPackage.amount} 
        description={selectedPackage.description} 
        packageId={selectedPackage.id} 
      />
    </div>
  )
}
