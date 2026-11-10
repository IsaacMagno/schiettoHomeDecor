import AnimatedSectionHeader from '@/components/ui/AnimatedSectionHeader'
import { Clock, MapPin, MessageCircle, Phone } from 'lucide-react'
import {
  CAFE_URL,
  INSTAGRAM_URL,
  MAPS_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_URL,
} from '@/lib/contact'

const SCHEDULE = [
  { label: 'Segunda a Sexta', value: '09h00 às 18h00' },
  { label: 'Sábado, domingo e feriados', value: '08h30 às 18h00' },
] as const

export default function Location() {
  return (
    <section id="localizacao" className="scroll-mt-20 px-3 pb-3 sm:px-4 sm:pb-4">
      <div className="overflow-hidden rounded-2xl bg-white px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
        <div className="grid grid-cols-1 gap-12 text-center md:grid-cols-3 md:gap-8 md:text-left">
          {/* Horários */}
          <div className="flex flex-col items-center md:items-start">
            <Clock
              className="text-loja-rosegold"
              size={28}
              strokeWidth={1.5}
              aria-hidden="true"
            />
            <h2 className="mt-4 font-display text-2xl font-semibold text-loja-dark">
              Horários
            </h2>
            <ul className="mt-6 space-y-4">
              {SCHEDULE.map((item) => (
                <li key={item.label}>
                  <p className="font-body text-sm font-normal text-loja-charcoal/70">
                    {item.label}
                  </p>
                  <p className="font-body text-sm font-medium text-loja-dark">
                    {item.value}
                  </p>
                </li>
              ))}
            </ul>
            <p className="mt-4 font-body text-xs italic text-loja-charcoal/70">
              A loja de decoração e o Caffè Schiètto funcionam nos mesmos
              horários.
            </p>
          </div>

          {/* Endereço */}
          <div className="flex flex-col items-center md:items-start">
            <MapPin
              className="text-loja-rosegold"
              size={28}
              strokeWidth={1.5}
              aria-hidden="true"
            />
            <h2 className="mt-4 font-display text-2xl font-semibold text-loja-dark">
              Como Chegar
            </h2>
            <address className="mt-6 space-y-1 font-body text-sm not-italic leading-relaxed text-loja-dark">
              <p className="font-semibold">Rua Primo Frazato, 30</p>
              <p>Centro — Pedreira, SP</p>
              <p>CEP: 13920-000</p>
            </address>
            <p className="mt-4 font-body text-sm leading-relaxed text-loja-charcoal">
              A loja fica no andar superior de um casarão histórico no centro de
              Pedreira — um endereço com charme e história, pensado para uma
              visita tranquila e inspiradora.
            </p>
            <p className="mt-3 font-body text-sm italic text-loja-muted">
              Mesmo endereço do{' '}
              <a
                href={CAFE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-loja-rosegold underline-offset-2 transition-colors hover:underline"
              >
                Caffè Schiètto
              </a>
            </p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-full border border-loja-rosegold px-7 py-2.5 font-body text-sm font-medium text-loja-rosegold transition-colors duration-300 hover:bg-loja-rosegold hover:text-loja-offwhite"
            >
              Ver no Google Maps
            </a>
          </div>

          {/* Contato */}
          <div className="flex flex-col items-center md:items-start">
            <Phone
              className="text-loja-rosegold"
              size={28}
              strokeWidth={1.5}
              aria-hidden="true"
            />
            <h2 className="mt-4 font-display text-2xl font-semibold text-loja-dark">
              Contato
            </h2>
            <p className="mt-6 font-body text-sm font-medium text-loja-dark">
              <a
                href={PHONE_TEL}
                className="transition-colors hover:text-loja-rosegold"
              >
                {PHONE_DISPLAY}
              </a>
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-loja-rosegold px-7 py-2.5 font-body text-sm font-semibold text-loja-offwhite transition-colors duration-300 hover:bg-loja-charcoal"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={1.5} />
              Chamar no WhatsApp
            </a>
            <div className="mt-8 space-y-2">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block font-body text-sm text-loja-muted transition-colors hover:text-loja-rosegold"
              >
                Instagram — @schiettohomedecor_
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 sm:mt-20">
          <AnimatedSectionHeader className="text-center">
            <h2 className="font-display text-2xl font-medium tracking-tight text-loja-dark sm:text-3xl">
              Nossa Localização
            </h2>
          </AnimatedSectionHeader>
          <div className="relative mt-8 aspect-video w-full overflow-hidden rounded-2xl shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.64!2d-46.9113622!3d-22.7414558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8dc2340609e5d%3A0x77811352a7470226!2sCaff%C3%A8%20Schi%C3%A8tto!5e0!3m2!1spt-BR!2sbr"
              className="absolute inset-0 h-full w-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Schiètto Home Decor em Pedreira, SP"
            />
          </div>
          <p className="mt-4 text-center font-body text-sm text-loja-muted">
            Rua Primo Frazato, 30 – Centro, Pedreira/SP
          </p>
        </div>
      </div>
    </section>
  )
}
