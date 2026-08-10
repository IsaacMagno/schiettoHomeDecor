'use client'

import { MessageCircle } from 'lucide-react'
import { WHATSAPP_URL } from '@/lib/contact'

export default function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar conosco pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-loja-rosegold focus-visible:outline-offset-2 max-[480px]:bottom-[max(1.5rem,env(safe-area-inset-bottom))] max-[480px]:right-[max(1.5rem,env(safe-area-inset-right))]"
    >
      <MessageCircle className="h-7 w-7" strokeWidth={1.75} aria-hidden="true" />
    </a>
  )
}
