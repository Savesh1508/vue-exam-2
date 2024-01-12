<template>
  <div class="bg-black text-white font-semibold py-3 text-center cursor-pointer" @click="getUsers">Users</div>
  <section class="bg-[#c9a456] text-[14px] mb-[30px]">
    <v-container>
      <div class=" text-white text-center py-[12px]">
        NEW YEAR SALE! Extra 40% OFF SITEWIDE including already discounted products with code: NEWYEAR40 For a limited
        time ONLY!
      </div>
    </v-container>
    <img src="../../assets/images/1.webp" alt="">
  </section>

  <section>
    <v-container>
      <div class="flex justify-center">
        <p class="font-semibold text-[22px] mb-[15px]">Shop by Collection</p>
      </div>
      <div v-if="loading" class="relative text-center">
        <Loading />
      </div>
      <div v-else>
        <div>
          <CollectionTable :collections="collection" />
        </div>
      </div>
    </v-container>
  </section>

  <section>
    <v-container>
      <div class="relative">
        <img src="../../assets/images/2.webp" class="" alt="" style="filter: brightness(0.4);">
        <!-- Установите значение яркости по вашему выбору (0.5 для половины яркости, например) -->
        <div class="absolute top-0 left-0 right-0 bottom-0  flex items-center justify-center flex-col">
          <p class="text-white text-center text-[15px] mb-3">+100 000 SOLD</p>
          <p class="text-white text-center text-[90px] mb-9">ALL TIME FAVORITES</p>
          <button class="text-red-800 px-5 py-[10px] rounded-[15px] bg-[#fff] hover:bg-red-900 hover:text-white">
            SHOP EDUCATIONAL TOWERS
          </button>
        </div>
      </div>
    </v-container>
  </section>

  <section class="mt-6">
    <v-container>
      <div class="flex justify-center">
        <p class="font-semibold text-[30px] mb-[15px] mt-3">Team</p>
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
import { useRouter } from 'vue-router';
import Loading from '@/components/loading.vue';
import CollectionTable from '@/components/partials/collectionTable.vue';
import TeamTable from '@/components/partials/teamTable.vue';
const router = useRouter();

import { useMain } from "@/composables/index";

const getUsers = () => {
  router.push({ name: 'admin-users' });
};
const { collection, loading, team } = useMain()

</script>
