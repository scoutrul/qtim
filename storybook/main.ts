import type { StorybookConfig } from '@storybook/vue3-vite'

const config: StorybookConfig = {
  framework: '@storybook/vue3-vite',
  stories: ['../components/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  // ... остальная конфигурация
}
