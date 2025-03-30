<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-8">Добро пожаловать в блог</h1>
    
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