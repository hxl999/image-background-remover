'use client'

import './globals.css'
import { GoogleOAuthProvider } from '@react-oauth/google'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body>
        <GoogleOAuthProvider clientId="966956322051-9n4018bqk4lpk7bq50sjqiveph2479ck.apps.googleusercontent.com">
          {children}
        </GoogleOAuthProvider>
      </body>
    </html>
  )
}
