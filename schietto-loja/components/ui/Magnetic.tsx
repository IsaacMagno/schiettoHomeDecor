'use client'

import { useCallback, useRef } from 'react'
import type { PointerEvent, ReactNode } from 'react'
import { finePointer, motionAllowed } from '@/lib/motion'

interface MagneticProps {
  children: ReactNode
  className?: string
  /** Quanto o botão anda na direção do mouse, em px */
  strength?: number
}

/** O botão "puxa" de leve para o mouse quando o ponteiro chega perto. */
export default function Magnetic({
  children,
  className = '',
  strength = 8,
}: MagneticProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const enabled = useRef<boolean | null>(null)

  const onMove = useCallback(
    (event: PointerEvent<HTMLSpanElement>) => {
      const element = ref.current
      if (!element) return
      if (enabled.current === null) {
        enabled.current = finePointer() && motionAllowed()
      }
      if (!enabled.current) return

      const rect = element.getBoundingClientRect()
      const x = (event.clientX - rect.left) / rect.width - 0.5
      const y = (event.clientY - rect.top) / rect.height - 0.5
      element.style.setProperty('--tx', `${(x * strength * 2).toFixed(1)}px`)
      element.style.setProperty('--ty', `${(y * strength * 2).toFixed(1)}px`)
    },
    [strength]
  )

  const onLeave = useCallback(() => {
    const element = ref.current
    if (!element) return
    element.style.setProperty('--tx', '0px')
    element.style.setProperty('--ty', '0px')
  }, [])

  return (
    <span
      ref={ref}
      className={`magnetic ${className}`}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
    >
      {children}
    </span>
  )
}
