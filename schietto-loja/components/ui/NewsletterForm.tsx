'use client'

import { useState } from 'react'
import type { FormEvent } from 'react'
import { ArrowRight, Check } from 'lucide-react'

export default function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!email) return
    // Sem backend por enquanto: registra a intenção e confirma visualmente
    setSubscribed(true)
  }

  if (subscribed) {
    return (
      <div className="flex items-center gap-3 rounded-full border border-loja-rosegold/50 px-6 py-3.5">
        <Check className="h-5 w-5 text-loja-rosegold" strokeWidth={2} aria-hidden="true" />
        <p className="font-body text-sm text-loja-champagne">
          Obrigado! Em breve você receberá nossas novidades.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Seu e-mail
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Seu melhor e-mail"
        className="w-full flex-1 rounded-full border border-loja-charcoal bg-transparent px-6 py-3.5 font-body text-sm text-loja-offwhite placeholder:text-loja-muted focus:border-loja-rosegold focus:outline-none"
      />
      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-loja-rosegold px-7 py-3.5 font-body text-sm font-semibold text-loja-offwhite transition-colors duration-300 hover:bg-loja-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-loja-rosegold focus-visible:outline-offset-2"
      >
        Inscrever
        <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
      </button>
    </form>
  )
}
