<script setup lang="ts">
  import { computed } from 'vue'

  interface Props {
    page?: number // Номер страницы (если не стрелка)
    isActive?: boolean // Активна ли кнопка
    isArrow?: boolean // Является ли кнопка стрелкой
    disabled?: boolean // Отключена ли кнопка
    direction?: 'next' | 'prev' // Направление стрелки
  }

  const props = withDefaults(defineProps<Props>(), {
    page: undefined,
    isActive: false,
    isArrow: false,
    disabled: false,
    direction: 'next',
  })

  const emit = defineEmits<{
    (e: 'click'): void
  }>()

  // Определяем классы для кнопки
  const buttonClasses = computed(() => {
    const baseClasses =
      'w-11 h-11 rounded-xl flex items-center justify-center transition-colors duration-200 text-base font-medium border'

    if (props.disabled) {
      return `${baseClasses} bg-pagination-bg text-gray-400 cursor-not-allowed border-pagination-bg`
    }

    if (props.isActive) {
      return `${baseClasses} bg-black text-white border-black cursor-default`
    }

    if (props.isArrow) {
      return `${baseClasses} bg-white text-black hover:bg-white hover:text-black hover:border-pagination-bg border-pagination-bg`
    }

    return `${baseClasses} bg-pagination-bg text-black hover:bg-white hover:text-black hover:border-pagination-bg border-pagination-bg`
  })

  // Обработчик клика по кнопке
  const handleClick = () => {
    if (!props.disabled) {
      emit('click')
    }
  }
</script>

<template>
  <button
    :class="buttonClasses"
    :disabled="disabled"
    :aria-current="isActive ? 'page' : undefined"
    :aria-label="
      isArrow
        ? direction === 'next'
          ? 'Следующая страница'
          : 'Предыдущая страница'
        : `Страница ${page}`
    "
    @click="handleClick"
  >
    <template v-if="isArrow">
      <span v-if="direction === 'next'" class="sr-only">Следующая страница</span>
      <span v-else class="sr-only">Предыдущая страница</span>
      <svg
        v-if="direction === 'next'"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class="w-5 h-5"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 5l7 7-7 7"
        ></path>
      </svg>
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class="w-5 h-5"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 19l-7-7 7-7"
        ></path>
      </svg>
    </template>
    <template v-else>
      {{ page }}
    </template>
  </button>
</template>
