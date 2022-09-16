<template>
  <div>
    <h1>Plan du site</h1>
    <ul>
      <li><router-link to="/access/tables">Les tables</router-link></li>
      <li><router-link to="/access/relations">Les relations</router-link></li>
      <li><router-link to="/access/valide_si">Valide si</router-link></li>
      <li>
        <router-link to="/access/donnees">Ajouter des données</router-link>
      </li>
      <li>
        <router-link to="/access/listes_deroulantes"
          >Listes déroulantes pour les FK</router-link
        >
      </li>
      <li>
        <router-link to="/access/formulaires">Créer un formulaire</router-link>
      </li>
      <li>
        <router-link to="/access/boutons"
          >Ajouter des boutons aux formulaires</router-link
        >
      </li>
      <li><router-link to="/access/vba">Les bases du VBA</router-link></li>
      <li>
        <router-link to="/access/requetes"
          >Afficher une liste avec une requête</router-link
        >
      </li>
      <li>
        <router-link to="/access/control_zone_liste"
          >Importer, ajouter, modifier et supprimer des éléments d'une zone de
          liste (niveau avancé)</router-link
        >
      </li>
      <li>
        <router-link to="/access/etiquettes"
          >Imprimer des étiquettes</router-link
        >
      </li>
      <br />
      <li>
        <strong>Bonus : </strong
        ><router-link to="/access/access1"
          >Ma base de données en Access 1.0</router-link
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
