import { createRouter, createWebHistory } from "vue-router"
import { trackRouter } from "vue-gtag-next"
import access from "./epsic/access"
import html from "./epsic/html"
import bdd from "./epsic/bdd"
import bin from "./epsic/bin"
import network from "./epsic/network"
import server from "./epsic/server"
import java from "./epsic/java"
import poo from "./epsic/poo"
import misc from "./epsic/misc"
import tools from "./epsic/tools"

const routes = [
  {
    path: "/",
    component: () => import("@/views/home/Index.vue"),
    meta: {
      title: "Accuel - epsic.burkhalter.dev",
    },
  },
  access,
  html,
  bdd,
  bin,
  network,
  server,
  java,
  poo,
  misc,
  tools,
]

const router = createRouter({
  history: createWebHistory("/"),
  routes,
})

router.beforeEach((to) => {
  document.title = to.meta.title
  document.querySelector("link[rel~='icon']").href = "/icon/" + to.meta.favicon
})

trackRouter(router)

export default router
