import { ADMIN } from '@/constants/layouts';

import {
  RT_ADMIN,
  MT_ADMIN,
  RT_ADMIN_USERS,
  MT_ADMIN_USERS
} from '@/constants/routes/admin';

export default [
  {
    path: '/admin',
    name: RT_ADMIN,
    component: () => import('@/views/Admin/Home.vue'),
    meta: {
      layout: ADMIN,
      title: MT_ADMIN
    }
  },

  {
    path: '/admin-users',
    name: RT_ADMIN_USERS,
    component: () => import('@/views/Admin/AdminUsers.vue'),
    meta: {
      layout: ADMIN,
      title: MT_ADMIN_USERS
    }
  },
];
