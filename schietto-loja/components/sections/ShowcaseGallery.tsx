'use client'

import ProductImage from '@/components/ui/ProductImage'
import Reveal from '@/components/ui/Reveal'
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
          <Reveal
            key={item.id}
            delay={(index % 4) * 90}
            className="mb-3 break-inside-avoid sm:mb-4"
          >
          <figure className="gallery-item overflow-hidden rounded-lg bg-loja-offwhite shadow-sm transition-shadow duration-300 hover:shadow-md">
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
          </Reveal>
        ))}
      </div>

      {lightbox}
    </>
  )
}
