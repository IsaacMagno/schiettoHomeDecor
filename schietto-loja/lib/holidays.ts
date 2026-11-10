/**
 * Feriados nacionais do Brasil, usados para o horário de "Aberto agora":
 * nos feriados a loja e o café abrem no horário de fim de semana (8h30 às 18h).
 *
 * Cobre os feriados nacionais fixos, a Sexta-feira Santa e o Corpus Christi.
 * NÃO cobre feriados municipais/estaduais nem pontos facultativos (como o
 * Carnaval): se precisar, acrescente as datas em `EXTRA_HOLIDAYS`.
 */

const pad = (n: number) => String(n).padStart(2, '0')
const key = (month: number, day: number) => `${pad(month)}-${pad(day)}`

/** Feriados nacionais fixos (mês-dia). */
const FIXED_HOLIDAYS = [
  '01-01', // Confraternização Universal
  '04-21', // Tiradentes
  '05-01', // Dia do Trabalho
  '09-07', // Independência
  '10-12', // Nossa Senhora Aparecida
  '11-02', // Finados
  '11-15', // Proclamação da República
  '11-20', // Consciência Negra
  '12-25', // Natal
]

/** Feriados que a loja também trata como feriado (mês-dia). Ex.: o da cidade. */
const EXTRA_HOLIDAYS: string[] = []

/** Domingo de Páscoa (algoritmo de Meeus/Jones/Butcher). */
function easter(year: number): [number, number] {
  const a = year % 19
  const b = Math.floor(year / 100)
  const c = year % 100
  const d = Math.floor(b / 4)
  const e = b % 4
  const f = Math.floor((b + 8) / 25)
  const g = Math.floor((b - f + 1) / 3)
  const h = (19 * a + b - d - g + 15) % 30
  const i = Math.floor(c / 4)
  const k = c % 4
  const l = (32 + 2 * e + 2 * i - h - k) % 7
  const m = Math.floor((a + 11 * h + 22 * l) / 451)
  const month = Math.floor((h + l - 7 * m + 114) / 31)
  const day = ((h + l - 7 * m + 114) % 31) + 1
  return [month, day]
}

/** Soma dias a uma data (ano, mês 1-12, dia) e devolve [ano, mês, dia]. */
export function addDays(
  year: number,
  month: number,
  day: number,
  days: number
): [number, number, number] {
  const date = new Date(Date.UTC(year, month - 1, day + days))
  return [date.getUTCFullYear(), date.getUTCMonth() + 1, date.getUTCDate()]
}

export function isHoliday(year: number, month: number, day: number): boolean {
  const current = key(month, day)
  if (FIXED_HOLIDAYS.includes(current) || EXTRA_HOLIDAYS.includes(current)) {
    return true
  }
  const [easterMonth, easterDay] = easter(year)
  const [, goodFridayMonth, goodFridayDay] = addDays(year, easterMonth, easterDay, -2)
  const [, corpusMonth, corpusDay] = addDays(year, easterMonth, easterDay, 60)
  return (
    current === key(goodFridayMonth, goodFridayDay) ||
    current === key(corpusMonth, corpusDay)
  )
}
