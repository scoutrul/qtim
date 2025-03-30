<script setup lang="ts">
import { ref, computed } from 'vue'
import ArticleGrid from '@/components/article/ArticleGrid.vue'
import Pagination from '@/components/ui/Pagination.vue'
import type { DisplayArticle } from '@/types/post'

interface Props {
  title: string
  articles: DisplayArticle[]
  itemsPerPage?: number
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Articles',
  itemsPerPage: 8
})

const currentPage = ref(1)
const totalPages = Math.ceil(props.articles.length / props.itemsPerPage)

// Вычисляем, какие статьи показывать на текущей странице
const displayedArticles = computed(() => {
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
  <section class="article-section py-16">
    <div class="container">
      <h2 class="text-4xl sm:text-5xl font-bold mb-8 sm:mb-12">{{ title }}</h2>
      
      <!-- Сетка статей -->
      <ArticleGrid :articles="displayedArticles" />
      
      <!-- Пагинация (если больше одной страницы) -->
      <Pagination 
        v-if="totalPages > 1"
        :current-page="currentPage" 
        :total-pages="totalPages" 
        :show-prev-button="false"
        @update:page="handlePageChange" 
      />
    </div>
  </section>
</template> 