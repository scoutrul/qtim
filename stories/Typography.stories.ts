import type { Meta, StoryObj } from '@storybook/vue3'

const meta = {
  title: 'Design System/Typography',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Headings: Story = {
  render: () => ({
    template: `
      <div class="space-y-6">
        <h1 class="text-4xl font-bold">Heading 1 - Основной заголовок</h1>
        <h2 class="text-3xl font-bold">Heading 2 - Подзаголовок</h2>
        <h3 class="text-2xl font-bold">Heading 3 - Заголовок секции</h3>
        <h4 class="text-xl font-bold">Heading 4 - Подзаголовок секции</h4>
        <h5 class="text-lg font-bold">Heading 5 - Малый заголовок</h5>
      </div>
    `,
  }),
}

export const BodyText: Story = {
  render: () => ({
    template: `
      <div class="space-y-4">
        <p class="text-lg">Large body text - Крупный текст для важных параграфов и лидов. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p class="text-base">Regular body text - Обычный текст для основного контента. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p class="text-sm">Small body text - Мелкий текст для дополнительной информации. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p class="text-xs">Extra small text - Очень мелкий текст для сносок и метаданных. Lorem ipsum dolor sit amet.</p>
      </div>
    `,
  }),
}

export const FontWeights: Story = {
  render: () => ({
    template: `
      <div class="space-y-3">
        <p class="font-light">Light weight text - Облегченное начертание</p>
        <p class="font-normal">Normal weight text - Обычное начертание</p>
        <p class="font-medium">Medium weight text - Среднее начертание</p>
        <p class="font-semibold">Semibold weight text - Полужирное начертание</p>
        <p class="font-bold">Bold weight text - Жирное начертание</p>
      </div>
    `,
  }),
}

export const Links: Story = {
  render: () => ({
    template: `
      <div class="space-y-4">
        <div>
          <a href="#" class="text-base">Обычная ссылка</a>
        </div>
        <div>
          <a href="#" class="text-base hover:text-[#E2BEFF]">Ссылка с ховером</a>
        </div>
        <div>
          <a href="#" class="btn-lets-work px-4 py-2 rounded-full">Кнопка-ссылка</a>
        </div>
      </div>
    `,
  }),
}
