<template>
  <div class="container mx-auto px-4 py-8">
    <Typography text="Блог" variant="h1" class="mb-8" />
    <div v-if="loading" class="text-center">
      <Typography text="Загрузка..." variant="body" />
    </div>
    <div v-else-if="error" class="text-center text-red-500">
      <Typography :text="`Ошибка: ${error.message}`" variant="body" />
    </div>
    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <ArticleCard
        v-for="post in posts"
        :key="post.id"
        :title="post.title"
        :description="post.description"
        @click="navigateToArticle(post.id)"
        class="cursor-pointer"
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

const { posts, loading, error, fetchPosts } = usePosts()
const router = useRouter()

// Загрузить посты при монтировании компонента
onMounted(() => {
  fetchPosts()
})

const navigateToArticle = (id: string) => {
  router.push(`/article/${id}`)
}
</script> 