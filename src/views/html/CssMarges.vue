<template>
  <div>
    <h1>Les marges</h1>
    <p>
      Les marges permettent de mettre de l'espace entre les balises. Il en
      existe deux type :
    </p>
    <ul>
      <li>Marges extérieures (margin)</li>
      <li>Marges intérieures (padding)</li>
    </ul>
    <div class="row">
      <div class="col-md-6">
        <img
          src="/medias/html/css-margin-padding.png"
          alt=""
          class="img-fluid"
        />
      </div>
      <div class="col-md-6">
        <br />
        <ul>
          <li>
            <span style="background-color: #cff0fb">Bleu</span> : la balise sur
            laquelle les marges sont appliquées
          </li>
          <li>
            <span style="background-color: #e3dcff">Violet</span> : le padding
            (marges intérieures)
          </li>
          <li>
            <span style="background-color: #737373; color: white">Gris</span> :
            la bordure
          </li>
          <li>
            <span style="background-color: #fdffdf">Jaune</span> : le margin
            (marges extérieures)
          </li>
        </ul>
      </div>
    </div>
    <p>
      Il est également possible de spécifier plusieurs valeurs, une pour chaque
      côté (dans le sens des aiguilles d'une montre en partant de
      <code>top</code>) :
    </p>
    <pre
      class="language-css"
    ><ShowCode file="html/margin-4.css" lang="css"/></pre>
    <pre
      class="language-css"
    ><ShowCode file="html/margin-3.css" lang="css"/></pre>
    <pre
      class="language-css"
    ><ShowCode file="html/margin-2.css" lang="css"/></pre>
    <pre
      class="language-css"
    ><ShowCode file="html/margin-1.css" lang="css"/></pre>

    <p>
      Il existe aussi les quatre propriétés <code>margin-top</code>,
      <code>margin-right</code>, <code>margin-bottom</code> et
      <code>margin-left</code> et leur équivalent en padding pour ne spécifier
      qu'un côté. Utile lorsque nous aborderons l'<router-link
        to="/html/css_dom_heritage"
        >héritage</router-link
      >.
    </p>
  </div>
</template>

<script>
import ShowCode from "../../components/ShowCode.vue";

export default {
  name: "CssMarges",
  components: {
    ShowCode,
  },
};
</script>
