<template>
  <div v-if="showWarning" class="orientation-warning">
    <div class="orientation-warning__content">
      <p class="orientation-warning__text">
        Пожалуйста, поверните устройство в портретную ориентацию для лучшего просмотра
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue'

  const showWarning = ref(false)

  const checkOrientation = () => {
    showWarning.value = window.innerWidth > window.innerHeight
  }

  onMounted(() => {
    checkOrientation()
    window.addEventListener('resize', checkOrientation)
    window.addEventListener('orientationchange', checkOrientation)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', checkOrientation)
    window.removeEventListener('orientationchange', checkOrientation)
  })
</script>

<style scoped>
  .orientation-warning {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
  }

  .orientation-warning__content {
    background-color: white;
    padding: 2rem;
    border-radius: 1rem;
    text-align: center;
    max-width: 90%;
  }

  .orientation-warning__text {
    font-size: 1.2rem;
    color: #333;
    margin: 0;
  }
</style>
