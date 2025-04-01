<script setup lang="ts">
  defineProps<{
    href: string
  }>()
</script>

<template>
  <NuxtLink :to="href" class="group font-sans text-nav no-underline transition-color duration-300">
    <span class="relative">
      <slot />
      <span
        class="absolute bottom-[-4px] left-0 w-full h-[1px] bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"
      ></span>
    </span>
  </NuxtLink>
</template>
