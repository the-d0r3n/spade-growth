import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      'main-yellow': '#FFFF00',
      'dark-bg': '#0a0a0a',
      'black-color': '#000',
      'trsprnt': 'transparent',
    },
    rotate: {
      '20': '20deg',
      '10': '10deg',
      '5': '5deg',
      '3': '3deg',
    }
  },
  plugins: [],
}
export default config
