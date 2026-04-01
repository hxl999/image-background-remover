'use client'

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 导航 */}
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="text-xl font-bold">BG Remover</a>
          <div className="flex items-center gap-6">
            <a href="/pricing" className="text-sm text-gray-600 hover:text-black">Pricing</a>
            <a href="/" className="text-sm text-gray-600 hover:text-black">Home</a>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* 用户信息卡片 */}
        <div className="bg-white rounded-xl p-8 border mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full"></div>
              <div>
                <h2 className="text-2xl font-bold">Welcome back!</h2>
                <p className="text-gray-600">user@example.com</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-600 mb-1">Current Plan</div>
              <div className="text-2xl font-bold">Free</div>
            </div>
          </div>
        </div>

        {/* 统计卡片 */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 border">
            <div className="text-sm text-gray-600 mb-2">Credits Balance</div>
            <div className="text-4xl font-bold mb-4">0</div>
            <a href="/pricing" className="inline-block px-4 py-2 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600">
              Buy Credits
            </a>
          </div>

          <div className="bg-white rounded-xl p-6 border">
            <div className="text-sm text-gray-600 mb-2">Today</div>
            <div className="text-4xl font-bold">0</div>
            <div className="text-sm text-gray-500 mt-2">removals</div>
          </div>

          <div className="bg-white rounded-xl p-6 border">
            <div className="text-sm text-gray-600 mb-2">This Month</div>
            <div className="text-4xl font-bold">0</div>
            <div className="text-sm text-gray-500 mt-2">removals</div>
          </div>

          <div className="bg-white rounded-xl p-6 border">
            <div className="text-sm text-gray-600 mb-2">Total</div>
            <div className="text-4xl font-bold">0</div>
            <div className="text-sm text-gray-500 mt-2">all time</div>
          </div>
        </div>

        {/* 使用记录 */}
        <div className="bg-white rounded-xl border">
          <div className="p-6 border-b">
            <h2 className="text-xl font-bold">Recent Activity</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Date</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Action</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Credits</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={4} className="px-6 py-12 text-center text-gray-500">
                    No activity yet. Start by removing a background!
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
