<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  title?: string
  aspectRatio?: 'square' | 'landscape' | 'custom'
  width?: string
  height?: string
  bgColor?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Изображение',
  aspectRatio: 'square',
  width: '100%',
  height: 'auto',
  bgColor: 'bg-light-gray'
})

// Класс соотношения сторон
const aspectRatioClass = computed(() => {
  switch (props.aspectRatio) {
    case 'square': return 'aspect-square'
    case 'landscape': return 'aspect-[16/9]'
    default: return ''
  }
})
</script>

<template>
  <div 
    :class="[
      aspectRatioClass, 
      bgColor, 
      'rounded-lg flex items-center justify-center overflow-hidden'
    ]"
    :style="aspectRatio === 'custom' ? { width, height } : {}"
  >
    <div class="text-center p-4">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        class="w-12 h-12 mx-auto mb-2 text-gray-400"
      >
        <path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5-7l-3 3.72L9 13l-3 4h12l-4-5z"/>
      </svg>
      <p class="text-sm text-gray-500">{{ title }}</p>
    </div>
  </div>
</template> 