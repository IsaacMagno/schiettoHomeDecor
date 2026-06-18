'use client'

import { useMemo, useState } from 'react'
import JewelryFilter, {
  type JewelryFilterCategory,
} from '@/components/ui/JewelryFilter'
import type { JewelryCategory, Product } from '@/types'

const CATEGORY_ICONS: Record<JewelryCategory, string> = {
  aneis: '💍',
  colares: '📿',
  brincos: '👂',
  pulseiras: '⌚',
  conjuntos: '✨',
  outros: '✨',
}

const CATEGORY_LABELS: Record<JewelryCategory, string> = {
  aneis: 'Anéis',
  colares: 'Colares',
  brincos: 'Brincos',
  pulseiras: 'Pulseiras',
  conjuntos: 'Conjuntos',
  outros: 'Outros',
}

interface CatalogJewelryClientProps {
  products: Product[]
}

function ProductCard({ product }: { product: Product }) {
  const category = product.category as JewelryCategory
  const hasImage = Boolean(product.image_url)

  return (
    <article className="group overflow-hidden rounded-lg bg-loja-charcoal transition-all duration-300">
      <div className="relative aspect-square overflow-hidden border border-transparent transition-colors duration-300 group-hover:border-loja-rosegold">
        {hasImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={product.image_url}
            alt={`${product.name} — semi joia`}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-loja-charcoal to-loja-dark">
            <span className="text-4xl" aria-hidden="true">
              {CATEGORY_ICONS[category] ?? '✨'}
            </span>
            <span className="mt-3 font-body text-xs uppercase tracking-widest text-loja-gold">
              {CATEGORY_LABELS[category] ?? category}
            </span>
          </div>
        )}

        {product.featured && (
          <span className="absolute left-3 top-3 rounded-sm bg-loja-gold px-2 py-0.5 font-body text-xs font-medium text-loja-dark">
            Destaque
          </span>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-display text-lg font-semibold text-loja-offwhite transition-colors duration-300 group-hover:text-loja-champagne">
          {product.name}
        </h3>
        <p className="mt-2 line-clamp-2 font-body text-sm text-loja-muted">
          {product.description}
        </p>
      </div>
    </article>
  )
}

export default function CatalogJewelryClient({
  products,
}: CatalogJewelryClientProps) {
  const [activeCategory, setActiveCategory] =
    useState<JewelryFilterCategory>('todos')

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'todos') return products
    return products.filter((p) => p.category === activeCategory)
  }, [products, activeCategory])

  return (
    <>
      <JewelryFilter active={activeCategory} onChange={setActiveCategory} />

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p className="mt-12 text-center font-body text-sm text-loja-muted">
          Nenhum produto encontrado nesta categoria.
        </p>
      )}
    </>
  )
}
