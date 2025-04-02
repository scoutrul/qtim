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
  import Header from '~/components/Header.vue'
  import Footer from '~/components/Footer.vue'
  import OrientationWarning from '~/components/OrientationWarning.vue'
  import BackToTop from '@/components/ui/BackToTop.vue'
</script>
