export default {
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
      author: {
        name: "Yannis Burkhalter",
        link: "mailto:yannis@burkhalter.dev",
      },
    },
  },
  children: [
    {
      path: "/html",
      component: () => import("./views/Menu.vue"),
      meta: {
        title: "Menu",
        isIndex: true,
      },
    },
    {
      path: "/html/site-web",
      component: () => import("./views/SiteWeb.vue"),
      meta: {
        title: "Qu'est-ce qu'un site web ?",
        section: "intro",
      },
    },
    {
      path: "/html/bases",
      component: () => import("./views/HtmlBase.vue"),
      meta: {
        title: "Les bases du HTML",
        section: "html",
      },
    },
    {
      path: "/html/types-balises",
      component: () => import("./views/TypesBalises.vue"),
      meta: {
        title: "Les types de balises",
        section: "html",
      },
    },
    {
      path: "/html/structure-101",
      component: () => import("./views/Structure101.vue"),
      meta: {
        title: "Structure attendue pour le module 101",
        section: "html",
      },
    },
    {
      path: "/html/hypertexte",
      component: () => import("./views/Hypertexte.vue"),
      meta: {
        title: "Les liens hypertextes",
        section: "html",
      },
    },
    {
      path: "/html/image",
      component: () => import("./views/Image.vue"),
      meta: {
        title: "Les images (+ audio et vidéo)",
        section: "html",
      },
    },
    {
      path: "/html/liste",
      component: () => import("./views/Liste.vue"),
      meta: {
        title: "Les listes",
        section: "html",
      },
    },
    {
      path: "/html/table",
      component: () => import("./views/Table.vue"),
      meta: {
        title: "Les tableaux",
        section: "html",
      },
    },
    {
      path: "/html/form",
      component: () => import("./views/Form.vue"),
      meta: {
        title: "Les formulaires",
        section: "html",
      },
    },
    {
      path: "/html/iframe",
      component: () => import("./views/Iframe.vue"),
      meta: {
        title: "L'intégration (iframe)",
        section: "html",
      },
    },
    {
      path: "/html/css/bases",
      component: () => import("./views/CssBase.vue"),
      meta: {
        title: "Les bases du CSS",
        section: "css",
      },
    },
    {
      path: "/html/css/marges",
      component: () => import("./views/CssMarges.vue"),
      meta: {
        title: "Les marges",
        section: "css",
      },
    },
    {
      path: "/html/site_web",
      redirect: "/html/site-web",
    },
    {
      path: "/html/html_base",
      redirect: "/html/bases",
    },
    {
      path: "/html/types_balises",
      redirect: "/html/types-balises",
    },
    {
      path: "/html/structure_101",
      redirect: "/html/structure-101",
    },
    {
      path: "/html/css",
      redirect: "/html/css/bases",
    },
    {
      path: "/html/css_base",
      redirect: "/html/css/bases",
    },
    {
      path: "/html/css_marges",
      redirect: "/html/css/marges",
    },
  ],
}
