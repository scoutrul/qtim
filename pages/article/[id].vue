<template>
  <div class="container mx-auto px-4 py-12 max-w-[1440px]">
    <div v-if="loading" class="text-center py-16">
      <p class="text-xl">Загрузка статьи...</p>
    </div>
    <div v-else-if="error" class="text-center text-red-500 py-16">
      <p class="text-xl">Ошибка загрузки статьи: {{ error.message }}</p>
    </div>
    <div v-else-if="post" class="article-content">
      <h1 class="text-5xl font-bold mb-8">{{ post.title }}</h1>
      
      <div v-if="post.image" class="mb-12 max-h-[600px] overflow-hidden">
        <img :src="post.image" :alt="post.title" class="w-full h-auto rounded-lg shadow-md">
      </div>
      
      <div class="mb-6 text-gray-600">
        <p>Дата публикации: {{ new Date(post.createdAt).toLocaleDateString() }}</p>
      </div>
      
      <div class="mb-12">
        <Typography text="About" variant="h5" class="mb-3" />
        <p class="text-xl">{{ post.description }}</p>
      </div>
      
      <!-- Кнопка для возврата к списку статей -->
      <button 
        @click="router.push('/')" 
        class="px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors duration-200"
      >
        Назад к списку статей
      </button>
    </div>
    <div v-else class="text-center py-16">
      <p class="text-xl">Статья не найдена</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { usePosts } from '@/composables/usePosts'
import Typography from '@/components/ui/Typography.vue'

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
  max-width: 900px;
  margin: 0 auto;
}
</style> 