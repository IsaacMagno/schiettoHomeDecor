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
          dark: '#24100A',
          charcoal: '#34130C',
          rosegold: '#8A5A12',
          blush: '#E6D5BA',
          champagne: '#F1E4CE',
          offwhite: '#FBF6EE',
          gold: '#D08F32',
          muted: '#7A6757',
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
