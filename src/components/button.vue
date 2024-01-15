<template>
  <div class="flex">
    <v-btn v-if="isPrepend" :prepend-icon="icon?.length ? icon : ''" :color="color" :class="class" :elevation="elevation"
      :disabled="disabled">
      <slot />
    </v-btn>
    <v-btn v-else :append-icon="icon?.length ? icon : ''" :color="color" :class="class" :elevation="elevation"
      :disabled="disabled">
      <slot />
    </v-btn>
  </div>
</template>

<script setup>
defineProps({
  icon: {
    type: String,
    default: ''
  },
  color: {
    type: String,
    default: '#feaf00'
  },
  isPrepend: {
    type: Boolean,
    default: false
  },
  class: {
    type: String,
    default: ''
  },
  elevation: {
    type: Number,
    default: 0
  },
  disabled: {
    type: Boolean,
    default: false
  }
});
</script>


<style scoped></style>
