'use client'

import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'

const STORAGE_KEY = 'schietto-cookie-consent'
const CLARITY_ID = 'yxq60pp9tt'

/**
 * ID do Pixel da Meta (Facebook/Instagram). Configure NEXT_PUBLIC_META_PIXEL_ID
 * na Vercel (Settings → Environment Variables) e faça um novo deploy. Sem ID, o
 * Pixel simplesmente não existe no site.
 */
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID

/** Disparado pelo link "Preferências de cookies" do rodapé para reabrir o aviso. */
export const OPEN_COOKIE_PREFERENCES_EVENT = 'schietto:cookie-preferences'

type Consent = 'granted' | 'denied'
type ClarityFn = ((...args: unknown[]) => void) & { q?: unknown[][] }
type FbqFn = ((...args: unknown[]) => void) & {
  queue?: unknown[]
  push?: unknown
  loaded?: boolean
  version?: string
  callMethod?: (...args: unknown[]) => void
}

declare global {
  interface Window {
    clarity?: ClarityFn
    fbq?: FbqFn
    _fbq?: FbqFn
  }
}

function readConsent(): Consent | null {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY)
    return value === 'granted' || value === 'denied' ? value : null
  } catch {
    return null
  }
}

function saveConsent(value: Consent) {
  try {
    window.localStorage.setItem(STORAGE_KEY, value)
  } catch {
    // Navegação privada / armazenamento bloqueado: a escolha vale só nesta visita.
  }
}

/** Carrega o Microsoft Clarity. Só é chamado depois do aceite. */
function loadClarity() {
  if (document.getElementById('microsoft-clarity')) return
  if (!window.clarity) {
    const stub: ClarityFn = (...args) => {
      ;(stub.q = stub.q || []).push(args)
    }
    window.clarity = stub
  }
  const script = document.createElement('script')
  script.id = 'microsoft-clarity'
  script.async = true
  script.src = `https://www.clarity.ms/tag/${CLARITY_ID}`
  document.head.appendChild(script)
}

/** Carrega o Pixel da Meta (só se houver ID e depois do aceite). */
function loadMetaPixel(pixelId: string) {
  if (document.getElementById('meta-pixel')) return
  if (!window.fbq) {
    const fbq: FbqFn = (...args) => {
      if (fbq.callMethod) fbq.callMethod(...args)
      else (fbq.queue as unknown[]).push(args)
    }
    fbq.push = fbq
    fbq.loaded = true
    fbq.version = '2.0'
    fbq.queue = []
    window.fbq = fbq
    window._fbq = fbq
  }
  const script = document.createElement('script')
  script.id = 'meta-pixel'
  script.async = true
  script.src = 'https://connect.facebook.net/en_US/fbevents.js'
  document.head.appendChild(script)
  window.fbq('init', pixelId)
  window.fbq('track', 'PageView')
}

type Conversion = { clarity: string; meta?: string }

/** Evento (Clarity e Meta) para os links que levam à conversão, ou null. */
function conversionFor(href: string): Conversion | null {
  if (href.startsWith('tel:')) return { clarity: 'telefone_click', meta: 'Contact' }
  if (href.includes('wa.me/')) return { clarity: 'whatsapp_click', meta: 'Contact' }
  if (href.includes('maps.google.com')) return { clarity: 'maps_click', meta: 'FindLocation' }
  if (href.includes('instagram.com')) return { clarity: 'instagram_click' }
  if (href.includes('cafe.schietto.com.br')) return { clarity: 'cafe_click' }
  return null
}

export default function CookieConsent() {
  const [consent, setConsent] = useState<Consent | null | undefined>(undefined)
  const [reopened, setReopened] = useState(false)

  // Lê a escolha salva; se já aceitou antes, carrega as ferramentas.
  useEffect(() => {
    const saved = readConsent()
    setConsent(saved)
    if (saved === 'granted') {
      loadClarity()
      if (META_PIXEL_ID) loadMetaPixel(META_PIXEL_ID)
    }
  }, [])

  useEffect(() => {
    const reopen = () => setReopened(true)
    window.addEventListener(OPEN_COOKIE_PREFERENCES_EVENT, reopen)
    return () =>
      window.removeEventListener(OPEN_COOKIE_PREFERENCES_EVENT, reopen)
  }, [])

  // Eventos de conversão (WhatsApp, telefone, mapa...) — só com consentimento.
  useEffect(() => {
    if (consent !== 'granted') return
    const onClick = (event: MouseEvent) => {
      const target = event.target as Element | null
      const href = target?.closest?.('a')?.getAttribute('href')
      if (!href) return
      const conversion = conversionFor(href)
      if (!conversion) return
      window.clarity?.('event', conversion.clarity)
      if (conversion.meta) window.fbq?.('track', conversion.meta)
    }
    document.addEventListener('click', onClick, true)
    return () => document.removeEventListener('click', onClick, true)
  }, [consent])

  const decide = useCallback((value: Consent) => {
    saveConsent(value)
    setConsent(value)
    setReopened(false)
    if (value === 'granted') {
      loadClarity()
      if (META_PIXEL_ID) loadMetaPixel(META_PIXEL_ID)
    } else {
      // Se as ferramentas já estavam ativas nesta visita, pede para pararem.
      try {
        window.clarity?.('consent', false)
        window.fbq?.('consent', 'revoke')
      } catch {
        // sem efeito: a escolha já está salva para as próximas visitas
      }
    }
  }, [])

  const visible = consent === null || (consent !== undefined && reopened)
  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      className="fixed inset-x-3 top-[84px] z-[80] rounded-2xl bg-loja-dark p-4 text-loja-offwhite shadow-2xl sm:inset-x-auto sm:bottom-24 sm:right-6 sm:top-auto sm:max-w-sm sm:p-5"
    >
      <p className="font-body text-sm font-light leading-relaxed text-loja-champagne/90">
        {META_PIXEL_ID
          ? 'Usamos o Microsoft Clarity e o Pixel da Meta para entender como o site é usado e medir se nossos anúncios trazem contatos, sem identificar você pelo nome. '
          : 'Usamos o Microsoft Clarity para entender como o site é usado (cliques e navegação, sem identificar você) e melhorar a sua visita. '}
        Só ativamos com o seu aceite.{' '}
        <Link
          href="/privacidade"
          className="text-loja-offwhite underline underline-offset-2 hover:text-loja-rosegold"
        >
          Saiba mais
        </Link>
      </p>
      <div className="mt-4 flex gap-3">
        <button
          type="button"
          onClick={() => decide('denied')}
          className="flex-1 rounded-full border border-loja-offwhite/40 px-5 py-2.5 font-body text-sm font-medium text-loja-offwhite transition-colors duration-300 hover:bg-loja-offwhite/10"
        >
          Recusar
        </button>
        <button
          type="button"
          onClick={() => decide('granted')}
          className="flex-1 rounded-full bg-loja-rosegold px-5 py-2.5 font-body text-sm font-semibold text-loja-offwhite transition-colors duration-300 hover:bg-loja-gold"
        >
          Aceitar
        </button>
      </div>
    </div>
  )
}
