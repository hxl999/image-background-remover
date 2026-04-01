'use client'

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 导航 */}
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="text-xl font-bold">BG Remover</a>
          <div className="flex items-center gap-4">
            <a href="/pricing" className="text-sm text-gray-600 hover:text-black">Pricing</a>
            <a href="/" className="text-sm text-gray-600 hover:text-black">Home</a>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

        {/* 统计卡片 */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* 积分余额 */}
          <div className="bg-white rounded-lg p-6 border">
            <div className="text-sm text-gray-600 mb-2">Credits Balance</div>
            <div className="text-3xl font-bold mb-4">0</div>
            <a href="/pricing" className="text-sm text-blue-600 hover:text-blue-700">Buy credits →</a>
          </div>

          {/* 本月使用 */}
          <div className="bg-white rounded-lg p-6 border">
            <div className="text-sm text-gray-600 mb-2">This Month</div>
            <div className="text-3xl font-bold mb-4">0</div>
            <div className="text-sm text-gray-500">background removals</div>
          </div>

          {/* 总使用 */}
          <div className="bg-white rounded-lg p-6 border">
            <div className="text-sm text-gray-600 mb-2">Total Usage</div>
            <div className="text-3xl font-bold mb-4">0</div>
            <div className="text-sm text-gray-500">all time</div>
          </div>
        </div>

        {/* 使用记录 */}
        <div className="bg-white rounded-lg border">
          <div className="p-6 border-b">
            <h2 className="text-xl font-bold">Recent Activity</h2>
          </div>
          <div className="p-6">
            <div className="text-center text-gray-500 py-8">
              No activity yet. Start by removing a background!
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
