import Link from 'next/link'
import { MessageCircle, MapPin, Phone } from 'lucide-react'
import CookiePreferencesButton from '@/components/analytics/CookiePreferencesButton'
import {
  CAFE_URL,
  INSTAGRAM_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  PORTAL_URL,
  WHATSAPP_URL,
} from '@/lib/contact'

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

const NAV_LINKS = [
  { label: 'Início', href: '#' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Experiências', href: '#experiencias' },
  { label: 'Composições', href: '#composicoes' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Localização', href: '#localizacao' },
] as const

const linkClass =
  'font-body text-sm font-light text-loja-champagne/60 transition-colors duration-300 hover:text-loja-offwhite focus-visible:outline focus-visible:outline-2 focus-visible:outline-loja-gold focus-visible:outline-offset-2'

export default function Footer() {
  return (
    <footer className="px-3 pb-3 sm:px-4 sm:pb-4">
      <div className="overflow-hidden rounded-2xl bg-loja-dark">
      {/* Colunas principais */}
      <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Identidade */}
          <div>
            <p className="font-display text-3xl font-semibold tracking-tight text-loja-offwhite">
              Schiètto
              <span className="text-loja-gold">.</span>
            </p>
            <p className="mt-3 font-body text-sm font-light text-loja-champagne/70">
              Home Decor de Luxo
            </p>
            <p className="mt-1 font-body text-xs font-light text-loja-champagne/55">
              Pedreira, SP · Desde 2023
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Schiètto"
                className="text-loja-champagne/60 transition-colors duration-300 hover:text-loja-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-loja-gold focus-visible:outline-offset-2"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navegação */}
          <div>
            <h3 className="font-body text-xs font-medium uppercase tracking-[0.25em] text-loja-gold">
              Explore
            </h3>
            <nav className="mt-6 flex flex-col gap-3" aria-label="Rodapé">
              {NAV_LINKS.map((link) => (
                <a key={link.href} href={link.href} className={linkClass}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-body text-xs font-medium uppercase tracking-[0.25em] text-loja-gold">
              Contato
            </h3>
            <address className="mt-6 space-y-3 font-body text-sm font-light not-italic text-loja-champagne/60">
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-loja-gold" strokeWidth={1.5} aria-hidden="true" />
                Rua Primo Frazato, 30
                <br />
                Centro — Pedreira, SP
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-loja-gold" strokeWidth={1.5} aria-hidden="true" />
                <a
                  href={PHONE_TEL}
                  className="transition-colors hover:text-loja-offwhite"
                >
                  {PHONE_DISPLAY}
                </a>
              </p>
            </address>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-loja-gold/60 px-5 py-2 font-body text-sm text-loja-gold transition-all duration-300 hover:bg-loja-gold hover:text-loja-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-loja-gold focus-visible:outline-offset-2"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
              WhatsApp
            </a>
          </div>

          {/* Horários */}
          <div>
            <h3 className="font-body text-xs font-medium uppercase tracking-[0.25em] text-loja-gold">
              Horários
            </h3>
            <ul className="mt-6 space-y-3 font-body text-sm font-light text-loja-champagne/60">
              <li>
                <p>Segunda a Sexta</p>
                <p className="text-loja-offwhite">09h00 às 18h00</p>
              </li>
              <li>
                <p>Sábado, domingo e feriados</p>
                <p className="text-loja-offwhite">08h30 às 18h00</p>
              </li>
            </ul>
            <div className="mt-6 border-t border-loja-charcoal pt-5">
              <p className="font-body text-xs text-loja-champagne/55">No mesmo endereço:</p>
              <a
                href={CAFE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-block font-body text-sm font-light text-loja-champagne/60 transition-colors duration-300 hover:text-loja-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-loja-gold focus-visible:outline-offset-2"
              >
                Caffè Schiètto
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-loja-charcoal pt-8">
          <p className="text-center font-body text-xs font-light text-loja-champagne/55">
            © 2026 Schiètto Home Decor · Pedreira, SP
          </p>
          <p className="mt-2 text-center font-body text-xs font-light text-loja-champagne/55">
            <a
              href={PORTAL_URL}
              className="transition-colors duration-300 hover:text-loja-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-loja-gold focus-visible:outline-offset-2"
            >
              Conheça todos os espaços Schiètto
            </a>
          </p>
          <p className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-center font-body text-xs font-light text-loja-champagne/55">
            <Link
              href="/privacidade"
              className="transition-colors duration-300 hover:text-loja-offwhite focus-visible:outline focus-visible:outline-2 focus-visible:outline-loja-gold focus-visible:outline-offset-2"
            >
              Política de Privacidade
            </Link>
            <CookiePreferencesButton />
          </p>
        </div>
      </div>
      </div>
    </footer>
  )
}
