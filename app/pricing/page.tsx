'use client'

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
          <a href="/" className="text-xl font-bold text-gray-900">BG Remover</a>
          <a href="/" className="text-sm text-gray-600 hover:text-gray-900">← 返回首页</a>
        </div>
      </nav>

      <div className="pt-32 pb-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-6xl font-bold text-gray-900 mb-6">选择适合你的方案</h1>
            <p className="text-2xl text-gray-600 mb-8">灵活定价，按需付费</p>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-6 py-3 rounded-full">
              <span className="text-2xl">🎁</span>
              <span className="font-medium">新用户注册即送 3 次免费额度</span>
            </div>
          </div>

          {/* 积分包 */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-3">积分包</h2>
              <p className="text-lg text-gray-600">一次购买，永久有效</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">小试牛刀</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-900">$0.99</span>
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-blue-600">10</span>
                  <span className="text-xl text-gray-600 ml-2">积分</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    $0.10/次
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    永久有效
                  </li>
                </ul>
                <button className="w-full py-4 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-colors">
                  立即购买
                </button>
              </div>
              <div className="bg-white rounded-3xl p-8 border-2 border-blue-600 shadow-xl relative transform scale-105">
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold">
                  最受欢迎
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">轻度使用</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-900">$3.99</span>
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-blue-600">50</span>
                  <span className="text-xl text-gray-600 ml-2">积分</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    $0.08/次 · 省20%
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    永久有效
                  </li>
                </ul>
                <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all">
                  立即购买
                </button>
              </div>
              <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">重度使用</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-900">$6.99</span>
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-blue-600">100</span>
                  <span className="text-xl text-gray-600 ml-2">积分</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    $0.07/次 · 省30%
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    永久有效
                  </li>
                </ul>
                <button className="w-full py-4 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-colors">
                  立即购买
                </button>
              </div>
            </div>
          </div>

          {/* 月订阅 */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-3">月订阅</h2>
              <p className="text-lg text-gray-600">更划算的长期选择</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Basic</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-900">$4.99</span>
                  <span className="text-xl text-gray-600">/月</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    每月 100 次
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    $0.05/次
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    随时取消
                  </li>
                </ul>
                <button className="w-full py-4 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-colors">
                  立即订阅
                </button>
              </div>
              <div className="bg-white rounded-3xl p-8 border-2 border-blue-600 shadow-xl relative transform scale-105">
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold">
                  最划算
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Pro</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-900">$9.99</span>
                  <span className="text-xl text-gray-600">/月</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    每月 300 次
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    $0.03/次
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    优先处理
                  </li>
                </ul>
                <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all">
                  立即订阅
                </button>
              </div>
              <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Premium</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-900">$19.99</span>
                  <span className="text-xl text-gray-600">/月</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    每月 1000 次
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    $0.02/次
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    批量处理
                  </li>
                </ul>
                <button className="w-full py-4 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-colors">
                  立即订阅
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
