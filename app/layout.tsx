import type { Metadata } from 'next'
import './globals.css'
import SmoothScroll from '@/components/SmoothScroll'
import Navigation from '@/components/Navigation'

export const metadata: Metadata = {
  title: 'TONG DIGITALS - Premium Marketing Agency',
  description: 'High-end marketing agency specializing in immersive digital experiences and innovative campaigns',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll>
          <Navigation />
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}

