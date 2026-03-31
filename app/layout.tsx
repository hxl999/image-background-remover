import './globals.css'

export const metadata = {
  title: 'AI Background Remover - 免费在线抠图工具',
  description: '一键移除图片背景，AI智能抠图',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  )
}
