'use client'

import { useState } from 'react'
import Image, { type ImageProps } from 'next/image'

type ProgressiveImageProps = {
  src: ImageProps['src']
  alt: string
  fill?: boolean
  className?: string
  sizes?: string
  priority?: boolean
  quality?: number
  showSpinner?: boolean
  /** Light champagne pulse (default) or dark charcoal for hero overlays */
  skeletonTone?: 'light' | 'dark'
  draggable?: boolean
  onLoadingComplete?: ImageProps['onLoadingComplete']
  onLoad?: ImageProps['onLoad']
  onError?: ImageProps['onError']
}

export default function ProgressiveImage({
  src,
  alt,
  fill = false,
  className = '',
  sizes,
  priority = false,
  quality,
  showSpinner = false,
  skeletonTone = 'light',
  draggable,
  onLoadingComplete,
  onLoad,
  onError,
}: ProgressiveImageProps) {
  const [loaded, setLoaded] = useState(false)

  const markLoaded = () => setLoaded(true)

  const skeletonBg =
    skeletonTone === 'dark' ? 'bg-loja-charcoal/40' : 'bg-loja-champagne/50'

  return (
    <>
      {!loaded && (
        <div
          className={`absolute inset-0 animate-pulse ${skeletonBg}`}
          aria-hidden="true"
        />
      )}

      {!loaded && showSpinner && (
        <div
          className="absolute inset-0 z-[1] flex items-center justify-center"
          aria-live="polite"
          aria-busy="true"
        >
          <div
            className="h-10 w-10 animate-spin rounded-full border-2 border-loja-rosegold/25 border-t-loja-rosegold sm:h-12 sm:w-12"
            aria-hidden="true"
          />
        </div>
      )}

      <Image
        src={src}
        alt={alt}
        fill={fill}
        sizes={sizes}
        priority={priority}
        quality={quality}
        draggable={draggable}
        className={`transition-opacity duration-500 ease-out ${
          loaded ? 'opacity-100' : 'opacity-0'
        } ${className}`.trim()}
        onLoadingComplete={(img) => {
          markLoaded()
          onLoadingComplete?.(img)
        }}
        onLoad={(event) => {
          markLoaded()
          onLoad?.(event)
        }}
        onError={(event) => {
          markLoaded()
          onError?.(event)
        }}
      />
    </>
  )
}
