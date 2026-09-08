import ProgressiveImage from '@/components/ui/ProgressiveImage'

interface ProductImageProps {
  src: string
  alt: string
  className?: string
  priority?: boolean
}

export default function ProductImage({
  src,
  alt,
  className = 'object-cover',
  priority = false,
}: ProductImageProps) {
  return (
    <ProgressiveImage
      src={src}
      alt={alt}
      fill
      className={className}
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
      priority={priority}
    />
  )
}
