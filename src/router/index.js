import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '@/views/TheHome.vue')
  },
  {
    path: "/:pathMatch(.*)",
    component: () => import(/* webpackChunkName: "about" */ '@/views/TheNotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
