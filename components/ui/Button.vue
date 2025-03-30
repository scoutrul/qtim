<template>
  <button :class="classes">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ColorName } from '@/types/colors'

interface Props {
  variant?: 'primary' | 'secondary' | 'text'
  size?: 'sm' | 'md' | 'lg'
  color?: ColorName
  rounded?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  color: 'black',
  rounded: false
})

const classes = computed(() => {
  const baseClasses = 'transition-all duration-300 cursor-pointer font-sans text-button'
  
  const variantClasses = {
    primary: `bg-${props.color} text-white hover:bg-dark-gray`,
    secondary: `bg-transparent text-${props.color} border border-${props.color} hover:bg-light-gray`,
    text: `bg-transparent text-${props.color} hover:text-gray-600 hover:underline`
  }
  
  const sizeClasses = {
    sm: 'px-3 py-1',
    md: 'px-5 py-2.5',
    lg: 'px-6 py-3'
  }

  const roundedClass = props.rounded 
    ? 'rounded-full' 
    : props.variant === 'text' ? '' : 'rounded-button'
  
  return `${baseClasses} ${variantClasses[props.variant]} ${sizeClasses[props.size]} ${roundedClass}`
})
</script> 