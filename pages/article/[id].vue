<template>
  <main>
    <div v-if="loading" class="container py-16 sm:py-20">
      <!-- Скелетон заголовка -->
      <div class="h-12 bg-light-gray rounded skeleton-loading mb-6 max-w-2xl"></div>
      <div class="h-12 bg-light-gray rounded skeleton-loading mb-16 max-w-xl"></div>
      
      <!-- Скелетон изображения -->
      <div class="aspect-[16/9] bg-light-gray relative overflow-hidden mb-16 sm:mb-20 rounded-lg">
        <div class="absolute inset-0 skeleton-loading"></div>
      </div>
      
      <!-- Скелетон контента -->
      <div class="flex flex-col md:flex-row gap-8 sm:gap-12">
        <!-- Левая колонка - категория -->
        <div class="md:w-1/4">
          <div class="sticky top-8">
            <div class="h-6 bg-light-gray rounded skeleton-loading w-20 mb-4"></div>
          </div>
        </div>
        
        <!-- Правая колонка - контент -->
        <div class="md:w-3/4">
          <div class="prose">
            <div class="h-6 bg-light-gray rounded skeleton-loading mb-4"></div>
            <div class="h-6 bg-light-gray rounded skeleton-loading mb-4"></div>
            <div class="h-6 bg-light-gray rounded skeleton-loading mb-4"></div>
            <div class="h-6 bg-light-gray rounded skeleton-loading mb-4 w-3/4"></div>
            
            <div class="h-6 bg-light-gray rounded skeleton-loading mb-4 mt-8"></div>
            <div class="h-6 bg-light-gray rounded skeleton-loading mb-4"></div>
            <div class="h-6 bg-light-gray rounded skeleton-loading mb-4"></div>
            <div class="h-6 bg-light-gray rounded skeleton-loading mb-4 w-1/2"></div>
          </div>
        </div>
      </div>
    </div>
    
    <div v-else-if="error" class="container py-16 sm:py-20 min-h-[60vh] flex justify-center items-center">
      <div class="text-error text-xl">Ошибка загрузки статьи. Попробуйте позже.</div>
    </div>
    
    <div v-else-if="post" class="container py-16 sm:py-20">
      <!-- Заголовок статьи -->
      <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 sm:mb-16 max-w-4xl">
        {{ post.title }}
      </h1>
      
      <!-- Основное изображение -->
      <div class="mb-16 sm:mb-20 relative">
        <!-- Контейнер с фиксированным соотношением сторон 16:9 -->
        <div class="aspect-[16/9] overflow-hidden rounded-lg">
          <!-- Изображение статьи -->
          <img 
            v-if="!imageError && post.image"
            :src="post.image" 
            :alt="post.title"
            loading="lazy"
            @load="handleImageLoad"
            @error="handleImageError"
            class="w-full h-full object-cover" 
            :class="{'opacity-0': !imageLoaded}"
          />
          
          <!-- Заглушка при загрузке -->
          <div 
            v-if="!imageLoaded && !imageError && post.image" 
            class="absolute inset-0 bg-light-gray animate-pulse"
          ></div>
          
          <!-- Заглушка при отсутствии изображения или ошибке -->
          <ImagePlaceholder 
            v-if="imageError || !post.image" 
            :title="post.title"
            aspectRatio="landscape"
            class="absolute inset-0"
          />
        </div>
      </div>
      
      <!-- Контент статьи -->
      <div class="flex flex-col md:flex-row gap-8 sm:gap-12">
        <!-- Левая колонка - категория -->
        <div class="md:w-1/4">
          <div class="sticky top-8">
            <h2 class="text-base font-medium mb-4">About</h2>
          </div>
        </div>
        
        <!-- Правая колонка - контент -->
        <div class="md:w-3/4">
          <div class="prose">
            <p v-for="(paragraph, index) in descriptionParagraphs" :key="index" class="text-base sm:text-lg mb-6">
              {{ paragraph }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder.vue'
import { usePosts } from '@/composables/usePosts'

const route = useRoute()
const articleId = computed(() => route.params.id as string)
const { post, loading, error, fetchPostById } = usePosts()

// Статус загрузки изображения
const imageLoaded = ref(false)
const imageError = ref(false)

const handleImageLoad = () => {
  imageLoaded.value = true
}

const handleImageError = () => {
  imageError.value = true
}

// Разбиваем описание на параграфы
const descriptionParagraphs = computed(() => {
  if (!post.value?.description) return []
  return post.value.description.split('\n\n').filter(p => p.trim().length > 0)
})

// Загружаем статью при монтировании компонента
onMounted(async () => {
  await fetchPostById(articleId.value)
})
</script>

<style scoped>
/* Дополнительные стили для контента статьи */
.prose {
  color: #333;
  line-height: 1.8;
  max-width: none;
}

.prose p {
  margin-bottom: 1.5rem;
  font-size: 1.125rem;
}

@media (max-width: 640px) {
  .prose p {
    font-size: 1rem;
    line-height: 1.6;
  }
}

/* Анимация появления изображения */
img {
  transition: opacity 0.3s ease;
}

/* Стили для скелетона */
.skeleton-loading {
  position: relative;
  overflow: hidden;
}

.skeleton-loading::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: translateX(-100%);
  background-image: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0,
    rgba(255, 255, 255, 0.2) 20%,
    rgba(255, 255, 255, 0.5) 60%,
    rgba(255, 255, 255, 0)
  );
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  100% {
    transform: translateX(100%);
  }
}
</style> 