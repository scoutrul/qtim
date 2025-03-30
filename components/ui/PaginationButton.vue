<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  page?: number         // Номер страницы (если не стрелка)
  isActive?: boolean    // Активна ли кнопка
  isArrow?: boolean     // Является ли кнопка стрелкой
  disabled?: boolean    // Отключена ли кнопка
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
  click: []
}>()

// Определяем классы для кнопки
const buttonClasses = computed(() => {
  const baseClasses = 'w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-200 text-lg font-medium'
  
  if (props.disabled) {
    return `${baseClasses} bg-gray-100 text-gray-400 cursor-not-allowed`
  }
  
  if (props.isActive) {
    return `${baseClasses} bg-black text-white`
  }
  
  return `${baseClasses} bg-gray-100 text-black hover:bg-gray-200`
})

// Содержимое кнопки
const buttonContent = computed(() => {
  if (props.isArrow) {
    return props.direction === 'next' ? 
      '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>' : 
      '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>'
  }
  
  return props.page !== undefined ? props.page : ''
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
    @click="handleClick"
    :disabled="disabled"
    :aria-current="isActive ? 'page' : undefined"
    :aria-label="isArrow 
      ? (direction === 'next' ? 'Следующая страница' : 'Предыдущая страница') 
      : `Страница ${page}`"
  >
    <template v-if="isArrow">
      <span v-if="direction === 'next'" class="sr-only">Следующая страница</span>
      <span v-else class="sr-only">Предыдущая страница</span>
      <svg v-if="direction === 'next'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
      </svg>
    </template>
    <template v-else>
      {{ page }}
    </template>
  </button>
</template> 