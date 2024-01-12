<template>
  <Header />
  <app-layout>
    <router-view />
  </app-layout>
  <Footer />
</template>

<script setup>
  import Footer from "@/components/partials/Footer.vue";
  import Header from "@/components/partials/Header.vue";
  import AppLayout from '@/layouts/AppLayout.vue';
</script>

<!-- <style>
::-webkit-scrollbar {
  display: none;
}
</style> -->
