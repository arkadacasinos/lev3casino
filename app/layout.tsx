import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { PT_Sans, PT_Serif } from 'next/font/google'
import './globals.css'
import './lev-landing.css'

const ptSerif = PT_Serif({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '700'],
  variable: '--lv9k-font-heading',
  display: 'swap',
})

const ptSans = PT_Sans({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '700'],
  variable: '--lv9k-font-body',
  display: 'swap',
})

const siteUrl = 'https://lev3casino.vercel.app'
const title = 'Лев Казино | Lev Casino зеркало, бонусы, регистрация и вход на официальный сайт'
const description =
  'Играть в Лев Казино онлайн: рабочее зеркало Lev Casino без блокировок, бонусы новым игрокам, быстрая регистрация за две минуты и честные слоты. Официальный сайт Лев Казино доступен на ПК и телефоне.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  generator: 'v0.app',
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: 'Лев Казино',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: '/images/lev-hero.jpg',
        width: 1200,
        height: 670,
        alt: 'Лев Казино — игровой зал со слотами и живыми играми',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/images/lev-hero.jpg'],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'dark',
  themeColor: '#15100b',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`lv9k-html ${ptSerif.variable} ${ptSans.variable}`}>
      <head>
        {/* Extra custom tags can be inserted here */}
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className="lv9k-body antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
