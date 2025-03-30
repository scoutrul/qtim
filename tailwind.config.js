/** @type {import('tailwindcss').Config} */
module.exports = {
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
        white: '#FFFFFF',
        'dark-gray': '#1A1A1A',
        gray: '#808080',
        'light-gray': '#F5F5F5',
        
        // Accent colors
        mint: '#98FFB0',
        purple: '#7B4EA8',
        lavender: '#E6D5FF',
        blue: '#0066FF',
      },
      fontFamily: {
        sans: ['Inter', 'Arial', 'sans-serif'],
        display: ['Inter', 'Arial', 'sans-serif'],
      },
      fontSize: {
        'logo': ['24px', { lineHeight: '32px', fontWeight: '700' }],
        'nav': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'button': ['16px', { lineHeight: '24px', fontWeight: '500' }],
      },
      borderRadius: {
        'button': '20px',
      },
      spacing: {
        'nav-gap': '20px',
        'header-padding': '20px',
      },
    }
  },
  plugins: [],
} 