<script setup lang="ts">
import Skeleton from '@/components/ui/Skeleton.vue'
import ImageSkeleton from '@/components/ui/ImageSkeleton.vue'
import { useSkeleton } from '@/composables/useSkeleton'

const { SKELETON_SIZES } = useSkeleton()
</script>

<template>
  <div class="flex flex-col gap-8">
    <!-- Скелетон заголовка -->
    <Skeleton 
      :class="[SKELETON_SIZES.H1, SKELETON_SIZES.WIDTH_3_4]" 
    />
    
    <!-- Скелетон изображения -->
    <ImageSkeleton 
      class="w-full" 
      aspectRatio="16/9" 
    />
    
    <!-- Скелетон описания -->
    <div class="space-y-4">
      <Skeleton 
        v-for="n in 4" 
        :key="n" 
        :class="[SKELETON_SIZES.TEXT_MEDIUM]" 
        :width="`${90 + Math.random() * 10}%`" 
      />
    </div>
  </div>
</template>

<style scoped>
/* Здесь не должно быть useSkeleton, так как это composable */
</style>
