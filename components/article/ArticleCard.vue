<script setup lang="ts">
import { ref } from 'vue'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder.vue'

interface Props {
  title: string
  description: string
  imageUrl: string
  link: string
}

const props = defineProps<Props>()

// Отслеживание статуса загрузки изображения
const imageLoaded = ref(true)
const imageError = ref(false)

const handleImageError = () => {
  imageError.value = true
  imageLoaded.value = false
}

const handleImageLoad = () => {
  imageLoaded.value = true
  imageError.value = false
}
</script>

<template>
  <nuxt-link :to="link" class="article-card group block">
    <!-- Контейнер изображения с фиксированными пропорциями -->
    <div class="aspect-square overflow-hidden rounded-lg mb-3">
      <template v-if="!imageError">
        <img 
          :src="imageUrl" 
          :alt="title" 
          @error="handleImageError"
          @load="handleImageLoad"
          class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          v-show="imageLoaded"
        >
        <div v-show="!imageLoaded" class="w-full h-full bg-light-gray animate-pulse"></div>
      </template>
      
      <!-- Заглушка при ошибке загрузки -->
      <ImagePlaceholder 
        v-if="imageError" 
        :title="title" 
        aspectRatio="square"
      />
    </div>
    
    <!-- Содержимое карточки -->
    <h3 class="font-medium text-base mb-1 line-clamp-2">{{ title }}</h3>
    <p class="text-sm text-dark-gray line-clamp-2">{{ description }}</p>
  </nuxt-link>
</template>

<style scoped>
.article-card {
  height: 100%;
  display: flex;
  flex-direction: column;
}

/* Занимать всю высоту карточки */
.aspect-square {
  min-height: 200px;
}

@media (max-width: 640px) {
  .aspect-square {
    min-height: 160px;
  }
}
</style> 