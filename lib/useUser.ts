'use client'

import { useState, useEffect } from 'react'

export interface UserInfo {
  email: string
  name: string
  picture: string
  sub: string
}

export function useUser() {
  const [user, setUser] = useState<UserInfo | null>(null)

  useEffect(() => {
    const saved = localStorage.getItem('user')
    if (saved) {
      try { setUser(JSON.parse(saved)) } catch {}
    }
  }, [])

  const login = (credential: string) => {
    const base64Url = credential.split('.')[1]
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(c =>
      '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
    ).join(''))
    const userInfo = JSON.parse(jsonPayload)
    setUser(userInfo)
    localStorage.setItem('user', JSON.stringify(userInfo))
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  return { user, login, logout }
}
