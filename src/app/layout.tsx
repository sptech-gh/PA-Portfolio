import type { Metadata, Viewport } from 'next'
import { fontBody, fontHeading } from '@/lib/fonts'
import { defaultMetadata } from '@/lib/seo'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import '../styles/globals.css'

export const metadata: Metadata = defaultMetadata

export const viewport: Viewport = {
  themeColor: '#0B0D0F',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${fontHeading.variable} ${fontBody.variable}`}>
      <body className="min-h-dvh bg-bg font-body text-text-primary antialiased">
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
