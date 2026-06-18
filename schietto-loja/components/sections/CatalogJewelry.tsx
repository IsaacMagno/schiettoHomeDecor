import CatalogJewelryClient from '@/components/sections/CatalogJewelryClient'
import AnimatedSectionHeader from '@/components/ui/AnimatedSectionHeader'
import { getProductsBySegment } from '@/lib/queries'
import { isSupabaseConfigured } from '@/lib/supabase'
import type { Product } from '@/types'

const FALLBACK_JEWELRY: Product[] = [
  {
    id: 'j1',
    name: 'Anel Solitário Banhado Ouro',
    description: 'Anel delicado com pedra zircônia, banho em ouro 18k.',
    segment: 'semi_joia',
    category: 'aneis',
    image_url: '',
    featured: true,
    active: true,
    created_at: '',
  },
  {
    id: 'j2',
    name: 'Colar Pingente Pérola',
    description: 'Colar delicado com pingente de pérola sintética.',
    segment: 'semi_joia',
    category: 'colares',
    image_url: '',
    featured: true,
    active: true,
    created_at: '',
  },
  {
    id: 'j3',
    name: 'Brinco Argola Fina',
    description: 'Argolas finas lisas em ouro 18k, 3cm de diâmetro.',
    segment: 'semi_joia',
    category: 'brincos',
    image_url: '',
    featured: true,
    active: true,
    created_at: '',
  },
  {
    id: 'j4',
    name: 'Pulseira Charm',
    description: 'Pulseira regulável com pingente coração, banho rose gold.',
    segment: 'semi_joia',
    category: 'pulseiras',
    image_url: '',
    featured: true,
    active: true,
    created_at: '',
  },
  {
    id: 'j5',
    name: 'Conjunto Colar + Brinco',
    description: 'Conjunto harmonioso com colar e brincos, banho dourado.',
    segment: 'semi_joia',
    category: 'conjuntos',
    image_url: '',
    featured: true,
    active: true,
    created_at: '',
  },
  {
    id: 'j6',
    name: 'Anel Minimalista Prata',
    description: 'Anel liso em prata 925, minimalista e versátil.',
    segment: 'semi_joia',
    category: 'aneis',
    image_url: '',
    featured: false,
    active: true,
    created_at: '',
  },
]

export default async function CatalogJewelry() {
  const products = isSupabaseConfigured()
    ? await getProductsBySegment('semi_joia')
    : FALLBACK_JEWELRY

  const displayProducts =
    products.length > 0 ? products : FALLBACK_JEWELRY

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
          <p className="mt-3 font-display text-xl italic text-loja-champagne/70 sm:text-2xl">
            Peças que completam o seu estilo.
          </p>
          <div className="mt-6 h-px w-[60px] bg-loja-gold" />
        </AnimatedSectionHeader>

        <div className="mt-12">
          <CatalogJewelryClient products={displayProducts} />
        </div>
      </div>
    </section>
  )
}
