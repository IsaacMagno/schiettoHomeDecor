import { MessageCircle } from 'lucide-react'
import HeroSlider from '@/components/sections/HeroSlider'
import OpenNow from '@/components/ui/OpenNow'
import SplitText from '@/components/ui/SplitText'
import { WHATSAPP_URL } from '@/lib/contact'

export default function Hero() {
  return (
    <section className="relative flex h-svh min-h-[640px] w-full items-end overflow-hidden bg-loja-dark">
      {/* Slider de fundo: crossfade, autoplay, clique avança */}
      <HeroSlider />

      {/* Conteúdo ancorado na base, à esquerda */}
      <div className="pointer-events-none relative z-10 w-full px-6 pb-28 sm:px-10 sm:pb-16 lg:px-12 lg:pb-20">
        <div className="animate-fade-in-up flex flex-wrap items-center gap-x-4 gap-y-2 [animation-delay:0.1s]">
          <p className="font-body text-xs font-medium uppercase tracking-[0.35em] text-loja-champagne">
            Bem-vindo à Schiètto
          </p>
          <OpenNow className="text-loja-offwhite" />
        </div>

        <SplitText
          as="h1"
          text="Viva uma nova experiência em decoração de luxo"
          delay={100}
          className="mt-4 max-w-3xl font-display text-4xl font-medium leading-[1.1] tracking-tight text-loja-offwhite sm:text-5xl lg:text-6xl"
        />

        <p className="animate-fade-in-up mt-5 max-w-xl font-body text-base font-normal leading-relaxed text-loja-offwhite/90 sm:text-lg [animation-delay:0.5s]">
          Decoração, semijoias, pedras preciosas, almofadas, estofados e
          cobertas — tudo em versão de luxo, em um casarão histórico no centro
          de Pedreira, SP.
        </p>

        <div className="animate-fade-in-up pointer-events-auto mt-8 flex flex-col gap-3 sm:flex-row [animation-delay:0.7s]">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 py-4 font-body text-base font-semibold text-loja-charcoal shadow-lg transition-all duration-300 hover:bg-[#1fb857] hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-loja-offwhite focus-visible:outline-offset-2"
          >
            <MessageCircle className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
            Chamar no WhatsApp
          </a>
          <a
            href="#experiencias"
            className="inline-flex items-center justify-center rounded-full border border-loja-offwhite/70 px-8 py-4 font-body text-base font-medium text-loja-offwhite transition-all duration-300 hover:border-loja-offwhite hover:bg-loja-offwhite/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-loja-rosegold focus-visible:outline-offset-2"
          >
            Conhecer a loja
          </a>
        </div>
      </div>
    </section>
  )
}
