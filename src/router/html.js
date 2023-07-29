const route = {
  path: "/html",
  component: () => import("@/views/ModuleBaseView.vue"),
  meta: {
    module: {
      path: "html",
      numero: 101,
      shortName: "HTML, CSS, JavaScript",
      officialName: "TODO",
      cie: true,
      style: {
        navBgColor: "#ef652a",
        itemBgColor: "#e34f26",
        textColor: "white",
      },
    },
  },
  children: [
    {
      path: "/html",
      component: () => import("@/views/html/Menu.vue"),
      meta: {
        title: "Menu",
        isIndex: true,
      },
    },
    {
      path: "/html/site-web",
      component: () => import("@/views/html/SiteWeb.vue"),
      meta: {
        title: "Qu'est-ce qu'un site web ?",
      },
    },
    {
      path: "/html/bases",
      component: () => import("@/views/html/HtmlBase.vue"),
      meta: {
        title: "Les bases du HTML",
      },
    },
    {
      path: "/html/types-balises",
      component: () => import("@/views/html/TypesBalises.vue"),
      meta: {
        title: "Les types de balises",
      },
    },
    {
      path: "/html/structure-101",
      component: () => import("@/views/html/Structure101.vue"),
      meta: {
        title: "Structure attendue pour le module 101",
      },
    },
    {
      path: "/html/hypertexte",
      component: () => import("@/views/html/Hypertexte.vue"),
      meta: {
        title: "Les liens hypertextes",
      },
    },
    {
      path: "/html/image",
      component: () => import("@/views/html/Image.vue"),
      meta: {
        title: "Les images (+ audio et vidéo)",
      },
    },
    {
      path: "/html/liste",
      component: () => import("@/views/html/Liste.vue"),
      meta: {
        title: "Les listes",
      },
    },
    {
      path: "/html/table",
      component: () => import("@/views/html/Table.vue"),
      meta: {
        title: "Les tableaux",
      },
    },
    {
      path: "/html/form",
      component: () => import("@/views/html/Form.vue"),
      meta: {
        title: "Les formulaires",
      },
    },
    {
      path: "/html/iframe",
      component: () => import("@/views/html/Iframe.vue"),
      meta: {
        title: "L'intégration (iframe)",
      },
    },
    {
      path: "/html/css/bases",
      component: () => import("@/views/html/CssBase.vue"),
      meta: {
        title: "Les bases du CSS",
      },
    },
    {
      path: "/html/css/marges",
      component: () => import("@/views/html/CssMarges.vue"),
      meta: {
        title: "Les marges",
      },
    },
  ],
}

export default route
