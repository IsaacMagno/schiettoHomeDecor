'use client'

import ProductImage from '@/components/ui/ProductImage'
import { useImageLightbox } from '@/components/ui/ImageLightbox'
import type { ShowcaseItem } from '@/types/showcase'

interface ShowcaseGalleryProps {
  items: ShowcaseItem[]
}

export default function ShowcaseGallery({ items }: ShowcaseGalleryProps) {
  const lightboxImages = items.map((item, index) => ({
    src: item.image_url,
    alt: `Peça da loja Schiètto ${index + 1}`,
  }))

  const { open, lightbox } = useImageLightbox(lightboxImages)

  return (
    <>
      <div className="columns-2 gap-3 sm:columns-3 sm:gap-4 lg:columns-4 lg:gap-5">
        {items.map((item, index) => (
          <figure
            key={item.id}
            className="mb-3 break-inside-avoid overflow-hidden rounded-lg bg-loja-offwhite shadow-sm transition-shadow duration-300 hover:shadow-md sm:mb-4"
          >
            <button
              type="button"
              onClick={() => open(index)}
              className={`relative block w-full cursor-zoom-in overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-loja-rosegold focus-visible:outline-offset-2 ${
                index % 3 === 0 ? 'aspect-[3/4]' : 'aspect-square'
              }`}
              aria-label={`Ampliar imagem ${index + 1} da galeria`}
            >
              <ProductImage
                src={item.image_url}
                alt={`Peça da loja Schiètto ${index + 1}`}
              />
            </button>
          </figure>
        ))}
      </div>

      {lightbox}
    </>
  )
}
