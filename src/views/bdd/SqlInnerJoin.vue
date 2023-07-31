<script setup>
import ShowCode from "@/components/ShowCode.vue"
</script>

<template>
  <div>
    <p>
      Pour effectuer une requête sur plusieurs tables, il faut utiliser
      <strong>INNER JOIN</strong>.
    </p>

    <h2>Pour une relation 1 à n</h2>
    <p>
      Quand il n'y a que deux tables (1 à n), on construit la requête comme ceci
      :
    </p>
    <ShowCode file="/bdd/code/select-1-1.sql" lang="sql" />
    <p>
      On préfère ne pas utiliser l'étoile quand on fait une requête sur
      plusieurs tables pour plus de clarté. Ici, on prend le sexe en vérifiant
      que le FK est égal à l'ID.
    </p>

    <h2>Pour une relation n à n</h2>
    <p>
      Lorsqu'il y a deux tables dans lesquelles aller chercher les données, on
      doit utiliser deux fois <strong>INNER JOIN</strong> à la suite.
    </p>
    <ShowCode file="/bdd/code/select-1-n.sql" lang="sql" />
    <p>
      On peut bien évidement ajouter les mêmes options supplémentaires
      qu'<router-link to="/bdd/sql_select">ici</router-link>, simplement en les
      ajoutant à la fin.
    </p>

    <p>
      La base de données utilisée est disponible
      <a href="/bdd/files/tuto.sql" download>ici</a>.
    </p>
  </div>
</template>
