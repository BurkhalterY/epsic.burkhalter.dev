export default {
  path: "/access",
  component: () => import("@/views/access/Base.vue"),
  meta: {
    favicon: "access.ico",
  },
  children: [
    {
      path: "",
      component: () => import("@/views/access/Index.vue"),
      meta: {
        title: "Menu - Module 100",
      },
    },
    {
      path: "tables",
      component: () => import("@/views/access/Tables.vue"),
      meta: {
        title: "Les tables",
      },
    },
    {
      path: "relations",
      component: () => import("@/views/access/Relations.vue"),
      meta: {
        title: "Les relations",
      },
    },
    {
      path: "valide_si",
      component: () => import("@/views/access/ValideSi.vue"),
      meta: {
        title: "Valide si",
      },
    },
    {
      path: "donnees",
      component: () => import("@/views/access/Donnees.vue"),
      meta: {
        title: "Ajouter des données",
      },
    },
    {
      path: "listes_deroulantes",
      component: () => import("@/views/access/ListesDeroulantes.vue"),
      meta: {
        title: "Listes déroulantes pour les FK",
      },
    },
    {
      path: "formulaires",
      component: () => import("@/views/access/Formulaires.vue"),
      meta: {
        title: "Créer un formulaire",
      },
    },
    {
      path: "boutons",
      component: () => import("@/views/access/Boutons.vue"),
      meta: {
        title: "Ajouter des boutons aux formulaires",
      },
    },
    {
      path: "vba",
      component: () => import("@/views/access/Vba.vue"),
      meta: {
        title: "Les bases du VBA",
      },
    },
    {
      path: "requetes",
      component: () => import("@/views/access/Requetes.vue"),
      meta: {
        title: "Afficher une liste avec une requête",
      },
    },
    {
      path: "control_zone_liste",
      component: () => import("@/views/access/ControlZoneListe.vue"),
      meta: {
        title:
          "Importer, ajouter, modifier et supprimer des éléments d'une zone de liste (niveau avancé)",
      },
    },
    {
      path: "etiquettes",
      component: () => import("@/views/access/Etiquettes.vue"),
      meta: {
        title: "Imprimer des étiquettes",
      },
    },
    {
      path: "access1",
      component: () => import("@/views/access/Access1.vue"),
      meta: {
        title: "Ma base de données en Access 1.0",
      },
    },
  ],
}
