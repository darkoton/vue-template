import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/TheHome.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/TheAbout.vue')
  },
  {
    path: "/:pathMatch(.*)",
    component: () => import('@/views/TheNotFound.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
