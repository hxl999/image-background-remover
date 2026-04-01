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
    <main className="min-h-screen bg-white flex items-center justify-center p-8">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-3">AI 背景移除工具</h1>
          <p className="text-xl text-gray-600">上传图片，一键移除背景</p>
        </div>

        {!image ? (
          <label className="block border-2 border-dashed border-gray-300 rounded-2xl p-20 text-center cursor-pointer hover:border-blue-500 hover:bg-gray-50 transition-all">
            <div className="space-y-4">
              <svg className="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              <div>
                <p className="text-xl font-medium text-gray-700">点击上传图片</p>
                <p className="text-sm text-gray-500 mt-1">支持 JPG、PNG 格式</p>
              </div>
            </div>
            <input type="file" className="hidden" accept="image/*" onChange={handleUpload} />
          </label>
        ) : (
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-3">原图</h3>
                <img src={image} alt="原图" className="w-full rounded-lg border border-gray-200" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-3">处理后</h3>
                {result ? (
                  <img src={result} alt="处理后" className="w-full rounded-lg border border-gray-200 bg-gray-50" />
                ) : (
                  <div className="w-full aspect-square rounded-lg border border-gray-200 bg-gray-50 flex items-center justify-center">
                    <span className="text-gray-400">等待处理</span>
                  </div>
                )}
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={removeBackground}
                disabled={loading}
                className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 disabled:bg-gray-400 transition-colors"
              >
                {loading ? '处理中...' : '移除背景'}
              </button>
              {result && (
                <a
                  href={result}
                  download="removed-bg.png"
                  className="flex-1 bg-green-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-green-700 text-center transition-colors"
                >
                  下载图片
                </a>
              )}
              <button
                onClick={() => { setImage(null); setResult(null) }}
                className="px-6 bg-gray-200 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors"
              >
                重新上传
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
