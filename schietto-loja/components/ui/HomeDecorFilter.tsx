'use client'

export type HomeDecorFilterCategory =
  | 'todos'
  | 'vasos'
  | 'quadros'
  | 'velas'
  | 'almofadas'
  | 'objetos'

const FILTERS: { value: HomeDecorFilterCategory; label: string }[] = [
  { value: 'todos', label: 'Todos' },
  { value: 'vasos', label: 'Vasos' },
  { value: 'quadros', label: 'Quadros' },
  { value: 'velas', label: 'Velas' },
  { value: 'almofadas', label: 'Almofadas' },
  { value: 'objetos', label: 'Objetos' },
]

interface HomeDecorFilterProps {
  active: HomeDecorFilterCategory
  onChange: (category: HomeDecorFilterCategory) => void
}

export default function HomeDecorFilter({
  active,
  onChange,
}: HomeDecorFilterProps) {
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
                  ? 'bg-loja-dark text-loja-offwhite'
                  : 'border border-loja-muted/40 text-loja-muted hover:border-loja-dark hover:text-loja-dark'
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
