<template>
  <v-app>
    <slot />
  </v-app>
</template>

<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
</script>

<style lang="scss" scoped></style>
