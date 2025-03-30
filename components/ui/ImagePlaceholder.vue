<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  title: string
  aspectRatio?: 'square' | 'landscape' | 'portrait' | 'auto'
  maxTitleLength?: number
}

const props = withDefaults(defineProps<Props>(), {
  aspectRatio: 'square',
  maxTitleLength: 60
})

// Вычисляем класс для соотношения сторон
const aspectRatioClass = computed(() => {
  const ratios = {
    square: 'aspect-square',
    landscape: 'aspect-[16/9]',
    portrait: 'aspect-[3/4]',
    auto: ''
  }
  
  return ratios[props.aspectRatio] || 'aspect-square'
})

// Ограничиваем длину заголовка для отображения
const truncatedTitle = computed(() => {
  if (props.title.length <= props.maxTitleLength) {
    return props.title
  }
  return props.title.slice(0, props.maxTitleLength) + '...'
})
</script>

<template>
  <div 
    class="image-placeholder w-full h-full flex items-center justify-center bg-light-gray text-dark-gray"
    :class="aspectRatioClass"
  >
    <div class="text-center p-4">
      <svg class="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
      </svg>
      <span class="text-sm font-medium line-clamp-2">{{ truncatedTitle }}</span>
    </div>
  </div>
</template> 