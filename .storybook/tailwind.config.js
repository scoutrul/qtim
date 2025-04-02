const baseConfig = require('../tailwind.config.js')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '../stories/**/*.{vue,js,ts,jsx,tsx}',
    '../components/**/*.{vue,js,ts,jsx,tsx}',
    './.storybook/preview.ts',
  ],
  theme: {
    extend: {
      fontFamily: {
        'tt-commons': ['TT Commons', 'sans-serif'],
      },
    },
  },
  plugins: [],
  // Наследуем базовую конфигурацию из основного проекта
  presets: [baseConfig],
}
