import { createRouter, createWebHistory } from "vue-router"
import accessRoute from "./access"
import bddRoute from "./bdd"
import binRoute from "./bin"
import htmlRoute from "./html"
import networkRoute from "./network"
import redirectRoutes from "./redirects"
import serverRoute from "./server"

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/HomeView.vue"),
    meta: {
      title: "Accueil - epsic.burkhalter.dev",
    },
  },
  accessRoute,
  htmlRoute,
  bddRoute,
  binRoute,
  networkRoute,
  serverRoute,
  ...redirectRoutes,
  {
    path: "/:pathMatch(.*)*",
    redirect: () => "404",
  },
]

const router = createRouter({
  history: createWebHistory("/"),
  routes,
})

router.beforeEach((to) => {
  if (to.meta.module) {
    let newTitle = to.meta.module.cie
      ? "CIE "
      : "Module " + to.meta.module.numero
    if (!to.meta.isIndex) newTitle += " - " + to.meta.title
    document.title = newTitle
    document.querySelector(
      "link[rel~='icon']"
    ).href = `/${to.meta.module.path}/icon.ico`
  } else {
    document.title = to.meta.title
    document.querySelector("link[rel~='icon']").href = "/favicon.ico"
  }
})

export default router
