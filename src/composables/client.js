import { useClientStore } from '@/store/client';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';

export const useClient = () => {
  const store = useClientStore();
  const router = useRouter();
  const route = useRoute();

  const { team, blog, comments, collection, christmas, loading } = storeToRefs(store);
  const {
    login,
    getCollection,
    getChristmas,
    getTeam,
    getComments,
    getBlog
  } = useClientStore();


  onMounted(async () => {
    await getCollection();
    await getChristmas();
    await getTeam();
    await getComments();
    await getBlog();
  });

  return {
    login,
    loading,
    getCollection,
    getBlog,
    getComments,
    getChristmas,
    getTeam,
    team,
    blog,
    comments,
    collection,
    christmas,
    route,
    router
  };
};
