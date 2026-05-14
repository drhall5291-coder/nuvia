import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'drhall1925nuvia',
  description: 'A Next.js application - Social relational ontology engineering system',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
