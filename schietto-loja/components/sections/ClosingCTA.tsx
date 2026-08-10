import { MessageCircle } from 'lucide-react'
import Reveal from '@/components/ui/Reveal'
import SplitText from '@/components/ui/SplitText'
import { WHATSAPP_URL } from '@/lib/contact'

export default function ClosingCTA() {
  return (
    <section className="flex flex-col items-center gap-8 px-6 py-24 text-center lg:py-32">
      <span
        aria-hidden="true"
        className="font-display text-4xl font-semibold tracking-tight text-loja-rosegold"
      >
        S<span className="text-loja-gold">.</span>
      </span>

      <SplitText
        as="h2"
        text="Pronta para se encantar?"
        className="font-display text-xl font-medium tracking-tight text-loja-dark lg:text-3xl"
      />

      <Reveal delay={200}>
        <p className="mx-auto max-w-[60ch] font-body text-base font-light leading-relaxed text-loja-charcoal/75">
          Fale conosco pelo WhatsApp ou venha nos visitar no casarão. Vamos
          adorar receber você e ajudar a encontrar a peça certa para o seu
          espaço.
        </p>
      </Reveal>

      <Reveal delay={350}>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-loja-dark px-8 py-3.5 font-body text-sm font-semibold text-loja-offwhite transition-colors duration-300 hover:bg-loja-rosegold focus-visible:outline focus-visible:outline-2 focus-visible:outline-loja-rosegold focus-visible:outline-offset-2"
        >
          <MessageCircle className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
          Entre em contato
        </a>
      </Reveal>
    </section>
  )
}
