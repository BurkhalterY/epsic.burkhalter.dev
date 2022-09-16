export default {
  path: "/server",
  component: () => import("@/views/server/Base.vue"),
  meta: {
    favicon: "server.ico",
  },
  children: [
    {
      path: "",
      component: () => import("@/views/server/Index.vue"),
      meta: {
        title: "Menu - Module 123",
      },
    },
    {
      path: "dns",
      component: () => import("@/views/server/Dns.vue"),
      meta: {
        title: "Les DNS",
      },
    },
    {
      path: "ad",
      component: () => import("@/views/server/Ad.vue"),
      meta: {
        title: "L'Active Directory (AD)",
      },
    },
    {
      path: "mmc",
      component: () => import("@/views/server/Mmc.vue"),
      meta: {
        title: "MMC",
      },
    },
  ],
}
