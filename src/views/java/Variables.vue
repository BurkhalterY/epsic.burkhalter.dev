<script setup>
import ShowCode from "@/components/ShowCode.vue"
</script>

<template>
  <div>
    <p>
      Les variables servent à mémoriser des données dans la RAM pour pouvoir les
      réutiliser plus tard.
    </p>

    <h2>Les types de variables</h2>
    <table>
      <thead>
        <tr>
          <th>Nom</th>
          <th>Taille</th>
          <th>Remarque</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>boolean</td>
          <td>1 bit</td>
          <td>Deux possibilités : true ou false</td>
        </tr>
        <tr>
          <td>byte</td>
          <td>1 octet</td>
          <td>Entre -128 et 127</td>
        </tr>
        <tr>
          <td>short</td>
          <td>2 octets</td>
          <td>Entre -32768 et 32767</td>
        </tr>
        <tr>
          <td>int</td>
          <td>4 octets</td>
          <td>Entre -2'147'483'648 et 2'147'483'647</td>
        </tr>
        <tr>
          <td>long</td>
          <td>8 octets</td>
          <td>Entre -9'223'372'036'854'775'808 et 9'223'372'036'854'775'807</td>
        </tr>
        <tr>
          <td>float</td>
          <td>4 octets</td>
          <td>Nombre à virgule, précision simple</td>
        </tr>
        <tr>
          <td>double</td>
          <td>8 octets</td>
          <td>Nombre à virgule, précision double</td>
        </tr>
        <tr>
          <td>char</td>
          <td>2 octets</td>
          <td>Un seul caractère</td>
        </tr>
        <tr>
          <td>String</td>
          <td>Taille variable</td>
          <td>Une chaîne de caractères</td>
        </tr>
      </tbody>
    </table>

    <h2>Utilisation</h2>
    <ShowCode raw="type nomVariable = 0;" lang="java" />
    <span
      ><b>type</b> : un des types présentés au dessus, à choisir en fonction du
      besoin.</span
    ><br />
    <span
      ><b>nomVariable</b> : le nom qu'on utilisera par la suite pour faire
      appelle à notre variable, sans espace ni caractères spéciaux, le plus
      souvent en
      <a href="https://fr.wikipedia.org/wiki/Camel_case" target="_blank"
        >Camel Case</a
      >.</span
    ><br />
    <span
      ><b>= 0</b> : Sert à initialiser directement la variable avec une valeur.
      C'est facultatif. Si on ne le met pas, la variable vaut
      <code>null</code> et ne peut pas être utilisée dans des calculs.</span
    >

    <h2>Exemples</h2>
    <ShowCode
      raw="int maVariable; // crée une variable avec le nom maVariable&NewLine;maVariable = 0; // initialise la variable à 0"
      lang="java"
    />
    <ShowCode
      raw="int maVariable = 0; // crée et initialise la variable sur la même ligne"
      lang="java"
    />

    <h2>Remarques</h2>
    <ul>
      <li>
        Dans un nombre à virgule, on utilise toujours un point et non pas une
        virgule. Exemple : <code>2.5</code>
      </li>
      <li>
        Pour le type <code>char</code>, on écrit le caractère entre apostrophes.
        Exemple : <code>'a'</code>
      </li>
      <li>
        Pour le type <code>String</code> (attention à la majuscule), on écrit
        les caractères entre guillemets. Exemple : <code>"Hello world!"</code>
      </li>
    </ul>
  </div>
</template>

<style scoped>
tr > th {
  @apply text-start;
}
tr > td {
  @apply py-3;
}
</style>
