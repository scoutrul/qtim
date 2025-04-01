<script setup lang="ts">
  import { computed } from 'vue'

  interface ErrorObject {
    statusCode?: number
    message?: string
  }

  const props = defineProps({
    error: {
      type: Object as () => ErrorObject,
      required: true,
    },
  })

  const statusCode = computed(() => {
    return props.error.statusCode || 404
  })

  const errorMessage = computed(() => {
    return props.error.message || 'Произошла ошибка при загрузке'
  })

  const handleError = async () => {
    await clearError()
    await navigateTo('/')
  }
</script>

<template>
  <div class="h-screen flex flex-col items-center justify-center bg-white">
    <div class="container mx-auto px-4 py-8 text-center animate-fade-in">
      <h1 class="text-heading-4 mb-4 text-purple">{{ statusCode }}</h1>
      <h2 class="text-heading-5 mb-6 text-gray-800">{{ errorMessage }}</h2>
      <button
        class="bg-primary text-white py-2 px-6 rounded-button hover:bg-opacity-90 transition"
        @click="handleError"
      >
        <span class="font-medium">Вернуться на главную</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fade-in {
    animation: fadeIn 0.5s ease-out;
  }
</style>
