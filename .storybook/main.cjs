const { mergeConfig } = require('vite')
const path = require('path')
const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')

/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
  framework: '@storybook/vue3-vite',
  stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  core: {
    builder: '@storybook/builder-vite',
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '../'),
          '~': path.resolve(__dirname, '../'),
        },
      },
      css: {
        postcss: {
          plugins: [
            tailwindcss({
              config: path.resolve(__dirname, '../tailwind.config.js'),
            }),
            autoprefixer(),
          ],
        },
      },
    })
  },
}

module.exports = config 