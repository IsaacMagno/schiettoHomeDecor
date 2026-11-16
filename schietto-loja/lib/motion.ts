/**
 * Diz se as animações "grandes" (parallax, inclinação, botão magnético) podem
 * rodar. Respeita o "reduzir movimento" do sistema, a não ser que o site tenha
 * sido aberto com ?movimento=completo (classe `motion-full` no <html>).
 */
export function motionAllowed(): boolean {
  if (typeof window === 'undefined') return false
  if (document.documentElement.classList.contains('motion-full')) return true
  return !window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/** Mouse de verdade (não toque): só aí faz sentido reagir ao ponteiro. */
export function finePointer(): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(hover: hover) and (pointer: fine)').matches
}

/**
 * Script que roda antes da primeira pintura: liga `motion-full` quando a URL
 * traz ?movimento=completo (e lembra disso até fechar a aba).
 */
export const MOTION_BOOT_SCRIPT = `try{var k='schietto-movimento',q=location.search;if(/[?&]movimento=completo/.test(q))sessionStorage.setItem(k,'1');if(/[?&]movimento=padrao/.test(q))sessionStorage.removeItem(k);if(sessionStorage.getItem(k))document.documentElement.classList.add('motion-full')}catch(e){}`
