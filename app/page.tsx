'use client'

import { useState } from 'react'
import { GoogleLogin } from '@react-oauth/google'

export default function Home() {
  const [user, setUser] = useState<any>(null)
  const [image, setImage] = useState<string | null>(null)
  const [result, setResult] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleLoginSuccess = (credentialResponse: any) => {
    const token = credentialResponse.credential
    const base64Url = token.split('.')[1]
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(c => 
      '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
    ).join(''))
    
    setUser(JSON.parse(jsonPayload))
  }

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
      const base64Data = image.split(',')[1]
      
      const response = await fetch('https://api.remove.bg/v1.0/removebg', {
        method: 'POST',
        headers: {
          'X-Api-Key': 'wnPqYWXaesV49H3yUvp3eToA',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          image_file_b64: base64Data,
          size: 'auto',
        }),
      })

      if (!response.ok) {
        throw new Error('API调用失败')
      }

      const resultBuffer = await response.arrayBuffer()
      const resultBase64 = btoa(
        new Uint8Array(resultBuffer).reduce((data, byte) => data + String.fromCharCode(byte), '')
      )
      
      setResult(`data:image/png;base64,${resultBase64}`)
    } catch (error) {
      alert('处理失败，请重试')
    }
    setLoading(false)
  }

  return (
    <main className="min-h-screen bg-white">
      {/* 顶部导航 */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
          <div className="text-xl font-semibold text-gray-900">BG Remover</div>
          {user ? (
            <div className="flex items-center gap-3">
              <img src={user.picture} alt={user.name} className="w-8 h-8 rounded-full" />
              <span className="text-sm text-gray-700">{user.name}</span>
              <button 
                onClick={() => setUser(null)}
                className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
              >
                退出
              </button>
            </div>
          ) : (
            <GoogleLogin
              onSuccess={handleLoginSuccess}
              onError={() => alert('登录失败')}
            />
          )}
        </div>
      </nav>

      {/* 主内容区 */}
      <div className="pt-32 pb-20 px-8">
        <div className="max-w-6xl mx-auto">
          {/* 标题区域 */}
          <div className="text-center mb-20">
            <h1 className="text-7xl font-bold text-gray-900 mb-6 tracking-tight">
              AI 背景移除
            </h1>
            <p className="text-2xl text-gray-600 font-light">
              专业级图像处理，一键移除背景
            </p>
          </div>

          {/* 效果展示 - 两个圆形大卡片 */}
          <div className="grid grid-cols-2 gap-12 mb-20">
            <div className="text-center">
              <div className="w-80 h-80 mx-auto rounded-full bg-gray-50 border border-gray-200 shadow-lg flex items-center justify-center mb-6">
                <span className="text-gray-400 text-lg">原图</span>
              </div>
              <p className="text-lg text-gray-600">移除前</p>
            </div>
            <div className="text-center">
              <div className="w-80 h-80 mx-auto rounded-full bg-gradient-to-br from-gray-50 to-white border border-gray-200 shadow-lg flex items-center justify-center mb-6">
                <span className="text-gray-400 text-lg">透明背景</span>
              </div>
              <p className="text-lg text-gray-600">移除后</p>
            </div>
          </div>

          {/* 上传处理区域 */}
          {!image ? (
            <label className="block max-w-2xl mx-auto border-2 border-dashed border-gray-300 rounded-3xl p-20 text-center cursor-pointer hover:border-gray-400 hover:bg-gray-50 transition-all">
              <svg className="w-20 h-20 mx-auto text-gray-400 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              <p className="text-xl text-gray-700 mb-2">点击上传图片</p>
              <p className="text-sm text-gray-500">支持 JPG、PNG 格式</p>
              <input type="file" className="hidden" accept="image/*" onChange={handleUpload} />
            </label>
          ) : (
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div>
                  <p className="text-sm text-gray-600 mb-3">原图</p>
                  <img src={image} alt="原图" className="w-full rounded-2xl border border-gray-200 shadow-sm" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-3">处理后</p>
                  {result ? (
                    <img src={result} alt="处理后" className="w-full rounded-2xl border border-gray-200 shadow-sm bg-gray-50" />
                  ) : (
                    <div className="w-full aspect-square rounded-2xl border border-gray-200 bg-gray-50 flex items-center justify-center">
                      <span className="text-gray-400">等待处理</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex gap-4 justify-center">
                <button
                  onClick={removeBackground}
                  disabled={loading}
                  className="px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 disabled:bg-gray-400 transition-colors"
                >
                  {loading ? '处理中...' : '移除背景'}
                </button>
                {result && (
                  <a
                    href={result}
                    download="removed-bg.png"
                    className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors"
                  >
                    下载图片
                  </a>
                )}
                <button
                  onClick={() => { setImage(null); setResult(null) }}
                  className="px-8 py-3 bg-gray-200 text-gray-700 rounded-full font-medium hover:bg-gray-300 transition-colors"
                >
                  重新上传
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
