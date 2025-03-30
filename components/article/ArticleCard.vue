<script setup lang="ts">
import { ref } from 'vue'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder.vue'

interface Props {
  title: string
  description: string
  imageUrl?: string
  link: string
}

const props = defineProps<Props>()

// Отслеживание статуса загрузки изображения
const imageLoaded = ref(false)
const imageError = ref(false)

const handleImageError = () => {
  imageError.value = true
}

const handleImageLoad = () => {
  imageLoaded.value = true
}
</script>

<template>
  <div class="w-[280px] group hover:-translate-y-[20px] transition-all duration-300">
    <nuxt-link :to="link">
      <!-- Контейнер для изображения с фиксированным размером -->
      <div class="relative w-[280px] h-[280px] bg-light-gray overflow-hidden cursor-pointer hover:opacity-90 transition-opacity duration-300">
        <!-- Изображение -->
        <img 
          v-if="!imageError && props.imageUrl"
          :src="props.imageUrl" 
          :alt="props.title"
          loading="lazy"
          class="w-full h-full object-cover transition-opacity duration-300"
          :class="{'opacity-0': !imageLoaded}"
          @load="handleImageLoad"
          @error="handleImageError"
        />
        
        <!-- Скелетон при загрузке -->
        <div 
          v-if="!imageLoaded && !imageError && props.imageUrl" 
          class="absolute inset-0 bg-light-gray animate-pulse"
        ></div>
        
        <!-- Заглушка при отсутствии изображения или ошибке -->
        <div 
          v-if="imageError || !props.imageUrl" 
          class="absolute inset-0 flex items-center justify-center bg-light-gray"
        >
          <div class="text-dark-gray text-center p-4">
            <svg class="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span class="text-sm">{{ props.title }}</span>
          </div>
        </div>
      </div>
    </nuxt-link>
    
    <!-- Контент карточки -->
    <div class="p-4 w-[280px]">
      <nuxt-link :to="link">
        <p class="text-dark-gray text-[20px] font-normal line-clamp-3 hover:text-bg-purple transition-colors duration-300">{{ props.description }}</p>
      </nuxt-link>
      <div class="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <nuxt-link :to="link" class="text-bg-purple font-medium cursor-pointer">Read More</nuxt-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.article-card {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style> 