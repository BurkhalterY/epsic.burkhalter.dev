<template>
  <div>
    <h1>Plan du site</h1>
    <ul>
      <li><router-link to="/java/new">Créer un nouveau projet</router-link></li>
      <li>
        <router-link to="/java/commentaires">Les commentaires</router-link>
      </li>
      <li><router-link to="/java/variables">Les variables</router-link></li>
      <li><router-link to="/java/operateurs">Les opérateurs</router-link></li>
      <li>
        <router-link to="/java/afficher"
          >Afficher du texte dans la console</router-link
        >
      </li>
      <li>
        <router-link to="/java/clavier">Lire les entrées clavier</router-link>
      </li>
      <li><router-link to="/java/conditions">Les conditions</router-link></li>
      <li>
        <router-link to="/java/conditions_avancees"
          >Les conditions avancées</router-link
        >
      </li>
      <li><router-link to="/java/boucles">Les boucles</router-link></li>
      <li>
        <router-link to="/java/conversion_boucle"
          >Conversion d'un for en while et inversement</router-link
        >
      </li>
      <li><router-link to="/java/methodes">Les méthodes</router-link></li>
      <li><router-link to="/java/tableaux">Les tableaux</router-link></li>
      <li><router-link to="/java/tri_a_bulle">Tri à bulle</router-link></li>
      <br />
      <li>
        <router-link to="/java/structogramme"
          >Symboles Nassi-Shneidermann</router-link
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
