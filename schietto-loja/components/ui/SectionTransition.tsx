type SectionTransitionVariant = 'offwhite-to-dark' | 'dark-to-offwhite'

interface SectionTransitionProps {
  variant: SectionTransitionVariant
}

export default function SectionTransition({ variant }: SectionTransitionProps) {
  return (
    <div
      aria-hidden="true"
      className={`h-8 ${
        variant === 'offwhite-to-dark'
          ? 'bg-gradient-to-b from-loja-offwhite to-loja-dark'
          : 'bg-gradient-to-b from-loja-dark to-loja-offwhite'
      }`}
    />
  )
}
