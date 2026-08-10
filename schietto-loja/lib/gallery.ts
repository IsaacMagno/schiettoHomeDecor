import type { ShowcaseItem } from '@/types/showcase'

/** Reservada exclusivamente para a seção "Peças que se encontram" — não reutilizar. */
export const COMPOSICAO_IMAGE = '/images/vertical/IMG_6895_composicao.webp'

const v = (name: string) => `/images/vertical/${name}.webp`
const h = (name: string) => `/images/horizontal/${name}.webp`

/** Hero desktop: por enquanto só IMG_6881 (slider mantido para futuras fotos) */
export const HERO_DESKTOP_SLIDES = [
  { src: h('IMG_6881'), alt: 'Detalhes e peças no casarão da Schiètto' },
] as const

/**
 * Verticais usadas uma única vez (exceto COMPOSICAO_IMAGE).
 * Ordem: hero mobile → experiências → valores → galeria.
 */
export const HERO_MOBILE_SLIDES = [
  { src: v('IMG_6853'), alt: 'Ambiente da Schiètto Home Decor em Pedreira' },
  { src: v('IMG_6854'), alt: 'Peças de decoração em exposição na Schiètto' },
  { src: v('IMG_6855'), alt: 'Detalhes de curadoria da loja Schiètto' },
] as const

export const EXPERIENCE_IMAGES = {
  homeDecor: v('IMG_6878'),
  /** Temporariamente sem imagem — IMG_6857 foi para a galeria */
  semijoias: null as string | null,
  composicoes: v('IMG_6883'),
} as const

export const VALUE_IMAGES = [
  v('IMG_6859'),
  v('IMG_6860'),
  v('IMG_6861'),
  v('IMG_6865'),
  v('IMG_6866'),
] as const

export const HIGHLIGHT_IMAGES = [
  v('IMG_6869'),
  v('IMG_6870'),
  v('IMG_6874'),
  v('IMG_6876'),
  v('IMG_6877'),
  v('IMG_6856'), // antes em Home Decor (trocou com IMG_6878)
  v('IMG_6882'),
  v('IMG_6858'), // antes em Composições (trocou com IMG_6883)
  v('IMG_6857'), // antes em Semijoias (card sem foto por enquanto)
  v('IMG_6884'),
  v('IMG_6885'),
  v('IMG_6886'),
  v('IMG_6887'),
  v('IMG_6888'),
  v('IMG_6890'),
  v('IMG_6894'),
  v('IMG_6896'),
  v('IMG_6897'),
] as const

export function toShowcaseItems(
  images: readonly string[],
  prefix: string
): ShowcaseItem[] {
  return images.map((image_url, index) => ({
    id: `${prefix}-${index + 1}`,
    image_url,
  }))
}

export const HIGHLIGHT_SHOWCASE = toShowcaseItems(HIGHLIGHT_IMAGES, 'highlight')

/** Compatibilidade com catálogos desativados (fora do page.tsx) */
export const HOME_SHOWCASE = toShowcaseItems(
  HIGHLIGHT_IMAGES.slice(0, 8),
  'home'
)
export const JEWELRY_SHOWCASE = toShowcaseItems(
  HIGHLIGHT_IMAGES.slice(8),
  'jewelry'
)
