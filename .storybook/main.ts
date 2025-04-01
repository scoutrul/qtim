import type { UserConfig } from 'vite'
import { mergeConfig } from 'vite'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
  framework: '@storybook/vue3-vite',
  stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  core: {
    builder: '@storybook/builder-vite',
  },
  features: {
    storyStoreV7: true,
    buildStoriesJson: true,
    argTypeTargetsV7: true,
    warnOnLegacyHierarchySeparator: true,
  },
  async viteFinal(config: UserConfig) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          '@': resolve(__dirname, '../'),
          '~': resolve(__dirname, '../'),
        },
      },
      css: {
        postcss: {
          plugins: [
            tailwindcss({
              config: resolve(__dirname, '../tailwind.config.js'),
            }),
            autoprefixer(),
          ],
        },
      },
      build: {
        target: 'esnext',
        minify: 'terser',
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
        rollupOptions: {
          output: {
            manualChunks: {
              vendor: ['vue', 'vue-router'],
              storybook: ['@storybook/vue3', '@storybook/addon-essentials'],
            },
          },
        },
      },
    })
  },
}

export default config
