<template>
  <main>
    <!-- Индикатор загрузки -->
    <div v-if="loading" class="container py-16 min-h-[60vh] flex justify-center items-center">
      <div class="animate-pulse text-2xl">Загрузка статей...</div>
    </div>
    
    <!-- Сообщение об ошибке -->
    <div v-else-if="error" class="container py-16 min-h-[60vh] flex justify-center items-center">
      <div class="text-error text-xl">Ошибка загрузки статей. Попробуйте позже.</div>
    </div>
    
    <!-- Секция статей -->
    <ArticleSection 
      v-else
      title="Articles" 
      :articles="processedPosts" 
      :items-per-page="postsPerPage"
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