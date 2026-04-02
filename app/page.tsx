'use client'

import { useState } from 'react'
import { GoogleLogin } from '@react-oauth/google'
import { useUser } from '@/lib/useUser'

export default function Home() {
  const { user, login, logout } = useUser()
  const [image, setImage] = useState<string | null>(null)
  const [result, setResult] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [usedFree, setUsedFree] = useState(false)

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

    // 积分检查：未登录只能用1次
    if (!user) {
      const used = localStorage.getItem('freeUsed')
      if (used) {
        alert('Free trial used. Please sign in to continue!')
        return
      }
    }

    setLoading(true)
    try {
      const base64Data = image.split(',')[1]
      const response = await fetch('https://api.remove.bg/v1.0/removebg', {
        method: 'POST',
        headers: {
          'X-Api-Key': 'wnPqYWXaesV49H3yUvp3eToA',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ image_file_b64: base64Data, size: 'auto' }),
      })

      if (!response.ok) throw new Error('API error')

      const resultBuffer = await response.arrayBuffer()
      const resultBase64 = btoa(
        new Uint8Array(resultBuffer).reduce((data, byte) => data + String.fromCharCode(byte), '')
      )
      setResult(`data:image/png;base64,${resultBase64}`)

      // 记录使用
      if (!user) {
        localStorage.setItem('freeUsed', 'true')
        setUsedFree(true)
      }
    } catch (error) {
      alert('Processing failed, please try again')
    }
    setLoading(false)
  }

  return (
    <main className="min-h-screen bg-white">
      {/* 导航 */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
          <a href="/" className="text-xl font-bold">BG Remover</a>
          <div className="flex items-center gap-6">
            <a href="/pricing" className="text-sm text-gray-600 hover:text-black">Pricing</a>
            {user && <a href="/dashboard" className="text-sm text-gray-600 hover:text-black">Dashboard</a>}
            {user ? (
              <div className="flex items-center gap-3">
                <img src={user.picture} alt={user.name} className="w-8 h-8 rounded-full" />
                <span className="text-sm text-gray-700">{user.name}</span>
                <button onClick={logout} className="text-sm text-gray-500 hover:text-gray-900">Sign out</button>
              </div>
            ) : (
              <GoogleLogin
                onSuccess={(res) => res.credential && login(res.credential)}
                onError={() => alert('Login failed')}
              />
            )}
          </div>
        </div>
      </nav>

      {/* 主内容 */}
      <div className="pt-32 pb-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold text-gray-900 mb-6">AI Background Remover</h1>
            <p className="text-xl text-gray-600">Professional image processing, one-click background removal</p>
            {!user && <p className="text-sm text-gray-500 mt-3">🎁 1 free trial · Sign in for more</p>}
          </div>

          {/* 上传区域 */}
          {!image ? (
            <label className="block max-w-2xl mx-auto border-2 border-dashed border-gray-300 rounded-3xl p-20 text-center cursor-pointer hover:border-gray-400 hover:bg-gray-50 transition-all">
              <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              <p className="text-xl text-gray-700 mb-2">Drop image here or click to upload</p>
              <p className="text-sm text-gray-500">Supports JPG, PNG, WebP · Max 10MB</p>
              <input type="file" className="hidden" accept="image/*" onChange={handleUpload} />
            </label>
          ) : (
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div>
                  <p className="text-sm text-gray-600 mb-3">Original</p>
                  <img src={image} alt="Original" className="w-full rounded-2xl border border-gray-200 shadow-sm" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-3">Result</p>
                  {result ? (
                    <img src={result} alt="Result" className="w-full rounded-2xl border border-gray-200 shadow-sm bg-gray-50" />
                  ) : (
                    <div className="w-full aspect-square rounded-2xl border border-gray-200 bg-gray-50 flex items-center justify-center">
                      <span className="text-gray-400">Waiting for processing</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex gap-4 justify-center">
                <button onClick={removeBackground} disabled={loading}
                  className="px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 disabled:bg-gray-400">
                  {loading ? 'Processing...' : 'Remove Background'}
                </button>
                {result && (
                  <a href={result} download="removed-bg.png"
                    className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700">
                    Download
                  </a>
                )}
                <button onClick={() => { setImage(null); setResult(null) }}
                  className="px-8 py-3 bg-gray-200 text-gray-700 rounded-full font-medium hover:bg-gray-300">
                  Upload New
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
