import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      colors: {
        // Grayscale colors
        black: '#000000',
        'dark-gray': '#1A1A1A',
        gray: '#808080',
        'light-gray': '#F5F5F5',
        
        // Accent colors
        mint: '#98FFB0',
        purple: '#7B4EA8',
        lavender: '#E6D5FF',
        blue: '#0066FF',
      }
    }
  },
  plugins: [],
} satisfies Config 