export default {
  path: "/poo",
  component: () => import("@/views/poo/Base.vue"),
  meta: {
    favicon: "java.ico",
  },
  children: [
    {
      path: "",
      component: () => import("@/views/poo/Index.vue"),
      meta: {
        title: "Menu - Module 404",
      },
    },
    {
      path: "objet",
      component: () => import("@/views/poo/Objet"),
      meta: {
        title: "Qu'est-ce qu'un objet",
      },
    },
    {
      path: "constructeur",
      component: () => import("@/views/poo/Constructeur"),
      meta: {
        title: "Les constructeurs",
      },
    },
    {
      path: "encapsulation",
      component: () => import("@/views/poo/Encapsulation"),
      meta: {
        title: "L'encapsulation",
      },
    },
    {
      path: "heritage",
      component: () => import("@/views/poo/Heritage"),
      meta: {
        title: "L'héritage",
      },
    },
    {
      path: "polymorphisme",
      component: () => import("@/views/poo/Polymorphisme"),
      meta: {
        title: "Le polymorphisme",
      },
    },
    {
      path: "classes_abstraites",
      component: () => import("@/views/poo/ClassesAbstraites"),
      meta: {
        title: "Les classes abstraites",
      },
    },
    {
      path: "interfaces",
      component: () => import("@/views/poo/Interfaces"),
      meta: {
        title: "Les interfaces",
      },
    },
    {
      path: "fenetre",
      component: () => import("@/views/poo/Fenetre"),
      meta: {
        title: "Première fenêtre",
      },
    },
  ],
}
