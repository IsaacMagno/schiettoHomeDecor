export type ProductSegment = 'home_decor' | 'semi_joia'

export type HomeDecorCategory =
  | 'vasos'
  | 'quadros'
  | 'velas'
  | 'almofadas'
  | 'objetos'
  | 'outros'

export type JewelryCategory =
  | 'aneis'
  | 'colares'
  | 'brincos'
  | 'pulseiras'
  | 'conjuntos'
  | 'outros'

export interface Product {
  id: string
  name: string
  description: string
  segment: ProductSegment
  category: HomeDecorCategory | JewelryCategory
  image_url: string
  price?: number
  featured: boolean
  active: boolean
  created_at: string
}
