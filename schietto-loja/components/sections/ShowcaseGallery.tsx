'use client'

import ProductImage from '@/components/ui/ProductImage'
import type { ShowcaseItem } from '@/types/showcase'

interface ShowcaseGalleryProps {
  items: ShowcaseItem[]
}

export default function ShowcaseGallery({ items }: ShowcaseGalleryProps) {
  return (
    <div className="columns-2 gap-3 sm:columns-3 sm:gap-4 lg:columns-4 lg:gap-5">
      {items.map((item, index) => (
        <figure
          key={item.id}
          className="mb-3 break-inside-avoid overflow-hidden rounded-lg bg-loja-offwhite shadow-sm transition-shadow duration-300 hover:shadow-md sm:mb-4"
        >
          <div
            className={`relative w-full overflow-hidden ${
              index % 3 === 0 ? 'aspect-[3/4]' : 'aspect-square'
            }`}
          >
            <ProductImage
              src={item.image_url}
              alt={`Peça da loja Schiètto ${index + 1}`}
            />
          </div>
        </figure>
      ))}
    </div>
  )
}
