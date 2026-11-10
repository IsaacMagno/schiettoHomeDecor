import type { ShowcaseItem } from '@/types/showcase'

/** Reservada exclusivamente para a seção "Peças que se encontram" — não reutilizar. */
export const COMPOSICAO_IMAGE = '/images/vertical/IMG_9166.webp'

const v = (name: string) => `/images/vertical/${name}.webp`
const h = (name: string) => `/images/horizontal/${name}.webp`

/**
 * Vídeo opcional do Hero. Para ativar: coloque o arquivo em public/video/hero.mp4
 * e troque `null` por '/video/hero.mp4'. Sem vídeo, o Hero usa o carrossel de fotos.
 */
export const HERO_VIDEO_SRC: string | null = null

/**
 * Hero: cada slide tem uma foto horizontal (desktop) e uma vertical (celular).
 * O navegador escolhe a certa pelo tamanho da tela (<picture>), então a imagem
 * principal já é a correta no primeiro carregamento.
 */
export const HERO_SLIDES = [
  {
    desktop: h('IMG_9106'),
    mobile: v('IMG_9170'),
    alt: 'Showroom da Schiètto Home Decor em Pedreira, com mesas postas, orquídeas e peças de decoração',
  },
  {
    desktop: h('IMG_9163'),
    mobile: v('IMG_9136'),
    alt: 'Mesa posta com louças brancas, detalhes dourados e vasos na Schiètto',
  },
  {
    desktop: h('IMG_9167'),
    mobile: v('IMG_9157'),
    alt: 'Mesa elegante com orquídeas, cristais e porcelanas na Schiètto',
  },
] as const

export const EXPERIENCE_IMAGES = {
  homeDecor: v('IMG_9160'),
  semijoias: v('IMG_9124'),
  composicoes: v('IMG_9164'),
} as const

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
