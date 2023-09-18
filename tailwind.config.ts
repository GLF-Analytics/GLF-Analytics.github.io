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
        "Midnight-green": "#003844",
        'Caribbean-Current':'#006C67',
        'Selective-yellow':'#FFB100',
        'Dutch-white':'#FFEBC6',
        'Periwinkle': 'E3D7FF',
        "Tropical-indigo": "AFA2FF",
        "Glaucous": "7A89C2",
        "Slate-gray":"72788D",
        "Ebony":"636B61"
      }
    },
  },
  plugins: [],
}
export default config
