<template>
  <button :class="classes">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ColorName } from '@/types/colors'

interface Props {
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  color?: ColorName
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  color: 'black'
})

const classes = computed(() => {
  const baseClasses = 'rounded-button transition-background duration-300 cursor-pointer font-sans text-button'
  
  const variantClasses = {
    primary: `bg-${props.color} text-white hover:bg-dark-gray`,
    secondary: `bg-transparent text-${props.color} border border-${props.color} hover:bg-light-gray`
  }
  
  const sizeClasses = {
    sm: 'px-3 py-1',
    md: 'px-5 py-2.5',
    lg: 'px-6 py-3'
  }
  
  return `${baseClasses} ${variantClasses[props.variant]} ${sizeClasses[props.size]}`
})
</script> 