'use client'

import { useInView } from '@/hooks/useInView'
import type { ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  className?: string
  /** Delay em milissegundos antes da animação iniciar */
  delay?: number
  threshold?: number
}

/**
 * Wrapper reutilizável: aplica fade-in-up quando o elemento entra na viewport.
 */
export default function Reveal({
  children,
  className = '',
  delay = 0,
  threshold = 0.15,
}: RevealProps) {
  const { ref, inView } = useInView(threshold)

  return (
    <div
      ref={ref}
      className={`${inView ? 'animate-fade-in-up' : 'opacity-0'} ${className}`}
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}
