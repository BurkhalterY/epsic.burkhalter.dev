export default {
  path: "/bdd",
  component: () => import("@/views/bdd/Base.vue"),
  meta: {
    favicon: "bdd.ico",
  },
  children: [
    {
      path: "",
      component: () => import("@/views/bdd/Index.vue"),
      meta: {
        title: "Menu - Module 100",
      },
    },
    {
      path: "fk_theorie",
      component: () => import("@/views/bdd/FkTheorie.vue"),
      meta: {
        title: "Mieux comprendre les FK",
      },
    },
    {
      path: "install_mysql",
      component: () => import("@/views/bdd/InstallMysql.vue"),
      meta: {
        title: "Installer un serveur MySQL",
      },
    },
    {
      path: "phpmyadmin",
      component: () => import("@/views/bdd/Phpmyadmin.vue"),
      meta: {
        title: "Prise en main de phpMyAdmin",
      },
    },
    {
      path: "fk",
      component: () => import("@/views/bdd/Fk.vue"),
      meta: {
        title: "Lier un champ FK_",
      },
    },
    {
      path: "sql_select",
      component: () => import("@/views/bdd/SqlSelect.vue"),
      meta: {
        title: "Récuperer des données avec des requêtes SQL",
      },
    },
    {
      path: "sql_inner_join",
      component: () => import("@/views/bdd/SqlInnerJoin.vue"),
      meta: {
        title: "Requêtes sur plusieurs tables",
      },
    },
  ],
}
