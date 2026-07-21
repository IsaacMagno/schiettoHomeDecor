'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { ALL_IMAGES } from '@/lib/gallery'

const SLIDES = [
  { src: ALL_IMAGES[22], alt: 'Ambiente da Schiètto Home Decor em Pedreira' },
  { src: ALL_IMAGES[5], alt: 'Peças de decoração em exposição na Schiètto' },
  { src: ALL_IMAGES[27], alt: 'Semi jóias em destaque na vitrine da Schiètto' },
  { src: ALL_IMAGES[10], alt: 'Detalhes de curadoria da loja Schiètto' },
  { src: ALL_IMAGES[38], alt: 'Composição de peças no casarão da Schiètto' },
] as const

const AUTOPLAY_MS = 5000
const SWIPE_THRESHOLD_PX = 50
const HERO_VIDEO_SRC = '/video/hero.mp4'

export default function HeroSlider() {
  const [active, setActive] = useState(0)
  const [videoAvailable, setVideoAvailable] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const dragStartX = useRef<number | null>(null)

  useEffect(() => {
    let cancelled = false
    fetch(HERO_VIDEO_SRC, { method: 'HEAD' })
      .then((response) => {
        if (!cancelled) setVideoAvailable(response.ok)
      })
      .catch(() => {
        if (!cancelled) setVideoAvailable(false)
      })
    return () => {
      cancelled = true
    }
  }, [])

  const restartAutoplay = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setActive((current) => (current + 1) % SLIDES.length)
    }, AUTOPLAY_MS)
  }, [])

  useEffect(() => {
    if (videoAvailable) return
    restartAutoplay()
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [videoAvailable, restartAutoplay])

  const goTo = useCallback(
    (index: number) => {
      setActive((index + SLIDES.length) % SLIDES.length)
      restartAutoplay()
    },
    [restartAutoplay]
  )

  // Troca de slide apenas por arrasto (dedo ou mouse) — clique não avança
  const onPointerDown = useCallback((event: React.PointerEvent) => {
    dragStartX.current = event.clientX
  }, [])

  const onPointerUp = useCallback(
    (event: React.PointerEvent) => {
      if (dragStartX.current === null) return
      const delta = event.clientX - dragStartX.current
      dragStartX.current = null

      if (Math.abs(delta) < SWIPE_THRESHOLD_PX) return
      if (delta < 0) {
        goTo(active + 1)
      } else {
        goTo(active - 1)
      }
    },
    [active, goTo]
  )

  const onPointerCancel = useCallback(() => {
    dragStartX.current = null
  }, [])

  if (videoAvailable) {
    return (
      <video
        autoPlay
        muted
        loop
        playsInline
        aria-label="Vídeo de ambiente da loja Schiètto em Pedreira"
        className="absolute inset-0 h-full w-full object-cover"
        onError={() => setVideoAvailable(false)}
      >
        <source src={HERO_VIDEO_SRC} type="video/mp4" />
      </video>
    )
  }

  return (
    <div
      className="absolute inset-0 cursor-grab touch-pan-y select-none active:cursor-grabbing"
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerCancel}
      onPointerLeave={onPointerCancel}
      aria-roledescription="carrossel"
      aria-label="Imagens da loja Schiètto — arraste para navegar"
    >
      {/* Slides com fade in/out suave + Ken Burns no slide ativo */}
      {SLIDES.map((slide, index) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
            index === active ? 'z-[1] opacity-100' : 'z-0 opacity-0'
          }`}
          aria-hidden={index !== active}
        >
          <div
            className={`h-full w-full ${index === active ? 'animate-slide-zoom' : ''}`}
            key={index === active ? `zoom-${active}` : `idle-${index}`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index === 0}
              draggable={false}
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
      ))}

      {/* Gradientes de legibilidade (topo e base) */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-32 bg-gradient-to-b from-loja-dark/70 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-[320px] bg-gradient-to-t from-loja-dark/80 to-transparent lg:h-96" />

      {/* Paginação: barras finas e minimalistas */}
      <div className="absolute bottom-8 left-1/2 z-[3] flex -translate-x-1/2 items-center gap-3 lg:bottom-10">
        {SLIDES.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            aria-label={`Ir para a imagem ${index + 1}`}
            aria-current={index === active}
            onClick={(event) => {
              event.stopPropagation()
              goTo(index)
            }}
            onPointerDown={(event) => event.stopPropagation()}
            onPointerUp={(event) => event.stopPropagation()}
            className="group py-2"
          >
            <span
              className={`block h-[2px] w-9 rounded-full transition-all duration-500 sm:w-11 ${
                index === active
                  ? 'bg-loja-offwhite'
                  : 'bg-loja-offwhite/35 group-hover:bg-loja-offwhite/60'
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  )
}
