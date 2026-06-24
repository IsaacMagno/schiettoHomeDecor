import { MessageCircle } from 'lucide-react'

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

function FacebookIcon({ className }: { className?: string }) {
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

const WHATSAPP_URL = 'https://wa.me/5519388937377'

const NAV_LINKS = [
  { label: 'Início', href: '#' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Localização', href: '#localizacao' },
] as const

const linkClass =
  'font-body text-sm text-loja-champagne/60 transition-colors duration-300 hover:text-loja-offwhite focus-visible:outline focus-visible:outline-2 focus-visible:outline-loja-rosegold focus-visible:outline-offset-2'

export default function Footer() {
  return (
    <footer className="border-t border-loja-rosegold/30 bg-loja-dark">
      <div
        aria-hidden="true"
        className="h-[3px] bg-gradient-to-r from-loja-rosegold via-loja-gold to-loja-rosegold"
      />

      <div className="px-6 py-16">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 gap-12 text-center md:grid-cols-3 md:gap-8 md:text-left">
            {/* Coluna 1 — Identidade */}
            <div className="flex flex-col items-center md:items-start">
              <p className="font-display text-3xl font-medium italic text-loja-offwhite">
                Schiètto
                <span className="text-loja-rosegold">.</span>
              </p>
              <div className="mt-4 h-0.5 w-10 bg-loja-rosegold" />
              <p className="mt-4 font-body text-sm font-light text-loja-champagne/70">
                Home Decor & Semi Jóias
              </p>
              <p className="mt-2 font-body text-xs text-loja-muted">
                Pedreira, SP · Desde 2023
              </p>
              <div className="mt-6 flex gap-4">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram da Schiètto"
                  className="text-loja-muted transition-colors duration-300 hover:text-loja-rosegold focus-visible:outline focus-visible:outline-2 focus-visible:outline-loja-rosegold focus-visible:outline-offset-2"
                >
                  <InstagramIcon className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook da Schiètto"
                  className="text-loja-muted transition-colors duration-300 hover:text-loja-rosegold focus-visible:outline focus-visible:outline-2 focus-visible:outline-loja-rosegold focus-visible:outline-offset-2"
                >
                  <FacebookIcon className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Coluna 2 — Navegação */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="font-body text-xs font-normal uppercase tracking-wide text-loja-gold">
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

            {/* Coluna 3 — Contato */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="font-body text-xs font-normal uppercase tracking-wide text-loja-gold">
                Contato
              </h3>
              <address className="mt-6 space-y-2 font-body text-sm not-italic text-loja-champagne/60">
                <p>Rua Primo Frazato, 30 – Pedreira/SP</p>
                <p>
                  <a
                    href="tel:+551938937377"
                    className="transition-colors hover:text-loja-offwhite"
                  >
                    (19) 3893-7377
                  </a>
                </p>
              </address>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-sm bg-loja-rosegold px-4 py-2 font-body text-sm text-loja-offwhite transition-colors duration-300 hover:bg-loja-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-loja-rosegold focus-visible:outline-offset-2"
              >
                <MessageCircle className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                WhatsApp
              </a>

              <div className="mt-8 w-full border-t border-loja-charcoal pt-6">
                <p className="font-body text-xs text-loja-muted">Mesmo espaço:</p>
                <a
                  href="#"
                  className="mt-2 inline-block font-body text-sm italic text-loja-champagne/60 transition-colors duration-300 hover:text-loja-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-loja-rosegold focus-visible:outline-offset-2"
                >
                  ☕ Caffè Schiètto
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-loja-charcoal pt-8">
            <p className="text-center font-body text-xs text-loja-muted">
              © 2026 Schiètto Home Decor & Semi Jóias · Pedreira, SP
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
