<template>
  <div class="article-card overflow-hidden bg-white hover:shadow-lg transition-all duration-300">
    <div v-if="image" class="aspect-video overflow-hidden">
      <img :src="image" :alt="title" class="w-full h-full object-cover">
    </div>
    <div class="p-6">
      <Typography :text="title" variant="h3" class="mb-3" />
      <Typography :text="description" variant="body" class="line-clamp-3" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Typography from '@/components/ui/Typography.vue'

defineProps<{
  title: string;
  description: string;
  image?: string;
}>();
</script> 