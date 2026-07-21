import type { ReactNode } from 'react'

interface SectionCardProps {
  children: ReactNode
  id?: string
  variant?: 'light' | 'dark'
  className?: string
}

/**
 * Seção em formato de card arredondado flutuando sobre o fundo da página
 * (padrão de layout da referência de design).
 */
export default function SectionCard({
  children,
  id,
  variant = 'light',
  className = '',
}: SectionCardProps) {
  return (
    <section id={id} className="scroll-mt-20 px-3 pb-3 sm:px-4 sm:pb-4">
      <div
        className={`overflow-hidden rounded-2xl px-6 py-16 sm:px-10 lg:px-16 lg:py-24 ${
          variant === 'dark' ? 'bg-loja-dark' : 'bg-white'
        } ${className}`}
      >
        {children}
      </div>
    </section>
  )
}
