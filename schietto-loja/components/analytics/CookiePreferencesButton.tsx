'use client'

import { OPEN_COOKIE_PREFERENCES_EVENT } from '@/components/analytics/CookieConsent'

/** Reabre o aviso de cookies para a pessoa mudar a escolha. */
export default function CookiePreferencesButton({
  className = 'transition-colors duration-300 hover:text-loja-offwhite focus-visible:outline focus-visible:outline-2 focus-visible:outline-loja-rosegold focus-visible:outline-offset-2',
}: {
  className?: string
}) {
  return (
    <button
      type="button"
      className={className}
      onClick={() =>
        window.dispatchEvent(new Event(OPEN_COOKIE_PREFERENCES_EVENT))
      }
    >
      Preferências de cookies
    </button>
  )
}
