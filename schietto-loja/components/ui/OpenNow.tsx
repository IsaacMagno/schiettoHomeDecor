'use client'

import { useEffect, useState } from 'react'

type Day = { open: [number, number]; close: [number, number] }

// Mantenha em sincronia com Location.tsx, Footer.tsx e LocalBusinessJsonLd.tsx
const WEEKDAY: Day = { open: [9, 0], close: [18, 0] }
const WEEKEND: Day = { open: [8, 30], close: [18, 0] }

const pad = (n: number) => String(n).padStart(2, '0')
const label = ([h, m]: [number, number]) => (m ? `${pad(h)}h${pad(m)}` : `${pad(h)}h`)
const minutes = ([h, m]: [number, number]) => h * 60 + m

/** Dia da semana (0 = domingo) e minutos desde 00h, no horário de Brasília. */
function nowInBrazil() {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Sao_Paulo',
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).formatToParts(new Date())
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? ''
  const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(get('weekday'))
  const hour = Number(get('hour')) % 24
  return { day, minutes: hour * 60 + Number(get('minute')) }
}

const scheduleFor = (day: number): Day =>
  day === 0 || day === 6 ? WEEKEND : WEEKDAY

function compute(): { open: boolean; text: string } {
  const { day, minutes: now } = nowInBrazil()
  const today = scheduleFor(day)
  if (now >= minutes(today.open) && now < minutes(today.close)) {
    return { open: true, text: `Aberto agora · até ${label(today.close)}` }
  }
  if (now < minutes(today.open)) {
    return { open: false, text: `Abre hoje às ${label(today.open)}` }
  }
  return {
    open: false,
    text: `Abre amanhã às ${label(scheduleFor((day + 1) % 7).open)}`,
  }
}

/**
 * Etiqueta "Aberto agora" calculada no horário de Brasília. Só aparece depois
 * de o navegador carregar (evita diferença entre servidor e cliente). Feriados
 * podem ter alteração — o aviso fica na seção Localização.
 */
export default function OpenNow({ className = '' }: { className?: string }) {
  const [state, setState] = useState<{ open: boolean; text: string } | null>(null)

  useEffect(() => {
    setState(compute())
    const id = setInterval(() => setState(compute()), 60_000)
    return () => clearInterval(id)
  }, [])

  if (!state) return null

  return (
    <p
      className={`inline-flex items-center gap-2 font-body text-xs font-medium tracking-wide ${className}`}
    >
      <span
        aria-hidden="true"
        className={`h-2 w-2 rounded-full ${
          state.open ? 'bg-[#25D366]' : 'bg-loja-gold'
        }`}
      />
      {state.text}
    </p>
  )
}
