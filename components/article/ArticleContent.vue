<template>
  <div class="flex flex-col gap-8">
    <!-- About блок -->
    <div>
      <h2 class="text-base font-medium">About</h2>
    </div>

    <!-- Описание -->
    <div class="prose">
      <p class="text-base sm:text-lg">
        {{ article.description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { Post } from '@/types/post'

  defineProps<{
    article: Post
  }>()
</script>

<style scoped>
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
</style>
