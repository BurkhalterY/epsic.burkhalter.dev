export default {
  path: "/java",
  component: () => import("@/views/java/Base.vue"),
  meta: {
    favicon: "java.ico",
  },
  children: [
    {
      path: "",
      component: () => import("@/views/java/Index.vue"),
      meta: {
        title: "Menu - Module 403",
      },
    },
    {
      path: "new",
      component: () => import("@/views/java/New"),
      meta: {
        title: "Créer un nouveau projet",
      },
    },
    {
      path: "commentaires",
      component: () => import("@/views/java/Commentaires"),
      meta: {
        title: "Les commentaires",
      },
    },
    {
      path: "variables",
      component: () => import("@/views/java/Variables"),
      meta: {
        title: "Les variables",
      },
    },
    {
      path: "operateurs",
      component: () => import("@/views/java/Operateurs"),
      meta: {
        title: "Les opérateurs",
      },
    },
    {
      path: "afficher",
      component: () => import("@/views/java/Afficher"),
      meta: {
        title: "Afficher du texte dans la console",
      },
    },
    {
      path: "clavier",
      component: () => import("@/views/java/Clavier"),
      meta: {
        title: "Lire les entrées clavier",
      },
    },
    {
      path: "conditions",
      component: () => import("@/views/java/Conditions"),
      meta: {
        title: "Les conditions",
      },
    },
    {
      path: "conditions_avancees",
      component: () => import("@/views/java/ConditionsAvancees"),
      meta: {
        title: "Les conditions avancées",
      },
    },
    {
      path: "boucles",
      component: () => import("@/views/java/Boucles"),
      meta: {
        title: "Les boucles",
      },
    },
    {
      path: "conversion_boucle",
      component: () => import("@/views/java/ConversionBoucle"),
      meta: {
        title: "Conversion d'un for en while et inversement",
      },
    },
    {
      path: "methodes",
      component: () => import("@/views/java/Methodes"),
      meta: {
        title: "Les méthodes",
      },
    },
    {
      path: "tableaux",
      component: () => import("@/views/java/Tableaux"),
      meta: {
        title: "Les tableaux",
      },
    },
    {
      path: "tri_a_bulle",
      component: () => import("@/views/java/TriABulle"),
      meta: {
        title: "Tri à bulle",
      },
    },
    {
      path: "structogramme",
      component: () => import("@/views/java/Structogramme"),
      meta: {
        title: "Symboles Nassi-Shneidermann",
      },
    },
  ],
}
