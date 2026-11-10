import { ArrowUpRight, Coffee, MapPin } from 'lucide-react'
import Reveal from '@/components/ui/Reveal'
import SplitText from '@/components/ui/SplitText'
import SectionCard from '@/components/ui/SectionCard'
import { CAFE_URL } from '@/lib/contact'

/**
 * Vislumbre do Caffè Schiètto dentro do site da loja: quem chega pelo Google
 * ou por um anúncio já sabe que, no mesmo endereço, tem café. O cardápio e as
 * informações completas ficam no site do café.
 */
export default function CafeBand() {
  return (
    <SectionCard id="cafe" variant="dark">
      <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        <div>
          <p className="inline-flex items-center gap-2 font-body text-xs font-medium uppercase tracking-[0.35em] text-loja-gold">
            <Coffee className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
            No mesmo casarão
          </p>
          <SplitText
            as="h2"
            text="Depois da loja, um bom café"
            className="mt-4 font-display text-3xl font-medium tracking-tight text-loja-offwhite lg:text-5xl"
          />
          <Reveal delay={150}>
            <p className="mt-5 max-w-[56ch] font-body text-base font-normal leading-relaxed text-loja-champagne/90 lg:text-lg">
              O Caffè Schiètto fica no mesmo endereço: café gourmet no centro de
              Pedreira — aroma, cardápio e o ambiente que você já conhece. Sua
              visita pode começar com um café e terminar com uma descoberta.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={CAFE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-loja-offwhite px-8 py-3.5 font-body text-sm font-semibold text-loja-dark transition-colors duration-300 hover:bg-loja-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-loja-rosegold focus-visible:outline-offset-2"
              >
                Ver o café e o cardápio
                <ArrowUpRight className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
              </a>
              <a
                href="#localizacao"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-loja-champagne/50 px-8 py-3.5 font-body text-sm font-medium text-loja-champagne transition-colors duration-300 hover:bg-loja-champagne/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-loja-rosegold focus-visible:outline-offset-2"
              >
                <MapPin className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                Como chegar
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <div className="rounded-2xl border border-loja-gold/30 bg-loja-charcoal/60 p-8">
            <p className="font-display text-2xl font-medium tracking-tight text-loja-offwhite">
              Rua Primo Frazato, 30
            </p>
            <p className="mt-1 font-body text-sm text-loja-champagne/80">
              Centro — Pedreira, SP
            </p>
            <p className="mt-6 font-body text-xs font-medium uppercase tracking-[0.2em] text-loja-gold">
              Horários da loja de decoração
            </p>
            <dl className="mt-3 space-y-4 font-body text-sm">
              <div>
                <dt className="text-loja-champagne/60">Segunda a Sexta</dt>
                <dd className="mt-0.5 font-medium text-loja-offwhite">09h00 às 18h00</dd>
              </div>
              <div>
                <dt className="text-loja-champagne/60">Sábado e Domingo</dt>
                <dd className="mt-0.5 font-medium text-loja-offwhite">08h30 às 18h00</dd>
              </div>
            </dl>
            <p className="mt-6 border-t border-loja-champagne/15 pt-4 font-body text-xs text-loja-champagne/60">
              A loja fica no andar superior; o café, no mesmo endereço. Os
              horários do café estão no site dele. Horários sujeitos a
              alteração em feriados.
            </p>
          </div>
        </Reveal>
      </div>
    </SectionCard>
  )
}
