<template>
  <button 
    class="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-md transition-colors"
    :class="copied ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'"
    @click="copyToClipboard"
  >
    <span>
      <svg v-if="copied" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
      </svg>
      <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path>
      </svg>
    </span>
    {{ copied ? successText : text }}
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  value: string
  text?: string
  successText?: string
  timeout?: number
}

const props = withDefaults(defineProps<Props>(), {
  text: 'Копировать',
  successText: 'Скопировано!',
  timeout: 2000
})

const copied = ref(false)

const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(props.value)
    copied.value = true
    
    setTimeout(() => {
      copied.value = false
    }, props.timeout)
  } catch (error) {
    console.error('Ошибка при копировании в буфер обмена:', error)
  }
}
</script> 