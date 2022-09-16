export default {
  path: "/tools",
  component: () => import("@/views/tools/Base.vue"),
  meta: {
    favicon: "tools.ico",
  },
  children: [
    {
      path: "",
      component: () => import("@/views/tools/Index.vue"),
      meta: {
        title: "Outils",
      },
    },
    {
      path: "bases",
      component: () => import("@/views/tools/Bases.vue"),
      meta: {
        title: "Conversion de bases",
      },
    },
    {
      path: "base64",
      component: () => import("@/views/tools/Base64.vue"),
      meta: {
        title: "Conversion Base64",
      },
    },
    {
      path: "passgen",
      component: () => import("@/views/tools/PasswordGenerator.vue"),
      meta: {
        title: "Générateur de mots de passe",
      },
    },
    {
      path: "qrcode",
      component: () => import("@/views/tools/QrCode.vue"),
      meta: {
        title: "Générateur de QR Code",
      },
    },
  ],
}
