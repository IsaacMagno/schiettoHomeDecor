import AnimatedSectionHeader from '@/components/ui/AnimatedSectionHeader'

const HIGHLIGHT_CARDS = [
  {
    emoji: '🏪',
    title: 'Experiência presencial',
    description:
      'A loja foi feita para você explorar cada detalhe com tranquilidade.',
  },
  {
    emoji: '✦',
    title: 'Curadoria cuidadosa',
    description:
      'Peças selecionadas a mão, com olhar para beleza e qualidade.',
  },
  {
    emoji: '💎',
    title: 'Dois universos',
    description: 'Home decor e semi jóias no mesmo espaço acolhedor.',
  },
  {
    emoji: '📍',
    title: 'No coração de Pedreira',
    description:
      'Rua Primo Frazato, 30 — mesmo endereço do Caffè Schiètto.',
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
                Sobre a loja
              </p>
              <h2 className="mt-4">
                <span className="block font-display text-3xl font-light italic leading-tight text-loja-champagne sm:text-4xl lg:text-5xl">
                  Um convite para
                </span>
                <span className="mt-1 block font-display text-4xl font-semibold leading-tight text-loja-offwhite sm:text-5xl">
                  nos visitar.
                </span>
              </h2>
              <div className="my-8 h-0.5 w-[50px] bg-loja-rosegold" />
            </AnimatedSectionHeader>

            <div className="space-y-6">
              <p className="font-body text-base font-light leading-relaxed text-loja-champagne/70 lg:text-lg">
                A Schiètto Home Decor & Semi Jóias é um espaço de decoração e
                acessórios em Pedreira, SP. Este site é uma vitrine — um
                primeiro contato visual para quem quer se inspirar antes de vir
                até nós.
              </p>
              <p className="font-body text-base font-light leading-relaxed text-loja-champagne/70 lg:text-lg">
                Acreditamos que escolher uma peça para casa ou para o dia a dia
                pede tempo, atenção e um ambiente acolhedor. Por isso, o melhor
                caminho é conhecer tudo pessoalmente na loja, com calma e sem
                pressa.
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
