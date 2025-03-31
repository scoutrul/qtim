<script setup lang="ts">
  import { useI18n } from '@/composables/useI18n'

  const { t } = useI18n()
</script>

<template>
  <main class="container mx-auto py-16 px-4">
    <h1 class="text-4xl font-bold mb-8">{{ t('navigation.works') }}</h1>
    <p class="text-xl">
      {{ t('works.description') }}
    </p>
  </main>
</template>
