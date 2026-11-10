export const SITE_URL = 'https://homedecor.schietto.com.br'

const WHATSAPP_PHONE = '551938937377'

/** Link do WhatsApp com uma mensagem pronta. */
export function whatsappUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`
}

/**
 * Mensagens prontas por assunto: quem clica já chega no WhatsApp com o que
 * quer escrito, e a loja sabe de onde veio o contato.
 */
export const WHATSAPP_MESSAGES = {
  geral: 'Olá! Vim pelo site Homedecor da Schiètto (homedecor.schietto.com.br).',
  decoracao:
    'Olá! Vim pelo site da Schiètto e quero saber mais sobre as peças de decoração.',
  semijoias:
    'Olá! Vim pelo site da Schiètto e quero saber mais sobre semijoias e pedras preciosas.',
  composicoes:
    'Olá! Vim pelo site da Schiètto e quero ajuda para compor o meu ambiente.',
  casa: 'Olá! Vim pelo site da Schiètto e quero saber mais sobre almofadas, estofados e cobertas.',
} as const

/** Link padrão do WhatsApp com mensagem identificando a origem no site Homedecor. */
export const WHATSAPP_URL = whatsappUrl(WHATSAPP_MESSAGES.geral)

export const INSTAGRAM_URL = 'https://www.instagram.com/schiettohomedecor_/'
export const CAFE_URL = 'https://cafe.schietto.com.br'
export const PHONE_DISPLAY = '(19) 3893-7377'
export const PHONE_TEL = 'tel:+551938937377'
export const MAPS_URL = 'https://maps.google.com/?cid=8611185208223793702'
