import type { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/demo/index.vue'),
  },
  {
    path: '/404',
    name: 'notFound',
    component: () => import('@/views/exception/404.vue'),
  },
  {
    path: '/:_(.*)*',
    name: 'pathMatch',
    redirect: '/404',
  },
]