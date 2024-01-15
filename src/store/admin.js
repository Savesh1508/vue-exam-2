import { defineStore } from 'pinia';
import {
  apiFetchUsers
} from '@/api/admin'
import { errorToast, successToast } from '@/utils/toast';

export const useAdminStore = defineStore('admin', {
  state: () => ({
    users: [],
    loading: false
  }),
  actions: {
    async getUsers() {
      this.loading = true;
      try {

        const res = await apiFetchUsers();

        if (!res.data && res.status !== 200) {
          return;
        }

        this.loading = false;
        this.users = res.data.users;
      } catch (error) {
        this.loading = false;
        errorToast(error.message);
      }
    }
  }
});
