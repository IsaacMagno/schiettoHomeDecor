import {
  Sparkles,
  HeartHandshake,
  Gem,
  Building2,
  Tag,
  Coffee,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import Reveal from '@/components/ui/Reveal'
import SplitText from '@/components/ui/SplitText'
import SectionCard from '@/components/ui/SectionCard'

const FEATURES: {
  icon: LucideIcon
  title: string
  description: string
}[] = [
  {
    icon: Sparkles,
    title: 'Curadoria exclusiva',
    description:
      'Nada aqui é por acaso. Cada peça é escolhida a mão, com olhar atento para harmonia, qualidade e personalidade.',
  },
  {
    icon: HeartHandshake,
    title: 'Atendimento que acolhe',
    description:
      'Tempo, atenção e escuta. Nossa equipe entende o seu estilo antes de indicar qualquer peça.',
  },
  {
    icon: Gem,
    title: 'Qualidade que permanece',
    description:
      'Decoração e semi jóias selecionadas para durar — beleza que acompanha o seu dia a dia por anos.',
  },
  {
    icon: Building2,
    title: 'Um casarão com história',
    description:
      'A loja ocupa o andar superior de um casarão histórico no centro de Pedreira — charme e memória em cada canto.',
  },
  {
    icon: Tag,
    title: 'Transparência sempre',
    description:
      'Sem surpresas: você conhece cada peça pessoalmente, com orientação honesta e sem pressão.',
  },
  {
    icon: Coffee,
    title: 'Experiência completa',
    description:
      'No mesmo endereço do Caffè Schiètto — sua visita pode começar com um bom café e terminar com uma descoberta.',
  },
]

export default function Features() {
  return (
    <SectionCard>
      <SplitText
        as="h2"
        text="Por que escolher a Schiètto?"
        className="font-display text-xl font-medium tracking-tight text-loja-dark lg:text-3xl"
      />

      <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((feature, index) => {
          const Icon = feature.icon
          return (
            <Reveal key={feature.title} delay={(index % 3) * 120}>
              <div className="grid gap-4">
                {/* Linha divisória fina no topo, como na referência */}
                <div className="h-[0.5px] w-full bg-loja-dark/40" />
                <div className="flex items-center gap-3">
                  <Icon
                    className="h-5 w-5 text-loja-rosegold"
                    strokeWidth={1.25}
                    aria-hidden="true"
                  />
                  <h3 className="font-display text-base font-medium tracking-tight text-loja-dark">
                    {feature.title}
                  </h3>
                </div>
                <p className="font-body text-sm font-light leading-relaxed text-loja-charcoal/75">
                  {feature.description}
                </p>
              </div>
            </Reveal>
          )
        })}
      </div>
    </SectionCard>
  )
}
