import { defineStore } from 'pinia';
import { signin } from '@/api/auth';
import { errorToast } from '@/utils/toast';
import decodeJwt from '@/functions/tokenParser';
import router from '@/router';
import { RT_LOGIN } from '@/constants/routes/auth';

export const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      user: null,
      loading: false
    };
  },
  actions: {
    async login(payload) {
      try {
        this.loading = true;
        const res = await signin(payload);
        if (res?.data?.status !== 200) {
          return;
        }
        this.loading = false;

        const decodedJwt = decodeJwt(res?.data?.token);
        if (decodedJwt) {
          router.replace('/admin');
          this.saveUser(res?.data);
          return;
        }
      } catch (error) {
        errorToast('Invalid creadentials!');
      } finally {
        this.loading = false;
      }
    },
    saveUser(data) {
      localStorage.setItem('token', data?.token);
      this.user = data?.person;
    },
    clearUser() {
      localStorage.removeItem('token');
      this.user = null;
      router.replace({ name: RT_LOGIN });
    }
  }
});
