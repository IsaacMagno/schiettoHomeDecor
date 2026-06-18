import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        loja: {
          dark: '#1C1C1E',
          charcoal: '#2D2D2D',
          rosegold: '#B76E79',
          blush: '#E8C4C4',
          champagne: '#F0E0C8',
          offwhite: '#FAF7F4',
          gold: '#C9A96E',
          muted: '#8A8A8A',
        },
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
      },
    },
  },
  plugins: [],
}
export default config
