import { supabase } from './supabase'
import type { Product } from '@/types'

export async function getProductsBySegment(
  segment: 'home_decor' | 'semi_joia'
): Promise<Product[]> {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('segment', segment)
    .eq('active', true)
    .order('featured', { ascending: false })
    .order('created_at', { ascending: false })

  if (error) {
    console.error(`Erro ao buscar produtos (${segment}):`, error)
    return []
  }
  return data || []
}

export async function getFeaturedProducts(): Promise<Product[]> {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('featured', true)
    .eq('active', true)
    .limit(6)

  if (error) {
    console.error('Erro ao buscar destaques:', error)
    return []
  }
  return data || []
}
