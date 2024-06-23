export default {
  path: "/tools",
  component: () => import("@/views/ModuleBaseView.vue"),
  meta: {
    module: {
      path: "tools",
      name: "Outils",
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
      path: "/tools/",
      component: () => import("./views/Menu.vue"),
      meta: {
        title: "Menu",
        isIndex: true,
      },
    },
    {
      path: "/tools/base64",
      component: () => import("./views/Base64.vue"),
      meta: {
        title: "Base64",
      },
    },
    {
      path: "/tools/bases",
      component: () => import("./views/Bases.vue"),
      meta: {
        title: "Conversion de bases (bin, oct, dec, hex, etc...)",
      },
    },
    {
      path: "/tools/passgen",
      component: () => import("./views/PasswordGenerator.vue"),
      meta: {
        title: "Générateurs de mots de passe",
      },
    },
    {
      path: "/tools/qrcode",
      component: () => import("./views/QrCode.vue"),
      meta: {
        title: "Générateur de QR Code",
      },
    },
  ],
}
