import CatalogHomeClient from '@/components/sections/CatalogHomeClient'
import AnimatedSectionHeader from '@/components/ui/AnimatedSectionHeader'
import { getProductsBySegment } from '@/lib/queries'
import { isSupabaseConfigured } from '@/lib/supabase'
import type { Product } from '@/types'

const FALLBACK_HOME: Product[] = [
  {
    id: '1',
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
    id: '2',
    name: 'Quadro Botânico',
    description: 'Impressão artística, tema botânico minimalista.',
    segment: 'home_decor',
    category: 'quadros',
    image_url: '',
    featured: true,
    active: true,
    created_at: '',
  },
  {
    id: '3',
    name: 'Vela Aromática Lavanda',
    description: 'Vela artesanal cera de soja, aroma lavanda.',
    segment: 'home_decor',
    category: 'velas',
    image_url: '',
    featured: false,
    active: true,
    created_at: '',
  },
  {
    id: '4',
    name: 'Bandeja Espelhada',
    description: 'Bandeja decorativa espelho e detalhes dourados.',
    segment: 'home_decor',
    category: 'objetos',
    image_url: '',
    featured: true,
    active: true,
    created_at: '',
  },
  {
    id: '5',
    name: 'Almofada Veludo Rose',
    description: 'Almofada 45x45cm em veludo rose gold.',
    segment: 'home_decor',
    category: 'almofadas',
    image_url: '',
    featured: false,
    active: true,
    created_at: '',
  },
  {
    id: '6',
    name: 'Difusor de Ambiente',
    description: 'Difusor 200ml com varetas, aroma floral.',
    segment: 'home_decor',
    category: 'objetos',
    image_url: '',
    featured: false,
    active: true,
    created_at: '',
  },
]

export default async function CatalogHome() {
  const products = isSupabaseConfigured()
    ? await getProductsBySegment('home_decor')
    : FALLBACK_HOME

  const displayProducts =
    products.length > 0 ? products : FALLBACK_HOME

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
          <p className="mt-3 font-display text-xl italic text-loja-muted sm:text-2xl">
            Peças que transformam ambientes.
          </p>
          <div className="mt-6 h-px w-[60px] bg-loja-rosegold" />
        </AnimatedSectionHeader>

        <div className="mt-12">
          <CatalogHomeClient products={displayProducts} />
        </div>
      </div>
    </section>
  )
}
