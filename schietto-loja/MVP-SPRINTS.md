# MVP Sprints — Schiètto Home Decor & Semijoias

Roadmap enxuto para evoluir o site de **vitrine presencial** para posicionamento **premium** — narrativa, confiança, consultoria e conversão.

**Stack:** Next.js 14 · TypeScript · Tailwind · App Router  
**Pasta do projeto:** `schietto-loja/`

---

## Visão do MVP

O site convida o visitante a **se inspirar online** e **conhecer a loja pessoalmente** em Pedreira, SP — no andar superior de um casarão histórico. Não é e-commerce: sem preços, nomes ou referências de produtos.

### Fluxo da página (pós-MVP)

```
Header → Hero → Sobre → Consultoria → Galeria → Localização → Footer
         (+ WhatsApp flutuante + Voltar ao topo)
```

---

## Escopo

### Dentro do MVP

| Área | Entrega |
|------|---------|
| Hero | Copy premium, casarão, Pedreira, CTAs aspiracionais |
| Sobre | História de marca + 4 cards (loja física) |
| Consultoria | Seção Cláudia (texto + placeholder foto) |
| Galeria | Lightbox + copy editorial |
| Conversão | WhatsApp flutuante + CTAs humanizados |
| Localização | Casarão histórico / andar superior |
| Vídeo | Slot no Hero com fallback para imagens |
| Deploy | Vercel + SEO |

### Fora do MVP (backlog)

- [ ] Catálogos Home Decor / Semijoias reativados
- [ ] Seção “Ambientes” (Sala, Quarto…) — exige fotos de composição
- [ ] Depoimentos — **somente reviews reais** (Google / Instagram)
- [ ] E-commerce, preços, entrega, “compra segura”
- [ ] Supabase ativo no site

---

## Sprint 1 — Narrativa premium (Hero + SEO)

**Objetivo:** Primeira impressão de marca lifestyle, não catálogo.

**Arquivos:** `components/sections/Hero.tsx`, `app/layout.tsx`

### Tarefas

- [x] Headline/subtitle premium (“Elegância em cada detalhe”)
- [x] Mencionar casarão histórico e Pedreira no subtítulo
- [x] CTAs: “Explorar a galeria” + “Conhecer a loja”
- [x] Metadata e Open Graph revisados
- [x] Alt text das imagens do hero

### Critérios de aceite

- [x] Tom editorial, sem lista de instruções ao usuário
- [x] Mobile legível
- [x] `npm run build` sem erros

---

## Sprint 2 — História e confiança (Sobre + cards)

**Objetivo:** Contar história da Schiètto e quebrar objeções da visita presencial.

**Arquivos:** `components/sections/About.tsx`

### Tarefas

- [x] Copy de marca (bom gosto, curadoria, experiência na loja)
- [x] 4 cards: Curadoria · Atendimento · Qualidade · Casarão em Pedreira
- [x] Ícones Lucide no lugar de emojis
- [x] Manter layout 55/45 e `AnimatedSectionHeader`

### Critérios de aceite

- [x] `#sobre` funciona como “Quem somos”
- [x] Sem menção a entrega/compra online

---

## Sprint 3 — Consultoria Cláudia

**Objetivo:** Destaque humano e autoridade.

**Arquivos:** `components/sections/Consultant.tsx`, `app/page.tsx`, `Header.tsx`

### Tarefas

- [x] Seção entre Sobre e Galeria (`id="consultoria"`)
- [x] Layout texto + placeholder foto
- [x] Copy aprovado da consultora
- [x] CTA WhatsApp “Fale com nossa consultora”
- [x] Link no header

### Critérios de aceite

- [x] Responsivo (stack no mobile)
- [x] Placeholder até foto real

---

## Sprint 4 — Conversão (WhatsApp + CTAs)

**Objetivo:** Facilitar contato sem poluir o visual.

**Arquivos:** `components/ui/WhatsAppFloat.tsx`, `VisitStoreCTA.tsx`, `Highlights.tsx`, `BackToTop.tsx`

### Tarefas

- [x] Botão flutuante WhatsApp (z-index abaixo do lightbox)
- [x] Posicionamento sem conflito com “Voltar ao topo”
- [x] Microcopy “Precisa de ajuda para escolher?”
- [x] Copy editorial na galeria
- [x] `aria-label` no botão flutuante

### Critérios de aceite

- [x] WhatsApp acessível em todo scroll
- [x] Safe-area no mobile
- [x] Lightbox continua funcional

---

## Sprint 5 — Vídeo (estrutura) + Localização

**Objetivo:** Preparar vídeo futuro; reforçar endereço simbólico.

**Arquivos:** `components/sections/HeroMedia.tsx`, `Location.tsx`, `public/video/`

### Tarefas

- [x] `HeroMedia`: vídeo `/video/hero.mp4` ou fallback collage
- [x] Specs de vídeo documentadas abaixo
- [x] Localização: parágrafo casarão histórico

### Specs do vídeo (quando disponível)

| Item | Recomendação |
|------|----------------|
| Arquivo | `public/video/hero.mp4` |
| Duração | 10–20 segundos |
| Formato | MP4 (H.264) |
| Orientação | Vertical ou horizontal (hero adapta com `object-cover`) |
| Tamanho | Preferir &lt; 5 MB |
| Comportamento | Autoplay mudo, loop, `playsInline` (mobile) |

### Critérios de aceite

- [x] Site funciona sem arquivo de vídeo
- [x] Adicionar vídeo = colocar arquivo + redeploy

---

## Sprint 6 — QA e deploy

**Objetivo:** MVP publicado e validado.

### Tarefas

- [x] `npm run build` sem erros
- [ ] Teste manual mobile (Hero, galeria, lightbox, WhatsApp, consultoria)
- [ ] Deploy Vercel (root: `schietto-loja/`) — executar manualmente: `cd schietto-loja && vercel --prod`
- [ ] URL preview/produção acessível

### Checklist mobile

- [ ] Hero legível e CTAs clicáveis
- [ ] Galeria + lightbox + loading spinner
- [ ] Consultoria legível
- [ ] WhatsApp flutuante não sobrepõe conteúdo crítico
- [ ] Mapa responsivo (16:9)

---

## Ordem e dependências

| Sprint | Depende de | Esforço ~ |
|--------|------------|-----------|
| 1 Hero | — | 2h |
| 2 Sobre | — | 2h |
| 3 Consultoria | Texto Cláudia | 3h |
| 4 WhatsApp | — | 2h |
| 5 Vídeo/Local | — | 2h |
| 6 Deploy | 1–5 | 2h |

Sprints 1 e 2 podem rodar em paralelo.

---

## Backlog pós-MVP

1. **Prova social** — `Testimonials.tsx` com 3+ reviews reais
2. **Ambientes inspirados** — moodboards (Sala, Quarto, Lavabo…)
3. **Foto real Cláudia** — substituir placeholder
4. **Vídeo na galeria** — clips curtos entre fotos
5. **Reativar vitrines** Home Decor / Semijoias
6. **Domínio customizado** + Google Business Profile

---

## Conteúdo de referência

### Consultora (Cláudia)

> Mais do que vender objetos de decoração, nossa consultora oferece uma experiência personalizada. Cada peça é indicada pensando na harmonia, elegância e personalidade do seu ambiente, garantindo escolhas que valorizam cada espaço com sofisticação.

### WhatsApp

- URL: `https://wa.me/551938937377`
- Telefone: (19) 3893-7377

### Endereço

- Rua Primo Frazato, 30 — Centro, Pedreira, SP
- Andar superior de casarão histórico (mesmo endereço do Caffè Schiètto)
