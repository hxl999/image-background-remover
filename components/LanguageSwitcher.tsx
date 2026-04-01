'use client'

import { useState } from 'react'

export default function LanguageSwitcher() {
  const [lang, setLang] = useState<'zh' | 'en'>('zh')

  const toggleLang = () => {
    const newLang = lang === 'zh' ? 'en' : 'zh'
    setLang(newLang)
    localStorage.setItem('lang', newLang)
    window.dispatchEvent(new CustomEvent('langChange', { detail: newLang }))
  }

  return (
    <button onClick={toggleLang} className="px-3 py-1 text-sm border rounded-lg hover:bg-gray-100">
      {lang === 'zh' ? 'EN' : '中文'}
    </button>
  )
}
