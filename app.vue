<template>
  <div>
    <Head>
      <Link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" />
    </Head>
    <NuxtRouteAnnouncer />
    <Header />
    <NuxtPage />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
</script>