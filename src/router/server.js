const route = {
  path: "/server",
  component: () => import("@/views/ModuleBaseView.vue"),
  meta: {
    module: {
      path: "server",
      numero: 123,
      shortName: "Windows Server",
      officialName: "Activer les services d´un serveur",
      cie: false,
      style: {
        navBgColor: "#0f7ddf",
        itemBgColor: "#0f7ddf",
        textColor: "#ffffff",
      },
    },
  },
  children: [
    {
      path: "/server/",
      component: () => import("@/views/server/Menu.vue"),
      meta: {
        title: "Menu",
        isIndex: true,
      },
    },
    {
      path: "/server/dns",
      component: () => import("@/views/server/Dns.vue"),
      meta: {
        title: "Les DNS",
      },
    },
    {
      path: "/server/ad",
      component: () => import("@/views/server/Ad.vue"),
      meta: {
        title: "L'Active Directory (AD)",
      },
    },
    {
      path: "/server/mmc",
      component: () => import("@/views/server/Mmc.vue"),
      meta: {
        title: "MMC",
        tip: true,
      },
    },
  ],
}

export default route
