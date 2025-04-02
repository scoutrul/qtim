import type { Config } from 'tailwindcss'
import baseConfig from '../tailwind.config.js'

export default {
  ...baseConfig,
  content: [
    './stories/**/*.{vue,js,ts,jsx,tsx}',
    './components/**/*.{vue,js,ts,jsx,tsx}',
    './.storybook/preview.ts',
  ],
} satisfies Config
