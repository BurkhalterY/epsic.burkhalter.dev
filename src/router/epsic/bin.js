export default {
  path: "/bin",
  component: () => import("@/views/bin/Base.vue"),
  meta: {
    favicon: "bin.ico",
  },
  children: [
    {
      path: "",
      component: () => import("@/views/bin/Index.vue"),
      meta: {
        title: "Menu - Module 114",
      },
    },
    {
      path: "n_to_10",
      component: () => import("@/views/bin/NTo10.vue"),
      meta: {
        title: "Conversion base n en base 10",
      },
    },
    {
      path: "10_to_n",
      component: () => import("@/views/bin/10ToN.vue"),
      meta: {
        title: "Conversion base 10 en base n",
      },
    },
    {
      path: "voc",
      component: () => import("@/views/bin/Voc.vue"),
      meta: {
        title: "Vocabulaire",
      },
    },
    {
      path: "bin_hex",
      component: () => import("@/views/bin/BinHex.vue"),
      meta: {
        title: "Conversion binaire - hexa",
      },
    },
    {
      path: "gray",
      component: () => import("@/views/bin/Gray.vue"),
      meta: {
        title: "Code Gray",
      },
    },
    {
      path: "bcd",
      component: () => import("@/views/bin/Bcd.vue"),
      meta: {
        title: "BCD",
      },
    },
    {
      path: "x_parmi_n",
      component: () => import("@/views/bin/XParmiN.vue"),
      meta: {
        title: "Code x parmi n",
      },
    },
    {
      path: "ascii",
      component: () => import("@/views/bin/Ascii.vue"),
      meta: {
        title: "Code ASCII",
      },
    },
    {
      path: "unicode_utf8",
      component: () => import("@/views/bin/UnicodeUtf8.vue"),
      meta: {
        title: "L'Unicode et UTF-8",
      },
    },
    {
      path: "ean",
      component: () => import("@/views/bin/Ean.vue"),
      meta: {
        title: "Les codes-barres EAN",
      },
    },
    {
      path: "qr_code",
      component: () => import("@/views/bin/QrCode.vue"),
      meta: {
        title: "Les QR codes",
      },
    },
    {
      path: "convertisseur",
      component: () => import("@/views/bin/Convertisseur.vue"),
      meta: {
        title: "Convertisseur",
      },
    },
    {
      path: "addition",
      component: () => import("@/views/bin/Addition.vue"),
      meta: {
        title: "Additions en binaire",
      },
    },
    {
      path: "negativ",
      component: () => import("@/views/bin/Negativ.vue"),
      meta: {
        title: "Soustractions et nombres négatifs",
      },
    },
    {
      path: "float",
      component: () => import("@/views/bin/Float.vue"),
      meta: {
        title: "Nombres à virgules flottantes",
      },
    },
    {
      path: "fonctions_logiques",
      component: () => import("@/views/bin/FonctionsLogiques.vue"),
      meta: {
        title: "Les fonctions logiques",
      },
    },
    {
      path: "partie3",
      component: () => import("@/views/bin/Partie3.vue"),
      meta: {
        title: "Partie 3",
      },
    },
    {
      path: "modulo-ti30xpro",
      component: () => import("@/views/bin/ModuloCalculatrice.vue"),
      meta: {
        title: "Opération modulo sur la calculatrice",
      },
    },
  ],
}
