/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0B1A26',
          light: '#102433',
        },
        secondary: '#25313A',
        accent: '#B89A5E',
        beige: '#EAE3DA',
        ivory: '#FBF8F3',
        warmWhite: '#FFFDFC',
        stone: '#8A8F8C',
        whatsapp: '#25D366'
      },
      fontFamily: {
        sans: ['"Instrument Sans"', 'sans-serif'],
        display: ['Satoshi', 'sans-serif'],
        serif: ['Newsreader', 'serif'],
      }
    },
  },
  plugins: [],
}
