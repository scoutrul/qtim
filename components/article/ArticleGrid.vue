<script setup lang="ts">
import ArticleCard from '@/components/article/ArticleCard.vue'
import type { DisplayArticle } from '@/types/post'

interface Props {
  articles: DisplayArticle[]
}

defineProps<Props>()
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
    <ArticleCard 
      v-for="article in articles" 
      :key="article.id"
      :title="article.title"
      :description="article.description"
      :imageUrl="article.imageUrl"
      :link="article.link"
    />
  </div>
</template> 