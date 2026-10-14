import type { Metadata } from 'next'
import Script from 'next/script'
import { Jost, Manrope } from 'next/font/google'
import './globals.css'

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

export const metadata: Metadata = {
  title: 'Schiètto Home Decor & Semijoias | Casarão Histórico · Pedreira, SP',
  description:
    'Curadoria premium de home decor e semijoias no andar superior de um casarão histórico em Pedreira. Inspire-se online e viva a experiência Schiètto na loja.',
  keywords:
    'home decor pedreira, semijoias pedreira, decoração premium pedreira sp, loja schietto casarão, composições decoração',
  openGraph: {
    title: 'Schiètto Home Decor & Semijoias',
    description:
      'Elegância em cada detalhe — curadoria de decoração e semijoias em um casarão histórico no centro de Pedreira, SP.',
    type: 'website',
    locale: 'pt_BR',
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
