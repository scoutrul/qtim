<template>
  <main>
    <!-- Секция статей со скелетонами при загрузке -->
    <ArticleSection 
      title="Articles" 
      :articles="processedPosts" 
      :items-per-page="postsPerPage"
      :is-loading="loading"
      :has-error="!!error"
      :error-message="error ? error.message : ''"
    />
  </main>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import ArticleSection from '@/components/article/ArticleSection.vue'
import { usePosts } from '@/composables/usePosts'
import type { DisplayArticle } from '@/types/post'

// Получаем данные и методы из композабла usePosts
const { posts, loading, error, fetchPosts, postsPerPage } = usePosts()

// Преобразуем данные из API в формат, который ожидает компонент ArticleSection
const processedPosts = computed<DisplayArticle[]>(() => {
  return posts.value.map(post => ({
    id: post.id,
    title: post.title,
    description: post.preview,
    imageUrl: post.image || `/images/articles/placeholder-${Math.floor(Math.random() * 8) + 1}.jpg`,
    link: `/article/${post.id}`
  }))
})

// Загружаем статьи при монтировании компонента
onMounted(async () => {
  await fetchPosts()
})
</script>

<style scoped>
/* Стили при необходимости */
</style> 