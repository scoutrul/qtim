<template>
  <div class="container mx-auto px-4 py-8">
    <div v-if="loading" class="text-center">
      <p class="text-xl">Загрузка статьи...</p>
    </div>
    <div v-else-if="error" class="text-center text-red-500">
      <p class="text-xl">Ошибка загрузки статьи: {{ error.message }}</p>
    </div>
    <div v-else-if="post" class="article-content">
      <h1 class="text-3xl font-bold mb-4">{{ post.title }}</h1>
      <div class="text-gray-500 mb-6">
        <p>Дата публикации: {{ new Date(post.createdAt).toLocaleDateString() }}</p>
      </div>
      <div v-if="post.image" class="mb-6">
        <img :src="post.image" :alt="post.title" class="w-full h-auto rounded-lg shadow-md">
      </div>
      <p class="text-xl mb-8">{{ post.description }}</p>
      
      <!-- Кнопка для возврата к списку статей -->
      <button 
        @click="router.push('/')" 
        class="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors duration-200"
      >
        Назад к списку статей
      </button>
    </div>
    <div v-else class="text-center">
      <p class="text-xl">Статья не найдена</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { usePosts } from '../../composables/usePosts'

const route = useRoute()
const router = useRouter()
const { post, error, loading, fetchPostById } = usePosts()

// Получаем ID статьи из параметров маршрута
const articleId = route.params.id as string

// Загружаем данные статьи при монтировании компонента
onMounted(async () => {
  if (articleId) {
    await fetchPostById(articleId)
  }
})
</script>

<style scoped>
.article-content {
  max-width: 800px;
  margin: 0 auto;
}
</style> 