<script setup lang="ts">
defineProps<{
  title?: string;
  subtitle?: string;
}>();
</script>

<template>
  <div class="mb-16">
    <p v-if="subtitle" class="text-base mb-4">{{ subtitle }}</p>
    <div v-if="title" class="text-6xl font-medium border-b border-black pb-2">
      {{ title }}
      <span class="block border-b border-black pb-2 mt-2">together</span>
    </div>
    <div v-else>
      <img src="@/assets/images/lets-work-together.svg" alt="Let's work together" class="w-full max-w-[300px] md:max-w-[400px] xl:max-w-[464px]" />
    </div>
  </div>
</template> 