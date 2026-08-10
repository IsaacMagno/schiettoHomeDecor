import Image from 'next/image'
import Reveal from '@/components/ui/Reveal'
import SplitText from '@/components/ui/SplitText'
import { VALUE_IMAGES } from '@/lib/gallery'

const VALUES = [
  {
    image: VALUE_IMAGES[0],
    title: 'Elegância',
    description: 'Beleza que não precisa gritar para ser notada.',
  },
  {
    image: VALUE_IMAGES[1],
    title: 'Autenticidade',
    description: 'Peças e atendimento com verdade — schiètto, como o nome diz.',
  },
  {
    image: VALUE_IMAGES[2],
    title: 'Exclusividade',
    description: 'Curadoria pensada para quem busca o que poucos têm.',
  },
  {
    image: VALUE_IMAGES[3],
    title: 'Acolhimento',
    description: 'Uma loja que recebe como uma casa recebe visitas queridas.',
  },
  {
    image: VALUE_IMAGES[4],
    title: 'Inspiração',
    description: 'Cada visita é um convite para imaginar novos ambientes.',
  },
] as const

export default function Values() {
  return (
    <section id="valores" className="scroll-mt-20 px-3 pb-3 sm:px-4 sm:pb-4">
      <div className="grid gap-10">
        <div className="flex flex-col gap-4 px-3 pt-10 sm:px-6 lg:pt-16">
          <SplitText
            as="h2"
            text="Nossos valores"
            className="font-body text-xs font-medium uppercase tracking-[0.35em] text-loja-rosegold"
          />
          <Reveal delay={150}>
            <p className="max-w-[72ch] font-display text-xl font-medium tracking-tight text-loja-dark lg:text-3xl">
              O que nos move, em cada detalhe
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {VALUES.map((value, index) => (
            <Reveal key={value.title} delay={index * 100}>
              <div className="flex h-full gap-3 rounded-lg border border-loja-blush/60 bg-white p-2 transition-colors duration-500 hover:border-loja-rosegold lg:grid lg:content-start">
                <div className="relative aspect-[5/6] w-24 shrink-0 overflow-hidden rounded-lg bg-loja-champagne/40 lg:aspect-[6/4] lg:w-full">
                  <Image
                    src={value.image}
                    alt={`${value.title} — valor da Schiètto`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 96px, 20vw"
                  />
                </div>
                <div className="flex flex-col gap-1.5 p-2">
                  <h3 className="font-display text-base font-medium tracking-tight text-loja-dark">
                    {value.title}
                  </h3>
                  <p className="font-body text-sm font-light leading-relaxed text-loja-charcoal/70">
                    {value.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
