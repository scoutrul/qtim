<script setup lang="ts">
import { computed } from 'vue'
import type { ColorName } from '@/types/colors'

interface Props {
  href: string
  active?: boolean
  color?: ColorName
  hoverColor?: ColorName
}

const props = withDefaults(defineProps<Props>(), {
  active: false,
  color: 'black',
  hoverColor: 'dark-gray'
})

const classes = computed(() => {
  const baseClasses = 'font-sans text-nav no-underline transition-color duration-300'
  const colorClass = props.active ? `text-${props.hoverColor}` : `text-${props.color} hover:text-${props.hoverColor}`
  
  return `${baseClasses} ${colorClass}`
})
</script>

<template>
  <a :href="href" :class="classes">
    <slot></slot>
  </a>
</template> 