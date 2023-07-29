<script setup>
import ShowCode from "@/components/ShowCode.vue"
</script>

<template>
  <div>
    <p>
      Il existe deux types de balises : <strong>block</strong> et
      <strong>inline</strong>. Voici un petit tableau récapitulatif :
    </p>
    <table>
      <tr>
        <th></th>
        <th>Block</th>
        <th>Inline</th>
      </tr>
      <tr>
        <td class="font-bold">Taille</td>
        <td>Occupe toute la largeur</td>
        <td>N'occupe que la largeur nécessaire</td>
      </tr>
      <tr>
        <td class="font-bold">Position</td>
        <td>L'un en dessous de l'autre</td>
        <td>Les deux côte-à-côte</td>
      </tr>
      <tr>
        <td class="font-bold">Exemple de balise</td>
        <td><ShowCode raw="<div>" lang="html" :inline="true" /></td>
        <td><ShowCode raw="<span>" lang="html" :inline="true" /></td>
      </tr>
    </table>

    <p>
      Mais en pratique, à quoi servent ces balises ? Voici un tableau avec les
      principales balises à connaître :
    </p>
    <table>
      <tr>
        <th>Balise</th>
        <th>Inline/block</th>
        <th>Description</th>
      </tr>
      <tr>
        <td><ShowCode raw="<div>" lang="html" :inline="true" /></td>
        <td>Block</td>
        <td>
          C'est la balise block "de base", elle permet de séparer les éléments
          pour, par exemple, leurs appliquer une classe CSS.
        </td>
      </tr>
      <tr>
        <td><ShowCode raw="<span>" lang="html" :inline="true" /></td>
        <td>Inline</td>
        <td>
          Équivalent de
          <ShowCode raw="<div>" lang="html" :inline="true" /> mais pour inline.
        </td>
      </tr>
      <tr>
        <td><ShowCode raw="<p>" lang="html" :inline="true" /></td>
        <td>Block</td>
        <td>
          Un paragraphe. Pour insérer un retour à la ligne, utiliser la balise
          <ShowCode raw="<br>" lang="html" :inline="true" />.
        </td>
      </tr>
      <tr>
        <td>
          <ShowCode raw="<h1>" lang="html" :inline="true" />,
          <ShowCode raw="<h2>" lang="html" :inline="true" /> ...
          <ShowCode raw="<h6>" lang="html" :inline="true" />
        </td>
        <td>Block</td>
        <td>
          Les titres et sous-titres du plus important (h1) au moins important
          (h6).
        </td>
      </tr>
      <tr>
        <td><ShowCode raw='<a href="">' lang="html" :inline="true" /></td>
        <td>Inline</td>
        <td>
          <router-link to="/html/hypertexte">Un lien hypertexte</router-link>
        </td>
      </tr>
      <tr>
        <td>
          <ShowCode raw='<img src="" alt="" />' lang="html" :inline="true" />
        </td>
        <td>Block</td>
        <td><router-link to="/html/image">Une image</router-link></td>
      </tr>
      <tr>
        <td><ShowCode raw="<ul>" lang="html" :inline="true" /></td>
        <td>Block</td>
        <td><router-link to="/html/liste">Une liste</router-link></td>
      </tr>
      <tr>
        <td><ShowCode raw="<table>" lang="html" :inline="true" /></td>
        <td>Block</td>
        <td><router-link to="/html/table">Un tableau</router-link></td>
      </tr>
      <tr>
        <td><ShowCode raw="<input>" lang="html" :inline="true" /></td>
        <td>Inline</td>
        <td><router-link to="/html/form">Des champs d'entrée</router-link></td>
      </tr>
    </table>
  </div>
</template>
