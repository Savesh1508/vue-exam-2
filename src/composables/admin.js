import { useAdminStore } from '@/store/admin';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';

export const useAdmin = () => {
  const store = useAdminStore();
  const router = useRouter();
  const route = useRoute();

  const { loading, users } = storeToRefs(store);
  const {
    getUsers
  } = useAdminStore();


  onMounted(async () => {
    await getUsers();
  });

  return {
    loading,
    getUsers,
    users,
    route,
    router
  };
};
