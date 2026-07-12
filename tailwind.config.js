/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          light: '#dfcfb7',
          DEFAULT: '#c5a880',
          dark: '#a38a5f',
        },
        luxury: {
          black: '#121212',
          charcoal: '#1a1a1a',
          dark: '#0a0a0a',
          beige: '#faf6f0',
          cream: '#fdfbf7',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Montserrat"', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to bottom, rgba(18,18,18,0.3) 0%, rgba(18,18,18,0.7) 100%)',
      },
      boxShadow: {
        'gold-glow': '0 4px 20px rgba(197, 168, 128, 0.15)',
        'premium': '0 10px 30px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}
