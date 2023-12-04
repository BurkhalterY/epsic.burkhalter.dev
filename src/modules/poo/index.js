export default {
  path: "/poo",
  component: () => import("@/views/ModuleBaseView.vue"),
  meta: {
    module: {
      path: "poo",
      numero: 404,
      shortName: "Java (POO)",
      officialName: "Programmer orienté objets selon directives",
      cie: false,
      style: {
        navBgColor: "#f8f9fa",
        itemBgColor: "#f8f9fa",
        textColor: "#808080",
      },
      author: {
        name: "Yannis Burkhalter",
        link: "mailto:yannis@burkhalter.dev",
      },
    },
  },
  children: [
    {
      path: "/poo",
      component: () => import("./views/Menu.vue"),
      meta: {
        title: "Menu",
        isIndex: true,
      },
    },
    {
      path: "/poo/objet",
      component: () => import("./views/Objet.vue"),
      meta: {
        title: "Qu'est-ce qu'un objet ?",
      },
    },
    {
      path: "/poo/constructeur",
      component: () => import("./views/Constructeur.vue"),
      meta: {
        title: "Les constructeurs",
      },
    },
    {
      path: "/poo/encapsulation",
      component: () => import("./views/Encapsulation.vue"),
      meta: {
        title: "L'encapsulation",
      },
    },
    {
      path: "/poo/heritage",
      component: () => import("./views/Heritage.vue"),
      meta: {
        title: "L'héritage",
      },
    },
    {
      path: "/poo/polymorphisme",
      component: () => import("./views/Polymorphisme.vue"),
      meta: {
        title: "Le polymorphisme",
      },
    },
    {
      path: "/poo/classes_abstraites",
      component: () => import("./views/ClassesAbstraites.vue"),
      meta: {
        title: "Les classes abstraites",
      },
    },
    {
      path: "/poo/interfaces",
      component: () => import("./views/Interfaces.vue"),
      meta: {
        title: "Les interfaces",
      },
    },
    {
      path: "/poo/fenetre",
      component: () => import("./views/Fenetre.vue"),
      meta: {
        title: "Première fenêtre",
        special: true,
      },
    },
  ],
}
