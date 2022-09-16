<template>
  <div>
    <h1>Les types de balises</h1>
    <p>
      Il existe deux types de balises : <strong>block</strong> et
      <strong>inline</strong>. Voici un petit tableau récapitulatif :
    </p>
    <table class="table table-responsive">
      <tr>
        <th></th>
        <th>Block</th>
        <th>Inline</th>
      </tr>
      <tr>
        <th>Taille</th>
        <td>Occupe toute la largeur</td>
        <td>N'occupe que la largeur nécessaire</td>
      </tr>
      <tr>
        <th>Position</th>
        <td>L'un en dessous de l'autre</td>
        <td>Les deux côte-à-côte</td>
      </tr>
      <tr>
        <th>Exemple de balise</th>
        <td>
          <ShowCode class="language-html" inlineCode="<div>" lang="html" />
        </td>
        <td>
          <ShowCode class="language-html" inlineCode="<span>" lang="html" />
        </td>
      </tr>
    </table>

    <p>
      Mais en pratique, à quoi servent ces balises ? Voici un tableau avec les
      principales balises à connaître :
    </p>
    <table class="table table-responsive">
      <tr>
        <th>Balise</th>
        <th>Inline/block</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>
          <ShowCode class="language-html" inlineCode="<div>" lang="html" />
        </td>
        <td>Block</td>
        <td>
          C'est la balise block "de base", elle permet de séparer les éléments
          pour, par exemple, leurs appliquer une classe CSS.
        </td>
      </tr>
      <tr>
        <td>
          <ShowCode class="language-html" inlineCode="<span>" lang="html" />
        </td>
        <td>Inline</td>
        <td>
          Équivalent de
          <ShowCode class="language-html" inlineCode="<div>" lang="html" /> en
          inline.
        </td>
      </tr>
      <tr>
        <td><ShowCode class="language-html" inlineCode="<p>" lang="html" /></td>
        <td>Block</td>
        <td>
          Un paragraphe. Pour insérer un retour à la ligne, écrire
          <ShowCode class="language-html" inlineCode="<br>" lang="html" />.
        </td>
      </tr>
      <tr>
        <td>
          <ShowCode class="language-html" inlineCode="<h1>" lang="html" />,
          <ShowCode class="language-html" inlineCode="<h2>" lang="html" /> ...
          <ShowCode class="language-html" inlineCode="<h6>" lang="html" />
        </td>
        <td>Block</td>
        <td>
          Les titres et sous-titres du plus important (h1) au moins important
          (h6).
        </td>
      </tr>
      <tr>
        <td>
          <ShowCode
            class="language-html"
            inlineCode='<a href="">'
            lang="html"
          />
        </td>
        <td>Inline</td>
        <td>
          <router-link to="/html/hypertexte">Un lien hypertexte.</router-link>
        </td>
      </tr>
      <tr>
        <td>
          <ShowCode
            class="language-html"
            inlineCode='<img src="" alt="" />'
            lang="html"
          />
        </td>
        <td>Block</td>
        <td><router-link to="/html/image">Une image.</router-link></td>
      </tr>
      <tr>
        <td>
          <ShowCode class="language-html" inlineCode="<ul>" lang="html" />
        </td>
        <td>Block</td>
        <td><router-link to="/html/liste">Une liste.</router-link></td>
      </tr>
      <tr>
        <td>
          <ShowCode class="language-html" inlineCode="<table>" lang="html" />
        </td>
        <td>Block</td>
        <td><router-link to="/html/table">Un tableau.</router-link></td>
      </tr>
      <tr>
        <td>
          <ShowCode class="language-html" inlineCode="<input>" lang="html" />
        </td>
        <td>Inline</td>
        <td><router-link to="/html/form">Des champs d'entrée.</router-link></td>
      </tr>
    </table>
  </div>
</template>

<script>
import ShowCode from "../../components/ShowCode.vue";

export default {
  name: "TypesBalises",
  components: {
    ShowCode,
  },
};
</script>
