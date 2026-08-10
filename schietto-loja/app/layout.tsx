import type { Metadata } from 'next'
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
        {children}
      </body>
    </html>
  )
}
