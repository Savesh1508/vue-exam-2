<template>
  <v-layout class="!h-screen">
    <!-- <appbar @toggle-sidebar="toggleSidebar" /> -->
    <v-main class="overflow-y-scroll">
      <v-container>
        <slot />
      </v-container>
    </v-main>
  </v-layout>
</template>

<script setup>
import { ref } from 'vue';
import {
  RT_ADMIN,
  MT_ADMIN
} from '@/constants/routes/admin';

// import Sidebar from '@/components/partials/sidebar.vue';
// import Appbar from '@/components/partials/appbar.vue';

const permanent = ref(true);

</script>
