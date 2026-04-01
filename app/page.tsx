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
    <main className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 flex items-center justify-center p-8">
      <div className="w-full max-w-2xl">
        <div className="bg-white rounded-3xl shadow-2xl p-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">AI 背景移除</h1>
            <p className="text-gray-600">上传图片，一键去除背景</p>
          </div>

          {!image ? (
            <label className="block border-2 border-dashed border-gray-300 rounded-2xl p-16 text-center cursor-pointer hover:border-purple-400 hover:bg-purple-50 transition-all">
              <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              <p className="text-lg font-medium text-gray-700">点击或拖拽上传图片</p>
              <p className="text-sm text-gray-500 mt-2">支持 JPG、PNG 格式</p>
              <input type="file" className="hidden" accept="image/*" onChange={handleUpload} />
            </label>
          ) : (
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-2">原图</p>
                  <img src={image} alt="原图" className="w-full rounded-xl" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-2">处理后</p>
                  {result ? (
                    <img src={result} alt="处理后" className="w-full rounded-xl bg-gray-100" />
                  ) : (
                    <div className="w-full aspect-square rounded-xl bg-gray-100 flex items-center justify-center">
                      <span className="text-gray-400">等待处理</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={removeBackground}
                  disabled={loading}
                  className="flex-1 bg-purple-600 text-white py-3 rounded-xl font-medium hover:bg-purple-700 disabled:bg-gray-400"
                >
                  {loading ? '处理中...' : '移除背景'}
                </button>
                {result && (
                  <a
                    href={result}
                    download="removed-bg.png"
                    className="flex-1 bg-green-600 text-white py-3 rounded-xl font-medium hover:bg-green-700 text-center"
                  >
                    下载
                  </a>
                )}
                <button
                  onClick={() => { setImage(null); setResult(null) }}
                  className="px-6 bg-gray-200 text-gray-700 py-3 rounded-xl font-medium hover:bg-gray-300"
                >
                  重置
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
