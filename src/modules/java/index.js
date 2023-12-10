export default {
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
      author: {
        name: "Yannis Burkhalter",
        link: "mailto:yannis@burkhalter.dev",
      },
    },
  },
  children: [
    {
      path: "/java",
      component: () => import("./views/Menu.vue"),
      meta: {
        title: "Menu",
        isIndex: true,
      },
    },
    {
      path: "/java/new",
      component: () => import("./views/New.vue"),
      meta: {
        title: "Créer un nouveau projet",
      },
    },
    {
      path: "/java/commentaires",
      component: () => import("./views/Commentaires.vue"),
      meta: {
        title: "Les commentaires",
      },
    },
    {
      path: "/java/variables",
      component: () => import("./views/Variables.vue"),
      meta: {
        title: "Les variables",
      },
    },
    {
      path: "/java/operateurs",
      component: () => import("./views/Operateurs.vue"),
      meta: {
        title: "Les opérateurs",
      },
    },
    {
      path: "/java/afficher",
      component: () => import("./views/Afficher.vue"),
      meta: {
        title: "Afficher du texte dans la console",
      },
    },
    {
      path: "/java/clavier",
      component: () => import("./views/Clavier.vue"),
      meta: {
        title: "Lire les entrées clavier",
      },
    },
    {
      path: "/java/conditions",
      component: () => import("./views/Conditions.vue"),
      meta: {
        title: "Les conditions",
      },
    },
    {
      path: "/java/conditions_avancees",
      component: () => import("./views/ConditionsAvancees.vue"),
      meta: {
        title: "Les conditions avancées",
      },
    },
    {
      path: "/java/boucles",
      component: () => import("./views/Boucles.vue"),
      meta: {
        title: "Les boucles",
      },
    },
    {
      path: "/java/conversion_boucle",
      component: () => import("./views/ConversionBoucle.vue"),
      meta: {
        title: "Conversion d'un for en while et inversement",
      },
    },
    {
      path: "/java/methodes",
      component: () => import("./views/Methodes.vue"),
      meta: {
        title: "Les méthodes",
      },
    },
    {
      path: "/java/tableaux",
      component: () => import("./views/Tableaux.vue"),
      meta: {
        title: "Les tableaux",
      },
    },
    {
      path: "/java/tri_a_bulle",
      component: () => import("./views/TriABulle.vue"),
      meta: {
        title: "Tri à bulle",
      },
    },
    {
      path: "/java/structogramme",
      component: () => import("./views/Structogramme.vue"),
      meta: {
        title: "Symboles Nassi-Shneidermann",
        special: true,
      },
    },
  ],
}
