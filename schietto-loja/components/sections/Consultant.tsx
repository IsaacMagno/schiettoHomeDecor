import { MessageCircle } from 'lucide-react'
import Reveal from '@/components/ui/Reveal'
import SplitText from '@/components/ui/SplitText'
import SectionCard from '@/components/ui/SectionCard'
import ProgressiveImage from '@/components/ui/ProgressiveImage'
import { COMPOSICAO_IMAGE } from '@/lib/gallery'
import { WHATSAPP_URL } from '@/lib/contact'

export default function Consultant() {
  return (
    <SectionCard id="composicoes">
      <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
        <Reveal className="w-full max-w-sm shrink-0">
          <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-loja-champagne/40">
            <ProgressiveImage
              src={COMPOSICAO_IMAGE}
              alt="Composição de peças Schiètto — mesa posta com orquídeas, cristais e porcelanas"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 384px"
            />
          </div>
        </Reveal>

        <div className="flex-1 text-center lg:text-left">
          <SplitText
            as="p"
            text="Home Decor"
            className="font-body text-xs font-medium uppercase tracking-[0.35em] text-loja-rosegold"
          />
          <SplitText
            as="h2"
            text="Peças que se encontram"
            delay={150}
            className="mt-4 font-display text-xl font-medium tracking-tight text-loja-dark lg:text-3xl"
          />

          <Reveal delay={300}>
            <p className="mt-6 max-w-[72ch] font-body text-base font-normal leading-loose text-loja-charcoal/90">
              Na Schiètto, a beleza se revela no encontro. Texturas, formas e
              tons que se encontram e se completam — composições nascidas do
              olhar atento, pensadas para o seu ambiente com delicadeza e
              sofisticação.
            </p>
          </Reveal>

          <Reveal delay={450}>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-loja-dark px-8 py-3.5 font-body text-sm font-semibold text-loja-offwhite transition-colors duration-300 hover:bg-loja-rosegold focus-visible:outline focus-visible:outline-2 focus-visible:outline-loja-rosegold focus-visible:outline-offset-2"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
              Fale conosco
            </a>
          </Reveal>
        </div>
      </div>
    </SectionCard>
  )
}
