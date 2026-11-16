'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { getImageProps } from 'next/image'
import { HERO_SLIDES, HERO_VIDEO_SRC } from '@/lib/gallery'
import { finePointer, motionAllowed } from '@/lib/motion'

const AUTOPLAY_MS = 5000
const SWIPE_THRESHOLD_PX = 50
const DESKTOP_QUERY = '(min-width: 1024px)'

type HeroSlide = (typeof HERO_SLIDES)[number]

/**
 * Art direction com <picture>: foto horizontal no desktop, vertical no celular.
 * O navegador escolhe pela media query já no HTML do servidor — sem esperar o
 * JavaScript — e a imagem do primeiro slide sai com prioridade alta.
 */
function SlidePicture({
  slide,
  priority,
}: {
  slide: HeroSlide
  priority: boolean
}) {
  const common = {
    alt: slide.alt,
    fill: true,
    sizes: '100vw',
    priority,
    className: 'object-cover',
  } as const
  const { props: desktop } = getImageProps({ ...common, src: slide.desktop })
  const { props: mobile } = getImageProps({ ...common, src: slide.mobile })

  return (
    <picture>
      <source media={DESKTOP_QUERY} srcSet={desktop.srcSet} sizes="100vw" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img {...mobile} alt={slide.alt} draggable={false} />
    </picture>
  )
}

export default function HeroSlider() {
  const [active, setActive] = useState(0)
  const rootRef = useRef<HTMLDivElement>(null)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const dragStartX = useRef<number | null>(null)
  const total = HERO_SLIDES.length

  const restartAutoplay = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setActive((current) => (current + 1) % total)
    }, AUTOPLAY_MS)
  }, [total])

  useEffect(() => {
    if (HERO_VIDEO_SRC) return
    restartAutoplay()
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [restartAutoplay])

  // Profundidade: a foto anda mais devagar que a página e acompanha o mouse.
  // As variáveis CSS ficam na <section> do topo, que também move o texto.
  useEffect(() => {
    const section = rootRef.current?.parentElement
    if (!section || !motionAllowed()) return
    let frame = 0

    const update = () => {
      frame = 0
      // Aba em segundo plano pode informar altura 0: nesse caso não mexe em nada.
      const viewport = window.innerHeight
      if (!viewport) return
      const y = Math.min(window.scrollY, viewport)
      section.style.setProperty('--sy', y.toFixed(1))
      section.style.setProperty('--hp', (y / viewport).toFixed(4))
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    const onMove = (event: PointerEvent) => {
      const rect = section.getBoundingClientRect()
      section.style.setProperty(
        '--mx',
        ((event.clientX - rect.left) / rect.width - 0.5).toFixed(3)
      )
      section.style.setProperty(
        '--my',
        ((event.clientY - rect.top) / rect.height - 0.5).toFixed(3)
      )
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    const mouse = finePointer()
    if (mouse) section.addEventListener('pointermove', onMove)
    return () => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      if (mouse) section.removeEventListener('pointermove', onMove)
    }
  }, [])

  const goTo = useCallback(
    (index: number) => {
      setActive((index + total) % total)
      restartAutoplay()
    },
    [restartAutoplay, total]
  )

  const onPointerDown = useCallback((event: React.PointerEvent) => {
    dragStartX.current = event.clientX
  }, [])

  const onPointerUp = useCallback(
    (event: React.PointerEvent) => {
      if (dragStartX.current === null) return
      const delta = event.clientX - dragStartX.current
      dragStartX.current = null

      if (Math.abs(delta) < SWIPE_THRESHOLD_PX) return
      goTo(delta < 0 ? active + 1 : active - 1)
    },
    [active, goTo]
  )

  const onPointerCancel = useCallback(() => {
    dragStartX.current = null
  }, [])

  if (HERO_VIDEO_SRC) {
    return (
      <video
        autoPlay
        muted
        loop
        playsInline
        aria-label="Vídeo de ambiente da loja Schiètto em Pedreira"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={HERO_VIDEO_SRC} type="video/mp4" />
      </video>
    )
  }

  return (
    <div
      ref={rootRef}
      className="absolute inset-0 cursor-grab touch-pan-y select-none active:cursor-grabbing"
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerCancel}
      onPointerLeave={onPointerCancel}
      aria-roledescription="carrossel"
      aria-label="Imagens da loja Schiètto — arraste para navegar"
    >
      <div className="hero-scroll absolute inset-0">
        <div className="hero-mouse absolute inset-0">
          {HERO_SLIDES.map((slide, index) => (
            <div
              key={slide.desktop}
              className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
                index === active ? 'z-[1] opacity-100' : 'z-0 opacity-0'
              }`}
              aria-hidden={index !== active}
            >
              <div
                className={`h-full w-full ${index === active ? 'animate-slide-zoom' : ''}`}
                key={index === active ? `zoom-${active}` : `idle-${index}`}
              >
                <SlidePicture slide={slide} priority={index === 0} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-32 bg-gradient-to-b from-loja-dark/70 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-[70%] bg-gradient-to-t from-loja-dark/95 via-loja-dark/60 to-transparent lg:h-[75%]" />

      <div className="absolute bottom-24 left-1/2 z-[3] flex -translate-x-1/2 items-center gap-3 sm:bottom-6 lg:bottom-8">
        {HERO_SLIDES.map((slide, index) => (
          <button
            key={`dot-${slide.desktop}`}
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
            <span className="relative block h-[2px] w-9 overflow-hidden rounded-full bg-loja-offwhite/35 transition-colors duration-500 group-hover:bg-loja-offwhite/60 sm:w-11">
              {index === active && (
                <span
                  key={`progress-${active}`}
                  className="slider-progress absolute inset-0 bg-loja-offwhite"
                  style={{ animationDuration: `${AUTOPLAY_MS}ms` }}
                />
              )}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}
