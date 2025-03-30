<template>
  <div class="pagination flex items-center justify-center space-x-4">
    <button 
      @click="handlePrev" 
      class="px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      :disabled="currentPage <= 1"
    >
      Предыдущая
    </button>
    <span class="text-gray-700">{{ currentPage }} из {{ totalPages }}</span>
    <button 
      @click="handleNext" 
      class="px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      :disabled="currentPage >= totalPages"
    >
      Следующая
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps({
  currentPage: {
    type: Number,
    required: true
  },
  totalPages: {
    type: Number,
    required: true
  }
})

const emit = defineEmits(['prev', 'next'])

const handlePrev = () => {
  emit('prev')
}

const handleNext = () => {
  emit('next')
}
</script> 