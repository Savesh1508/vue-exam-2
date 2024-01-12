<template>
  <div
    class="w-screen h-screen relative bg-gradient-to-tr from-authBgS items-center to-authBgE flex justify-center"
  >
    <div class="card w-[500px] bg-white rounded-lg p-5">
      <div class="flex justify-center mb-[43px]">
        <span class="me-2 w-[6px] bg-[#F8D442]" />
        <h2 class="uppercase text-[32px] font-[700]">crud operations</h2>
      </div>
      <div class="text-center mb-[50px]">
        <h3 class="text-[28px] font-[600] uppercase">{{ t('login.sign') }}</h3>
        <p class="text-[14px]">{{ t('login.text') }}</p>
      </div>
      <div>
        <v-text-field
          type="email"
          density="compact"
          label="Email"
          placeholder="Email..."
          variant="outlined"
          v-model="email"
          class="mb-5"
        />
        <v-text-field
          type="password"
          density="compact"
          label="Password"
          placeholder="Password..."
          variant="outlined"
          minlength="8"
          v-model="password"
          class="mb-5"
        />
      </div>
      <v-button @click="onSubmit" :disabled="false" id="myBtn" class="uppercase w-100 my-[30px]">Sign in</v-button>
    </div>
  </div>
</template>

<script setup>
import { useAuth } from '@/composables/auth';
import { ref } from 'vue';

import VButton from '@/components/button.vue';

const { login } = useAuth();

const email = ref('');
const password = ref('');

async function onSubmit() {
  if (!email.value.length && !password.value.length) return;

  await login({
    email: email.value,
    password: password.value
  });
}
</script>
