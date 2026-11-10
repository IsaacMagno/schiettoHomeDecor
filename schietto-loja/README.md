# Schiètto Home Decor — site da loja

Site de apresentação da **Schiètto Home Decor**, loja de decoração de luxo em
Pedreira, SP (decoração, semijoias, pedras preciosas, almofadas, estofados,
cobertas e mais). Não é e-commerce: o objetivo é inspirar online e levar a
pessoa à loja ou ao WhatsApp.

**Produção:** https://homedecor.schietto.com.br (Vercel, deploy automático a
cada push na `main`).

## Stack

Next.js 14 (App Router) · TypeScript · Tailwind CSS · lucide-react

## Rodando localmente

```bash
npm install
npm run dev     # http://localhost:3002
npm run build   # build de produção + lint + checagem de tipos
```

## Estrutura

| Pasta | O que tem |
|-------|-----------|
| `app/` | `layout.tsx` (metadados/SEO), `page.tsx` (página única), `privacidade/`, `sitemap.ts`, `robots.ts` |
| `components/sections/` | Seções da página (Hero, Intro, Experiências, Diferenciais, Composições, Galeria, Localização...) |
| `components/ui/` | Peças reutilizáveis (Reveal, SplitText, lightbox, WhatsApp flutuante...) |
| `components/analytics/` | Aviso de cookies e carregamento do Microsoft Clarity |
| `components/seo/` | Dados estruturados (JSON-LD) da loja para o Google |
| `lib/contact.ts` | URL do site, WhatsApp, telefone, Instagram, Maps |
| `lib/gallery.ts` | Quais fotos aparecem em cada seção |
| `public/images/` | Fotos (WebP) e `public/og-image.jpg` (prévia ao compartilhar o link) |

## Como mudar as coisas mais comuns

- **Telefone, WhatsApp, Instagram, endereço do site:** `lib/contact.ts`.
- **Horários:** `components/sections/Location.tsx`, `components/layout/Footer.tsx`
  **e** `components/seo/LocalBusinessJsonLd.tsx` (o Google lê os horários dali).
- **Fotos do topo:** `HERO_SLIDES` em `lib/gallery.ts` (uma foto horizontal para
  desktop e uma vertical para celular por slide).
- **Vídeo no topo:** coloque `public/video/hero.mp4` e troque `HERO_VIDEO_SRC`
  em `lib/gallery.ts` (veja `public/video/README.md`).
- **Foto de almofadas/estofados/cobertas:** o card "Casa e Conforto" em
  `components/sections/Experiences.tsx` usa um ícone; para usar foto, troque
  `icon`/`caption` por `image`/`alt`.
- **Imagem de prévia ao compartilhar o link:** substitua `public/og-image.jpg`
  (1200×630). Redes sociais guardam a imagem antiga em cache; para atualizar,
  use o Sharing Debugger do Facebook.

## Privacidade e métricas

O Microsoft Clarity só é carregado **depois que a pessoa aceita** o aviso de
cookies (`components/analytics/CookieConsent.tsx`). Com o aceite, cliques em
WhatsApp, telefone, mapa, Instagram e Caffè Schiètto viram eventos no Clarity
(`whatsapp_click`, `telefone_click`, `maps_click`, `instagram_click`,
`cafe_click`). O texto da política fica em `app/privacidade/page.tsx` — se o
site passar a coletar mais dados, atualize-o.

## Anúncios (Meta) e WhatsApp

O objetivo do site é levar a pessoa ao **WhatsApp** (pedidos e reservas). Por
isso o botão principal do topo, a barra fixa do celular, o botão do canto e o
fechamento da página abrem o WhatsApp.

- **Mensagem por assunto:** os cards "Home Decor", "Semijoias e Pedras",
  "Composições" e "Casa e Conforto" abrem o WhatsApp com o assunto já escrito
  (`WHATSAPP_MESSAGES` em `lib/contact.ts`).
- **Origem do anúncio:** use links com UTM no anúncio, por exemplo
  `https://homedecor.schietto.com.br/?utm_source=meta&utm_campaign=video_natal`.
  O site acrescenta `(origem: meta / video_natal)` à mensagem do WhatsApp, e a
  loja vê de qual campanha o contato veio. Não usa cookies.
- **Pixel da Meta (opcional):** na Vercel, em *Settings → Environment
  Variables*, crie `NEXT_PUBLIC_META_PIXEL_ID` com o ID do Pixel e faça um novo
  deploy. O Pixel só carrega depois do aceite de cookies e registra `PageView`,
  `Contact` (WhatsApp/telefone) e `FindLocation` (mapa). Sem o ID, ele não existe.
- **Vídeo do anúncio no topo:** coloque o mesmo vídeo em `public/video/hero.mp4`
  e troque `HERO_VIDEO_SRC` em `lib/gallery.ts` (veja `public/video/README.md`).
  Vídeo igual ao do anúncio faz a pessoa reconhecer o que clicou.
- **"Aberto agora":** calculado no horário de Brasília por
  `components/ui/OpenNow.tsx`; mantenha os horários em sincronia com os outros
  arquivos citados acima.

## SEO

Metadados e Open Graph em `app/layout.tsx`; `sitemap.xml` e `robots.txt` são
gerados por `app/sitemap.ts` e `app/robots.ts`; dados da loja (JSON-LD) em
`components/seo/LocalBusinessJsonLd.tsx`.
