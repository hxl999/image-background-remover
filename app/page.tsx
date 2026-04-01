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
    <main className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-4">AI Background Remover</h1>
        <p className="text-center text-xl text-gray-600 mb-8">一键移除图片背景，AI智能抠图</p>

        <div className="bg-white rounded-lg shadow-xl p-8">
          {!image ? (
            <label className="flex flex-col items-center justify-center h-64 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500">
              <svg className="w-16 h-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              <span className="text-xl text-gray-600">点击上传图片</span>
              <input type="file" className="hidden" accept="image/*" onChange={handleUpload} />
            </label>
          ) : (
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">原图</h3>
                <img src={image} alt="原图" className="w-full rounded" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">处理后</h3>
                {result ? (
                  <img src={result} alt="处理后" className="w-full rounded bg-gray-100" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded">
                    <span className="text-gray-400">等待处理</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {image && (
            <div className="mt-6 flex gap-4">
              <button
                onClick={removeBackground}
                disabled={loading}
                className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-400"
              >
                {loading ? '处理中...' : '移除背景'}
              </button>
              {result && (
                <a
                  href={result}
                  download="removed-bg.png"
                  className="flex-1 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 text-center"
                >
                  下载图片
                </a>
              )}
              <button
                onClick={() => { setImage(null); setResult(null) }}
                className="px-6 bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300"
              >
                重新上传
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
