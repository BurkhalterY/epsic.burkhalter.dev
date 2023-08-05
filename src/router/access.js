const route = {
  path: "/access",
  component: () => import("@/views/ModuleBaseView.vue"),
  meta: {
    module: {
      path: "access",
      numero: 100,
      shortName: "Access",
      officialName: "Distinguer, préparer et évaluer des données",
      cie: false,
      style: {
        navBgColor: "#a4383b",
        itemBgColor: "#832c2e",
        textColor: "#ffffff",
      },
    },
  },
  children: [
    {
      path: "/access",
      component: () => import("@/views/access/Menu.vue"),
      meta: {
        title: "Menu",
        isIndex: true,
      },
    },
    {
      path: "/access/tables",
      component: () => import("@/views/access/Tables.vue"),
      meta: {
        title: "Les tables",
      },
    },
    {
      path: "/access/relations",
      component: () => import("@/views/access/Relations.vue"),
      meta: {
        title: "Les relations",
      },
    },
    {
      path: "/access/valide-si",
      component: () => import("@/views/access/ValideSi.vue"),
      meta: {
        title: "Valide si",
      },
    },
    {
      path: "/access/donnees",
      component: () => import("@/views/access/Donnees.vue"),
      meta: {
        title: "Ajouter des données",
      },
    },
    {
      path: "/access/listes-deroulantes",
      component: () => import("@/views/access/ListesDeroulantes.vue"),
      meta: {
        title: "Listes déroulantes pour les FK",
      },
    },
    {
      path: "/access/formulaires",
      component: () => import("@/views/access/Formulaires.vue"),
      meta: {
        title: "Créer un formulaire",
      },
    },
    {
      path: "/access/boutons",
      component: () => import("@/views/access/Boutons.vue"),
      meta: {
        title: "Ajouter des boutons aux formulaires",
      },
    },
    {
      path: "/access/vba",
      component: () => import("@/views/access/Vba.vue"),
      meta: {
        title: "Les bases du VBA",
      },
    },
    {
      path: "/access/requetes",
      component: () => import("@/views/access/Requetes.vue"),
      meta: {
        title: "Afficher une liste avec une requête",
      },
    },
    {
      path: "/access/control-zone-liste",
      component: () => import("@/views/access/ControlZoneListe.vue"),
      meta: {
        title:
          "Importer, ajouter, modifier et supprimer des éléments d'une zone de liste (niveau avancé)",
      },
    },
    {
      path: "/access/etiquettes",
      component: () => import("@/views/access/Etiquettes.vue"),
      meta: {
        title: "Imprimer des étiquettes",
      },
    },
    {
      path: "/access/access1",
      component: () => import("@/views/access/Access1.vue"),
      meta: {
        title: "Ma base de données en Access 1.0",
        special: true,
      },
    },
  ],
}

export default route
