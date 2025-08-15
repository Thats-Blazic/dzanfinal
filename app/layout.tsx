import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'DZAN DESIGNS - Creative Agency & Branding Studio',
  description: 'Professional graphic design, branding, and web development services. We take brands from seen to unforgettable with creative solutions that drive results. Specializing in YouTube thumbnails, brand identity, logo design, and digital experiences.',
  keywords: 'graphic design, branding, logo design, YouTube thumbnails, web development, creative agency, brand identity, digital design, Serbia',
  authors: [{ name: 'DZAN DESIGNS' }],
  creator: 'DZAN DESIGNS',
  generator: 'Blazic',
  metadataBase: new URL('https://dzandesigns.com'),
  openGraph: {
    title: 'DZAN DESIGNS - Creative Agency & Branding Studio',
    description: 'Professional graphic design, branding, and web development services. We take brands from seen to unforgettable with creative solutions that drive results.',
    url: 'https://dzandesigns.com',
    siteName: 'DZAN DESIGNS',
    images: [
      {
        url: '/banner za sajta.png',
        width: 1200,
        height: 630,
        alt: 'DZAN DESIGNS - Creative Agency & Branding Studio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DZAN DESIGNS - Creative Agency & Branding Studio',
    description: 'Professional graphic design, branding, and web development services. We take brands from seen to unforgettable.',
    images: ['/banner za sajta.png'],
    creator: '@dzandesigns',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/ikonica za web.png', sizes: '32x32', type: 'image/png' },
      { url: '/ikonica za web.png', sizes: '48x48', type: 'image/png' },
      { url: '/ikonica za web.png', sizes: '96x96', type: 'image/png' },
      { url: '/ikonica za web.png', sizes: '192x192', type: 'image/png' },
      { url: '/ikonica za web.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/ikonica za web.png',
    apple: [
      { url: '/ikonica za web.png', sizes: '180x180', type: 'image/png' },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/ikonica za web.png" />
        <link rel="shortcut icon" type="image/png" href="/ikonica za web.png" />
        <link rel="apple-touch-icon" type="image/png" href="/ikonica za web.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
