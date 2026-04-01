'use client'

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* 导航 */}
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="text-xl font-bold">BG Remover</a>
          <a href="/" className="text-sm text-gray-600 hover:text-black">Home</a>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* 标题区 */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-600">Start free · No subscription required · Credits never expire</p>
        </div>

        {/* 定价卡片 */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Starter */}
          <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-gray-300 transition-all hover:shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Starter</h3>
            <div className="mb-2">
              <span className="text-5xl font-bold">$0.99</span>
            </div>
            <p className="text-gray-600 mb-6">10 credits · $0.10 each</p>
            <button className="w-full py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors mb-6">
              Get Started
            </button>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>10 HD background removals</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>JPG / PNG / WebP support</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Commercial use allowed</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Never expires</span>
              </li>
            </ul>
          </div>
          {/* Popular - 推荐 */}
          <div className="bg-white rounded-2xl p-8 border-2 border-blue-500 hover:border-blue-600 transition-all shadow-xl relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
              Most Popular
            </div>
            <h3 className="text-2xl font-bold mb-4">Popular</h3>
            <div className="mb-2">
              <span className="text-5xl font-bold">$3.99</span>
            </div>
            <p className="text-gray-600 mb-6">50 credits · $0.08 each</p>
            <button className="w-full py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors mb-6">
              Get Started
            </button>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>50 HD background removals</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>JPG / PNG / WebP support</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Commercial use allowed</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Never expires</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">✓</span>
                <span className="font-semibold">Save 20% vs Starter</span>
              </li>
            </ul>
          </div>
          {/* Pro Pack */}
          <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-gray-300 transition-all hover:shadow-xl relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
              Best Value
            </div>
            <h3 className="text-2xl font-bold mb-4">Pro Pack</h3>
            <div className="mb-2">
              <span className="text-5xl font-bold">$6.99</span>
            </div>
            <p className="text-gray-600 mb-6">100 credits · $0.07 each</p>
            <button className="w-full py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors mb-6">
              Get Started
            </button>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>100 HD background removals</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>JPG / PNG / WebP support</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Commercial use allowed</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Never expires</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="font-semibold">Save 30% vs Starter</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 信任标识 */}
        <div className="flex justify-center items-center gap-8 text-gray-600 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-green-500">✓</span>
            <span>Secure payment</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-500">✓</span>
            <span>Cancel anytime</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-500">✓</span>
            <span>No hidden fees</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-500">✓</span>
            <span>7-day refund guarantee</span>
          </div>
        </div>
      </div>
    </div>
  )
}
