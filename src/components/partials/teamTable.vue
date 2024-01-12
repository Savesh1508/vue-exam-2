<template>
  <v-table>
    <div class="flex flex-wrap">
      <div v-for="member of team" :key="member.id" class="w-1/4 px-2 pb-4 cursor-pointer">
        <div class="relative overflow-hidden">
          <img :src="getAbsoluteImagePath(member.img)" alt="Collection Image" class="w-full h-auto">
        </div>
        <div class="mt-2 flex justify-center mb-1 font-semibold text-2xl">
          {{ member.name }}
        </div>
        <div class="flex justify-center mb-4 font-mono text-[15px] text-center">{{ member.job }}</div>
        <div class="text-center">
          {{ member.profile }}
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
