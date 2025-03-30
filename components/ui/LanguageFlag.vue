<script setup lang="ts">
interface Props {
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
    :class="`${sizeClasses[size]} rounded-full overflow-hidden border border-light-gray cursor-pointer flex items-center justify-center`"
    :title="alt"
  >
    <svg width="100%" height="100%" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <clipPath id="circleClip">
        <circle cx="30" cy="30" r="30" />
      </clipPath>
      <g clip-path="url(#circleClip)">
        <rect width="60" height="60" fill="#012169" />
        <path d="M0,0 L60,60 M60,0 L0,60" stroke="#fff" stroke-width="6" />
        <path d="M30,0 L30,60 M0,30 L60,30" stroke="#fff" stroke-width="10" />
        <path d="M30,0 L30,60 M0,30 L60,30" stroke="#C8102E" stroke-width="6" />
        <path d="M0,0 L60,60 M60,0 L0,60" stroke="#C8102E" stroke-width="2" />
      </g>
    </svg>
  </div>
</template> 