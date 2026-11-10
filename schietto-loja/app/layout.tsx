import type { Metadata } from 'next'
import { Jost, Manrope } from 'next/font/google'
import './globals.css'
import AdAttribution from '@/components/analytics/AdAttribution'
import CookieConsent from '@/components/analytics/CookieConsent'
import { SITE_URL } from '@/lib/contact'

const displayFont = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-display',
})

const bodyFont = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
})

const TITLE = 'Schiètto Home Decor | Decoração de Luxo em Pedreira, SP'
const DESCRIPTION =
  'Decoração de luxo em Pedreira, SP: peças decorativas, semijoias, pedras preciosas, almofadas, estofados, cobertas e mais, em um casarão histórico.'
const OG_TITLE = 'Schiètto Home Decor — Decoração de Luxo em Pedreira'
const OG_DESCRIPTION =
  'Decoração, semijoias, pedras preciosas, almofadas, estofados, cobertas e muito mais, em versão de luxo, no andar superior de um casarão histórico no centro de Pedreira, SP.'
const OG_IMAGE = {
  url: '/og-image.jpg',
  width: 1200,
  height: 630,
  alt: 'Showroom da Schiètto Home Decor em Pedreira, SP',
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/' },
  openGraph: {
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    url: '/',
    siteName: 'Schiètto Home Decor',
    type: 'website',
    locale: 'pt_BR',
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    images: [OG_IMAGE.url],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${displayFont.variable} ${bodyFont.variable} font-body antialiased`}
      >
        {children}
        {/* Origem do anúncio (utm) nas mensagens de WhatsApp; não usa cookies */}
        <AdAttribution />
        {/* Aviso de cookies + Clarity e Pixel da Meta (só carregam após o aceite) */}
        <CookieConsent />
      </body>
    </html>
  )
}
