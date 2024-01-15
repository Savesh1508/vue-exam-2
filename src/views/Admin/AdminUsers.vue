<template>
  <Header />
  <section class="mt-6">
    <v-container>
      <div class="flex justify-center">
        <p class="font-semibold text-[30px] mb-[15px] mt-3">Users</p>
      </div>
      <div v-if="loading" class="relative text-center">
        <Loading />
      </div>
      <div v-else>
        <div>
          <UsersTable :users="users" />
        </div>
      </div>
    </v-container>
  </section>
</template>

<script setup>
import Header from "@/components/partials/Header.vue";

import Loading from '@/components/loading.vue';
import UsersTable from '@/components/Admin/usersTable.vue';

import { useAdmin } from '@/composables/admin';
const { users, loading } = useAdmin();
</script>
