import HighlightsClient from '@/components/sections/HighlightsClient'
import AnimatedSectionHeader from '@/components/ui/AnimatedSectionHeader'
import { getFeaturedProducts } from '@/lib/queries'
import { isSupabaseConfigured } from '@/lib/supabase'
import type { Product } from '@/types'

const FALLBACK_HIGHLIGHTS: Product[] = [
  {
    id: 'h1',
    name: 'Vaso Cerâmica Nude',
    description: 'Vaso artesanal em cerâmica tons nude.',
    segment: 'home_decor',
    category: 'vasos',
    image_url: '',
    featured: true,
    active: true,
    created_at: '',
  },
  {
    id: 'h2',
    name: 'Anel Solitário Ouro',
    description: 'Anel delicado com zircônia, banho ouro 18k.',
    segment: 'semi_joia',
    category: 'aneis',
    image_url: '',
    featured: true,
    active: true,
    created_at: '',
  },
  {
    id: 'h3',
    name: 'Bandeja Espelhada',
    description: 'Bandeja decorativa com detalhes dourados.',
    segment: 'home_decor',
    category: 'objetos',
    image_url: '',
    featured: true,
    active: true,
    created_at: '',
  },
  {
    id: 'h4',
    name: 'Colar Pingente Pérola',
    description: 'Colar delicado com pingente de pérola.',
    segment: 'semi_joia',
    category: 'colares',
    image_url: '',
    featured: true,
    active: true,
    created_at: '',
  },
  {
    id: 'h5',
    name: 'Vela Aromática Lavanda',
    description: 'Vela artesanal cera de soja.',
    segment: 'home_decor',
    category: 'velas',
    image_url: '',
    featured: true,
    active: true,
    created_at: '',
  },
  {
    id: 'h6',
    name: 'Conjunto Colar + Brinco',
    description: 'Conjunto harmonioso banho dourado.',
    segment: 'semi_joia',
    category: 'conjuntos',
    image_url: '',
    featured: true,
    active: true,
    created_at: '',
  },
]

export default async function Highlights() {
  const products = isSupabaseConfigured()
    ? await getFeaturedProducts()
    : FALLBACK_HIGHLIGHTS

  const displayProducts =
    products.length > 0 ? products.slice(0, 6) : FALLBACK_HIGHLIGHTS

  return (
    <section
      id="destaques"
      className="bg-gradient-to-br from-loja-champagne to-loja-blush py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <AnimatedSectionHeader className="text-center">
          <p className="font-body text-xs font-normal uppercase tracking-widest text-loja-rosegold">
            Seleção Especial
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-loja-dark sm:text-5xl lg:text-6xl">
            Destaques
          </h2>
          <p className="mx-auto mt-3 max-w-xl font-display text-lg italic text-loja-charcoal sm:text-xl">
            Peças escolhidas a mão, para quem aprecia o especial.
          </p>
        </AnimatedSectionHeader>

        <div className="mt-14">
          <HighlightsClient products={displayProducts} />
        </div>
      </div>
    </section>
  )
}
