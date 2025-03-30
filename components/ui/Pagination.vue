<template>
  <div class="pagination flex items-center justify-center space-x-3">
    <button 
      @click="handlePrev" 
      class="w-10 h-10 flex items-center justify-center rounded-md bg-gray-100 hover:bg-gray-200 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      :disabled="currentPage <= 1"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
      </svg>
    </button>
    
    <!-- Номера страниц -->
    <div class="flex space-x-2">
      <button 
        v-for="page in displayedPages" 
        :key="page" 
        @click="goToPage(page)"
        :class="[
          'w-10 h-10 flex items-center justify-center rounded-md transition-colors duration-200',
          page === currentPage 
            ? 'bg-black text-white' 
            : 'bg-gray-100 hover:bg-gray-200'
        ]"
      >
        {{ page }}
      </button>
    </div>
    
    <button 
      @click="handleNext" 
      class="w-10 h-10 flex items-center justify-center rounded-md bg-gray-100 hover:bg-gray-200 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      :disabled="currentPage >= totalPages"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  currentPage: number;
  totalPages: number;
}>();

const emit = defineEmits<{
  prev: [];
  next: [];
  'update:currentPage': [page: number];
}>();

// Определяем, какие номера страниц показывать
const displayedPages = computed(() => {
  const pages = [];
  const maxPagesToShow = 5;
  
  if (props.totalPages <= maxPagesToShow) {
    // Если страниц меньше или равно maxPagesToShow, показываем все
    for (let i = 1; i <= props.totalPages; i++) {
      pages.push(i);
    }
  } else {
    // Определяем диапазон страниц для отображения
    let startPage = Math.max(1, props.currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = startPage + maxPagesToShow - 1;
    
    if (endPage > props.totalPages) {
      endPage = props.totalPages;
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
  }
  
  return pages;
});

const handlePrev = () => {
  if (props.currentPage > 1) {
    emit('prev');
    emit('update:currentPage', props.currentPage - 1);
  }
};

const handleNext = () => {
  if (props.currentPage < props.totalPages) {
    emit('next');
    emit('update:currentPage', props.currentPage + 1);
  }
};

const goToPage = (page: number) => {
  if (page !== props.currentPage) {
    emit('update:currentPage', page);
  }
};
</script> 