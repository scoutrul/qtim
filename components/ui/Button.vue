<template>
  <button
    :class="[
      'inline-flex items-center justify-center transition-colors',
      rounded ? 'rounded-full' : 'rounded-lg',
      size === 'lg' ? 'px-6 py-4 text-lg' : 'px-4 py-2 text-base',
      'hover:bg-[#E2BEFF]',
    ]"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
  defineProps<{
    size?: 'md' | 'lg'
    rounded?: boolean
  }>()
</script>
