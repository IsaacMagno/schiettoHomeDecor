import ProductImage from '@/components/ui/ProductImage'
import type { ShowcaseItem } from '@/types/showcase'

interface ShowcaseGridProps {
  items: ShowcaseItem[]
  altPrefix: string
  variant?: 'light' | 'dark'
  aspect?: 'portrait' | 'square'
}

export default function ShowcaseGrid({
  items,
  altPrefix,
  variant = 'light',
  aspect = 'portrait',
}: ShowcaseGridProps) {
  const aspectClass = aspect === 'square' ? 'aspect-square' : 'aspect-[3/4]'

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
      {items.map((item, index) => (
        <figure
          key={item.id}
          className={`group overflow-hidden rounded-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(183,110,121,0.12)] ${
            variant === 'dark'
              ? 'bg-loja-charcoal ring-1 ring-loja-rosegold/10 hover:ring-loja-rosegold/40'
              : 'bg-loja-offwhite'
          }`}
        >
          <div className={`relative overflow-hidden ${aspectClass}`}>
            <ProductImage
              src={item.image_url}
              alt={`${altPrefix} ${index + 1}`}
            />
            <div
              className={`absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
                variant === 'dark' ? 'bg-loja-dark/20' : 'bg-loja-rosegold/10'
              }`}
              aria-hidden="true"
            />
          </div>
        </figure>
      ))}
    </div>
  )
}
