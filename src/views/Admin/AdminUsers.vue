<template>
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
          <TeamTable :team="team" />
        </div>
      </div>
    </v-container>
  </section>
</template>

<script setup>
import VButton from '@/components/button.vue';
import Loading from '@/components/loading.vue';
import TeamTable from '@/components/partials/teamTable.vue';

import { useMain } from '@/composables/index';
const { team, loading } = useMain();
</script>
