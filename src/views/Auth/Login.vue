<template>
  <div class="w-screen h-screen relative bg-gradient-to-tr items-center flex justify-center">
    <div class="card w-[400px] bg-white rounded-lg p-5">
      <div class="text-center mb-[50px]">
        <h3 class="text-[28px] font-[600] uppercase">Sign up</h3>
      </div>
      <div>
        <v-text-field type="email" density="compact" label="Username" placeholder="Username" variant="outlined"
          v-model="username" />
        <v-text-field type="password" density="compact" label="Password" placeholder="Password" variant="outlined"
          minlength="8" v-model="password" />
      </div>
      <v-btn @click="onSubmit" :disabled="false" id="myBtn"
        class="uppercase w-100 my-[30px] bg-amber-400 hover:bg-amber-600 hover:text-white">
        Sign up
      </v-btn>
    </div>
  </div>
</template>

<script setup>
import { useAuth } from '@/composables/auth';
import { ref } from 'vue';

const { login } = useAuth();

const username = ref('');
const password = ref('');

async function onSubmit() {
  if (!username.value.length && !password.value.length) return;

  await login({
    username: username.value,
    password: password.value
  });
}
</script>
