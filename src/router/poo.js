const route = {
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
    },
  },
  children: [
    {
      path: "/poo",
      component: () => import("@/views/poo/Menu.vue"),
      meta: {
        title: "Menu",
        isIndex: true,
      },
    },
    {
      path: "/poo/objet",
      component: () => import("@/views/poo/Objet.vue"),
      meta: {
        title: "Qu'est-ce qu'un objet",
      },
    },
    {
      path: "/poo/constructeur",
      component: () => import("@/views/poo/Constructeur.vue"),
      meta: {
        title: "Les constructeurs",
      },
    },
    {
      path: "/poo/encapsulation",
      component: () => import("@/views/poo/Encapsulation.vue"),
      meta: {
        title: "L'encapsulation",
      },
    },
    {
      path: "/poo/heritage",
      component: () => import("@/views/poo/Heritage.vue"),
      meta: {
        title: "L'héritage",
      },
    },
    {
      path: "/poo/polymorphisme",
      component: () => import("@/views/poo/Polymorphisme.vue"),
      meta: {
        title: "Le polymorphisme",
      },
    },
    {
      path: "/poo/classes_abstraites",
      component: () => import("@/views/poo/ClassesAbstraites.vue"),
      meta: {
        title: "Les classes abstraites",
      },
    },
    {
      path: "/poo/interfaces",
      component: () => import("@/views/poo/Interfaces.vue"),
      meta: {
        title: "Les interfaces",
      },
    },
    {
      path: "/poo/fenetre",
      component: () => import("@/views/poo/Fenetre.vue"),
      meta: {
        title: "Première fenêtre",
        special: true,
      },
    },
  ],
}

export default route
