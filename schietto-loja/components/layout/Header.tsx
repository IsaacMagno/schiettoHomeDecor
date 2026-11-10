'use client'

import { useEffect, useState } from 'react'
import { MessageCircle, Menu, X } from 'lucide-react'
import { CAFE_URL, WHATSAPP_URL } from '@/lib/contact'

const NAV_LINKS = [
  { label: 'Início', href: '#' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Experiências', href: '#experiencias' },
  { label: 'Café', href: '#cafe' },
  { label: 'Composições', href: '#composicoes' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Localização', href: '#localizacao' },
] as const

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const closeMobile = () => setMobileOpen(false)

  // Sobre o hero (transparente) o texto é claro; ao rolar ou com menu aberto, fundo sólido
  const solid = scrolled || mobileOpen
  const textColor = solid ? 'text-loja-dark' : 'text-loja-offwhite'
  const navLinkClass = `relative font-body text-sm font-medium tracking-wide transition-colors duration-300 hover:text-loja-rosegold after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-loja-rosegold after:transition-all after:duration-300 hover:after:w-full ${
    solid ? 'text-loja-charcoal' : 'text-loja-offwhite/90'
  }`

  return (
    <>
      <header
        className={`fixed top-0 z-[70] w-full transition-all duration-500 ${
          solid
            ? mobileOpen
              ? 'border-b border-loja-blush/60 bg-loja-offwhite'
              : 'border-b border-loja-blush/60 bg-loja-offwhite/95 shadow-sm backdrop-blur-md'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className="mx-auto flex h-[76px] max-w-[1400px] items-center justify-between px-6 lg:px-10">
          {/* Logo */}
          <a
            href="#"
            className="group shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-loja-rosegold focus-visible:outline-offset-2"
            onClick={closeMobile}
          >
            <span
              className={`font-display text-2xl font-semibold tracking-tight transition-colors duration-500 ${textColor}`}
            >
              Schiètto
              <span className="text-loja-rosegold">.</span>
            </span>
            <p
              className={`hidden font-body text-[10px] font-light uppercase tracking-[0.25em] transition-colors duration-500 sm:block ${
                solid ? 'text-loja-muted' : 'text-loja-offwhite/70'
              }`}
            >
              Home Decor de Luxo
            </p>
          </a>

          {/* Navegação desktop */}
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className={navLinkClass}>
                {link.label}
              </a>
            ))}
          </nav>

          {/* Ações desktop */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={CAFE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 rounded-full border px-5 py-2 font-body text-sm font-medium transition-all duration-300 hover:border-loja-rosegold hover:bg-loja-rosegold hover:text-loja-offwhite focus-visible:outline focus-visible:outline-2 focus-visible:outline-loja-rosegold focus-visible:outline-offset-2 ${
                solid
                  ? 'border-loja-charcoal/30 text-loja-charcoal'
                  : 'border-loja-offwhite/40 text-loja-offwhite'
              }`}
            >
              Caffè Schiètto
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 rounded-full border px-5 py-2 font-body text-sm font-medium transition-all duration-300 hover:border-loja-rosegold hover:bg-loja-rosegold hover:text-loja-offwhite focus-visible:outline focus-visible:outline-2 focus-visible:outline-loja-rosegold focus-visible:outline-offset-2 ${
                solid
                  ? 'border-loja-charcoal/30 text-loja-charcoal'
                  : 'border-loja-offwhite/40 text-loja-offwhite'
              }`}
              aria-label="Fale conosco pelo WhatsApp"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
              <span>Fale Conosco</span>
            </a>
          </div>

          {/* Toggle mobile */}
          <button
            type="button"
            className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-full transition-colors duration-500 lg:hidden ${
              solid
                ? 'text-loja-dark hover:bg-loja-blush/40'
                : 'text-loja-offwhite hover:bg-loja-offwhite/10'
            }`}
            onClick={() => setMobileOpen((open) => !open)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {mobileOpen ? (
              <X className="h-6 w-6" strokeWidth={1.5} />
            ) : (
              <Menu className="h-6 w-6" strokeWidth={1.5} />
            )}
          </button>
        </div>
      </header>

      {/* Fora do header: backdrop-blur no pai quebrava o fixed fullscreen */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-[60] flex flex-col bg-loja-offwhite transition-[opacity,visibility] duration-300 ease-out lg:hidden ${
          mobileOpen
            ? 'visible opacity-100'
            : 'invisible pointer-events-none opacity-0'
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="h-[76px] shrink-0" aria-hidden />

        <div className="flex min-h-0 flex-1 flex-col overflow-y-auto px-8 pb-10 pt-4">
          <p className="font-body text-[0.65rem] font-light uppercase tracking-[0.32em] text-loja-muted">
            Menu
          </p>
          <span
            className="mt-3 mb-8 block h-px w-10 bg-loja-rosegold/60"
            aria-hidden
          />

          <nav className="flex flex-col" aria-label="Menu mobile">
            {NAV_LINKS.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className="group flex cursor-pointer items-baseline justify-between border-b border-loja-blush/70 py-4 transition-colors duration-300 hover:border-loja-rosegold/40"
                onClick={closeMobile}
              >
                <span className="font-display text-[1.65rem] font-medium tracking-wide text-loja-dark transition-colors duration-300 group-hover:text-loja-rosegold">
                  {link.label}
                </span>
                <span
                  className="font-body text-[0.65rem] tracking-[0.2em] text-loja-muted/70"
                  aria-hidden
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
              </a>
            ))}
          </nav>

          <div className="mt-auto flex flex-col gap-3 pt-10">
            <a
              href={CAFE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex cursor-pointer items-center justify-center rounded-full border border-loja-charcoal/25 px-6 py-3.5 font-body text-sm font-medium tracking-wide text-loja-charcoal transition-all duration-300 hover:border-loja-rosegold hover:bg-loja-rosegold hover:text-loja-offwhite"
              onClick={closeMobile}
            >
              Caffè Schiètto
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-loja-rosegold px-6 py-3.5 font-body text-sm font-medium tracking-wide text-loja-offwhite transition-all duration-300 hover:bg-loja-dark"
              onClick={closeMobile}
              aria-label="Fale conosco pelo WhatsApp"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
              Fale Conosco
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
