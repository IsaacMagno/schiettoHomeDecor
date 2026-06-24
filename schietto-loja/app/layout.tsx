import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'

const displayFont = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-display',
})

const bodyFont = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: 'Schiètto Home Decor & Semi Jóias | Pedreira, SP',
  description:
    'Vitrine da Schiètto em Pedreira, SP. Inspire-se com nossa decoração e semi jóias e venha nos visitar para conhecer as peças pessoalmente.',
  keywords:
    'semi joias pedreira, home decor pedreira, decoração pedreira sp, loja schietto pedreira',
  openGraph: {
    title: 'Schiètto Home Decor & Semi Jóias',
    description:
      'Inspire-se com nossa vitrine e venha conhecer a loja em Pedreira, SP.',
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
