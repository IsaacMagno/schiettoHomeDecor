'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

export interface LightboxImage {
  src: string
  alt: string
}

interface ImageLightboxProps {
  images: LightboxImage[]
  initialIndex: number
  onClose: () => void
}

export default function ImageLightbox({
  images,
  initialIndex,
  onClose,
}: ImageLightboxProps) {
  const [index, setIndex] = useState(initialIndex)
  const [isLoading, setIsLoading] = useState(true)
  const current = images[index]

  const goPrev = useCallback(() => {
    setIndex((i) => Math.max(0, i - 1))
  }, [])

  const goNext = useCallback(() => {
    setIndex((i) => Math.min(images.length - 1, i + 1))
  }, [images.length])

  useEffect(() => {
    setIndex(initialIndex)
  }, [initialIndex])

  useEffect(() => {
    setIsLoading(true)
  }, [index, current?.src])

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft') goPrev()
      if (event.key === 'ArrowRight') goNext()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [onClose, goPrev, goNext])

  if (!current) return null

  const hasPrev = index > 0
  const hasNext = index < images.length - 1

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-loja-dark/95 p-3 pt-[max(0.75rem,env(safe-area-inset-top))] pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Visualização ampliada da imagem"
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-3 top-[max(0.75rem,env(safe-area-inset-top))] z-10 flex h-11 w-11 items-center justify-center rounded-full bg-loja-charcoal/80 text-loja-offwhite transition-colors hover:bg-loja-rosegold focus-visible:outline focus-visible:outline-2 focus-visible:outline-loja-rosegold focus-visible:outline-offset-2 sm:right-6"
        aria-label="Fechar visualização"
      >
        <X className="h-6 w-6" strokeWidth={1.5} aria-hidden="true" />
      </button>

      {hasPrev && (
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation()
            goPrev()
          }}
          className="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-loja-charcoal/80 text-loja-offwhite transition-colors hover:bg-loja-rosegold focus-visible:outline focus-visible:outline-2 focus-visible:outline-loja-rosegold focus-visible:outline-offset-2 sm:left-4 sm:h-12 sm:w-12"
          aria-label="Imagem anterior"
        >
          <ChevronLeft className="h-6 w-6" strokeWidth={1.5} aria-hidden="true" />
        </button>
      )}

      {hasNext && (
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation()
            goNext()
          }}
          className="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-loja-charcoal/80 text-loja-offwhite transition-colors hover:bg-loja-rosegold focus-visible:outline focus-visible:outline-2 focus-visible:outline-loja-rosegold focus-visible:outline-offset-2 sm:right-4 sm:h-12 sm:w-12"
          aria-label="Próxima imagem"
        >
          <ChevronRight className="h-6 w-6" strokeWidth={1.5} aria-hidden="true" />
        </button>
      )}

      <div
        className="relative flex h-full w-full max-h-[calc(100dvh-5rem)] max-w-[min(100%,56rem)] items-center justify-center"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative h-full w-full min-h-[200px]">
          {isLoading && (
            <div
              className="absolute inset-0 z-[1] flex flex-col items-center justify-center gap-3"
              aria-live="polite"
              aria-busy="true"
            >
              <div
                className="h-10 w-10 animate-spin rounded-full border-2 border-loja-rosegold/25 border-t-loja-rosegold sm:h-12 sm:w-12"
                aria-hidden="true"
              />
              <span className="font-body text-xs tracking-wide text-loja-champagne/80">
                Carregando...
              </span>
            </div>
          )}
          <Image
            key={current.src}
            src={current.src}
            alt={current.alt}
            fill
            className={`object-contain transition-opacity duration-300 ${
              isLoading ? 'opacity-0' : 'opacity-100'
            }`}
            sizes="100vw"
            priority
            onLoad={() => setIsLoading(false)}
            onLoadingComplete={() => setIsLoading(false)}
            onError={() => setIsLoading(false)}
          />
        </div>
      </div>

      <p className="absolute bottom-[max(0.75rem,env(safe-area-inset-bottom))] left-1/2 -translate-x-1/2 font-body text-xs text-loja-muted">
        {index + 1} / {images.length}
      </p>
    </div>
  )
}

export function useImageLightbox(images: LightboxImage[]) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const open = useCallback((index: number) => setOpenIndex(index), [])
  const close = useCallback(() => setOpenIndex(null), [])

  const lightbox =
    openIndex !== null ? (
      <ImageLightbox
        images={images}
        initialIndex={openIndex}
        onClose={close}
      />
    ) : null

  return { open, close, lightbox, isOpen: openIndex !== null }
}
