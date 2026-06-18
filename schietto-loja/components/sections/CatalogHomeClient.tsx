'use client'

import { useMemo, useState } from 'react'
import HomeDecorFilter, {
  type HomeDecorFilterCategory,
} from '@/components/ui/HomeDecorFilter'
import type { HomeDecorCategory, Product } from '@/types'

const CATEGORY_ICONS: Record<HomeDecorCategory, string> = {
  vasos: '🏺',
  quadros: '🖼️',
  velas: '🕯️',
  almofadas: '🛋️',
  objetos: '✨',
  outros: '✨',
}

const CATEGORY_LABELS: Record<HomeDecorCategory, string> = {
  vasos: 'Vasos',
  quadros: 'Quadros',
  velas: 'Velas',
  almofadas: 'Almofadas',
  objetos: 'Objetos',
  outros: 'Outros',
}

interface CatalogHomeClientProps {
  products: Product[]
}

function ProductCard({ product }: { product: Product }) {
  const category = product.category as HomeDecorCategory
  const hasImage = Boolean(product.image_url)

  return (
    <article className="group overflow-hidden rounded-lg bg-loja-offwhite transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(183,110,121,0.15)]">
      <div className="relative aspect-[3/4] overflow-hidden">
        {hasImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={product.image_url}
            alt={`${product.name} — home decor`}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-loja-champagne to-loja-champagne/60">
            <span className="text-4xl" aria-hidden="true">
              {CATEGORY_ICONS[category] ?? '✨'}
            </span>
            <span className="mt-3 font-body text-xs uppercase tracking-widest text-loja-rosegold">
              {CATEGORY_LABELS[category] ?? category}
            </span>
          </div>
        )}

        {product.featured && (
          <span className="absolute left-3 top-3 rounded-sm bg-loja-rosegold px-2 py-0.5 font-body text-xs font-medium text-white">
            Destaque
          </span>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-display text-lg font-semibold text-loja-dark">
          {product.name}
        </h3>
        <p className="mt-2 line-clamp-2 font-body text-sm text-loja-muted">
          {product.description}
        </p>
      </div>
    </article>
  )
}

export default function CatalogHomeClient({
  products,
}: CatalogHomeClientProps) {
  const [activeCategory, setActiveCategory] =
    useState<HomeDecorFilterCategory>('todos')

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'todos') return products
    return products.filter((p) => p.category === activeCategory)
  }, [products, activeCategory])

  return (
    <>
      <HomeDecorFilter active={activeCategory} onChange={setActiveCategory} />

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
