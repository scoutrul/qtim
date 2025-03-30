<script setup lang="ts">
interface Props {
  src: string
  alt?: string
  size?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<Props>(), {
  alt: 'Change language',
  size: 'md'
})

const sizeClasses = {
  sm: 'w-6 h-6',
  md: 'w-8 h-8',
  lg: 'w-10 h-10'
}
</script>

<template>
  <div 
    :class="`${sizeClasses[size]} rounded-full bg-cover border border-light-gray cursor-pointer`"
    :style="`background-image: url('${src}')`"
    :title="alt"
  ></div>
</template> 