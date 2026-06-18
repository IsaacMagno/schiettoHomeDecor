'use client'

import { useInView } from '@/hooks/useInView'
import type { ReactNode } from 'react'

interface AnimatedSectionHeaderProps {
  children: ReactNode
  className?: string
}

export default function AnimatedSectionHeader({
  children,
  className = '',
}: AnimatedSectionHeaderProps) {
  const { ref, inView } = useInView()

  return (
    <header
      ref={ref}
      className={`${inView ? 'animate-fade-in-up' : 'opacity-0'} ${className}`}
    >
      {children}
    </header>
  )
}
