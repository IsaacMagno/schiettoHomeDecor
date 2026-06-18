'use client'

import type { Product, ProductSegment } from '@/types'

const HOME_DECOR_ICONS: Record<string, string> = {
  vasos: '🏺',
  quadros: '🖼️',
  velas: '🕯️',
  almofadas: '🛋️',
  objetos: '✨',
  outros: '✨',
}

const JEWELRY_ICONS: Record<string, string> = {
  aneis: '💍',
  colares: '📿',
  brincos: '👂',
  pulseiras: '⌚',
  conjuntos: '✨',
  outros: '✨',
}

function getCollectionHref(segment: ProductSegment): string {
  return segment === 'home_decor' ? '#home-decor' : '#semi-joias'
}

interface HighlightCardProps {
  product: Product
  featured?: boolean
}

function HighlightCard({ product, featured = false }: HighlightCardProps) {
  const hasImage = Boolean(product.image_url)
  const isHomeDecor = product.segment === 'home_decor'
  const href = getCollectionHref(product.segment)

  return (
    <a
      href={href}
      className={`group relative block overflow-hidden rounded-lg bg-loja-offwhite shadow-sm transition-shadow duration-300 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-loja-rosegold focus-visible:outline-offset-2 ${
        featured ? 'md:col-span-1 lg:col-span-2 lg:row-span-2' : ''
      }`}
    >
      <div
        className={`relative overflow-hidden ${
          featured ? 'aspect-[4/5] lg:aspect-auto lg:h-full lg:min-h-[420px]' : 'aspect-square'
        }`}
      >
        {hasImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={product.image_url}
            alt={`${product.name} — produto em destaque`}
            className="h-full w-full object-cover"
          />
        ) : (
          <div
            className={`flex h-full w-full flex-col items-center justify-center ${
              isHomeDecor
                ? 'bg-gradient-to-br from-loja-champagne to-loja-blush'
                : 'bg-gradient-to-br from-loja-rosegold/40 to-loja-blush'
            }`}
          >
            <span className="text-5xl" aria-hidden="true">
              {isHomeDecor
                ? (HOME_DECOR_ICONS[product.category] ?? '✨')
                : (JEWELRY_ICONS[product.category] ?? '✨')}
            </span>
          </div>
        )}

        <span
          className={`absolute right-3 top-3 rounded-sm px-2 py-0.5 font-body text-xs font-medium ${
            isHomeDecor
              ? 'bg-loja-champagne text-loja-dark'
              : 'bg-loja-rosegold text-loja-offwhite'
          }`}
        >
          {isHomeDecor ? 'Decor' : 'Jóia'}
        </span>

        <div className="absolute inset-0 flex items-center justify-center bg-loja-rosegold/0 transition-colors duration-300 group-hover:bg-loja-rosegold/80">
          <span className="translate-y-2 font-body text-sm font-medium text-loja-offwhite opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            Ver Coleção →
          </span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-display text-lg font-semibold text-loja-dark">
          {product.name}
        </h3>
        <p className="mt-1 line-clamp-2 font-body text-sm text-loja-muted">
          {product.description}
        </p>
      </div>
    </a>
  )
}

interface HighlightsClientProps {
  products: Product[]
}

export default function HighlightsClient({ products }: HighlightsClientProps) {
  const useAsymmetricLayout = products.length === 6

  return (
    <>
      <div
        className={
          useAsymmetricLayout
            ? 'grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'
            : 'grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'
        }
      >
        {products.map((product, index) => (
          <HighlightCard
            key={product.id}
            product={product}
            featured={useAsymmetricLayout && index === 0}
          />
        ))}
      </div>

      <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
        <a
          href="#home-decor"
          className="group inline-flex items-center gap-2 font-body text-sm text-loja-dark transition-colors hover:text-loja-rosegold"
        >
          Ver Home Decor
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>
        <span className="hidden text-loja-muted sm:inline" aria-hidden="true">
          |
        </span>
        <a
          href="#semi-joias"
          className="group inline-flex items-center gap-2 font-body text-sm text-loja-dark transition-colors hover:text-loja-rosegold"
        >
          Ver Semi Jóias
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>
    </>
  )
}
