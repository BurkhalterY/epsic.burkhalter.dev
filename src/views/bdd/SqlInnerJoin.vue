<template>
  <div>
    <h1>Requêtes sur plusieurs tables</h1>
    <p>
      Pour effectuer une requête sur plusieurs tables, il faut utiliser
      <strong>INNER JOIN</strong>.
    </p>

    <h3>Pour une relation 1 à n</h3>
    <p>
      Quand il n'y a que 2 tables (une table contient un champs FK vers une
      autre table), on construit la requête comme ceci :
    </p>
    <pre
      class="language-sql"
    ><ShowCode file="bdd/select-1-1.sql" lang="sql"/></pre>
    <p>
      On préfère ne pas utiliser l'étoile quand on fait une requête sur
      plusieurs tables pour plus de clarté. Ici on prend le sexe en vérifiant
      que le FK égale l'ID.
    </p>

    <h3>Pour une relation n à n</h3>
    <p>
      Lorsqu'il y a 2 tables dans lesquelles allé chercher les données, on doit
      utiliser 2 fois <strong>INNER JOIN</strong> à la suite.
    </p>
    <pre
      class="language-sql"
    ><ShowCode file="bdd/select-1-n.sql" lang="sql"/></pre>
    <p>
      On peut bien évidement ajouté les même options supplémentaires
      qu'<router-link to="/bdd/sql_select">ici</router-link>. Simplement les
      rajouter à la fin.
    </p>

    <p>
      La base de données utilisée est disponible
      <a href="/medias/bdd/tuto.sql">ici</a>.
    </p>
  </div>
</template>

<script>
import ShowCode from "../../components/ShowCode.vue"

export default {
  name: "SqlInnerJoin",
  components: {
    ShowCode,
  },
}
</script>
