'use client'

import { useState, useEffect } from 'react'
import PaymentModal from '@/components/PaymentModal'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import { translations } from '@/lib/translations'

export default function PricingPage() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedPackage, setSelectedPackage] = useState({ amount: '', description: '', id: '' })
  const [lang, setLang] = useState<'zh' | 'en'>('zh')
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    setHydrated(true)
    const savedLang = localStorage.getItem('lang') as 'zh' | 'en' || 'zh'
    setLang(savedLang)
    
    const handleLangChange = (e: any) => setLang(e.detail)
    window.addEventListener('langChange', handleLangChange)
    return () => window.removeEventListener('langChange', handleLangChange)
  }, [])

  const t = translations[lang].pricing
  const nav = translations[lang].nav

  const openPayment = (amount: string, description: string, id: string) => {
    setSelectedPackage({ amount, description, id })
    setModalOpen(true)
  }

  const btnClass = (base: string) => hydrated 
    ? `${base} cursor-pointer` 
    : `${base} opacity-50 cursor-wait`

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="text-xl font-bold">BG Remover</a>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <a href="/pricing" className="text-sm text-gray-600 hover:text-black">{nav.pricing}</a>
            <a href="/dashboard" className="text-sm text-gray-600 hover:text-black">{nav.dashboard}</a>
            <a href="/" className="text-sm text-gray-600 hover:text-black">{nav.home}</a>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">{t.title}</h1>
          <p className="text-xl text-gray-600">{t.subtitle}</p>
          <p className="text-sm text-gray-500 mt-2">🎁 新用户注册送 3 次免费使用</p>
        </div>

        {/* 积分包 */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">{t.credits}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter */}
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold mb-4">{t.starter}</h3>
              <div className="mb-2"><span className="text-5xl font-bold">$0.99</span></div>
              <p className="text-gray-600 mb-6">10 credits · $0.10/each</p>
              <button 
                onClick={() => openPayment('0.99', `${t.starter} - 10 credits`, 'pack_10')} 
                className={btnClass("w-full py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 mb-6")}
              >
                {hydrated ? t.buyNow : '⏳ Loading...'}
              </button>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>10 HD removals</li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>{t.neverExpires}</li>
              </ul>
            </div>

            {/* Popular */}
            <div className="bg-white rounded-2xl p-8 border-2 border-blue-500 shadow-xl relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">{t.mostPopular}</div>
              <h3 className="text-2xl font-bold mb-4">{t.popular}</h3>
              <div className="mb-2"><span className="text-5xl font-bold">$3.99</span></div>
              <p className="text-gray-600 mb-6">50 credits · $0.08/each</p>
              <button 
                onClick={() => openPayment('3.99', `${t.popular} - 50 credits`, 'pack_50')} 
                className={btnClass("w-full py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 mb-6")}
              >
                {hydrated ? t.buyNow : '⏳ Loading...'}
              </button>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>50 HD removals</li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>{t.neverExpires}</li>
                <li className="flex items-start"><span className="text-blue-500 mr-2">✓</span><span className="font-semibold">{t.save} 20%</span></li>
              </ul>
            </div>

            {/* Pro Pack */}
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:shadow-xl transition-all relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">{t.bestValue}</div>
              <h3 className="text-2xl font-bold mb-4">{t.proPack}</h3>
              <div className="mb-2"><span className="text-5xl font-bold">$6.99</span></div>
              <p className="text-gray-600 mb-6">100 credits · $0.07/each</p>
              <button 
                onClick={() => openPayment('6.99', `${t.proPack} - 100 credits`, 'pack_100')} 
                className={btnClass("w-full py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 mb-6")}
              >
                {hydrated ? t.buyNow : '⏳ Loading...'}
              </button>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>100 HD removals</li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>{t.neverExpires}</li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span className="font-semibold">{t.save} 30%</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/* 月订阅 */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">{t.subscription}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic */}
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold mb-4">{t.basic}</h3>
              <div className="mb-2"><span className="text-5xl font-bold">$4.99</span><span className="text-gray-600">/mo</span></div>
              <p className="text-gray-600 mb-6">100 removals/month</p>
              <button 
                onClick={() => openPayment('4.99', `${t.basic} Subscription`, 'sub_basic')} 
                className={btnClass("w-full py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 mb-6")}
              >
                {hydrated ? t.subscribe : '⏳ Loading...'}
              </button>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>100 HD removals/mo</li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>{t.cancelAnytime}</li>
              </ul>
            </div>

            {/* Pro */}
            <div className="bg-white rounded-2xl p-8 border-2 border-purple-500 shadow-xl relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">{t.bestDeal}</div>
              <h3 className="text-2xl font-bold mb-4">{t.pro}</h3>
              <div className="mb-2"><span className="text-5xl font-bold">$9.99</span><span className="text-gray-600">/mo</span></div>
              <p className="text-gray-600 mb-6">300 removals/month</p>
              <button 
                onClick={() => openPayment('9.99', `${t.pro} Subscription`, 'sub_pro')} 
                className={btnClass("w-full py-3 bg-purple-500 text-white rounded-lg font-semibold hover:bg-purple-600 mb-6")}
              >
                {hydrated ? t.subscribe : '⏳ Loading...'}
              </button>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>300 HD removals/mo</li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>{t.prioritySupport}</li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>{t.cancelAnytime}</li>
              </ul>
            </div>

            {/* Premium */}
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold mb-4">{t.premium}</h3>
              <div className="mb-2"><span className="text-5xl font-bold">$19.99</span><span className="text-gray-600">/mo</span></div>
              <p className="text-gray-600 mb-6">1000 removals/month</p>
              <button 
                onClick={() => openPayment('19.99', `${t.premium} Subscription`, 'sub_premium')} 
                className={btnClass("w-full py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 mb-6")}
              >
                {hydrated ? t.subscribe : '⏳ Loading...'}
              </button>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>1000 HD removals/mo</li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>{t.prioritySupport}</li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span>{t.batchProcessing}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center gap-8 text-gray-600 text-sm">
          <div className="flex items-center gap-2"><span className="text-green-500">✓</span>{t.securePayment}</div>
          <div className="flex items-center gap-2"><span className="text-green-500">✓</span>{t.cancelAnytime}</div>
          <div className="flex items-center gap-2"><span className="text-green-500">✓</span>{t.noHiddenFees}</div>
          <div className="flex items-center gap-2"><span className="text-green-500">✓</span>{t.refund}</div>
        </div>
      </div>

      <PaymentModal isOpen={modalOpen} onClose={() => setModalOpen(false)} amount={selectedPackage.amount} description={selectedPackage.description} packageId={selectedPackage.id} />
    </div>
  )
}
