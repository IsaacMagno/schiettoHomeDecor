import AnimatedSectionHeader from '@/components/ui/AnimatedSectionHeader'
import ShowcaseGrid from '@/components/ui/ShowcaseGrid'
import VisitStoreCTA from '@/components/ui/VisitStoreCTA'
import { JEWELRY_SHOWCASE } from '@/lib/gallery'

export default function CatalogJewelry() {
  return (
    <section id="semi-joias" className="bg-loja-dark py-28 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <AnimatedSectionHeader>
          <p className="font-body text-xs font-normal uppercase tracking-widest text-loja-champagne">
            Acessórios
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-loja-offwhite sm:text-5xl lg:text-6xl">
            Semi Jóias
          </h2>
          <p className="mt-3 max-w-xl font-display text-xl italic text-loja-champagne/70 sm:text-2xl">
            Um pouco do que preparamos para você — os detalhes, você descobre na
            loja.
          </p>
          <div className="mt-6 h-px w-[60px] bg-loja-gold" />
        </AnimatedSectionHeader>

        <div className="mt-12">
          <ShowcaseGrid
            items={JEWELRY_SHOWCASE}
            altPrefix="Semi joia da loja Schiètto"
            variant="dark"
            aspect="square"
          />
        </div>

        <VisitStoreCTA variant="dark" />
      </div>
    </section>
  )
}
