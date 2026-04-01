'use client'

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* 导航 */}
      <nav className="border-b">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="text-xl font-semibold">BG Remover</a>
          <a href="/" className="text-sm text-gray-600 hover:text-black">Home</a>
        </div>
      </nav>

      {/* 主内容 */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* 标题 */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Simple, transparent pricing</h1>
          <p className="text-lg text-gray-600">Choose the plan that fits your needs</p>
        </div>

        {/* 定价卡片 */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Starter */}
          <div className="border rounded-lg p-8 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold mb-2">Starter</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold">$0.99</span>
            </div>
            <p className="text-gray-600 mb-6">10 credits</p>
            <button className="w-full py-2 border border-black rounded-md hover:bg-black hover:text-white transition-colors">
              Get started
            </button>
            <ul className="mt-6 space-y-3 text-sm text-gray-600">
              <li>✓ 10 background removals</li>
              <li>✓ High quality output</li>
              <li>✓ Credits never expire</li>
            </ul>
          </div>
          {/* Pro - 推荐 */}
          <div className="border-2 border-black rounded-lg p-8 relative shadow-lg">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black text-white px-3 py-1 text-xs rounded-full">
              Most popular
            </div>
            <h3 className="text-lg font-semibold mb-2">Pro</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold">$9.99</span>
              <span className="text-gray-600">/mo</span>
            </div>
            <p className="text-gray-600 mb-6">300 credits per month</p>
            <button className="w-full py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors">
              Get started
            </button>
            <ul className="mt-6 space-y-3 text-sm text-gray-600">
              <li>✓ 300 background removals/mo</li>
              <li>✓ High quality output</li>
              <li>✓ Priority processing</li>
              <li>✓ Cancel anytime</li>
            </ul>
          </div>
          {/* Enterprise */}
          <div className="border rounded-lg p-8 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold mb-2">Enterprise</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold">$19.99</span>
              <span className="text-gray-600">/mo</span>
            </div>
            <p className="text-gray-600 mb-6">1000 credits per month</p>
            <button className="w-full py-2 border border-black rounded-md hover:bg-black hover:text-white transition-colors">
              Get started
            </button>
            <ul className="mt-6 space-y-3 text-sm text-gray-600">
              <li>✓ 1000 background removals/mo</li>
              <li>✓ High quality output</li>
              <li>✓ Priority processing</li>
              <li>✓ Batch processing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
