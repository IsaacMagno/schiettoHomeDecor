'use client'

import { useEffect, useState } from 'react'
import { ChevronUp } from 'lucide-react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
      className={`fixed bottom-24 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-loja-rosegold text-loja-offwhite shadow-lg transition-all duration-300 hover:bg-loja-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-loja-rosegold focus-visible:outline-offset-2 max-[480px]:bottom-[calc(max(6rem,env(safe-area-inset-bottom)+4.5rem))] max-[480px]:right-[max(1.5rem,env(safe-area-inset-right))] ${
        visible
          ? 'translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <ChevronUp className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
    </button>
  )
}
