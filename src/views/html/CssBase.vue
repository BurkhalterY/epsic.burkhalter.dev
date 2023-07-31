<script setup>
import ShowCode from "@/components/ShowCode.vue"
</script>

<template>
  <div>
    <p>
      Le CSS (<i>Cascading Style Sheets</i> ou
      <i>feuilles de style en cascade</i> en français) est un langage permettant
      la mise en forme des élements HTML.
    </p>
    <p>
      Le CSS a besoin de deux choses pour s'appliquer : les élements sur
      lesquels agir et quel style leur appliquer. Et on l'écrira comme ça :
    </p>
    <ShowCode file="/html/code/base.css" lang="css" />

    <h2>Les sélecteurs</h2>
    <p>
      Pour savoir sur quels élements le CSS doit s'appliquer, on utilise les
      sélecteurs. Il y a 3 types principaux de sélecteurs : pour les balises
      HTML, les classes et les IDs :
    </p>
    <table>
      <tr>
        <th>Balise HTML</th>
        <th>Classe</th>
        <th>ID</th>
      </tr>
      <tr>
        <td>
          <ShowCode file="/html/code/selector-tag.css" lang="css" />
        </td>
        <td>
          <ShowCode file="/html/code/selector-class.css" lang="css" />
        </td>
        <td>
          <ShowCode file="/html/code/selector-id.css" lang="css" />
        </td>
      </tr>
      <tr class="align-text-top">
        <td>
          Pour sélectionner un type de balise HTML (ex. <code>p</code>,
          <code>h1</code>). On écrit simplement la balise sans
          <code>&lt;</code> et <code>&gt;</code>.
        </td>
        <td>
          Pour sélectionner tous les élement ayant une certaine classe. On écrit
          la classe précédée d'un point (<code>.</code>)<br />Il est possible de
          sélectionner un élement seulement s'il possède deux classes ou plus
          les ajoutant simplement à la suite séparées par un autre point.<br />
          Exemple :
          <ShowCode
            raw=".first-class.second-class { ... }"
            lang="css"
            :inline="true"
          />
        </td>
        <td>
          Pour sélectionner l'élement possédant un ID précis (normalement un
          seul par page), on écrit l'ID précédé du caractère dièse
          (<code>#</code>).
        </td>
      </tr>
    </table>
    <p>
      Il est également possible d'utiliser deux sélecteurs séparés par une
      virgule afin de créer un <i>ou</i>. C'est-à-dire que l'élement soit
      affecté s'il respecte l'un ou l'autre des sélecteurs. Exemple :
    </p>
    <ShowCode file="/html/code/selector-or.css" lang="css" />

    <h2>Les propriétés CSS</h2>
    <p>
      Les propriétés modifient le style de l'élement ou des élements trouvés par
      le sélecteur. Il en existe beaucoup. Voici un exemple avec des propriétés
      de base et assez intuitives :
    </p>
    <div class="grid grid-cols-2">
      <div>
        <pre class="text-center">CSS</pre>
        <ShowCode file="/html/code/properties.css" lang="css" />
      </div>
      <div>
        <pre class="text-center">HTML</pre>
        <ShowCode file="/html/code/css-base-exemple1.html" lang="html" />
      </div>
    </div>
    <span>Résultat :</span>
    <p style="color: green; font-size: 150%; font-family: consola">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit...
    </p>
  </div>
</template>
