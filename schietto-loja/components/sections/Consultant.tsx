import { MessageCircle, User } from 'lucide-react'
import Reveal from '@/components/ui/Reveal'
import SplitText from '@/components/ui/SplitText'
import SectionCard from '@/components/ui/SectionCard'

const WHATSAPP_URL =
  'https://wa.me/5519388937377?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20a%20consultora%20sobre%20home%20decor.'

export default function Consultant() {
  return (
    <SectionCard id="consultoria">
      <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
        <Reveal className="w-full max-w-sm shrink-0">
          <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-loja-champagne/40">
            <div className="flex h-full flex-col items-center justify-center gap-4 p-8 text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border border-loja-rosegold/50 bg-white">
                <User
                  className="h-10 w-10 text-loja-rosegold"
                  strokeWidth={1.25}
                  aria-hidden="true"
                />
              </div>
              <p className="font-body text-xs uppercase tracking-[0.25em] text-loja-muted">
                Foto em breve
              </p>
            </div>
          </div>
        </Reveal>

        <div className="flex-1 text-center lg:text-left">
          <SplitText
            as="p"
            text="Especialista em Home Decor"
            className="font-body text-xs font-medium uppercase tracking-[0.35em] text-loja-rosegold"
          />
          <SplitText
            as="h2"
            text="Consultoria personalizada"
            delay={150}
            className="mt-4 font-display text-xl font-medium tracking-tight text-loja-dark lg:text-3xl"
          />

          <Reveal delay={300}>
            <p className="mt-6 max-w-[72ch] font-body text-base font-light leading-loose text-loja-charcoal/80">
              Mais do que vender objetos de decoração, nossa consultora oferece
              uma experiência personalizada. Cada peça é indicada pensando na
              harmonia, elegância e personalidade do seu ambiente, garantindo
              escolhas que valorizam cada espaço com sofisticação.
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
              Fale com nossa consultora
            </a>
          </Reveal>
        </div>
      </div>
    </SectionCard>
  )
}
