<script setup>
import ShowCode from "@/components/ShowCode.vue"
</script>

<template>
  <div>
    <p>
      Un tableau se constitue au minimum de 3 éléments :
      <ShowCode raw="<table>" lang="html" :inline="true" />,
      <ShowCode raw="<tr>" lang="html" :inline="true" /> et
      <ShowCode raw="<td>" lang="html" :inline="true" />.
    </p>
    <ul>
      <li>
        <ShowCode raw="<table>" lang="html" :inline="true" /> : le tableau
        lui-même.
      </li>
      <li>
        <ShowCode raw="<tr>" lang="html" :inline="true" /> : pour
        <i>Table Row</i>, c'est une ligne du tableau.
      </li>
      <li>
        <ShowCode raw="<td>" lang="html" :inline="true" /> : pour
        <i>Table Data</i>, c'est une cellule du tableau.
      </li>
    </ul>
    <p>
      <ShowCode raw="<th>" lang="html" :inline="true" />, pour
      <i>Table Header</i>, peut être utilisé à la place de
      <ShowCode raw="<td>" lang="html" :inline="true" /> lorsqu'on veut indiquer
      qu'une cellule appartient à l'entête.
    </p>
    <div class="grid grid-cols-2">
      <div>
        <ShowCode file="html/code/table.html" lang="html" />
      </div>
      <div>
        <table class="m-5">
          <tr>
            <th>#</th>
            <th>Nom</th>
            <th>Temps</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Mecha Sonic</td>
            <td>01:20:103</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Shadow</td>
            <td>01:20:978</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Sonic</td>
            <td>01:21:537</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Silver</td>
            <td>01:23:655</td>
          </tr>
        </table>
      </div>
    </div>
    <p>
      L'attribut <code>border</code> est utilisé ici uniquement dans le but
      d'afficher les bordures mais est facultatif voire déconseillé. Dans les
      bonnes pratiques, on devrait mettre les bordures dans le CSS et non dans
      le HTML.
    </p>
  </div>
</template>

<style scoped>
th,
td {
  @apply p-px border border-black;
}
</style>
