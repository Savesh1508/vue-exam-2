import { createRouter, createWebHistory } from 'vue-router';
import { layoutMiddleware } from './middlewares';

import { AUTH } from '@/constants/layouts';
import { RT_LOGIN } from '@/constants/routes/auth';
import authRoutes from './routes/auth.js';
import adminRoutes from './routes/admin.js';

const routes = [
  ...authRoutes,
  ...adminRoutes,
  {
      path: "/",
      name: "home",
      component: () => import("../views/Home.vue"),
    },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/NotFound/NotFound.vue'),
    meta: {
      layout: AUTH,
      title: 'Not-Found'
    }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('access_token');
  if (to.name !== RT_LOGIN && !token) {
    next({ name: RT_LOGIN });
  } else if (token && to.name === RT_LOGIN) {
    if (!from.name) {
      next({ name: 'not-found' });
    } else {
      next({ name: from.name });
    }
  } else {
    next();
  }
});

router.beforeResolve(async (to, from) => {
  await layoutMiddleware(to);
  document.title = to.meta.title;
});

export default router;
