import { HOME } from '@/constants/layouts';

import {
  RT_HOME,
  MT_HOME
} from '@/constants/routes/client';

export default [
  {
    path: '/',
    name: RT_HOME,
    component: () => import('@/views/Home.vue'),
    meta: {
      layout: HOME,
      title: MT_HOME
    }
  },
];
