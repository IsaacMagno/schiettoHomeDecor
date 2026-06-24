'use client'

import { useEffect, useState } from 'react'
import { MessageCircle, Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Início', href: '#' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Localização', href: '#localizacao' },
] as const

const WHATSAPP_URL = 'https://wa.me/5519388937377'

const navLinkClass =
  'relative font-body text-sm font-normal text-loja-charcoal transition-colors duration-300 hover:text-loja-rosegold after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-loja-rosegold after:transition-all after:duration-300 hover:after:w-full'

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

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'border-b border-loja-blush bg-loja-offwhite shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <a href="#" className="group shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-loja-rosegold focus-visible:outline-offset-2" onClick={closeMobile}>
          <span className="font-display text-2xl font-medium italic text-loja-dark">
            Schiètto
            <span className="text-loja-rosegold">.</span>
          </span>
          <p className="hidden font-body text-xs font-light tracking-[0.2em] text-loja-muted sm:block">
            Home Decor & Semi Jóias
          </p>
        </a>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className={navLinkClass}>
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop actions */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 font-body text-sm text-loja-charcoal transition-colors duration-300 hover:text-loja-rosegold focus-visible:outline focus-visible:outline-2 focus-visible:outline-loja-rosegold focus-visible:outline-offset-2 lg:flex"
          aria-label="Fale conosco pelo WhatsApp"
        >
          <MessageCircle className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
          <span>Fale Conosco</span>
        </a>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="flex items-center justify-center text-loja-dark lg:hidden"
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

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          className="fixed inset-0 top-[72px] z-40 lg:hidden"
          onClick={closeMobile}
          aria-hidden="true"
        />
      )}

      <div
        className={`overflow-hidden border-b border-loja-blush bg-loja-offwhite transition-all duration-300 ease-in-out lg:hidden ${
          mobileOpen ? 'max-h-[480px] opacity-100' : 'max-h-0 border-b-0 opacity-0'
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
              className="font-body text-lg text-loja-charcoal transition-colors duration-300 hover:text-loja-rosegold"
              onClick={closeMobile}
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center gap-2 font-body text-lg text-loja-rosegold"
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
