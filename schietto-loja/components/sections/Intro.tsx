import Reveal from '@/components/ui/Reveal'
import SplitText from '@/components/ui/SplitText'

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
          <div className="grid gap-6">
            <p className="font-display text-lg font-normal leading-snug text-loja-dark sm:text-xl lg:text-3xl">
              No andar superior de um casarão histórico no centro de Pedreira,
              transformamos um espaço cheio de memória em um refúgio de estilo.
              Cada peça de decoração e cada semijoia passa por uma curadoria
              cuidadosa — pensada para quem acredita que os detalhes contam
              histórias.
            </p>
            <p className="font-display text-lg font-normal leading-snug text-loja-dark sm:text-xl lg:text-3xl">
              Aqui, sofisticação e acolhimento caminham juntos. Venha
              descobrir, com calma e sem pressa, o que combina com você.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
