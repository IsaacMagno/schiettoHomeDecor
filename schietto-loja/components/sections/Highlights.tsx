import ShowcaseGallery from '@/components/sections/ShowcaseGallery'
import Reveal from '@/components/ui/Reveal'
import SplitText from '@/components/ui/SplitText'
import SectionCard from '@/components/ui/SectionCard'
import VisitStoreCTA from '@/components/ui/VisitStoreCTA'
import { HIGHLIGHT_SHOWCASE } from '@/lib/gallery'

export default function Highlights() {
  return (
    <SectionCard id="galeria">
      <div className="grid gap-4">
        <SplitText
          as="h2"
          text="Peças que inspiram"
          className="font-display text-xl font-medium tracking-tight text-loja-dark lg:text-3xl"
        />
        <Reveal delay={150}>
          <p className="max-w-[72ch] font-body text-base font-light leading-relaxed text-loja-charcoal/75">
            Uma seleção editorial do que você encontra na loja — curadoria,
            textura e detalhes pensados para encantar.
          </p>
        </Reveal>
      </div>

      <div className="mt-12">
        <ShowcaseGallery items={HIGHLIGHT_SHOWCASE} />
      </div>

      <VisitStoreCTA />
    </SectionCard>
  )
}
