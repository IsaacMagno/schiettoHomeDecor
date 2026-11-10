import {
  CAFE_URL,
  INSTAGRAM_URL,
  MAPS_URL,
  SITE_URL,
} from '@/lib/contact'

/**
 * Dados estruturados (schema.org) da loja física para o Google:
 * endereço, telefone, horários e perfis — ajuda nas buscas locais
 * ("decoração Pedreira", "semijoias Pedreira") e no painel do Maps.
 * Mantenha os horários em sincronia com a seção Localização.
 */
const data = {
  '@context': 'https://schema.org',
  '@type': 'HomeGoodsStore',
  '@id': `${SITE_URL}/#loja`,
  name: 'Schiètto Home Decor',
  description:
    'Loja de decoração de luxo no andar superior de um casarão histórico no centro de Pedreira, SP: decoração, semijoias, pedras preciosas, almofadas, estofados, cobertas e mais.',
  url: `${SITE_URL}/`,
  image: `${SITE_URL}/og-image.jpg`,
  logo: `${SITE_URL}/apple-icon.png`,
  telephone: '+55-19-3893-7377',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Rua Primo Frazato, 30',
    addressLocality: 'Pedreira',
    addressRegion: 'SP',
    postalCode: '13920-000',
    addressCountry: 'BR',
  },
  hasMap: MAPS_URL,
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday', 'Sunday'],
      opens: '08:30',
      closes: '18:00',
    },
  ],
  sameAs: [INSTAGRAM_URL],
  containedInPlace: {
    '@type': 'CafeOrCoffeeShop',
    name: 'Caffè Schiètto',
    url: CAFE_URL,
  },
}

export default function LocalBusinessJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
