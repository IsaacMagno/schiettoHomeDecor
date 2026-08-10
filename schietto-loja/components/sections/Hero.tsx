import HeroSlider from '@/components/sections/HeroSlider'
import SplitText from '@/components/ui/SplitText'

export default function Hero() {
  return (
    <section className="relative flex h-svh min-h-[600px] w-full items-end overflow-hidden bg-loja-dark">
      {/* Slider de fundo: crossfade, autoplay, clique avança */}
      <HeroSlider />

      {/* Conteúdo ancorado na base, à esquerda */}
      <div className="pointer-events-none relative z-10 w-full px-6 pb-16 sm:px-10 lg:px-12 lg:pb-20">
        <p className="animate-fade-in-up font-body text-xs font-medium uppercase tracking-[0.35em] text-loja-champagne [animation-delay:0.85s]">
          Bem-vindo à Schiètto
        </p>

        <SplitText
          as="h1"
          text="Viva uma nova experiência em decoração e semijoias"
          delay={850}
          className="mt-4 max-w-3xl font-display text-3xl font-medium leading-[1.15] tracking-tight text-loja-offwhite sm:text-5xl lg:text-6xl"
        />

        <p className="animate-fade-in-up mt-5 max-w-xl font-body text-sm font-light leading-relaxed text-loja-offwhite/80 sm:text-base [animation-delay:1.3s]">
          Curadoria premium no andar superior de um casarão histórico no
          coração de Pedreira, SP.
        </p>

        <div className="animate-fade-in-up pointer-events-auto mt-8 flex flex-col gap-3 sm:flex-row [animation-delay:1.5s]">
          <a
            href="#experiencias"
            className="inline-flex items-center justify-center rounded-full bg-loja-offwhite px-8 py-3.5 font-body text-sm font-semibold text-loja-dark transition-all duration-300 hover:bg-loja-rosegold hover:text-loja-offwhite focus-visible:outline focus-visible:outline-2 focus-visible:outline-loja-rosegold focus-visible:outline-offset-2"
          >
            Descubra a Schiètto
          </a>
          <a
            href="#localizacao"
            className="inline-flex items-center justify-center rounded-full border border-loja-offwhite/60 px-8 py-3.5 font-body text-sm font-medium text-loja-offwhite transition-all duration-300 hover:border-loja-offwhite hover:bg-loja-offwhite/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-loja-rosegold focus-visible:outline-offset-2"
          >
            Visite a loja
          </a>
        </div>
      </div>
    </section>
  )
}
