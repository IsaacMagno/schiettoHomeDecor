import type { Metadata } from 'next'
import Script from 'next/script'
import { Jost, Manrope } from 'next/font/google'
import './globals.css'
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

const OG_TITLE = 'Schiètto Home Decor & Semijoias'
const OG_DESCRIPTION =
  'Elegância em cada detalhe — curadoria de decoração e semijoias em um casarão histórico no centro de Pedreira, SP.'
const OG_IMAGE = {
  url: '/og-image.jpg',
  width: 1200,
  height: 630,
  alt: 'Showroom da Schiètto Home Decor & Semijoias em Pedreira, SP',
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Schiètto Home Decor & Semijoias | Casarão Histórico · Pedreira, SP',
  description:
    'Curadoria premium de home decor e semijoias no andar superior de um casarão histórico em Pedreira. Inspire-se online e viva a experiência Schiètto na loja.',
  alternates: { canonical: '/' },
  openGraph: {
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    url: '/',
    siteName: 'Schiètto Home Decor & Semijoias',
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
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "yxq60pp9tt");`}
        </Script>
        {children}
      </body>
    </html>
  )
}
