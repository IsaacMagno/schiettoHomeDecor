import ShowcaseGallery from '@/components/sections/ShowcaseGallery'
import AnimatedSectionHeader from '@/components/ui/AnimatedSectionHeader'
import VisitStoreCTA from '@/components/ui/VisitStoreCTA'
import { HIGHLIGHT_SHOWCASE } from '@/lib/gallery'

export default function Highlights() {
  return (
    <section
      id="galeria"
      className="bg-gradient-to-br from-loja-champagne to-loja-blush py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <AnimatedSectionHeader className="text-center">
          <p className="font-body text-xs font-normal uppercase tracking-widest text-loja-rosegold">
            Vitrine
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-loja-dark sm:text-5xl lg:text-6xl">
            Galeria
          </h2>
          <p className="mx-auto mt-3 max-w-xl font-display text-lg italic text-loja-charcoal sm:text-xl">
            Um vislumbre do que você encontra na loja — sem pressa, só inspiração.
          </p>
        </AnimatedSectionHeader>

        <div className="mt-14">
          <ShowcaseGallery items={HIGHLIGHT_SHOWCASE} />
        </div>

        <VisitStoreCTA />
      </div>
    </section>
  )
}
