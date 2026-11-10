'use client'

import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'

const STORAGE_KEY = 'schietto-cookie-consent'
const CLARITY_ID = 'yxq60pp9tt'

/** Disparado pelo link "Preferências de cookies" do rodapé para reabrir o aviso. */
export const OPEN_COOKIE_PREFERENCES_EVENT = 'schietto:cookie-preferences'

type Consent = 'granted' | 'denied'
type ClarityFn = ((...args: unknown[]) => void) & { q?: unknown[][] }

declare global {
  interface Window {
    clarity?: ClarityFn
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

/** Nome do evento do Clarity para os links que levam à conversão (ou null). */
function eventNameFor(href: string): string | null {
  if (href.startsWith('tel:')) return 'telefone_click'
  if (href.includes('wa.me/')) return 'whatsapp_click'
  if (href.includes('maps.google.com')) return 'maps_click'
  if (href.includes('instagram.com')) return 'instagram_click'
  if (href.includes('cafe.schietto.com.br')) return 'cafe_click'
  return null
}

export default function CookieConsent() {
  const [consent, setConsent] = useState<Consent | null | undefined>(undefined)
  const [reopened, setReopened] = useState(false)

  // Lê a escolha salva; se já aceitou antes, carrega o Clarity.
  useEffect(() => {
    const saved = readConsent()
    setConsent(saved)
    if (saved === 'granted') loadClarity()
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
      const name = eventNameFor(href)
      if (name) window.clarity?.('event', name)
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
    } else {
      // Se o Clarity já estava ativo nesta visita, pede para parar de coletar.
      try {
        window.clarity?.('consent', false)
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
      className="fixed inset-x-3 bottom-3 z-[80] rounded-2xl bg-loja-dark p-5 text-loja-offwhite shadow-2xl sm:inset-x-auto sm:bottom-24 sm:right-6 sm:max-w-sm"
    >
      <p className="font-body text-sm font-light leading-relaxed text-loja-champagne/90">
        Usamos o Microsoft Clarity para entender como o site é usado (cliques e
        navegação, sem identificar você) e melhorar a sua visita. Só ativamos
        com o seu aceite.{' '}
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
