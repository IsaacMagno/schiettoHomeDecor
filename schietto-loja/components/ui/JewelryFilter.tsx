'use client'

export type JewelryFilterCategory =
  | 'todos'
  | 'aneis'
  | 'colares'
  | 'brincos'
  | 'pulseiras'
  | 'conjuntos'

const FILTERS: { value: JewelryFilterCategory; label: string }[] = [
  { value: 'todos', label: 'Todos' },
  { value: 'aneis', label: 'Anéis' },
  { value: 'colares', label: 'Colares' },
  { value: 'brincos', label: 'Brincos' },
  { value: 'pulseiras', label: 'Pulseiras' },
  { value: 'conjuntos', label: 'Conjuntos' },
]

interface JewelryFilterProps {
  active: JewelryFilterCategory
  onChange: (category: JewelryFilterCategory) => void
}

export default function JewelryFilter({
  active,
  onChange,
}: JewelryFilterProps) {
  return (
    <div className="-mx-6 overflow-x-auto px-6 scrollbar-hide sm:mx-0 sm:overflow-visible sm:px-0">
      <div className="flex min-w-max flex-nowrap gap-2 pb-1 sm:min-w-0 sm:flex-wrap">
        {FILTERS.map((filter) => {
          const isActive = active === filter.value
          return (
            <button
              key={filter.value}
              type="button"
              onClick={() => onChange(filter.value)}
              className={`shrink-0 rounded-sm px-4 py-2 font-body text-sm transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-loja-rosegold focus-visible:outline-offset-2 ${
                isActive
                  ? 'bg-loja-rosegold text-loja-offwhite'
                  : 'border border-loja-muted text-loja-muted hover:border-loja-champagne hover:text-loja-champagne'
              }`}
            >
              {filter.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
