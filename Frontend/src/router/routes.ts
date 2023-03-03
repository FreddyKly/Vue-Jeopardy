import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('src/pages/IndexPage.vue') }],
  },
  {
    path: '/Grid',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/GridPage.vue') }],
    meta: { transition: 'slide' }
  },
  {
    path: '/Grid/:Qid',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/QuestionPage.vue') }],
    meta: { transition: 'slide' }
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
