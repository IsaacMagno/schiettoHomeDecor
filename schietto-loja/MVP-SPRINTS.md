# Estado do projeto e roadmap — Schiètto Home Decor

**Stack:** Next.js 14 · TypeScript · Tailwind · App Router
**Produção:** https://homedecor.schietto.com.br

## O que o site é

Vitrine da **Schiètto Home Decor**, loja de decoração de luxo em Pedreira, SP —
decoração, semijoias, pedras preciosas, almofadas, estofados, cobertas e mais,
no andar superior de um casarão histórico. **Não é e-commerce:** sem preços,
carrinho ou entrega. O site convida a se inspirar online e a visitar a loja ou
chamar no WhatsApp.

### Fluxo da página

```
Header → Hero → Intro → Experiências → Diferenciais → Composições → Galeria
       → Localização → Fechamento → Footer
(+ WhatsApp flutuante, Voltar ao topo, aviso de cookies)
Página extra: /privacidade
```

## Já entregue

- [x] Narrativa de loja de decoração de luxo (Hero, Intro, Experiências, Diferenciais)
- [x] Galeria com lightbox, WhatsApp flutuante, CTAs humanizados
- [x] SEO: título/descrição, Open Graph com imagem, canonical, `sitemap.xml`,
      `robots.txt`, JSON-LD `HomeGoodsStore` (endereço, telefone, horários)
- [x] Conteúdo visível sem depender de rolagem/JS e respeito a
      `prefers-reduced-motion`
- [x] Hero com foto certa por tamanho de tela (`<picture>`), sem pedido ao vídeo
      inexistente
- [x] LGPD: aviso de cookies, Clarity só após aceite, política de privacidade
- [x] Eventos de conversão no Clarity (WhatsApp, telefone, mapa, Instagram, café)
- [x] Limpeza: catálogos, Supabase e componentes sem uso removidos

## Backlog

1. **Fotos de almofadas, estofados, cobertas e pedras preciosas** — hoje o card
   "Casa e Conforto" usa ícone, e "Semijoias e Pedras" usa uma foto de joia.
   Mais fotos reais dessas linhas fortalecem o posicionamento de loja completa.
2. **Perfil da loja no Google Meu Negócio** com as mesmas fotos, horários e o
   link do site.
3. **Prova social** — depoimentos somente com reviews reais (Google/Instagram).
4. **Vídeo no Hero** — veja `public/video/README.md`.
5. **Mapa sob demanda** — carregar o Google Maps só após um clique (menos
   cookies de terceiros e página mais leve).
6. **Foto da consultora** (se a loja quiser dar rosto ao atendimento).

## Conteúdo de referência

- WhatsApp: `https://wa.me/551938937377` · Telefone: (19) 3893-7377
- Endereço: Rua Primo Frazato, 30 — Centro, Pedreira, SP (mesmo endereço do
  Caffè Schiètto)
- Horários: seg–sex 09h00–18h00 · sáb–dom 08h30–18h00
