import Image from 'next/image'
import { HERO_IMAGES } from '@/lib/gallery'

export default function Hero() {
  return (
    <section className="min-h-screen bg-loja-offwhite">
      <div className="flex min-h-screen flex-col lg:flex-row">
        <div className="flex flex-1 flex-col items-center justify-center px-6 py-28 text-center sm:px-8 lg:items-start lg:px-16 lg:py-0 lg:text-left xl:px-24">
          <p className="animate-fade-in-up font-body text-xs font-normal uppercase tracking-widest text-loja-rosegold [animation-delay:0.2s]">
            ✦ Schiètto
          </p>

          <h1 className="mt-6">
            <span className="animate-fade-in-up block font-display text-4xl font-light italic leading-tight text-loja-muted sm:text-5xl md:text-6xl lg:text-7xl [animation-delay:0.4s]">
              Objetos que
            </span>
            <span className="animate-fade-in-up block font-display text-5xl font-semibold leading-tight text-loja-dark sm:text-6xl md:text-7xl lg:text-8xl [animation-delay:0.5s]">
              encantam.
            </span>
            <span className="animate-fade-in-up block font-display text-4xl font-light italic leading-tight text-loja-rosegold sm:text-5xl md:text-6xl lg:text-7xl [animation-delay:0.6s]">
              e permanecem.
            </span>
          </h1>

          <p className="animate-fade-in-up mt-8 max-w-[440px] font-body text-base font-light leading-relaxed text-loja-muted [animation-delay:0.7s]">
            Decoração e semi jóias escolhidas com delicadeza, no coração de
            Pedreira — para quem acredita que os detalhes fazem toda a
            diferença.
          </p>

          <div className="animate-fade-in-up mt-10 flex w-full max-w-sm flex-col gap-4 [animation-delay:0.8s] sm:max-w-md lg:max-w-none lg:flex-row lg:justify-start">
            <a
              href="#galeria"
              className="inline-flex w-full items-center justify-center rounded-sm bg-loja-dark px-8 py-3.5 font-body text-sm font-medium text-loja-offwhite transition-colors duration-300 hover:bg-loja-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-loja-rosegold focus-visible:outline-offset-2 sm:w-auto"
            >
              Ver vitrine
            </a>
            <a
              href="#localizacao"
              className="inline-flex w-full items-center justify-center rounded-sm border border-loja-rosegold px-8 py-3.5 font-body text-sm font-medium text-loja-rosegold transition-colors duration-300 hover:bg-loja-rosegold hover:text-loja-offwhite focus-visible:outline focus-visible:outline-2 focus-visible:outline-loja-rosegold focus-visible:outline-offset-2 sm:w-auto"
            >
              Como chegar
            </a>
          </div>

          <p className="animate-fade-in-up mt-8 font-body text-xs text-loja-muted [animation-delay:0.9s]">
            📍 Pedreira, SP · Desde 2023
          </p>
        </div>

        <div className="flex flex-1 items-center justify-center bg-gradient-to-br from-loja-champagne to-loja-blush px-6 py-12 sm:px-8 lg:py-0">
          <div className="animate-fade-in-right group relative h-64 w-56 sm:h-72 sm:w-64 lg:h-96 lg:w-80 [animation-delay:0.5s]">
            <div className="absolute inset-0 -rotate-[6deg] overflow-hidden rounded-lg opacity-80 transition-transform duration-500 ease-out group-hover:-translate-x-3 group-hover:-translate-y-2 group-hover:-rotate-[8deg]">
              <Image
                src={HERO_IMAGES.back}
                alt="Peça de decoração da loja Schiètto"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 224px, 320px"
                priority
              />
            </div>
            <div className="absolute inset-0 -rotate-[2deg] overflow-hidden rounded-lg opacity-90 transition-transform duration-500 ease-out group-hover:translate-x-2 group-hover:-translate-y-1 group-hover:-rotate-[3deg]">
              <Image
                src={HERO_IMAGES.middle}
                alt="Peça de decoração da loja Schiètto"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 224px, 320px"
                priority
              />
            </div>
            <div className="absolute inset-0 overflow-hidden rounded-lg border border-loja-gold bg-loja-offwhite shadow-[0_20px_60px_-15px_rgba(28,28,30,0.15)] transition-transform duration-500 ease-out group-hover:translate-y-2 group-hover:scale-[1.02]">
              <Image
                src={HERO_IMAGES.front}
                alt="Semi joia da loja Schiètto"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 256px, 320px"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
