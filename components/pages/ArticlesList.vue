<template>
  <div class="container mx-auto px-4 py-8">
    <Typography text="Блог" variant="h1" class="mb-8" />
    <div v-if="loading" class="text-center">
      <Typography text="Загрузка..." variant="body" />
    </div>
    <div v-else-if="error" class="text-center text-red-500">
      <Typography :text="`Ошибка: ${error.message}`" variant="body" />
    </div>
    <div v-else-if="paginatedPosts.length === 0" class="text-center">
      <Typography text="Нет доступных статей" variant="body" />
    </div>
    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <ArticleCard
        v-for="post in paginatedPosts"
        :key="post.id"
        :title="post.title"
        :description="post.preview"
        @click="navigateToArticle(post.id)"
        class="cursor-pointer"
      />
    </div>
    
    <!-- Компонент пагинации -->
    <div v-if="totalPages > 1" class="mt-8 flex justify-center">
      <Pagination 
        :current-page="currentPage" 
        :total-pages="totalPages" 
        @prev="prevPage" 
        @next="nextPage"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { usePosts } from '../../composables/usePosts'
import Typography from '../ui/Typography.vue'
import ArticleCard from './ArticleCard.vue'
import Pagination from '../ui/Pagination.vue'

const router = useRouter()
const { 
  paginatedPosts, 
  loading, 
  error, 
  fetchPosts, 
  currentPage, 
  totalPages,
  nextPage,
  prevPage
} = usePosts()

// Загрузить посты при монтировании компонента
onMounted(() => {
  fetchPosts()
})

const navigateToArticle = (id: string) => {
  router.push(`/article/${id}`)
}
</script> 