<template>
  <p :class="[
    'font-sans leading-relaxed',
    {
      'text-4xl font-bold tracking-tight text-gray-900': variant === 'h1',
      'text-3xl font-bold tracking-tight text-gray-800': variant === 'h2',
      'text-2xl font-semibold tracking-tight text-gray-800': variant === 'h3',
      'text-xl font-medium text-gray-700': variant === 'h4',
      'text-lg font-medium text-gray-700': variant === 'h5',
      'text-base text-gray-600': variant === 'body',
      'text-sm text-gray-500': variant === 'small',
      'text-xs text-gray-400': variant === 'tiny'
    }
  ]">
    {{ text }}
  </p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Typography',
  props: {
    text: {
      type: String,
      required: true
    },
    variant: {
      type: String,
      default: 'body',
      validator: (value: string) => {
        return ['h1', 'h2', 'h3', 'h4', 'h5', 'body', 'small', 'tiny'].includes(value)
      }
    }
  }
})
</script> 