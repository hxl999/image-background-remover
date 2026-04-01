'use client'

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 导航栏 */}
      <nav className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
          <a href="/" className="text-2xl font-bold text-gray-900">BG Remover</a>
          <a href="/" className="text-base text-gray-600 hover:text-gray-900">← 返回首页</a>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">定价方案</h1>
          <p className="text-2xl text-gray-600 mb-6">灵活定价，按需付费</p>
          <div className="inline-block bg-blue-50 text-blue-700 px-6 py-3 rounded-full text-lg">
            🎁 新用户注册即送 3 次免费额度
          </div>
        </div>

        <div className="grid grid-cols-2 gap-12">
          {/* 积分包 */}
          <div>
            <h2 className="text-3xl font-bold text-center mb-8">积分包 · 永久有效</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-2xl p-6 flex items-center justify-between hover:shadow-lg transition-shadow">
                <div>
                  <h3 className="text-2xl font-bold mb-1">10 积分</h3>
                  <p className="text-gray-600">$0.10/次</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold mb-2">$0.99</div>
                  <button className="px-6 py-2 bg-black text-white rounded-full font-medium hover:bg-gray-800">购买</button>
                </div>
              </div>
              <div className="bg-blue-50 rounded-2xl p-6 flex items-center justify-between border-2 border-blue-600 hover:shadow-lg transition-shadow">
                <div>
                  <div className="inline-block bg-blue-600 text-white text-xs px-2 py-1 rounded mb-2">推荐</div>
                  <h3 className="text-2xl font-bold mb-1">50 积分</h3>
                  <p className="text-gray-600">$0.08/次 · 省20%</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold mb-2">$3.99</div>
                  <button className="px-6 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700">购买</button>
                </div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 flex items-center justify-between hover:shadow-lg transition-shadow">
                <div>
                  <h3 className="text-2xl font-bold mb-1">100 积分</h3>
                  <p className="text-gray-600">$0.07/次 · 省30%</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold mb-2">$6.99</div>
                  <button className="px-6 py-2 bg-black text-white rounded-full font-medium hover:bg-gray-800">购买</button>
                </div>
              </div>
            </div>
          </div>

          {/* 月订阅 */}
          <div>
            <h2 className="text-3xl font-bold text-center mb-8">月订阅 · 更划算</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-2xl p-6 flex items-center justify-between hover:shadow-lg transition-shadow">
                <div>
                  <h3 className="text-2xl font-bold mb-1">Basic</h3>
                  <p className="text-gray-600">100次/月 · $0.05/次</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold mb-2">$4.99<span className="text-lg text-gray-600">/月</span></div>
                  <button className="px-6 py-2 bg-black text-white rounded-full font-medium hover:bg-gray-800">订阅</button>
                </div>
              </div>
              <div className="bg-blue-50 rounded-2xl p-6 flex items-center justify-between border-2 border-blue-600 hover:shadow-lg transition-shadow">
                <div>
                  <div className="inline-block bg-blue-600 text-white text-xs px-2 py-1 rounded mb-2">最划算</div>
                  <h3 className="text-2xl font-bold mb-1">Pro</h3>
                  <p className="text-gray-600">300次/月 · $0.03/次</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold mb-2">$9.99<span className="text-lg text-gray-600">/月</span></div>
                  <button className="px-6 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700">订阅</button>
                </div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 flex items-center justify-between hover:shadow-lg transition-shadow">
                <div>
                  <h3 className="text-2xl font-bold mb-1">Premium</h3>
                  <p className="text-gray-600">1000次/月 · $0.02/次</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold mb-2">$19.99<span className="text-lg text-gray-600">/月</span></div>
                  <button className="px-6 py-2 bg-black text-white rounded-full font-medium hover:bg-gray-800">订阅</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
