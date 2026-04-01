'use client'

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
          <a href="/" className="text-xl font-bold">BG Remover</a>
          <a href="/" className="text-sm text-gray-600">返回首页</a>
        </div>
      </nav>

      <div className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4">定价方案</h1>
            <p className="text-xl text-gray-600">选择最适合你的方式</p>
          </div>

          <h2 className="text-3xl font-bold text-center mb-8">积分包</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold mb-2">小试牛刀</h3>
              <div className="mb-4"><span className="text-4xl font-bold">$0.99</span></div>
              <div className="mb-4"><span className="text-3xl font-bold text-blue-600">10</span><span className="text-gray-600 ml-2">积分</span></div>
              <button className="w-full py-3 bg-gray-200 rounded-full font-medium">购买</button>
            </div>
            <div className="bg-white rounded-2xl p-8 border-2 border-blue-600">
              <h3 className="text-2xl font-bold mb-2">轻度使用</h3>
              <div className="mb-4"><span className="text-4xl font-bold">$3.99</span></div>
              <div className="mb-4"><span className="text-3xl font-bold text-blue-600">50</span><span className="text-gray-600 ml-2">积分</span></div>
              <button className="w-full py-3 bg-blue-600 text-white rounded-full font-medium">购买</button>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold mb-2">重度使用</h3>
              <div className="mb-4"><span className="text-4xl font-bold">$6.99</span></div>
              <div className="mb-4"><span className="text-3xl font-bold text-blue-600">100</span><span className="text-gray-600 ml-2">积分</span></div>
              <button className="w-full py-3 bg-black text-white rounded-full font-medium">购买</button>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-center mb-8">月订阅</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold mb-2">Basic</h3>
              <div className="mb-4"><span className="text-4xl font-bold">$4.99</span><span className="text-gray-600">/月</span></div>
              <p className="text-gray-600 mb-4">每月 100 次</p>
              <button className="w-full py-3 bg-gray-200 rounded-full font-medium">订阅</button>
            </div>
            <div className="bg-white rounded-2xl p-8 border-2 border-blue-600">
              <h3 className="text-2xl font-bold mb-2">Pro</h3>
              <div className="mb-4"><span className="text-4xl font-bold">$9.99</span><span className="text-gray-600">/月</span></div>
              <p className="text-gray-600 mb-4">每月 300 次</p>
              <button className="w-full py-3 bg-blue-600 text-white rounded-full font-medium">订阅</button>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold mb-2">Premium</h3>
              <div className="mb-4"><span className="text-4xl font-bold">$19.99</span><span className="text-gray-600">/月</span></div>
              <p className="text-gray-600 mb-4">每月 1000 次</p>
              <button className="w-full py-3 bg-black text-white rounded-full font-medium">订阅</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
