<script setup lang="ts">
interface Props {
  alt?: string
  size?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<Props>(), {
  alt: 'Change language',
  size: 'md'
})

// Фиксированный размер флага внутри в зависимости от размера кнопки
const flagSizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-8 h-8'
}

// Размер кнопки
const buttonSizeClasses = {
  sm: 'w-10 h-10',
  md: 'w-[52px] h-[52px]',
  lg: 'w-16 h-16'
}
</script>

<template>
  <div 
    :class="`${buttonSizeClasses[size]} rounded-full overflow-hidden border-2 border-pagination-bg bg-white cursor-pointer flex items-center justify-center`"
    :title="alt"
  >
    <div :class="`${flagSizeClasses[size]} overflow-hidden rounded-full`">
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
  </div>
</template> 