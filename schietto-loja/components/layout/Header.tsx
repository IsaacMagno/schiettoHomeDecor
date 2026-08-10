'use client'

import { useEffect, useState } from 'react'
import { MessageCircle, Menu, X } from 'lucide-react'
import { CAFE_URL, WHATSAPP_URL } from '@/lib/contact'

const NAV_LINKS = [
  { label: 'Início', href: '#' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Experiências', href: '#experiencias' },
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

  // Sobre o hero (transparente) o texto é claro; ao rolar, fundo sólido e texto escuro
  const solid = scrolled || mobileOpen
  const textColor = solid ? 'text-loja-dark' : 'text-loja-offwhite'
  const navLinkClass = `relative font-body text-sm font-medium tracking-wide transition-colors duration-300 hover:text-loja-rosegold after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-loja-rosegold after:transition-all after:duration-300 hover:after:w-full ${
    solid ? 'text-loja-charcoal' : 'text-loja-offwhite/90'
  }`

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        solid
          ? 'border-b border-loja-blush/60 bg-loja-offwhite/95 shadow-sm backdrop-blur-md'
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
            Home Decor & Semijoias
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
          className={`flex items-center justify-center transition-colors duration-500 lg:hidden ${textColor}`}
          onClick={() => setMobileOpen((open) => !open)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {mobileOpen ? (
            <X className="h-6 w-6" strokeWidth={1.5} />
          ) : (
            <Menu className="h-6 w-6" strokeWidth={1.5} />
          )}
        </button>
      </div>

      {/* Overlay mobile */}
      {mobileOpen && (
        <div
          className="fixed inset-0 top-[76px] z-40 lg:hidden"
          onClick={closeMobile}
          aria-hidden="true"
        />
      )}

      {/* Drawer mobile */}
      <div
        className={`overflow-hidden border-b border-loja-blush bg-loja-offwhite transition-all duration-300 ease-in-out lg:hidden ${
          mobileOpen ? 'max-h-[560px] opacity-100' : 'max-h-0 border-b-0 opacity-0'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <nav
          className="flex flex-col gap-1 px-6 py-4"
          aria-label="Menu mobile"
          onClick={(e) => e.stopPropagation()}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="py-1.5 font-body text-lg text-loja-charcoal transition-colors duration-300 hover:text-loja-rosegold"
              onClick={closeMobile}
            >
              {link.label}
            </a>
          ))}
          <a
            href={CAFE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 font-body text-lg text-loja-charcoal transition-colors hover:text-loja-rosegold"
            onClick={closeMobile}
          >
            Caffè Schiètto
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center gap-2 font-body text-lg text-loja-rosegold"
            onClick={closeMobile}
          >
            <MessageCircle className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
            Fale Conosco
          </a>
        </nav>
      </div>
    </header>
  )
}
