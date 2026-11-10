import type { Metadata } from 'next'
import Link from 'next/link'
import CookiePreferencesButton from '@/components/analytics/CookiePreferencesButton'
import {
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_URL,
} from '@/lib/contact'

export const metadata: Metadata = {
  title: 'Política de Privacidade | Schiètto Home Decor',
  description:
    'Como o site da Schiètto Home Decor trata dados e cookies, e como você pode exercer seus direitos pela LGPD.',
  alternates: { canonical: '/privacidade' },
}

const sectionTitle =
  'mt-10 font-display text-xl font-medium tracking-tight text-loja-dark'
const paragraph =
  'mt-3 font-body text-base font-light leading-relaxed text-loja-charcoal/80'
const link =
  'text-loja-rosegold underline underline-offset-2 hover:text-loja-dark'

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-loja-offwhite px-6 py-16 lg:py-24">
      <article className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="font-body text-sm text-loja-rosegold underline-offset-2 hover:underline"
        >
          ← Voltar ao site
        </Link>

        <h1 className="mt-8 font-display text-3xl font-medium tracking-tight text-loja-dark lg:text-4xl">
          Política de Privacidade
        </h1>
        <p className="mt-3 font-body text-sm text-loja-muted">
          Última atualização: 9 de novembro de 2026
        </p>

        <h2 className={sectionTitle}>Quem somos</h2>
        <p className={paragraph}>
          Este site é da Schiètto Home Decor, loja de decoração de luxo
          localizada na Rua Primo Frazato, 30 — Centro, Pedreira, SP. O site
          apresenta a loja e leva você até o nosso WhatsApp, telefone e
          endereço. Não vendemos pela internet e não temos cadastro, login nem
          formulários no site.
        </p>

        <h2 className={sectionTitle}>Quais dados tratamos</h2>
        <p className={paragraph}>
          <strong className="font-medium text-loja-dark">
            Dados de navegação (somente com o seu aceite).
          </strong>{' '}
          Se você clicar em &ldquo;Aceitar&rdquo; no aviso de cookies, usamos o
          Microsoft Clarity, ferramenta da Microsoft que registra como o site é
          usado: páginas visitadas, cliques, rolagem, tipo de aparelho e
          navegador, e localização aproximada. Serve para entendermos o que
          funciona e o que precisa melhorar. Se você recusar, o Clarity não é
          carregado.
        </p>
        {process.env.NEXT_PUBLIC_META_PIXEL_ID && (
          <p className={paragraph}>
            <strong className="font-medium text-loja-dark">
              Pixel da Meta (somente com o seu aceite).
            </strong>{' '}
            Se você aceitar, usamos o Pixel da Meta (Facebook e Instagram) para
            medir se os nossos anúncios levam a contatos, como cliques no
            WhatsApp, no telefone e no mapa. A Meta pode receber informações do
            seu navegador (páginas visitadas, cliques e identificadores) e
            usá-las conforme a política dela. Se você recusar, o Pixel não é
            carregado.
          </p>
        )}
        <p className={paragraph}>
          <strong className="font-medium text-loja-dark">
            Quando você fala conosco.
          </strong>{' '}
          Ao tocar no botão de WhatsApp ou no telefone, a conversa acontece
          fora do site, no WhatsApp ou na sua operadora. O que você nos enviar
          ali (nome, telefone, mensagem) é usado apenas para responder ao seu
          contato, e o WhatsApp trata esses dados segundo a política dele. Se
          você chegar por um anúncio nosso, o link traz o nome da campanha e
          nós o acrescentamos à mensagem pronta do WhatsApp, para sabermos qual
          anúncio gerou o contato.
        </p>
        <p className={paragraph}>
          <strong className="font-medium text-loja-dark">
            Mapa do Google.
          </strong>{' '}
          Perto do fim da página mostramos um mapa incorporado do Google Maps.
          Ao carregá-lo, o Google pode receber informações do seu navegador e
          usar cookies próprios, conforme a política de privacidade do Google.
        </p>
        <p className={paragraph}>
          <strong className="font-medium text-loja-dark">
            Links externos.
          </strong>{' '}
          Os links para o Instagram, o Caffè Schiètto e o Google Maps levam a
          sites de terceiros, que têm suas próprias políticas.
        </p>

        <h2 className={sectionTitle}>Cookies e a sua escolha</h2>
        <p className={paragraph}>
          Guardamos no seu navegador apenas a sua resposta ao aviso de cookies,
          para não perguntar de novo a cada visita. Você pode mudar de ideia a
          qualquer momento:
        </p>
        <p className="mt-4">
          <CookiePreferencesButton
            className={`${link} font-body text-base`}
          />
        </p>

        <h2 className={sectionTitle}>Seus direitos (LGPD)</h2>
        <p className={paragraph}>
          Pela Lei Geral de Proteção de Dados (Lei 13.709/2018), você pode
          pedir confirmação de que tratamos dados seus, acesso, correção,
          eliminação, informações sobre compartilhamento e a revogação do
          consentimento. Como não mantemos cadastro de visitantes, a forma mais
          simples de exercer esses direitos é falar com a gente:
        </p>
        <ul className="mt-3 list-disc space-y-1 pl-5 font-body text-base font-light text-loja-charcoal/80">
          <li>
            WhatsApp:{' '}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={link}
            >
              {PHONE_DISPLAY}
            </a>
          </li>
          <li>
            Telefone:{' '}
            <a href={PHONE_TEL} className={link}>
              {PHONE_DISPLAY}
            </a>
          </li>
          <li>Pessoalmente, na loja.</li>
        </ul>

        <h2 className={sectionTitle}>Mudanças nesta política</h2>
        <p className={paragraph}>
          Se mudarmos a forma como tratamos dados, atualizaremos esta página e
          a data acima.
        </p>
      </article>
    </main>
  )
}
