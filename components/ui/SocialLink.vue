<script setup lang="ts">
defineProps<{
  href: string;
  text: string;
}>();
</script>

<template>
  <a 
    :href="href" 
    class="text-base text-black hover:underline transition-all" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    {{ text }}
  </a>
</template> 