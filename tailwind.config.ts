import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        ink: '#000000',
        paper: '#ffffff',
        gray600: '#666666',
        gray500: '#969696',
        gray300: '#cccccc',
        gray200: '#e3e3e3',
        gray100: '#f0f0f0'
      },
      borderRadius: {
        pill: '64px'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'Inter', 'sans-serif']
      }
    }
  },
  plugins: []
}

export default config

