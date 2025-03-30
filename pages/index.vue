<template>
  <div class="container mx-auto px-4 py-8 max-w-[1440px]">
    <h1 class="text-5xl font-bold mb-12">Articles</h1>
    
    <!-- Используем компонент ArticlesList для отображения списка статей -->
    <ArticlesList />
  </div>
</template>

<script setup lang="ts">
import ArticlesList from '@/components/pages/ArticlesList.vue'
</script>

<style scoped>
/* Стили при необходимости */
</style> 