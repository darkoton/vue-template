import { createRouter, createWebHistory } from 'vue-router'
import routesJson from './routes.json';

const routesData = routesJson

const routes = routesData.map(el => {
  el.component = () => import("@/views/" + el.componentPath);
  return el
})

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
