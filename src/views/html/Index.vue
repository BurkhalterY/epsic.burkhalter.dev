<template>
  <div>
    <h1>Plan du site</h1>
    <p>
      <router-link to="/html/site_web">Qu'est-ce qu'un site web ?</router-link>
    </p>
    <h3>HTML</h3>
    <ul>
      <li><router-link to="/html/html_base">Les bases du HTML</router-link></li>
      <li>
        <router-link to="/html/types_balises">Les types de balises</router-link>
      </li>
      <li>
        <router-link to="/html/structure_101"
          >Structure attendue pour le module 101</router-link
        >
      </li>
      <li>
        <router-link to="/html/hypertexte">Les liens hypertextes</router-link>
      </li>
      <li>
        <router-link to="/html/image"
          >Les images (+ audio et vidéo)</router-link
        >
      </li>
      <li><router-link to="/html/liste">Les listes</router-link></li>
      <li><router-link to="/html/table">Les tableaux</router-link></li>
      <li><router-link to="/html/form">Les formulaires</router-link></li>
      <li>
        <router-link to="/html/iframe">L'intégration (iframe)</router-link>
      </li>
    </ul>
    <h3>CSS</h3>
    <ul>
      <li><router-link to="/html/css_base">Les bases du CSS</router-link></li>
      <li><router-link to="/html/css_marges">Les marges</router-link></li>
      <li>à suivre...</li>
    </ul>
    <h3>JavaScript</h3>
    <ul>
      <li>à venir...</li>
    </ul>
    <h4>Liens utiles</h4>
    <ul>
      <li>
        <a href="https://www.w3schools.com/" target="_blank">W3Schools</a>
      </li>
      <li>
        <a href="https://validator.w3.org/" target="_blank"
          >validator.w3.org (pour vérifier votre code HTML)</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Index",
}
</script>
