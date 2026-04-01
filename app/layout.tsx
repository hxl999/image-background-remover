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
      <head>
        <script src="https://www.paypal.com/sdk/js?client-id=AQb1RA9EfdF2Uv6h2VVXp0LBF5-AIe7hOtRJ4HroBjAvap0WeF70mzwQC__NO7HjIbrzvRNXinL9kMfh&currency=USD"></script>
      </head>
      <body>
        <GoogleOAuthProvider clientId="966956322051-9n4018bqk4lpk7bq50sjqiveph2479ck.apps.googleusercontent.com">
          {children}
        </GoogleOAuthProvider>
      </body>
    </html>
  )
}
