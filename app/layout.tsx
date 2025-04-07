import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vedika Kolap',
  description: 'Vedika',
  generator: 'Vedika',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
