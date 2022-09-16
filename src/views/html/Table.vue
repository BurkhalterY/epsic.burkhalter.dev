<template>
  <div>
    <h1>Les tableaux</h1>
    <p>
      Un tableau se constitue au minimum de 3 éléments :
      <ShowCode class="language-html" inlineCode="<table>" lang="html" />,
      <ShowCode class="language-html" inlineCode="<tr>" lang="html" /> et
      <ShowCode class="language-html" inlineCode="<td>" lang="html" />.
    </p>
    <ul>
      <li>
        <ShowCode class="language-html" inlineCode="<table>" lang="html" /> :
        c'est à l'intérieur qu'on va mettre nos lignes.
      </li>
      <li>
        <ShowCode class="language-html" inlineCode="<tr>" lang="html" /> : pour
        Table Row, c'est une ligne du tableau.
      </li>
      <li>
        <ShowCode class="language-html" inlineCode="<td>" lang="html" /> : pour
        Table Data, c'est une cellule du tableau.
      </li>
    </ul>
    <p>
      <ShowCode class="language-html" inlineCode="<th>" lang="html" /> (Table
      Header) peut parfois être utilisé à la place de
      <ShowCode class="language-html" inlineCode="<td>" lang="html" /> lorsqu'on
      veut indiquer qu'une cellule fait partie de l'entête.
    </p>
    <div class="row">
      <div class="col-md-6">
        <pre
          class="language-html"
        ><ShowCode file="html/table.html" lang="html"/></pre>
      </div>
      <div class="col-md-6">
        <table border>
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
      d'afficher les bordures mais est complétement facultatif voire
      déconseillé. Dans les bonnes pratiques, on devrait mettre les bordures
      dans le code CSS et non HTML.
    </p>
  </div>
</template>

<script>
import ShowCode from "../../components/ShowCode.vue";

export default {
  name: "Table",
  components: {
    ShowCode,
  },
};
</script>
