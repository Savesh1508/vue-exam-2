import { defineStore } from 'pinia';
import { signin } from '@/api/auth';
import { errorToast } from '@/utils/toast';
import decodeJwt from '@/functions/tokenParser';
import router from '@/router';
import { RT_HOME } from '../constants/routes/client';

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
        if (res?.status !== 200) {
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
      localStorage.setItem('access_token', data?.token);
      this.user = data;
    },
    clearUser() {
      localStorage.removeItem('access_token');
      this.user = null;
      router.replace({ name: RT_HOME });
      window.location.reload();
    }
  }
});
