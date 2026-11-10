'use client'

import { useEffect } from 'react'

const STORAGE_KEY = 'schietto-origem'

/** Mantém só letras, números e sinais simples; evita lixo/injeção na mensagem. */
const clean = (value: string | null) =>
  (value ?? '').replace(/[^a-zA-Z0-9À-ÿ _.\-/]/g, '').trim().slice(0, 50)

/**
 * Quando a pessoa chega por um anúncio (link com ?utm_source=...&utm_campaign=...),
 * acrescenta a origem à mensagem de WhatsApp: "(origem: meta / campanha)". Assim
 * a loja vê no próprio WhatsApp de qual campanha o contato veio. Não usa cookies
 * e não envia nada a terceiros, então funciona mesmo sem aceite de cookies.
 */
export default function AdAttribution() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const fromUrl = [clean(params.get('utm_source')), clean(params.get('utm_campaign'))]
      .filter(Boolean)
      .join(' / ')

    let origin = fromUrl
    try {
      if (fromUrl) window.sessionStorage.setItem(STORAGE_KEY, fromUrl)
      else origin = window.sessionStorage.getItem(STORAGE_KEY) ?? ''
    } catch {
      // armazenamento bloqueado: vale só o que veio na URL desta página
    }
    if (!origin) return

    document
      .querySelectorAll<HTMLAnchorElement>('a[href^="https://wa.me/"]')
      .forEach((link) => {
        const url = new URL(link.href)
        const text = url.searchParams.get('text') ?? ''
        if (text.includes('(origem:')) return
        url.searchParams.set('text', `${text} (origem: ${origin})`)
        link.href = url.toString()
      })
  }, [])

  return null
}
