import { ArrowUpRight } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import Reveal from '@/components/ui/Reveal'
import SplitText from '@/components/ui/SplitText'
import SectionCard from '@/components/ui/SectionCard'
import ProgressiveImage from '@/components/ui/ProgressiveImage'
import { EXPERIENCE_IMAGES } from '@/lib/gallery'
import { WHATSAPP_MESSAGES, whatsappUrl } from '@/lib/contact'

type Experience = {
  title: string
  description: string
  /** Mensagem que já chega escrita no WhatsApp */
  message: string
  cta: string
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
    message: WHATSAPP_MESSAGES.decoracao,
    cta: 'Perguntar sobre decoração',
  },
  {
    image: EXPERIENCE_IMAGES.semijoias,
    alt: 'Pedras preciosas e esferas de cristal em exposição na Schiètto',
    title: 'Semijoias e Pedras',
    description:
      'Semijoias e pedras preciosas delicadas e atemporais, para o dia a dia e para ocasiões que merecem brilho.',
    imageClass: 'object-cover object-[center_75%]',
    message: WHATSAPP_MESSAGES.semijoias,
    cta: 'Perguntar sobre semijoias',
  },
  {
    image: EXPERIENCE_IMAGES.composicoes,
    alt: 'Composições de peças na Schiètto',
    title: 'Composições',
    description:
      'Peças reunidas com olhar atento — combinações que criam harmonia e dão personalidade ao seu ambiente.',
    imageClass: 'object-cover',
    message: WHATSAPP_MESSAGES.composicoes,
    cta: 'Pedir ajuda para compor',
  },
  {
    image: EXPERIENCE_IMAGES.casa,
    alt: 'Cobertas e almofadas em tons neutros na Schiètto',
    imageClass: 'object-cover',
    title: 'Casa e Conforto',
    description:
      'Almofadas, estofados, cobertas e tudo o que traz aconchego e sofisticação para o seu lar.',
    message: WHATSAPP_MESSAGES.casa,
    cta: 'Perguntar sobre conforto',
  },
]

export default function Experiences() {
  return (
    <SectionCard id="experiencias">
      <div className="grid gap-4">
        <p className="font-body text-xs font-medium uppercase tracking-[0.35em] text-loja-rosegold">
          O que você encontra na loja
        </p>
        <SplitText
          as="h2"
          text="Tudo para a sua casa, em versão de luxo"
          className="font-display text-2xl font-medium tracking-tight text-loja-dark lg:text-4xl"
        />
        <Reveal delay={150}>
          <p className="max-w-[72ch] font-body text-base font-normal leading-relaxed text-loja-charcoal/90 lg:text-lg">
            Decoração, semijoias, pedras preciosas, almofadas, estofados,
            cobertas e muito mais — de tudo um pouco, com um atendimento que
            entende o seu estilo. Toque em um assunto e já chame a gente no
            WhatsApp.
          </p>
        </Reveal>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {EXPERIENCES.map((item, index) => {
          const Icon = item.icon
          return (
            <Reveal key={item.title} delay={index * 150}>
              <div className="group grid h-full grid-rows-[auto_1fr] gap-6 rounded-lg border border-loja-blush/60 p-4 transition-colors duration-500 hover:border-loja-rosegold">
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
                    <div className="flex h-full flex-col items-center justify-center gap-4 bg-gradient-to-br from-loja-dark to-loja-charcoal p-6 text-center">
                      {Icon && (
                        <Icon
                          className="h-12 w-12 text-loja-gold"
                          strokeWidth={1}
                          aria-hidden="true"
                        />
                      )}
                      <p className="font-body text-xs uppercase tracking-[0.2em] text-loja-champagne/80">
                        {item.caption}
                      </p>
                    </div>
                  )}
                </div>

                <div className="flex flex-col gap-3 pb-2">
                  <h3 className="font-display text-xl font-medium tracking-tight text-loja-dark">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm font-normal leading-relaxed text-loja-charcoal/90">
                    {item.description}
                  </p>
                  <a
                    href={whatsappUrl(item.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center gap-1.5 pt-2 font-body text-sm font-semibold text-loja-rosegold transition-colors duration-300 hover:text-loja-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-loja-rosegold focus-visible:outline-offset-2"
                  >
                    {item.cta}
                    <ArrowUpRight className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </SectionCard>
  )
}
