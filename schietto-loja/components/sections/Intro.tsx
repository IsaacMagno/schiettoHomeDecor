import Reveal from '@/components/ui/Reveal'
import SplitText from '@/components/ui/SplitText'
import ScrollWords from '@/components/ui/ScrollWords'

const INTRO_TEXT = [
  'No andar superior de um casarão histórico no centro de Pedreira, transformamos um espaço cheio de memória em um refúgio de estilo. Da decoração às semijoias, das pedras preciosas às almofadas, estofados e cobertas, cada peça passa por uma curadoria cuidadosa — pensada para quem acredita que os detalhes contam histórias.',
  'Aqui, sofisticação e acolhimento caminham juntos. Venha descobrir, com calma e sem pressa, o que combina com você.',
] as const

export default function Intro() {
  return (
    <section id="sobre" className="scroll-mt-20 px-6 pb-32 pt-24 lg:pb-40 lg:pt-32">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-6 text-center">
        <SplitText
          as="h2"
          text="Onde o bom gosto encontra a sua casa"
          className="font-body text-xs font-medium uppercase tracking-[0.35em] text-loja-rosegold"
        />

        <Reveal delay={200}>
          <ScrollWords
            paragraphs={INTRO_TEXT}
            className="font-display text-lg font-normal leading-snug text-loja-dark sm:text-xl lg:text-3xl"
          />
        </Reveal>
      </div>
    </section>
  )
}
