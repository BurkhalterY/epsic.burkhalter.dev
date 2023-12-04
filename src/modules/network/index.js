export default {
  path: "/network",
  component: () => import("@/views/ModuleBaseView.vue"),
  meta: {
    module: {
      path: "network",
      numero: 117,
      shortName: "Réseau",
      officialName:
        "Mettre en place l’infrastructure informatique d’une petite entreprise",
      cie: false,
      style: {
        navBgColor: "#0f7ddf",
        itemBgColor: "#0f7ddf",
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
      path: "/network",
      component: () => import("./views/Menu.vue"),
      meta: {
        title: "Menu",
        isIndex: true,
      },
    },
    {
      path: "/network/materiel",
      component: () => import("./views/Materiel.vue"),
      meta: {
        title: "Équipements réseaux",
      },
    },
    {
      path: "/network/etendues-topologies",
      component: () => import("./views/EtenduesTopologies.vue"),
      meta: {
        title: "Étendues et topologies des réseaux",
      },
    },
    {
      path: "/network/modele-osi",
      component: () => import("./views/ModeleOsi.vue"),
      meta: {
        title: "Modèle OSI",
      },
    },
    {
      path: "/network/supports-transmission",
      component: () => import("./views/SupportsTransmission.vue"),
      meta: {
        title: "Les supports de transmission",
      },
    },
    {
      path: "/network/classes-ip",
      component: () => import("./views/ClassesIp.vue"),
      meta: {
        title: "Les classes d'adresses IP",
      },
    },
    {
      path: "/network/structure-ip",
      component: () => import("./views/StructureIp.vue"),
      meta: {
        title: "Structure d'une adresse IP",
      },
    },
    {
      path: "/network/calcul-sous-reseaux",
      component: () => import("./views/CalculSousReseaux.vue"),
      meta: {
        title: "Calculer les sous-réseaux",
      },
    },
    {
      path: "/network/design-ethernet",
      component: () => import("./views/DesignEthernet.vue"),
      meta: {
        title: "Design Ethernet (Projet Mediatis)",
      },
    },
    {
      path: "/network/calculateur-sr",
      component: () => import("./views/CalculateurSr.vue"),
      meta: {
        title: "Calculateur de sous-réseaux",
        br: true,
      },
    },
    {
      path: "/network/etendues_topologies",
      redirect: "/network/etendues-topologies",
    },
    {
      path: "/network/modele_osi",
      redirect: "/network/modele-osi",
    },
    {
      path: "/network/supports_transmission",
      redirect: "/network/supports-transmission",
    },
    {
      path: "/network/classes_ip",
      redirect: "/network/classes-ip",
    },
    {
      path: "/network/structure_ip",
      redirect: "/network/structure-ip",
    },
    {
      path: "/network/calcul_sous_reseaux",
      redirect: "/network/calcul-sous-reseaux",
    },
    {
      path: "/network/design_ethernet",
      redirect: "/network/design-ethernet",
    },
    {
      path: "/network/calculateur_sr",
      redirect: "/network/calculateur-sr",
    },
  ],
}
