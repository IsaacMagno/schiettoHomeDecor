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
    'Loja de decoração e semi jóias no coração de Pedreira, SP. Peças cuidadosamente selecionadas para transformar sua casa e seu estilo desde 2023.',
  keywords:
    'semi joias pedreira, home decor pedreira, decoração pedreira sp, joias pedreira',
  openGraph: {
    title: 'Schiètto Home Decor & Semi Jóias',
    description:
      'Loja de decoração e semi jóias no coração de Pedreira, SP.',
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
