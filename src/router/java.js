const route = {
  path: "/java",
  component: () => import("@/views/ModuleBaseView.vue"),
  meta: {
    module: {
      path: "java",
      numero: 403,
      shortName: "Java",
      officialName:
        "Implémenter de manière procédurale des déroulements de programme",
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
      path: "/java",
      component: () => import("@/views/java/Menu.vue"),
      meta: {
        title: "Menu",
        isIndex: true,
      },
    },
    {
      path: "/java/new",
      component: () => import("@/views/java/New.vue"),
      meta: {
        title: "Créer un nouveau projet",
      },
    },
    {
      path: "/java/commentaires",
      component: () => import("@/views/java/Commentaires.vue"),
      meta: {
        title: "Les commentaires",
      },
    },
    {
      path: "/java/variables",
      component: () => import("@/views/java/Variables.vue"),
      meta: {
        title: "Les variables",
      },
    },
    {
      path: "/java/operateurs",
      component: () => import("@/views/java/Operateurs.vue"),
      meta: {
        title: "Les opérateurs",
      },
    },
    {
      path: "/java/afficher",
      component: () => import("@/views/java/Afficher.vue"),
      meta: {
        title: "Afficher du texte dans la console",
      },
    },
    {
      path: "/java/clavier",
      component: () => import("@/views/java/Clavier.vue"),
      meta: {
        title: "Lire les entrées clavier",
      },
    },
    {
      path: "/java/conditions",
      component: () => import("@/views/java/Conditions.vue"),
      meta: {
        title: "Les conditions",
      },
    },
    {
      path: "/java/conditions_avancees",
      component: () => import("@/views/java/ConditionsAvancees.vue"),
      meta: {
        title: "Les conditions avancées",
      },
    },
    {
      path: "/java/boucles",
      component: () => import("@/views/java/Boucles.vue"),
      meta: {
        title: "Les boucles",
      },
    },
    {
      path: "/java/conversion_boucle",
      component: () => import("@/views/java/ConversionBoucle.vue"),
      meta: {
        title: "Conversion d'un for en while et inversement",
      },
    },
    {
      path: "/java/methodes",
      component: () => import("@/views/java/Methodes.vue"),
      meta: {
        title: "Les méthodes",
      },
    },
    {
      path: "/java/tableaux",
      component: () => import("@/views/java/Tableaux.vue"),
      meta: {
        title: "Les tableaux",
      },
    },
    {
      path: "/java/tri_a_bulle",
      component: () => import("@/views/java/TriABulle.vue"),
      meta: {
        title: "Tri à bulle",
      },
    },
    {
      path: "/java/structogramme",
      component: () => import("@/views/java/Structogramme.vue"),
      meta: {
        title: "Symboles Nassi-Shneidermann",
        special: true,
      },
    },
  ],
}

export default route
