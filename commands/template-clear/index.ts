  import { createRouter, createWebHistory } from 'vue-router'

  const routes = [
    {
      "path": "/",
      "name": "home",
     "component":import("@/views/TheHome.vue"),
  },
  {
      "path": "/:pathMatch(.*)",
      "name": "error",
      "component": import("@/views/TheNotFound.vue" ),
  }
  ]

  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
  })

  export default router
