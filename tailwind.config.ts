import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'Verdigris':'#16BAC5',
        'Maya-blue':'#5FBFF9',
        'Magnolia':'#EFE9F4',
        'Eerie-black':'#171D1C',
        'Neon-blue':'#5863F8'
      }
    },
    screens: {
      'xxs':'375px', // min-width
    },
  },
  plugins: [],
}
export default config
