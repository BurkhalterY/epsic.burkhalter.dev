<template>
  <div>
    <h1>Plan du site</h1>
    <ul>
      <li>
        <strong
          ><router-link to="/bdd/fk_theorie"
            >Mieux comprendre les FK</router-link
          ></strong
        >
      </li>
      <li>
        <router-link to="/bdd/install_mysql"
          >Installer un serveur MySQL</router-link
        >
      </li>
      <li>
        <router-link to="/bdd/phpmyadmin"
          >Prise en main de phpMyAdmin</router-link
        >
      </li>
      <li><router-link to="/bdd/fk">Lier un champ FK_</router-link></li>
      <li>
        <router-link to="/bdd/sql_select"
          >Récuperer des données avec des requêtes SQL</router-link
        >
      </li>
      <li>
        <router-link to="/bdd/sql_inner_join"
          >Requêtes sur plusieurs tables</router-link
        >
      </li>
      <br />
      <li>
        <a href="https://github.com/BurkhalterY/Ecommerce-BD104" target="_blank"
          >Mon projet au module 104 (édition 2019)</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Index",
};
</script>
