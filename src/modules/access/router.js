export const index = {
  path: "",
  name: "Index",
  component: () => import("./IndexView.vue"),
  meta: {
    title: "Menu - Module 100",
  },
}

export const pages = [
  {
    path: "tables",
    name: "Tables",
    component: () => import("./views/TablesView.vue"),
    meta: {
      title: "Les tables",
    },
  },
  {
    path: "relations",
    name: "Relations",
    component: () => import("./views/RelationsView.vue"),
    meta: {
      title: "Les relations",
    },
  },
  {
    path: "valide_si",
    name: "ValideSi",
    component: () => import("./views/ValideSiView.vue"),
    meta: {
      title: "Valide si",
    },
  },
  {
    path: "donnees",
    name: "Donnees",
    component: () => import("./views/DonneesView.vue"),
    meta: {
      title: "Ajouter des données",
    },
  },
  {
    path: "listes_deroulantes",
    name: "ListesDeroulantes",
    component: () => import("./views/ListesDeroulantesView.vue"),
    meta: {
      title: "Listes déroulantes pour les FK",
    },
  },
  {
    path: "formulaires",
    name: "Formulaires",
    component: () => import("./views/FormulairesView.vue"),
    meta: {
      title: "Créer un formulaire",
    },
  },
  {
    path: "boutons",
    name: "Boutons",
    component: () => import("./views/BoutonsView.vue"),
    meta: {
      title: "Ajouter des boutons aux formulaires",
    },
  },
  {
    path: "vba",
    name: "Vba",
    component: () => import("./views/VbaView.vue"),
    meta: {
      title: "Les bases du VBA",
    },
  },
  {
    path: "requetes",
    name: "Requetes",
    component: () => import("./views/RequetesView.vue"),
    meta: {
      title: "Afficher une liste avec une requête",
    },
  },
  {
    path: "control_zone_liste",
    name: "ControlZoneListe",
    component: () => import("./views/ControlZoneListeView.vue"),
    meta: {
      title:
        "Importer, ajouter, modifier et supprimer des éléments d'une zone de liste (niveau avancé)",
    },
  },
  {
    path: "etiquettes",
    name: "Etiquettes",
    component: () => import("./views/EtiquettesView.vue"),
    meta: {
      title: "Imprimer des étiquettes",
    },
  },
]

export const bonus = [
  {
    path: "access1",
    name: "Access1",
    component: () => import("./views/Access1View.vue"),
    meta: {
      title: "Ma base de données en Access 1.0",
    },
  },
]

export const route = {
  path: "/access",
  name: "Base",
  component: () => import("@/views/ModuleBaseView.vue"),
  children: [index, ...pages, ...bonus],
  meta: {
    numero: 100,
    shortName: "Access",
    cie: false,
    style: {
      bgColor: "#a4383b",
      itemColor: "#832c2e",
      textColor: "white",
    },
  },
}
