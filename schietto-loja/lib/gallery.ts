import type { ShowcaseItem } from '@/types/showcase'

export const ALL_IMAGES = Array.from({ length: 45 }, (_, i) =>
  `/images/IMG_${6853 + i}.webp`
)

export const HOME_IMAGES = ALL_IMAGES.slice(0, 22)
export const JEWELRY_IMAGES = ALL_IMAGES.slice(22)

export const HIGHLIGHT_IMAGES = [
  ALL_IMAGES[0],
  ALL_IMAGES[5],
  ALL_IMAGES[10],
  ALL_IMAGES[22],
  ALL_IMAGES[27],
  ALL_IMAGES[32],
  ALL_IMAGES[15],
  ALL_IMAGES[38],
  ALL_IMAGES[8],
  ALL_IMAGES[41],
  ALL_IMAGES[19],
  ALL_IMAGES[44],
]

export const HERO_IMAGES = {
  back: ALL_IMAGES[0],
  middle: ALL_IMAGES[10],
  front: ALL_IMAGES[22],
} as const

export function toShowcaseItems(
  images: string[],
  prefix: string
): ShowcaseItem[] {
  return images.map((image_url, index) => ({
    id: `${prefix}-${index + 1}`,
    image_url,
  }))
}

export const HOME_SHOWCASE = toShowcaseItems(HOME_IMAGES, 'home')
export const JEWELRY_SHOWCASE = toShowcaseItems(JEWELRY_IMAGES, 'jewelry')
export const HIGHLIGHT_SHOWCASE = toShowcaseItems(HIGHLIGHT_IMAGES, 'highlight')
