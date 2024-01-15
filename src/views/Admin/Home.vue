<template>
  <Header />
  <v-container>
    <div class="flex flex-col items-center">
      <router-link :to="{ name: RT_HOME }"
        class="cursor-pointer w-[300px] bg-amber-500 text-white text-center py-2 rounded mb-[3px] hover:bg-amber-600">
        <span class="font-semibold">Home</span>
      </router-link>
      <router-link :to="{ name: RT_ADMIN_USERS }"
        class="cursor-pointer w-[300px] bg-amber-500 text-white text-center py-2 rounded  hover:bg-amber-600">
        <span class="font-semibold">Users List</span>
      </router-link>
    </div>
  </v-container>
</template>

<script setup>
import {
  RT_ADMIN_USERS
} from '@/constants/routes/admin';
import {
  RT_HOME
} from '@/constants/routes/client';

import Header from "@/components/partials/Header.vue";
</script>
