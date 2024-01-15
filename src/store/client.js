import { defineStore } from 'pinia';
import {
  apiFetchCollections,
  apiFetchChristmas,
  apiFetchTeam,
  apiFetchComments,
  apiFetchBlog,
} from '@/api/client'
import { errorToast, successToast } from '@/utils/toast';

export const useClientStore = defineStore('client', {
  state: () => ({
    collection: [],
    christmas: [],
    team: [],
    comments: [],
    blog: [],
    loading: false
  }),
  actions: {
    async getCollection() {
      this.loading = true;
      try {

        const res = await apiFetchCollections();

        if (!res.data && res.status !== 200) {
          return;
        }

        this.loading = false;
        this.collection = res.data;
      } catch (error) {
        this.loading = false;
        errorToast(error.message);
      }
    },

    async getChristmas() {
      this.loading = true;
      try {
        const res = await apiFetchChristmas();
        if (!res.data && res.status !== 200) {
          return;
        }

        this.loading = false;
        this.christmas = res.data;
      } catch (error) {
        this.loading = false;
        errorToast(error.message);
      }
    },

    async getTeam() {
      this.loading = true;
      try {
        const res = await apiFetchTeam();
        if (!res.data && res.status !== 200) {
          return;
        }

        this.loading = false;
        this.team = res.data;
      } catch (error) {
        this.loading = false;
        errorToast(error.message);
      }
    },

    async getComments() {
      this.loading = true;
      try {
        const res = await apiFetchComments();
        if (!res.data && res.status !== 200) {
          return;
        }

        this.loading = false;
        this.comments = res.data;
      } catch (error) {
        this.loading = false;
        errorToast(error.message);
      }
    },

    async getBlog() {
      this.loading = true;
      try {
        const res = await apiFetchBlog();
        if (!res.data && res.status !== 200) {
          return;
        }

        this.loading = false;
        this.blog = res.data;
      } catch (error) {
        this.loading = false;
        errorToast(error.message);
      }
    },
  }
});
