'use client'

import { useInView } from '@/hooks/useInView'
import type { ElementType } from 'react'

interface SplitTextProps {
  text: string
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
  className?: string
  /** Delay base em ms antes da primeira palavra */
  delay?: number
}

/**
 * Revela o texto palavra por palavra (efeito "split"). A animação é CSS
 * (keyframes `splitReveal`), então o texto aparece mesmo antes de o JavaScript
 * hidratar e respeita `prefers-reduced-motion`.
 */
export default function SplitText({
  text,
  as = 'span',
  className = '',
  delay = 0,
}: SplitTextProps) {
  const { ref, inView } = useInView<HTMLElement>(0.2)
  const Tag = as as ElementType
  const words = text.split(' ')

  return (
    <Tag ref={ref} className={className} aria-label={text}>
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="inline-block overflow-hidden pb-[0.1em] align-bottom"
          aria-hidden="true"
        >
          <span
            className="inline-block will-change-transform"
            style={
              inView
                ? {
                    animation: `splitReveal 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${
                      delay + index * 60
                    }ms both`,
                  }
                : { transform: 'translateY(110%)' }
            }
          >
            {word}
            {index < words.length - 1 ? ' ' : ''}
          </span>
        </span>
      ))}
    </Tag>
  )
}
