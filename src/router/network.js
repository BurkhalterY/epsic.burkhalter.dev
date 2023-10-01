const route = {
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
    },
  },
  children: [
    {
      path: "/network",
      component: () => import("@/views/network/Menu.vue"),
      meta: {
        title: "Menu",
        isIndex: true,
      },
    },
    {
      path: "/network/materiel",
      component: () => import("@/views/network/Materiel.vue"),
      meta: {
        title: "Équipements réseaux",
      },
    },
    {
      path: "/network/etendues-topologies",
      component: () => import("@/views/network/EtenduesTopologies.vue"),
      meta: {
        title: "Étendues et topologies des réseaux",
      },
    },
    {
      path: "/network/modele-osi",
      component: () => import("@/views/network/ModeleOsi.vue"),
      meta: {
        title: "Modèle OSI",
      },
    },
    {
      path: "/network/supports-transmission",
      component: () => import("@/views/network/SupportsTransmission.vue"),
      meta: {
        title: "Les supports de transmission",
      },
    },
    {
      path: "/network/classes-ip",
      component: () => import("@/views/network/ClassesIp.vue"),
      meta: {
        title: "Les classes d'adresses IP",
      },
    },
    {
      path: "/network/structure-ip",
      component: () => import("@/views/network/StructureIp.vue"),
      meta: {
        title: "Structure d'une adresse IP",
      },
    },
    {
      path: "/network/calcul-sous-reseaux",
      component: () => import("@/views/network/CalculSousReseaux.vue"),
      meta: {
        title: "Calculer les sous-réseaux",
      },
    },
    {
      path: "/network/design-ethernet",
      component: () => import("@/views/network/DesignEthernet.vue"),
      meta: {
        title: "Design Ethernet (Projet Mediatis)",
      },
    },
    {
      path: "/network/calculateur-sr",
      component: () => import("@/views/network/CalculateurSr.vue"),
      meta: {
        title: "Calculateur de sous-réseaux",
        br: true,
      },
    },
  ],
}

export default route
