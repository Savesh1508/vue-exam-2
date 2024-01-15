<template>
  <Header />
  <section class="bg-[#c9a456] text-[14px] mb-[30px]">
    <v-container>
      <div class="text-white text-center py-[12px]">
        NEW YEAR SALE! Extra 40% OFF SITEWIDE including already discounted products with code: NEWYEAR40 For a limited
        time ONLY!
      </div>
    </v-container>
    <img src="../assets/images/1.webp" alt="">
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
        <img src="../assets/images/2.webp" class="" alt="" style="filter: brightness(0.4);">
        <div class="absolute top-0 left-0 right-0 bottom-0  flex items-center justify-center flex-col">
          <p class="text-white text-center text-[15px] mb-3">+100 000 SOLD</p>
          <p class="text-white text-center text-[90px] mb-9">ALL TIME FAVORITES</p>
          <v-btn class="text-red-800 px-5 py-[10px] rounded-[15px] bg-[#fff] hover:bg-red-900 hover:text-white">
            SHOP EDUCATIONAL TOWERS
          </v-btn>
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

  <section class="mt-6">
    <v-container>
      <div class="flex justify-center">
        <p class="font-semibold text-[30px] mb-[15px] mt-3">Read the Blog</p>
      </div>
      <div v-if="loading" class="relative text-center">
        <Loading />
      </div>
      <div v-else>
        <div>
          <BlogTable :blogs="blog" />
        </div>
      </div>
    </v-container>
  </section>
  <Footer />
</template>

<script setup>
import Header from "@/components/partials/Header.vue";
import Footer from "@/components/partials/Footer.vue";
import Loading from '@/components/loading.vue';
import CollectionTable from '@/components/Client/collectionTable.vue';
import TeamTable from '@/components/Client/teamTable.vue';
import BlogTable from '@/components/Client/blogTable.vue';

import { useClient } from "@/composables/client";
const { collection, loading, team, blog } = useClient();
</script>
