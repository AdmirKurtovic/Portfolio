import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Extraordinary',
  description: 'Portfolio — Less friction, more feeling.',
  openGraph: { title: 'Extraordinary', description: 'Portfolio — Less friction, more feeling.' },
  twitter: { card: 'summary_large_image', title: 'Extraordinary', description: 'Portfolio — Less friction, more feeling.' }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-paper text-ink antialiased">{children}</body>
    </html>
  )
}

