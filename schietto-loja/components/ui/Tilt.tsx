'use client'

import { useCallback, useRef } from 'react'
import type { PointerEvent, ReactNode } from 'react'
import { finePointer, motionAllowed } from '@/lib/motion'

interface TiltProps {
  children: ReactNode
  className?: string
  /** Inclinação máxima, em graus */
  max?: number
}

/**
 * Inclina o conteúdo de leve na direção do mouse e acende um brilho dourado
 * onde o ponteiro está. No toque e com "reduzir movimento" não faz nada.
 */
export default function Tilt({ children, className = '', max = 5 }: TiltProps) {
  const ref = useRef<HTMLDivElement>(null)
  const enabled = useRef<boolean | null>(null)

  const onMove = useCallback(
    (event: PointerEvent<HTMLDivElement>) => {
      const element = ref.current
      if (!element) return
      if (enabled.current === null) {
        enabled.current = finePointer() && motionAllowed()
      }
      if (!enabled.current) return

      const rect = element.getBoundingClientRect()
      const x = (event.clientX - rect.left) / rect.width
      const y = (event.clientY - rect.top) / rect.height
      element.classList.add('is-tilting')
      element.style.setProperty('--rx', `${((0.5 - y) * max * 2).toFixed(2)}deg`)
      element.style.setProperty('--ry', `${((x - 0.5) * max * 2).toFixed(2)}deg`)
      element.style.setProperty('--gx', `${(x * 100).toFixed(1)}%`)
      element.style.setProperty('--gy', `${(y * 100).toFixed(1)}%`)
    },
    [max]
  )

  const onLeave = useCallback(() => {
    const element = ref.current
    if (!element) return
    element.classList.remove('is-tilting')
    element.style.setProperty('--rx', '0deg')
    element.style.setProperty('--ry', '0deg')
  }, [])

  return (
    <div
      ref={ref}
      className={`tilt relative ${className}`}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
    >
      {children}
      <span className="tilt__glare" aria-hidden="true" />
    </div>
  )
}
