<template>
  <v-table>
    <div class="flex flex-wrap">
      <div v-for="blog of blogs" :key="blog.id" class="w-1/3 px-2 pb-4 cursor-pointer flex-col min-h-[70vh]">
        <div>
          <div class="relative overflow-hidden">
            <img :src="getAbsoluteImagePath(blog.img)" alt="Collection Image" class="w-full h-[50vh] object-cover">
          </div>
          <div class="mt-2 flex justify-center mb-2 text-[20px]">
            {{ blog.title }}
          </div>
          <div class="text-[15px] mb-5">
            {{ blog.subtitle }}
          </div>
        </div>
        <div class=" font-semibold">
          {{ blog.date }}
        </div>
      </div>
    </div>
  </v-table>
</template>

<script setup>
const props = defineProps({
  blogs: {
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
