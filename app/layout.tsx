import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sprout - Chore Tracking That Motivates Kids',
  description: 'The only chore system that uses daily bonus incentives to help kids build positive habits',
  generator: 'Sprout App',
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
