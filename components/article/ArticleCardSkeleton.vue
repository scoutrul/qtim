<template>
  <div class="rounded-lg overflow-hidden bg-white shadow-sm">
    <!-- Скелетон изображения -->
    <div class="aspect-[16/9] bg-light-gray relative overflow-hidden">
      <div class="absolute inset-0 skeleton-loading"></div>
    </div>
    
    <!-- Скелетон контента -->
    <div class="p-4">
      <!-- Скелетон заголовка -->
      <div class="h-6 bg-light-gray rounded skeleton-loading mb-2"></div>
      <div class="h-6 bg-light-gray rounded skeleton-loading w-4/5 mb-4"></div>
      
      <!-- Скелетон текста -->
      <div class="h-4 bg-light-gray rounded skeleton-loading mb-2"></div>
      <div class="h-4 bg-light-gray rounded skeleton-loading mb-2"></div>
      <div class="h-4 bg-light-gray rounded skeleton-loading w-2/3"></div>
    </div>
  </div>
</template>

<style scoped>
.skeleton-loading {
  position: relative;
  overflow: hidden;
}

.skeleton-loading::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: translateX(-100%);
  background-image: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0,
    rgba(255, 255, 255, 0.2) 20%,
    rgba(255, 255, 255, 0.5) 60%,
    rgba(255, 255, 255, 0)
  );
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  100% {
    transform: translateX(100%);
  }
}
</style> 