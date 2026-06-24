import AnimatedSectionHeader from '@/components/ui/AnimatedSectionHeader'
import ShowcaseGrid from '@/components/ui/ShowcaseGrid'
import VisitStoreCTA from '@/components/ui/VisitStoreCTA'
import { HOME_SHOWCASE } from '@/lib/gallery'

export default function CatalogHome() {
  return (
    <section id="home-decor" className="bg-loja-offwhite py-28 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <AnimatedSectionHeader>
          <p className="font-body text-xs font-normal uppercase tracking-widest text-loja-rosegold">
            Decoração
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-loja-dark sm:text-5xl lg:text-6xl">
            Home Decor
          </h2>
          <p className="mt-3 max-w-xl font-display text-xl italic text-loja-muted sm:text-2xl">
            Algumas peças do nosso universo decorativo — venha conhecê-las de
            perto.
          </p>
          <div className="mt-6 h-px w-[60px] bg-loja-rosegold" />
        </AnimatedSectionHeader>

        <div className="mt-12">
          <ShowcaseGrid
            items={HOME_SHOWCASE}
            altPrefix="Peça de decoração da loja Schiètto"
            variant="light"
            aspect="portrait"
          />
        </div>

        <VisitStoreCTA />
      </div>
    </section>
  )
}
