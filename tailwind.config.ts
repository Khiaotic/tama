import { Bebas_Neue } from 'next/font/google'
import type { Config } from 'tailwindcss'


const config: Config = {
  content: [
    // './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // css: [
  //   './styles/'
  // ]
  theme: {
    
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily:{
        'primary':[Bebas_Neue]
      }
    },
  },
  plugins: [],
}
export default config
