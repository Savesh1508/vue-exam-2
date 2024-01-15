<template>
  <v-table>
    <div class="flex flex-wrap">
      <div v-for="collection of collections" :key="collection.id" class="w-1/4 px-2 pb-4 cursor-pointer">
        <div class="relative overflow-hidden">
          <img :src="getAbsoluteImagePath(collection.img)" alt="Collection Image" class="w-full h-[30vh] object-cover">
        </div>
        <div class="mt-2 flex justify-center mb-3">
          {{ collection.name }}
        </div>
      </div>
    </div>
  </v-table>
</template>

<script setup>
const props = defineProps({
  collections: {
    type: Array,
    required: true,
  },
});

const url = import.meta.env.VITE_BASE_URL;

const getAbsoluteImagePath = (imgPath) => {
  return `${url}/${imgPath}`;
};
</script>

<style scoped>
</style>
