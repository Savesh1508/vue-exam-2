<script setup>

import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/store/auth';
import {
  RT_HOME
} from '@/constants/routes/client';

const authStore = useAuthStore();

const router = useRouter();
const hasAccessToken = ref(!!localStorage.getItem('access_token'));

function handleLoginClick() {
  router.push('/login');
}

function handleLogoutClick() {
  authStore.clearUser();
}

</script>

<template>
  <nav class="flex justify-between mx-auto px-[100px] py-[10px] pb-3 border-b-[2px]">
    <router-link :to="{ name: RT_HOME }" class="cursor-pointer w-[220px]">
      <img src="../../assets/images/Logo_440x.png" alt="" class="w-[220px]">
    </router-link>
    <div class="flex justify-center items-center">
      <v-btn v-if="!hasAccessToken" @click="handleLoginClick"
        class="shadow-md font-semibold px-7 py-2 rounded-xl cursor-pointer hover:bg-amber-600 hover:text-white">
        Login
      </v-btn>
      <v-btn v-else @click="handleLogoutClick"
        class="shadow-md font-semibold px-7 py-2 rounded-xl cursor-pointer hover:bg-amber-600 hover:text-white">
        Logout
      </v-btn>
      <i class='ml-[15px] bx bx-search text-[30px] cursor-pointer'></i>
    </div>
  </nav>
</template>

<style></style>
