export default {
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
      author: {
        name: "Yannis Burkhalter",
        link: "mailto:yannis@burkhalter.dev",
      },
    },
  },
  children: [
    {
      path: "/access",
      component: () => import("./views/Menu.vue"),
      meta: {
        title: "Menu",
        isIndex: true,
      },
    },
    {
      path: "/access/tables",
      component: () => import("./views/Tables.vue"),
      meta: {
        title: "Les tables",
      },
    },
    {
      path: "/access/relations",
      component: () => import("./views/Relations.vue"),
      meta: {
        title: "Les relations",
      },
    },
    {
      path: "/access/valide-si",
      component: () => import("./views/ValideSi.vue"),
      meta: {
        title: "Valide si",
      },
    },
    {
      path: "/access/donnees",
      component: () => import("./views/Donnees.vue"),
      meta: {
        title: "Ajouter des données",
      },
    },
    {
      path: "/access/listes-deroulantes",
      component: () => import("./views/ListesDeroulantes.vue"),
      meta: {
        title: "Listes déroulantes pour les FK",
      },
    },
    {
      path: "/access/formulaires",
      component: () => import("./views/Formulaires.vue"),
      meta: {
        title: "Créer un formulaire",
      },
    },
    {
      path: "/access/boutons",
      component: () => import("./views/Boutons.vue"),
      meta: {
        title: "Ajouter des boutons aux formulaires",
      },
    },
    {
      path: "/access/vba",
      component: () => import("./views/Vba.vue"),
      meta: {
        title: "Les bases du VBA",
      },
    },
    {
      path: "/access/requetes",
      component: () => import("./views/Requetes.vue"),
      meta: {
        title: "Afficher une liste avec une requête",
      },
    },
    {
      path: "/access/control-zone-liste",
      component: () => import("./views/ControlZoneListe.vue"),
      meta: {
        title:
          "Importer, ajouter, modifier et supprimer des éléments d'une zone de liste (niveau avancé)",
      },
    },
    {
      path: "/access/etiquettes",
      component: () => import("./views/Etiquettes.vue"),
      meta: {
        title: "Imprimer des étiquettes",
      },
    },
    {
      path: "/access/access1",
      component: () => import("./views/Access1.vue"),
      meta: {
        title: "Ma base de données en Access 1.0",
        special: true,
      },
    },
    {
      path: "/access/valide_si",
      redirect: "/access/valide-si",
    },
    {
      path: "/access/listes_deroulantes",
      redirect: "/access/listes-deroulantes",
    },
    {
      path: "/access/control_zone_liste",
      redirect: "/access/control-zone-liste",
    },
  ],
}
