import api from '@/plugins/axios';

const url = import.meta.env.VITE_BASE_URL2;

function signin(data) {
  return api.post(url + '/auth/login', data);
}

export { signin };
