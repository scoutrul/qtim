const baseConfig = require('../tailwind.config.js')

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...baseConfig,
  content: [
    ...baseConfig.content,
    '../stories/**/*.{js,ts,jsx,tsx,vue,mdx}',
    './.storybook/preview.{js,ts}',
  ],
}
