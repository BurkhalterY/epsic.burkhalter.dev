export default {
  path: "/bdd",
  component: () => import("@/views/ModuleBaseView.vue"),
  meta: {
    module: {
      path: "bdd",
      numero: 104,
      shortName: "Python et SQL",
      officialName: "Implémenter un modèle de données",
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
      path: "/bdd",
      component: () => import("./views/Menu.vue"),
      meta: {
        title: "Menu",
        isIndex: true,
      },
    },
    {
      path: "/bdd/fk_theorie",
      component: () => import("./views/FkTheorie.vue"),
      meta: {
        title: "Mieux comprendre les FK",
      },
    },
    {
      path: "/bdd/install_mysql",
      component: () => import("./views/InstallMysql.vue"),
      meta: {
        title: "Installer un serveur MySQL",
      },
    },
    {
      path: "/bdd/phpmyadmin",
      component: () => import("./views/Phpmyadmin.vue"),
      meta: {
        title: "Prise en main de phpMyAdmin",
      },
    },
    {
      path: "/bdd/fk",
      component: () => import("./views/Fk.vue"),
      meta: {
        title: "Lier un champ FK_",
      },
    },
    {
      path: "/bdd/sql_select",
      component: () => import("./views/SqlSelect.vue"),
      meta: {
        title: "Récuperer des données avec des requêtes SQL",
      },
    },
    {
      path: "/bdd/sql_inner_join",
      component: () => import("./views/SqlInnerJoin.vue"),
      meta: {
        title: "Requêtes sur plusieurs tables",
      },
    },
  ],
}
