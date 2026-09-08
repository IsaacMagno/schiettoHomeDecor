import type { ShowcaseItem } from '@/types/showcase'

/** Reservada exclusivamente para a seção "Peças que se encontram" — não reutilizar. */
export const COMPOSICAO_IMAGE = '/images/vertical/IMG_9166.webp'

const v = (name: string) => `/images/vertical/${name}.webp`
const h = (name: string) => `/images/horizontal/${name}.webp`

/** Hero desktop: 3 atmosferas landscape da loja */
export const HERO_DESKTOP_SLIDES = [
  { src: h('IMG_9106'), alt: 'Showroom da Schiètto Home Decor em Pedreira' },
  {
    src: h('IMG_9163'),
    alt: 'Mesa posta com louças brancas, ouro e verde na Schiètto',
  },
  {
    src: h('IMG_9167'),
    alt: 'Ambiente Schiètto Caffé com mesa posta e curadoria',
  },
] as const

/**
 * Verticais usadas uma única vez (exceto COMPOSICAO_IMAGE, que é exclusiva).
 * Ordem: hero mobile → experiências → valores → galeria.
 */
export const HERO_MOBILE_SLIDES = [
  {
    src: v('IMG_9170'),
    alt: 'Mesa com orquídeas e louças na Schiètto Home Decor',
  },
  {
    src: v('IMG_9136'),
    alt: 'Vasos dourados e xícaras em composição na loja',
  },
  {
    src: v('IMG_9157'),
    alt: 'Mesa elegante com orquídeas e cristalaria',
  },
] as const

export const EXPERIENCE_IMAGES = {
  homeDecor: v('IMG_9160'),
  semijoias: v('IMG_9124'),
  composicoes: v('IMG_9164'),
} as const

export const VALUE_IMAGES = [
  v('IMG_9120'),
  v('IMG_9142'),
  v('IMG_9155'),
  v('IMG_9171'),
  v('IMG_9151'),
] as const

export const HIGHLIGHT_IMAGES = [
  v('IMG_9105'),
  v('IMG_9118'),
  v('IMG_9119'),
  v('IMG_9122'),
  v('IMG_9128'),
  v('IMG_9130'),
  v('IMG_9133'),
  v('IMG_9138'),
  v('IMG_9140'),
  v('IMG_9152'),
  v('IMG_9156'),
  v('IMG_9161'),
  v('IMG_9169'),
  v('IMG_9143'),
  v('IMG_9162'),
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
