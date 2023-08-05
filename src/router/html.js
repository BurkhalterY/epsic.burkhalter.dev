const route = {
  path: "/html",
  component: () => import("@/views/ModuleBaseView.vue"),
  meta: {
    module: {
      path: "html",
      numero: 101,
      shortName: "HTML, CSS, JavaScript",
      officialName: "Réaliser et publier un site web",
      cie: true,
      style: {
        navBgColor: "#ef652a",
        itemBgColor: "#e34f26",
        textColor: "#ffffff",
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
        section: "intro",
      },
    },
    {
      path: "/html/bases",
      component: () => import("@/views/html/HtmlBase.vue"),
      meta: {
        title: "Les bases du HTML",
        section: "html",
      },
    },
    {
      path: "/html/types-balises",
      component: () => import("@/views/html/TypesBalises.vue"),
      meta: {
        title: "Les types de balises",
        section: "html",
      },
    },
    {
      path: "/html/structure-101",
      component: () => import("@/views/html/Structure101.vue"),
      meta: {
        title: "Structure attendue pour le module 101",
        section: "html",
      },
    },
    {
      path: "/html/hypertexte",
      component: () => import("@/views/html/Hypertexte.vue"),
      meta: {
        title: "Les liens hypertextes",
        section: "html",
      },
    },
    {
      path: "/html/image",
      component: () => import("@/views/html/Image.vue"),
      meta: {
        title: "Les images (+ audio et vidéo)",
        section: "html",
      },
    },
    {
      path: "/html/liste",
      component: () => import("@/views/html/Liste.vue"),
      meta: {
        title: "Les listes",
        section: "html",
      },
    },
    {
      path: "/html/table",
      component: () => import("@/views/html/Table.vue"),
      meta: {
        title: "Les tableaux",
        section: "html",
      },
    },
    {
      path: "/html/form",
      component: () => import("@/views/html/Form.vue"),
      meta: {
        title: "Les formulaires",
        section: "html",
      },
    },
    {
      path: "/html/iframe",
      component: () => import("@/views/html/Iframe.vue"),
      meta: {
        title: "L'intégration (iframe)",
        section: "html",
      },
    },
    {
      path: "/html/css/bases",
      component: () => import("@/views/html/CssBase.vue"),
      meta: {
        title: "Les bases du CSS",
        section: "css",
      },
    },
    {
      path: "/html/css/marges",
      component: () => import("@/views/html/CssMarges.vue"),
      meta: {
        title: "Les marges",
        section: "css",
      },
    },
  ],
}

export default route
