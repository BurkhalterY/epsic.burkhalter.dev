export default {
  path: "/network",
  component: () => import("@/views/network/Base.vue"),
  meta: {
    favicon: "network.ico",
  },
  children: [
    {
      path: "",
      component: () => import("@/views/network/Index.vue"),
      meta: {
        title: "Menu - Module 117",
      },
    },
    {
      path: "materiel",
      component: () => import("@/views/network/Materiel.vue"),
      meta: {
        title: "Équipements réseaux",
      },
    },
    {
      path: "etendues_topologies",
      component: () => import("@/views/network/EtenduesTopologies.vue"),
      meta: {
        title: "Étendues et topologies des réseaux",
      },
    },
    {
      path: "modele_osi",
      component: () => import("@/views/network/ModeleOsi.vue"),
      meta: {
        title: "Modèle OSI",
      },
    },
    {
      path: "supports_transmission",
      component: () => import("@/views/network/SupportsTransmission.vue"),
      meta: {
        title: "Les supports de transmission",
      },
    },
    {
      path: "classes_ip",
      component: () => import("@/views/network/ClassesIp.vue"),
      meta: {
        title: "Les classes d'adresses IP",
      },
    },
    {
      path: "structure_ip",
      component: () => import("@/views/network/StructureIp.vue"),
      meta: {
        title: "Structure d'une adresse IP",
      },
    },
    {
      path: "calcul_sous_reseaux",
      component: () => import("@/views/network/CalculSousReseaux.vue"),
      meta: {
        title: "Calculer les sous-réseaux",
      },
    },
    {
      path: "design_ethernet",
      component: () => import("@/views/network/DesignEthernet.vue"),
      meta: {
        title: "Design Ethernet (Projet Mediatis)",
      },
    },
    {
      path: "calculateur_sr",
      component: () => import("@/views/network/CalculateurSr.vue"),
      meta: {
        title: "Calculateur de sous-réseaux",
      },
    },
  ],
}
