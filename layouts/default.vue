<template>
  <div>
    <Header />
    <main>
      <slot />
    </main>
    <Footer />
    <OrientationWarning />
    <BackToTop />
  </div>
</template>

<script setup lang="ts">
  import Header from '@/components/layout/Header.vue'
  import Footer from '@/components/layout/Footer.vue'
  import OrientationWarning from '@/components/ui/OrientationWarning.vue'
  import BackToTop from '@/components/ui/BackToTop.vue'
</script>
