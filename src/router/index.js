import { route as accessRoute } from "@/modules/access/router"
import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/HomeView.vue"),
  },
  accessRoute,
  {
    path: "/:pathMatch(.*)*",
    redirect: () => `/${locale}`,
  },
]

const router = createRouter({
  history: createWebHistory("/"),
  routes,
})

export default router
