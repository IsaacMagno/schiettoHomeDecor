import AnimatedSectionHeader from '@/components/ui/AnimatedSectionHeader'
import { Gem, HeartHandshake, Sparkles, Building2 } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const HIGHLIGHT_CARDS: {
  icon: LucideIcon
  title: string
  description: string
}[] = [
  {
    icon: Sparkles,
    title: 'Curadoria exclusiva',
    description:
      'Peças escolhidas uma a uma, com olhar para harmonia, qualidade e personalidade.',
  },
  {
    icon: HeartHandshake,
    title: 'Atendimento personalizado',
    description:
      'Tempo e atenção para entender seu estilo e indicar o que faz sentido para você.',
  },
  {
    icon: Gem,
    title: 'Peças de alta qualidade',
    description:
      'Decoração e semijoias selecionadas para durar e encantar no dia a dia.',
  },
  {
    icon: Building2,
    title: 'Experiência no casarão',
    description:
      'Um ambiente acolhedor no andar superior de um casarão histórico em Pedreira.',
  },
]

export default function About() {
  return (
    <section id="sobre" className="bg-loja-dark py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-12">
          <div className="lg:w-[55%]">
            <AnimatedSectionHeader>
              <p className="font-body text-xs font-normal uppercase tracking-widest text-loja-rosegold">
                Sobre a Schiètto
              </p>
              <h2 className="mt-4">
                <span className="block font-display text-3xl font-light italic leading-tight text-loja-champagne sm:text-4xl lg:text-5xl">
                  Bom gosto,
                </span>
                <span className="mt-1 block font-display text-4xl font-semibold leading-tight text-loja-offwhite sm:text-5xl">
                  personalidade e sofisticação.
                </span>
              </h2>
              <div className="my-8 h-0.5 w-[50px] bg-loja-rosegold" />
            </AnimatedSectionHeader>

            <div className="space-y-6">
              <p className="font-body text-base font-light leading-relaxed text-loja-champagne/70 lg:text-lg">
                A Schiètto Home Decor & Semijoias nasceu do desejo de reunir, em
                um só lugar, objetos que traduzem estilo de vida — peças que
                contam histórias, elevam ambientes e enriquecem o cotidiano
                com delicadeza.
              </p>
              <p className="font-body text-base font-light leading-relaxed text-loja-champagne/70 lg:text-lg">
                Cada escolha passa por uma curadoria cuidadosa. Na loja, você
                encontra um espaço acolhedor para ver, sentir e descobrir o que
                combina com a sua casa e com você — com calma, atenção e o
                carinho de quem ama o que faz.
              </p>
            </div>
          </div>

          <div className="lg:w-[45%]">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {HIGHLIGHT_CARDS.map((card) => {
                const Icon = card.icon
                return (
                  <div
                    key={card.title}
                    className="rounded-lg border border-loja-rosegold/30 bg-loja-charcoal p-6 transition-all duration-300 hover:border-loja-rosegold hover:shadow-[0_8px_30px_rgba(183,110,121,0.2)]"
                  >
                    <Icon
                      className="h-6 w-6 text-loja-rosegold"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                    <h3 className="mt-3 font-display text-lg font-semibold text-loja-offwhite">
                      {card.title}
                    </h3>
                    <p className="mt-2 font-body text-sm text-loja-muted">
                      {card.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
