import { createRouter, createWebHashHistory } from 'vue-router'

/**
 * 公开路由表（后续路由权限）
 */
const publicRoutes = [
  {
    path: '/',
    component: () => import('@/layout/index')
  },
  {
    path: '/login',
    component: () => import('@/views/login/index')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes
})

export default router
