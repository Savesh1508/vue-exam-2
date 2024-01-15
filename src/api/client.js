import api from '@/plugins/axios';

const url = import.meta.env.VITE_BASE_URL;

function apiFetchCollections() {
  return api.get(url + '/collection');
}

function apiFetchChristmas() {
  return api.get(url + `/christmas`);
}

function apiFetchTeam() {
  return api.get(url + '/team');
}

function apiFetchComments() {
  return api.get(url + '/comment');
}

function apiFetchBlog() {
  return api.get(url + '/blog');
}

export {
  apiFetchCollections,
  apiFetchChristmas,
  apiFetchTeam,
  apiFetchComments,
  apiFetchBlog,
};