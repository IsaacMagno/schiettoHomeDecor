import AnimatedSectionHeader from '@/components/ui/AnimatedSectionHeader'

const HIGHLIGHT_CARDS = [
  {
    emoji: '✦',
    title: 'Curadoria Exclusiva',
    description:
      'Cada peça é selecionada a mão, com critério estético e qualidade.',
  },
  {
    emoji: '💎',
    title: 'Semi Jóias de Qualidade',
    description:
      'Acessórios com banho em ouro e prata, resistentes e sofisticados.',
  },
  {
    emoji: '🏠',
    title: 'Home Decor Especial',
    description:
      'Objetos que transformam ambientes com personalidade e charme.',
  },
  {
    emoji: '📍',
    title: 'Em Pedreira, SP',
    description:
      'No polo de decoração mais importante do interior paulista.',
  },
] as const

export default function About() {
  return (
    <section id="sobre" className="bg-loja-dark py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-12">
          <div className="lg:w-[55%]">
            <AnimatedSectionHeader>
              <p className="font-body text-xs font-normal uppercase tracking-widest text-loja-rosegold">
                Nossa História
              </p>
              <h2 className="mt-4">
                <span className="block font-display text-3xl font-light italic leading-tight text-loja-champagne sm:text-4xl lg:text-5xl">
                  Mais do que uma loja,
                </span>
                <span className="mt-1 block font-display text-4xl font-semibold leading-tight text-loja-offwhite sm:text-5xl">
                  uma curadoria.
                </span>
              </h2>
              <div className="my-8 h-0.5 w-[50px] bg-loja-rosegold" />
            </AnimatedSectionHeader>

            <div className="space-y-6">
              <p className="font-body text-base font-light leading-relaxed text-loja-champagne/70 lg:text-lg">
                A Schiètto Home Decor & Semi Jóias nasceu em 2023 com uma
                proposta clara: trazer para Pedreira uma experiência de compra
                diferente. No coração de uma cidade conhecida nacionalmente por
                seus artigos de decoração, escolhemos nos destacar pela
                curadoria — selecionando peças que unem beleza, funcionalidade
                e personalidade.
              </p>
              <p className="font-body text-base font-light leading-relaxed text-loja-champagne/70 lg:text-lg">
                Cada objeto de decoração e cada semi joia que chega à nossa
                loja passa por um olhar cuidadoso. Acreditamos que os detalhes
                são os que mais importam — tanto para quem decora um lar quanto
                para quem escolhe um acessório para completar o estilo.
              </p>
            </div>
          </div>

          <div className="lg:w-[45%]">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {HIGHLIGHT_CARDS.map((card) => (
                <div
                  key={card.title}
                  className="rounded-lg border border-loja-rosegold/30 bg-loja-charcoal p-6 transition-all duration-300 hover:border-loja-rosegold hover:shadow-[0_8px_30px_rgba(183,110,121,0.2)]"
                >
                  <span className="text-2xl" aria-hidden="true">
                    {card.emoji}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-semibold text-loja-offwhite">
                    {card.title}
                  </h3>
                  <p className="mt-2 font-body text-sm text-loja-muted">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
