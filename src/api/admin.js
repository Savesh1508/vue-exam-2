import api from '@/plugins/axios';

const url = import.meta.env.VITE_BASE_URL2;

function apiFetchUsers() {
  return api.get(url + '/users');
}

export {
  apiFetchUsers,
};