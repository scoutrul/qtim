<template>
  <button :class="classes">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import type { ColorName } from '@/types/colors'

  interface Props {
    variant?: 'primary' | 'secondary' | 'text' | 'underlined'
    size?: 'sm' | 'md' | 'lg'
    color?: ColorName
    rounded?: boolean
  }

  const props = withDefaults(defineProps<Props>(), {
    variant: 'primary',
    size: 'md',
    color: 'black',
    rounded: false,
  })

  const classes = computed(() => {
    const baseClasses = 'transition-all duration-300 cursor-pointer font-sans text-button'

    const variantClasses = {
      primary: `bg-${props.color} text-white hover:bg-dark-gray`,
      secondary: `bg-transparent text-${props.color} border border-${props.color} hover:bg-light-gray`,
      text: `bg-transparent text-${props.color} hover:text-gray-600 hover:underline`,
      underlined: `bg-transparent text-${props.color} inline-block border-b border-${props.color} pb-2 font-tt-commons font-light`,
    }

    const sizeClasses = {
      sm: props.variant === 'underlined' ? 'text-base' : 'px-3 py-1',
      md: props.variant === 'underlined' ? 'text-lg' : 'px-5 py-2.5',
      lg: props.variant === 'underlined' ? 'text-xl' : 'px-6 py-3',
    }

    const roundedClass = props.rounded
      ? 'rounded-full'
      : props.variant === 'text' || props.variant === 'underlined'
        ? ''
        : 'rounded-button'

    return `${baseClasses} ${variantClasses[props.variant]} ${sizeClasses[props.size]} ${roundedClass}`
  })
</script>
