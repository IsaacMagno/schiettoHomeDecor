import Link from 'next/link'

interface VisitStoreCTAProps {
  variant?: 'light' | 'dark'
}

export default function VisitStoreCTA({ variant = 'light' }: VisitStoreCTAProps) {
  const isDark = variant === 'dark'

  return (
    <div
      className={`mt-16 border px-6 py-12 text-center sm:px-10 ${
        isDark
          ? 'border-loja-rosegold/30 bg-loja-charcoal'
          : 'border-loja-blush bg-loja-offwhite'
      }`}
    >
      <p
        className={`font-display text-2xl font-medium tracking-tight sm:text-3xl ${
          isDark ? 'text-loja-champagne' : 'text-loja-dark'
        }`}
      >
        Precisa de ajuda para escolher?
      </p>
      <p
        className={`mx-auto mt-3 max-w-md font-body text-sm leading-relaxed ${
          isDark ? 'text-loja-muted' : 'text-loja-charcoal'
        }`}
      >
        Nossa consultora está pronta para orientar você — seja na loja ou por
        WhatsApp. Cada peça merece tempo e atenção.
      </p>
      <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
        <a
          href="https://wa.me/5519388937377?text=Ol%C3%A1!%20Gostaria%20de%20ajuda%20para%20escolher%20pe%C3%A7as%20de%20decora%C3%A7%C3%A3o."
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center justify-center rounded-full px-7 py-3 font-body text-sm font-semibold transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-loja-rosegold focus-visible:outline-offset-2 ${
            isDark
              ? 'bg-loja-rosegold text-loja-offwhite hover:bg-loja-gold'
              : 'bg-loja-dark text-loja-offwhite hover:bg-loja-rosegold'
          }`}
        >
          Fale com uma especialista
        </a>
        <Link
          href="#localizacao"
          className={`inline-flex items-center justify-center rounded-full border px-7 py-3 font-body text-sm font-medium transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-loja-rosegold focus-visible:outline-offset-2 ${
            isDark
              ? 'border-loja-champagne text-loja-champagne hover:bg-loja-champagne/10'
              : 'border-loja-rosegold text-loja-rosegold hover:bg-loja-rosegold hover:text-loja-offwhite'
          }`}
        >
          Conhecer a loja
        </Link>
      </div>
    </div>
  )
}
