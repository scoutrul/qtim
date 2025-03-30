<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import type { ColorName } from '@/types/colors'

interface Props {
  href: string
  exact?: boolean
  active?: boolean
  color?: ColorName
  hoverColor?: ColorName
}

const props = withDefaults(defineProps<Props>(), {
  href: '/',
  exact: false,
  active: false,
  color: 'black',
  hoverColor: 'dark-gray'
})

const route = useRoute()

const isActive = computed(() => {
  if (props.active) return true
  
  if (props.exact) {
    return route.path === props.href
  }
  return (route.path.startsWith(props.href) && props.href !== '/') || 
         (route.path === props.href && props.href === '/')
})

const classes = computed(() => {
  const baseClasses = 'font-sans text-nav no-underline transition-color duration-300'
  const colorClass = isActive.value ? `text-${props.hoverColor} font-medium` : `text-${props.color} hover:text-${props.hoverColor}`
  
  return `${baseClasses} ${colorClass}`
})
</script>

<template>
  <router-link :to="href" :class="classes">
    <slot></slot>
  </router-link>
</template> 