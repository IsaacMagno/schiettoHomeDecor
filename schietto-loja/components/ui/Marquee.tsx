const ITEMS = [
  'Decoração',
  'Semijoias',
  'Pedras preciosas',
  'Almofadas',
  'Estofados',
  'Cobertas',
  'Vasos e esculturas',
  'Aromas',
] as const

function Track({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="marquee__track" aria-hidden={hidden ? 'true' : undefined}>
      {ITEMS.map((item) => (
        <li key={item} className="flex items-center whitespace-nowrap">
          <span className="px-6 font-display text-sm font-normal uppercase tracking-[0.3em] text-loja-champagne sm:px-8 sm:text-base">
            {item}
          </span>
          <span aria-hidden="true" className="h-1 w-1 rotate-45 bg-loja-gold" />
        </li>
      ))}
    </ul>
  )
}

/**
 * Faixa com o que a loja tem, passando devagar. Pausa com o mouse em cima;
 * com "reduzir movimento" vira uma lista parada.
 */
export default function Marquee() {
  return (
    <div
      className="border-y border-loja-gold/20 bg-loja-dark py-5"
      aria-label="O que você encontra na loja"
    >
      <div className="marquee">
        <Track />
        <Track hidden />
      </div>
    </div>
  )
}
