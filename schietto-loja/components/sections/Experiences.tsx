import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import Reveal from '@/components/ui/Reveal'
import SplitText from '@/components/ui/SplitText'
import SectionCard from '@/components/ui/SectionCard'
import { ALL_IMAGES } from '@/lib/gallery'

const EXPERIENCES = [
  {
    image: ALL_IMAGES[5],
    alt: 'Peças de home decor selecionadas na Schiètto',
    title: 'Home Decor',
    description:
      'Objetos que elevam ambientes — vasos, esculturas, aromas e peças de composição escolhidas uma a uma.',
    cta: 'Explore o universo decor',
    href: '#galeria',
  },
  {
    image: ALL_IMAGES[27],
    alt: 'Semi jóias em exposição na Schiètto',
    title: 'Semi Jóias',
    description:
      'Acessórios delicados e atemporais para o dia a dia e para ocasiões que merecem brilho.',
    cta: 'Descubra as semi jóias',
    href: '#galeria',
  },
  {
    image: ALL_IMAGES[15],
    alt: 'Ambiente acolhedor da loja Schiètto no casarão histórico',
    title: 'Consultoria Personalizada',
    description:
      'Uma especialista para orientar suas escolhas — harmonia, elegância e personalidade em cada indicação.',
    cta: 'Conheça a consultoria',
    href: '#consultoria',
  },
] as const

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
            Decoração, semi jóias e um atendimento que entende o seu estilo —
            dois universos e um mesmo olhar, em um espaço feito para inspirar.
          </p>
        </Reveal>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
        {EXPERIENCES.map((item, index) => (
          <Reveal key={item.title} delay={index * 150}>
            <a
              href={item.href}
              className="group grid h-full gap-6 rounded-lg border border-loja-blush/60 p-4 transition-colors duration-500 hover:border-loja-rosegold"
            >
              <div className="relative aspect-[5/4] w-full overflow-hidden rounded-lg bg-loja-champagne/40">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <div className="flex flex-col gap-3 pb-2">
                <h3 className="font-display text-xl font-medium tracking-tight text-loja-dark">
                  {item.title}
                </h3>
                <p className="font-body text-sm font-light leading-relaxed text-loja-charcoal/75">
                  {item.description}
                </p>
                <span className="mt-auto inline-flex items-center gap-2 pt-2 font-body text-sm font-medium text-loja-rosegold transition-all duration-300 group-hover:gap-3">
                  {item.cta}
                  <ArrowRight className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                </span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </SectionCard>
  )
}
