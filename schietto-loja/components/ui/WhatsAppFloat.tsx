'use client'

import { useEffect, useState } from 'react'
import { MessageCircle } from 'lucide-react'
import { WHATSAPP_URL } from '@/lib/contact'

/**
 * Celular: barra fixa na base com o texto "Chamar no WhatsApp" (o WhatsApp é a
 * conversão principal do site). Ela aparece depois que a pessoa rola além do
 * primeiro botão do topo, para não duplicar. Computador: botão redondo no canto.
 */
export default function WhatsAppFloat() {
  const [pastHero, setPastHero] = useState(false)

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > window.innerHeight * 0.6)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Celular */}
      <div
        className={`fixed inset-x-0 bottom-0 z-50 border-t border-loja-dark/10 bg-loja-offwhite/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 shadow-[0_-8px_24px_rgba(28,28,30,0.08)] backdrop-blur-md transition-transform duration-300 sm:hidden ${
          pastHero ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={pastHero ? 0 : -1}
          className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#25D366] font-body text-base font-semibold text-white transition-colors duration-300 hover:bg-[#1fb857] focus-visible:outline focus-visible:outline-2 focus-visible:outline-loja-rosegold focus-visible:outline-offset-2"
        >
          <MessageCircle className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
          Chamar no WhatsApp
        </a>
      </div>

      {/* Computador */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar conosco pelo WhatsApp"
        className="fixed bottom-6 right-6 z-50 hidden h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-loja-rosegold focus-visible:outline-offset-2 sm:flex"
      >
        <MessageCircle className="h-7 w-7" strokeWidth={1.75} aria-hidden="true" />
      </a>
    </>
  )
}
