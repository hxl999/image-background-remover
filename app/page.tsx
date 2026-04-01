'use client'

import { useState } from 'react'

export default function Home() {
  const [image, setImage] = useState<string | null>(null)
  const [result, setResult] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => setImage(reader.result as string)
      reader.readAsDataURL(file)
    }
  }

  const removeBackground = async () => {
    if (!image) return
    setLoading(true)
    
    try {
      const res = await fetch('/api/remove-bg', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ image })
      })
      const data = await res.json()
      setResult(data.result)
    } catch (error) {
      alert('处理失败，请重试')
    }
    setLoading(false)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            AI 智能抠图
          </h1>
          <p className="text-2xl text-gray-600">一键移除图片背景，专业级AI处理</p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-12">
          {!image ? (
            <label className="flex flex-col items-center justify-center h-80 border-3 border-dashed border-blue-300 rounded-xl cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-all">
              <svg className="w-20 h-20 text-blue-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              <span className="text-xl font-semibold text-gray-700 mb-2">点击上传图片</span>
              <span className="text-base text-gray-500">支持 JPG、PNG 格式</span>
              <input type="file" className="hidden" accept="image/*" onChange={handleUpload} />
            </label>
          ) : (
            <div>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-800">原图</h3>
                  <div className="border-2 border-gray-200 rounded-xl overflow-hidden">
                    <img src={image} alt="原图" className="w-full h-auto" />
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-800">处理后</h3>
                  {result ? (
                    <div className="border-2 border-gray-200 rounded-xl overflow-hidden bg-gray-50">
                      <img src={result} alt="处理后" className="w-full h-auto" />
                    </div>
                  ) : (
                    <div className="border-2 border-dashed border-gray-300 rounded-xl h-full min-h-[300px] flex items-center justify-center bg-gray-50">
                      <span className="text-xl text-gray-400">等待处理...</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={removeBackground}
                  disabled={loading}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xl py-4 rounded-xl font-bold hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-400 transition-all shadow-lg"
                >
                  {loading ? '处理中...' : '🎨 移除背景'}
                </button>
                {result && (
                  <a
                    href={result}
                    download="removed-bg.png"
                    className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white text-xl py-4 rounded-xl font-bold hover:from-green-700 hover:to-emerald-700 text-center transition-all shadow-lg"
                  >
                    ⬇️ 下载图片
                  </a>
                )}
                <button
                  onClick={() => { setImage(null); setResult(null) }}
                  className="px-8 bg-gray-200 text-gray-700 text-xl py-4 rounded-xl font-bold hover:bg-gray-300 transition-all"
                >
                  🔄 重新上传
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="text-center mt-8 text-gray-500">
          <p className="text-lg">由 AI 技术驱动 · 快速 · 精准 · 免费</p>
        </div>
      </div>
    </main>
  )
}
