import { Sofa } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import Reveal from '@/components/ui/Reveal'
import SplitText from '@/components/ui/SplitText'
import SectionCard from '@/components/ui/SectionCard'
import ProgressiveImage from '@/components/ui/ProgressiveImage'
import { EXPERIENCE_IMAGES } from '@/lib/gallery'

type Experience = {
  title: string
  description: string
  /** Com foto: image + alt (+ imageClass). Sem foto: icon + caption. */
  image?: string
  alt?: string
  imageClass?: string
  icon?: LucideIcon
  caption?: string
}

const EXPERIENCES: readonly Experience[] = [
  {
    image: EXPERIENCE_IMAGES.homeDecor,
    alt: 'Peças de home decor selecionadas na Schiètto',
    title: 'Home Decor',
    description:
      'Objetos que elevam ambientes — vasos, esculturas, aromas e peças de composição escolhidas uma a uma.',
    imageClass: 'object-cover',
  },
  {
    image: EXPERIENCE_IMAGES.semijoias,
    alt: 'Semijoias em exposição na Schiètto',
    title: 'Semijoias e Pedras',
    description:
      'Semijoias e pedras preciosas delicadas e atemporais, para o dia a dia e para ocasiões que merecem brilho.',
    // Mobile: sobe o foco para a joia não cortar na base do card 5:4
    imageClass: 'object-cover object-[center_88%] md:object-[center_72%]',
  },
  {
    image: EXPERIENCE_IMAGES.composicoes,
    alt: 'Composições de peças na Schiètto',
    title: 'Composições',
    description:
      'Peças reunidas com olhar atento — combinações que criam harmonia e dão personalidade ao seu ambiente.',
    imageClass: 'object-cover',
  },
  {
    // Troque por uma foto (image + alt) quando houver registro de almofadas,
    // estofados e cobertas.
    icon: Sofa,
    caption: 'Almofadas · Estofados · Cobertas',
    title: 'Casa e Conforto',
    description:
      'Almofadas, estofados, cobertas e tudo o que traz aconchego e sofisticação para o seu lar.',
  },
]

export default function Experiences() {
  return (
    <SectionCard id="experiencias">
      <div className="grid gap-4">
        <SplitText
          as="h2"
          text="Nossas experiências"
          className="font-display text-xl font-medium tracking-tight text-loja-dark lg:text-3xl"
        />
        <Reveal delay={150}>
          <p className="max-w-[72ch] font-body text-base font-light leading-relaxed text-loja-charcoal/75">
            Decoração, semijoias, pedras preciosas, almofadas, estofados,
            cobertas e muito mais — de tudo um pouco, sempre em versão de luxo
            e com um atendimento que entende o seu estilo.
          </p>
        </Reveal>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {EXPERIENCES.map((item, index) => {
          const Icon = item.icon
          return (
            <Reveal key={item.title} delay={index * 150}>
              <div className="group grid h-full gap-6 rounded-lg border border-loja-blush/60 p-4 transition-colors duration-500 hover:border-loja-rosegold">
                <div className="relative aspect-[5/4] w-full overflow-hidden rounded-lg bg-loja-champagne/40">
                  {item.image ? (
                    <ProgressiveImage
                      src={item.image}
                      alt={item.alt ?? item.title}
                      fill
                      className={`${item.imageClass ?? 'object-cover'} transition-transform duration-700 ease-out group-hover:scale-105`}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center gap-3 p-6 text-center">
                      {Icon && (
                        <Icon
                          className="h-8 w-8 text-loja-rosegold"
                          strokeWidth={1.25}
                          aria-hidden="true"
                        />
                      )}
                      <p className="font-body text-xs uppercase tracking-[0.2em] text-loja-muted">
                        {item.caption}
                      </p>
                    </div>
                  )}
                </div>

                <div className="flex flex-col gap-3 pb-2">
                  <h3 className="font-display text-xl font-medium tracking-tight text-loja-dark">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm font-light leading-relaxed text-loja-charcoal/75">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </SectionCard>
  )
}
