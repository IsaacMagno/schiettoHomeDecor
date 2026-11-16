import { useEffect, useLayoutEffect, useRef, useState } from 'react'

// useLayoutEffect no navegador (evita "piscada"); useEffect no servidor,
// onde o React 18 reclama do layout effect.
const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect

/**
 * Diz quando um elemento já pode ser revelado.
 *
 * O conteúdo nasce VISÍVEL (inView = true, inclusive no HTML do servidor): sem
 * JavaScript, com movimento reduzido ou com rolagem rápida, nada fica escondido.
 * Só o que está abaixo da dobra é escondido ao hidratar, e volta a aparecer
 * um pouco antes de entrar na tela.
 */
export function useInView<T extends HTMLElement = HTMLDivElement>(
  threshold = 0.1
) {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(true)

  useIsomorphicLayoutEffect(() => {
    const element = ref.current
    if (!element) return
    if (!('IntersectionObserver' in window)) return
    // Já está na tela (ou acima dela): fica visível, a animação CSS roda no load.
    if (element.getBoundingClientRect().top < window.innerHeight) return

    setInView(false)
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      // Começa a revelar um pouco antes de o elemento aparecer.
      { threshold, rootMargin: '0px 0px 12% 0px' }
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, inView }
}
