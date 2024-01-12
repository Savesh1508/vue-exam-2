<template>
  <v-table>
    <div class="flex flex-col">
      <div v-for="member of team" :key="member.id" class="w-full px-2 pb-4 cursor-pointer flex">
        <div class="relative overflow-hidden">
          <img :src="getAbsoluteImagePath(member.img)" alt="Collection Image" class="w-full h-auto">
        </div>
        <div class="w-[400px]">
          <div class="flex mb-1 font-semibold text-[35px] ml-3">
            {{ member.name }}
          </div>
          <div class="flex mb-4 ml-3 font-mono text-[20px]">
            {{ member.job }}
          </div>
          <div class=" ml-3">
            {{ member.profile }}
          </div>
        </div>
      </div>
    </div>
  </v-table>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  team: {
    type: Array,
    required: true,
  },
});

const url = import.meta.env.VITE_BASE_URL;

const getAbsoluteImagePath = (imgPath) => {
  return `${url}/${imgPath}`;
};
</script>

<style scoped></style>
