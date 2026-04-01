'use client'

export default function PricingPage() {
  return (
    <main className="h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      {/* 导航栏 */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
          <a href="/" className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">BG Remover</a>
          <a href="/" className="text-lg text-gray-700 hover:text-blue-600 font-medium">← 返回首页</a>
        </div>
      </nav>

      <div className="h-[calc(100vh-80px)] flex items-center justify-center px-8">
        <div className="w-full max-w-7xl">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold text-gray-900 mb-3">选择你的方案</h1>
            <p className="text-xl text-gray-600">🎁 新用户送 3 次</p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {/* 积分包 */}
            <div>
              <h2 className="text-2xl font-bold text-center mb-4 text-blue-600">积分包 · 永久有效</h2>
              <div className="space-y-3">
                <div className="bg-white rounded-xl p-5 flex items-center justify-between shadow-md hover:shadow-xl transition-shadow border border-gray-100">
                  <div>
                    <h3 className="text-xl font-bold mb-1">10 积分</h3>
                    <p className="text-gray-600 text-sm">$0.10/次</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold mb-2">$0.99</div>
                    <button className="px-5 py-2 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-full text-sm font-medium hover:from-gray-900 hover:to-black">购买</button>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-5 flex items-center justify-between shadow-md hover:shadow-xl transition-shadow border-2 border-blue-500">
                  <div>
                    <div className="inline-block bg-blue-600 text-white text-xs px-2 py-1 rounded mb-1">推荐</div>
                    <h3 className="text-xl font-bold mb-1">50 积分</h3>
                    <p className="text-gray-600 text-sm">$0.08/次 · 省20%</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold mb-2">$3.99</div>
                    <button className="px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-medium hover:from-blue-700 hover:to-purple-700">购买</button>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-5 flex items-center justify-between shadow-md hover:shadow-xl transition-shadow border border-gray-100">
                  <div>
                    <h3 className="text-xl font-bold mb-1">100 积分</h3>
                    <p className="text-gray-600 text-sm">$0.07/次 · 省30%</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold mb-2">$6.99</div>
                    <button className="px-5 py-2 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-full text-sm font-medium hover:from-gray-900 hover:to-black">购买</button>
                  </div>
                </div>
              </div>
            </div>

            {/* 月订阅 */}
            <div>
              <h2 className="text-2xl font-bold text-center mb-4 text-purple-600">月订阅 · 更划算</h2>
              <div className="space-y-3">
                <div className="bg-white rounded-xl p-5 flex items-center justify-between shadow-md hover:shadow-xl transition-shadow border border-gray-100">
                  <div>
                    <h3 className="text-xl font-bold mb-1">Basic</h3>
                    <p className="text-gray-600 text-sm">100次/月 · $0.05/次</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold mb-2">$4.99<span className="text-base text-gray-600">/月</span></div>
                    <button className="px-5 py-2 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-full text-sm font-medium hover:from-gray-900 hover:to-black">订阅</button>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-5 flex items-center justify-between shadow-md hover:shadow-xl transition-shadow border-2 border-purple-500">
                  <div>
                    <div className="inline-block bg-purple-600 text-white text-xs px-2 py-1 rounded mb-1">最划算</div>
                    <h3 className="text-xl font-bold mb-1">Pro</h3>
                    <p className="text-gray-600 text-sm">300次/月 · $0.03/次</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold mb-2">$9.99<span className="text-base text-gray-600">/月</span></div>
                    <button className="px-5 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm font-medium hover:from-purple-700 hover:to-pink-700">订阅</button>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-5 flex items-center justify-between shadow-md hover:shadow-xl transition-shadow border border-gray-100">
                  <div>
                    <h3 className="text-xl font-bold mb-1">Premium</h3>
                    <p className="text-gray-600 text-sm">1000次/月 · $0.02/次</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold mb-2">$19.99<span className="text-base text-gray-600">/月</span></div>
                    <button className="px-5 py-2 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-full text-sm font-medium hover:from-gray-900 hover:to-black">订阅</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
