export default {
  path: "/html",
  component: () => import("@/views/html/Base.vue"),
  meta: {
    favicon: "html.ico",
  },
  children: [
    {
      path: "",
      component: () => import("@/views/html/Index.vue"),
      meta: {
        title: "Menu - CIE 101",
      },
    },
    {
      path: "site_web",
      component: () => import("@/views/html/SiteWeb.vue"),
      meta: {
        title: "Qu'est-ce qu'un site web ?",
      },
    },
    {
      path: "html_base",
      component: () => import("@/views/html/HtmlBase.vue"),
      meta: {
        title: "Les bases du HTML",
      },
    },
    {
      path: "types_balises",
      component: () => import("@/views/html/TypesBalises.vue"),
      meta: {
        title: "Les types de balises",
      },
    },
    {
      path: "structure_101",
      component: () => import("@/views/html/Structure101.vue"),
      meta: {
        title: "Structure attendue pour le module 101",
      },
    },
    {
      path: "hypertexte",
      component: () => import("@/views/html/Hypertexte.vue"),
      meta: {
        title: "Les liens hypertextes",
      },
    },
    {
      path: "image",
      component: () => import("@/views/html/Image.vue"),
      meta: {
        title: "Les images (+ audio et vidéo)",
      },
    },
    {
      path: "liste",
      component: () => import("@/views/html/Liste.vue"),
      meta: {
        title: "Les listes",
      },
    },
    {
      path: "table",
      component: () => import("@/views/html/Table.vue"),
      meta: {
        title: "Les tableaux",
      },
    },
    {
      path: "form",
      component: () => import("@/views/html/Form.vue"),
      meta: {
        title: "Les formulaires",
      },
    },
    {
      path: "iframe",
      component: () => import("@/views/html/Iframe.vue"),
      meta: {
        title: "L'intégration (iframe)",
      },
    },
    {
      path: "css_base",
      component: () => import("@/views/html/CssBase.vue"),
      meta: {
        title: "Les bases du CSS",
      },
    },
    {
      path: "css_marges",
      component: () => import("@/views/html/CssMarges.vue"),
      meta: {
        title: "Les marges",
      },
    },
  ],
}
