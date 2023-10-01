const route = {
  path: "/bin",
  component: () => import("@/views/ModuleBaseView.vue"),
  meta: {
    module: {
      path: "bin",
      numero: 114,
      shortName: "Binaire",
      officialName:
        "Mettre en œuvre des systèmes de codification, de compression et d’encryptage",
      cie: false,
      style: {
        navBgColor: "#f8f9fa",
        itemBgColor: "#f8f9fa",
        textColor: "#808080",
      },
    },
  },
  children: [
    {
      path: "/bin",
      component: () => import("@/views/bin/Menu.vue"),
      meta: {
        title: "Menu",
        isIndex: true,
      },
    },
    {
      path: "/bin/modulo-ti30xpro",
      component: () => import("@/views/bin/ModuloCalculatrice.vue"),
      meta: {
        title: "Comment effectuer l'opération modulo sur la calculatrice ?",
        special: true,
      },
    },
    {
      path: "/bin/n-to-10",
      component: () => import("@/views/bin/NTo10.vue"),
      meta: {
        title: "Conversion base n en base 10",
        section: 1,
      },
    },
    {
      path: "/bin/10-to-n",
      component: () => import("@/views/bin/10ToN.vue"),
      meta: {
        title: "Conversion base 10 en base n",
        section: 1,
      },
    },
    {
      path: "/bin/voc",
      component: () => import("@/views/bin/Voc.vue"),
      meta: {
        title: "Vocabulaire",
        section: 1,
      },
    },
    {
      path: "/bin/bin-hex",
      component: () => import("@/views/bin/BinHex.vue"),
      meta: {
        title: "Conversion binaire - hexa",
        section: 1,
      },
    },
    {
      path: "/bin/gray",
      component: () => import("@/views/bin/Gray.vue"),
      meta: {
        title: "Code Gray",
        section: 1,
      },
    },
    {
      path: "/bin/bcd",
      component: () => import("@/views/bin/Bcd.vue"),
      meta: {
        title: "BCD",
        section: 1,
      },
    },
    {
      path: "/bin/x-parmi-n",
      component: () => import("@/views/bin/XParmiN.vue"),
      meta: {
        title: "Code x parmi n",
        section: 1,
      },
    },
    {
      path: "/bin/ascii",
      component: () => import("@/views/bin/Ascii.vue"),
      meta: {
        title: "Code ASCII",
        section: 1,
      },
    },
    {
      path: "/bin/unicode-utf8",
      component: () => import("@/views/bin/UnicodeUtf8.vue"),
      meta: {
        title: "L'Unicode et UTF-8",
        section: 1,
      },
    },
    {
      path: "/bin/ean",
      component: () => import("@/views/bin/Ean.vue"),
      meta: {
        title: "Les codes-barres EAN",
        section: 1,
      },
    },
    {
      path: "/bin/qr-code",
      component: () => import("@/views/bin/QrCode.vue"),
      meta: {
        title: "Les QR codes",
        section: 1,
      },
    },
    {
      path: "/bin/convertisseur",
      component: () => import("@/views/bin/Convertisseur.vue"),
      meta: {
        title: "Convertisseur",
        section: 1,
        br: true,
      },
    },
    {
      path: "/bin/addition",
      component: () => import("@/views/bin/Addition.vue"),
      meta: {
        title: "Additions en binaire",
        section: 2,
      },
    },
    {
      path: "/bin/negativ",
      component: () => import("@/views/bin/Negativ.vue"),
      meta: {
        title: "Nombres négatifs et soustractions",
        section: 2,
      },
    },
    {
      path: "/bin/float",
      component: () => import("@/views/bin/Float.vue"),
      meta: {
        title: "Nombres à virgules flottantes",
        section: 2,
      },
    },
    {
      path: "/bin/fonctions-logiques",
      component: () => import("@/views/bin/FonctionsLogiques.vue"),
      meta: {
        title: "Les fonctions logiques",
        section: 2,
      },
    },
    {
      path: "/bin/partie3",
      component: () => import("@/views/bin/Partie3.vue"),
      meta: {
        title: "Partie 3",
        section: 3,
      },
    },
  ],
}

export default route
