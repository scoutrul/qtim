<template>
  <div class="flex justify-start mt-12 sm:mt-16">
    <div class="flex items-center gap-3">
      <!-- Кнопки с номерами страниц -->
      <PaginationButton 
        v-for="page in visiblePageNumbers" 
        :key="page" 
        :page="page"
        :isActive="page === currentPage"
        @click="goToPage(page)"
      />
      
      <!-- Кнопка "Вперед" -->
      <PaginationButton 
        v-if="showNextButton" 
        isArrow 
        direction="next" 
        :disabled="currentPage >= totalPages"
        @click="goToPage(currentPage + 1)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import PaginationButton from '@/components/ui/PaginationButton.vue'

interface Props {
  currentPage: number
  totalPages: number
  maxVisiblePages?: number
  showNextButton?: boolean
  showPrevButton?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  currentPage: 1,
  totalPages: 5,
  maxVisiblePages: 5,
  showNextButton: true,
  showPrevButton: false
})

const emit = defineEmits<{
  'update:page': [page: number]
}>()

// Определяем видимые номера страниц
const visiblePageNumbers = computed(() => {
  // Если общее число страниц меньше максимального числа видимых страниц,
  // показываем все страницы
  if (props.totalPages <= props.maxVisiblePages) {
    return Array.from({ length: props.totalPages }, (_, i) => i + 1)
  }
  
  // Иначе показываем ограниченное количество страниц вокруг текущей
  let startPage = Math.max(1, props.currentPage - Math.floor(props.maxVisiblePages / 2))
  const endPage = Math.min(props.totalPages, startPage + props.maxVisiblePages - 1)
  
  // Корректируем startPage, если endPage достигает totalPages
  startPage = Math.max(1, endPage - props.maxVisiblePages + 1)
  
  return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i)
})

const goToPage = (page: number) => {
  if (page >= 1 && page <= props.totalPages) {
    emit('update:page', page)
  }
}
</script> 