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
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  core: {
    disableTelemetry: true,
  },
  features: {
    storyStoreV7: true,
    buildStoriesJson: true,
    argTypeTargetsV7: true,
    warnOnLegacyHierarchySeparator: true,
  },
  staticDirs: ['../public'],
  async viteFinal(config: UserConfig) {
    return {
      ...config,
      build: {
        target: 'esnext',
        sourcemap: false,
      },
      resolve: {
        alias: {
          '@': new URL('../', import.meta.url).pathname,
          '~': new URL('../', import.meta.url).pathname,
        },
      },
    }
  },
}

export default config
