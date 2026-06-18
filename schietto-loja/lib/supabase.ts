import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? ''
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ''

export function isSupabaseConfigured(): boolean {
  return Boolean(
    supabaseUrl &&
      supabaseKey &&
      !supabaseUrl.includes('your_supabase_url_here') &&
      !supabaseKey.includes('your_supabase_anon_key_here') &&
      supabaseUrl.startsWith('http')
  )
}

export const supabase = createClient(
  isSupabaseConfigured()
    ? supabaseUrl
    : 'https://placeholder.supabase.co',
  isSupabaseConfigured() ? supabaseKey : 'placeholder-anon-key'
)
