<template>
  <div>
    <Header />
    <slot />
    <Footer />
    <BackToTop />
  </div>
</template>

<script setup>
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
import BackToTop from '@/components/ui/BackToTop.vue'
</script> 