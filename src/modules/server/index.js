export default {
  path: "/server",
  component: () => import("@/views/ModuleBaseView.vue"),
  meta: {
    module: {
      author: {
        name: "Yannis Burkhalter",
        link: "mailto:yannis@burkhalter.dev",
      },
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
      author: {
        name: "Yannis Burkhalter",
        link: "mailto:yannis@burkhalter.dev",
      },
    },
  },
  children: [
    {
      path: "/server/",
      component: () => import("./views/Menu.vue"),
      meta: {
        title: "Menu",
        isIndex: true,
      },
    },
    {
      path: "/server/dns",
      component: () => import("./views/Dns.vue"),
      meta: {
        title: "Les DNS",
      },
    },
    {
      path: "/server/ad",
      component: () => import("./views/Ad.vue"),
      meta: {
        title: "L'Active Directory (AD)",
      },
    },
    {
      path: "/server/mmc",
      component: () => import("./views/Mmc.vue"),
      meta: {
        title: "MMC",
        tip: true,
      },
    },
  ],
}
