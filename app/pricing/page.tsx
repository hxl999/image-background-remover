'use client'

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-8 py-12">
      <div className="w-full max-w-7xl">
        <div className="text-center mb-10">
          <h1 className="text-6xl font-bold text-gray-900 mb-3">定价方案</h1>
          <p className="text-2xl text-gray-600">🎁 新用户注册送 3 次</p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          {/* 积分包 */}
          <div>
            <h2 className="text-3xl font-bold text-center mb-6">积分包 · 永久有效</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-2xl p-6 flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-1">10 积分</h3>
                  <p className="text-gray-600">$0.10/次</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold mb-2">$0.99</div>
                  <button className="px-6 py-2 bg-black text-white rounded-full font-medium hover:bg-gray-800">购买</button>
                </div>
              </div>
              <div className="bg-blue-50 rounded-2xl p-6 flex items-center justify-between border-2 border-blue-600">
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
              <div className="bg-gray-50 rounded-2xl p-6 flex items-center justify-between">
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
            <h2 className="text-3xl font-bold text-center mb-6">月订阅 · 更划算</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-2xl p-6 flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-1">Basic</h3>
                  <p className="text-gray-600">100次/月 · $0.05/次</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold mb-2">$4.99<span className="text-lg text-gray-600">/月</span></div>
                  <button className="px-6 py-2 bg-black text-white rounded-full font-medium hover:bg-gray-800">订阅</button>
                </div>
              </div>
              <div className="bg-blue-50 rounded-2xl p-6 flex items-center justify-between border-2 border-blue-600">
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
              <div className="bg-gray-50 rounded-2xl p-6 flex items-center justify-between">
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
