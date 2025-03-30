<script setup lang="ts">
import { ref, computed } from 'vue'
import ArticleGrid from '@/components/article/ArticleGrid.vue'
import ArticleCardSkeleton from '@/components/article/ArticleCardSkeleton.vue'
import Pagination from '@/components/ui/Pagination.vue'
import type { DisplayArticle } from '@/types/post'

interface Props {
  title: string
  articles: DisplayArticle[]
  itemsPerPage?: number
  isLoading?: boolean
  hasError?: boolean
  errorMessage?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Articles',
  itemsPerPage: 8,
  isLoading: false,
  hasError: false,
  errorMessage: 'Ошибка загрузки. Попробуйте позже.'
})

const currentPage = ref(1)
const totalPages = computed(() => {
  if (!props.articles || props.articles.length === 0) return 0
  return Math.ceil(props.articles.length / props.itemsPerPage)
})

// Вычисляем, какие статьи показывать на текущей странице
const displayedArticles = computed(() => {
  if (!props.articles || props.articles.length === 0) return []
  const startIndex = (currentPage.value - 1) * props.itemsPerPage
  const endIndex = startIndex + props.itemsPerPage
  return props.articles.slice(startIndex, endIndex)
})

// Обработчик изменения страницы
const handlePageChange = (page: number) => {
  currentPage.value = page
  // Прокрутка к началу статей при смене страницы
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <section class="article-section py-16 bg-white">
    <div class="container">
      <h2 class="text-4xl sm:text-5xl font-bold mb-8 sm:mb-12 font-tt-commons text-black">{{ title }}</h2>
      
      <!-- Сообщение об ошибке -->
      <div v-if="hasError" class="min-h-[40vh] flex justify-center items-center">
        <div class="text-error text-xl font-tt-commons">{{ errorMessage }}</div>
      </div>
      
      <!-- Скелетоны при загрузке -->
      <div v-else-if="isLoading" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        <ArticleCardSkeleton v-for="i in itemsPerPage" :key="i" />
      </div>
      
      <!-- Сетка статей -->
      <template v-else>
        <ArticleGrid :articles="displayedArticles" />
        
        <!-- Пагинация (если больше одной страницы) -->
        <Pagination 
          v-if="totalPages > 1"
          :current-page="currentPage" 
          :total-pages="totalPages" 
          :show-prev-button="false"
          @update:page="handlePageChange" 
          class="font-tt-commons"
        />
      </template>
    </div>
  </section>
</template> 