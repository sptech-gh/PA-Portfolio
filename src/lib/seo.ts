import type { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim() || 'https://prosperami.dev'

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Prosper Ami — Software Developer & Digital Product Builder',
    template: '%s · Prosper Ami',
  },
  description:
    'Software Developer and Digital Product Builder based in Ghana. I design and develop practical digital products, web applications and data-driven solutions for businesses, organizations and entrepreneurs.',
  authors: [{ name: 'Prosper Ami' }],
  creator: 'Prosper Ami',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Prosper Ami',
    images: [
      {
        url: '/images/og/default.png',
        width: 1200,
        height: 630,
        alt: 'Prosper Ami — Software Developer & Digital Product Builder',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@prosperami', // TODO: Owner to confirm Twitter/X handle or remove
    images: ['/images/og/default.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export function buildMetadata(overrides: Partial<Metadata>): Metadata {
  return { ...defaultMetadata, ...overrides }
}
