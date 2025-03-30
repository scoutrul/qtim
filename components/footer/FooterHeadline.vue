<script setup lang="ts">
defineProps<{
  title?: string;
  subtitle?: string;
}>();
</script>

<template>
  <div class="mb-16">
    <p v-if="subtitle" class="text-base mb-4">{{ subtitle }}</p>
    <h2 class="text-6xl font-medium border-b border-black pb-2">
      {{ title || "Let's work" }}
      <span class="block border-b border-black pb-2 mt-2">together</span>
    </h2>
  </div>
</template> 