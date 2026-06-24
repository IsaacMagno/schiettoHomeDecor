import Link from 'next/link'

interface VisitStoreCTAProps {
  variant?: 'light' | 'dark'
}

export default function VisitStoreCTA({ variant = 'light' }: VisitStoreCTAProps) {
  const isDark = variant === 'dark'

  return (
    <div
      className={`mt-14 rounded-lg border px-6 py-8 text-center sm:px-10 ${
        isDark
          ? 'border-loja-rosegold/30 bg-loja-charcoal'
          : 'border-loja-blush bg-loja-champagne/30'
      }`}
    >
      <p
        className={`font-display text-xl italic sm:text-2xl ${
          isDark ? 'text-loja-champagne' : 'text-loja-dark'
        }`}
      >
        Gostou do que viu?
      </p>
      <p
        className={`mx-auto mt-3 max-w-md font-body text-sm leading-relaxed ${
          isDark ? 'text-loja-muted' : 'text-loja-charcoal'
        }`}
      >
        Esta vitrine é só um vislumbre. Venha até a loja em Pedreira para ver,
        tocar e escolher as peças com calma — nossa equipe está pronta para
        recebê-la.
      </p>
      <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
        <Link
          href="#localizacao"
          className={`inline-flex items-center justify-center rounded-sm px-6 py-3 font-body text-sm font-medium transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-loja-rosegold focus-visible:outline-offset-2 ${
            isDark
              ? 'bg-loja-rosegold text-loja-offwhite hover:bg-loja-gold'
              : 'bg-loja-dark text-loja-offwhite hover:bg-loja-charcoal'
          }`}
        >
          Como chegar
        </Link>
        <a
          href="https://wa.me/5519388937377"
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center justify-center rounded-sm border px-6 py-3 font-body text-sm font-medium transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-loja-rosegold focus-visible:outline-offset-2 ${
            isDark
              ? 'border-loja-champagne text-loja-champagne hover:bg-loja-champagne/10'
              : 'border-loja-rosegold text-loja-rosegold hover:bg-loja-rosegold hover:text-loja-offwhite'
          }`}
        >
          Fale conosco
        </a>
      </div>
    </div>
  )
}
