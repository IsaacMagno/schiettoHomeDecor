'use client'

import { useEffect, useRef } from 'react'
import type { CSSProperties } from 'react'

interface ScrollWordsProps {
  paragraphs: readonly string[]
  /** Classe de cada parágrafo */
  className?: string
}

/**
 * Texto que "acende" palavra a palavra conforme a pessoa rola: as palavras
 * começam apagadas e ganham cor quando o trecho passa pelo meio da tela.
 * Sem JavaScript o texto fica todo visível. Não há deslocamento, só opacidade.
 */
export default function ScrollWords({ paragraphs, className = '' }: ScrollWordsProps) {
  const ref = useRef<HTMLDivElement>(null)
  const total = paragraphs.reduce((sum, text) => sum + text.split(' ').length, 0)

  useEffect(() => {
    const element = ref.current
    if (!element) return
    let frame = 0

    const update = () => {
      frame = 0
      const rect = element.getBoundingClientRect()
      const viewport = window.innerHeight
      if (!viewport) return
      const raw = (viewport * 0.9 - rect.top) / (rect.height + viewport * 0.4)
      const progress = Math.min(Math.max(raw, 0), 1) * 1.15
      element.style.setProperty('--p', progress.toFixed(4))
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  let counter = 0

  return (
    <div ref={ref} className="grid gap-6">
      {paragraphs.map((text) => (
        <p key={text} className={className}>
          {text.split(' ').map((word, index) => {
            const style = { '--i': (counter++ / total).toFixed(4) } as CSSProperties
            return (
              <span key={`${word}-${index}`} className="sw" style={style}>
                {word}{' '}
              </span>
            )
          })}
        </p>
      ))}
    </div>
  )
}
