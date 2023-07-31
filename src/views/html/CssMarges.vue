<script setup>
import ShowCode from "@/components/ShowCode.vue"
</script>

<template>
  <div>
    <p>
      Les marges permettent de mettre de l'espace entre les balises. Il en
      existe deux type :
    </p>
    <ul>
      <li>Marges extérieures (margin)</li>
      <li>Marges intérieures (padding)</li>
    </ul>
    <div class="grid grid-cols-2">
      <div>
        <img
          src="/html/medias/css-margin-padding.png"
          alt="Les marges selon le debugger de Firefox"
        />
      </div>
      <div>
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
    <ShowCode file="/html/code/margin-4.css" lang="css" />
    <ShowCode file="/html/code/margin-3.css" lang="css" />
    <ShowCode file="/html/code/margin-2.css" lang="css" />
    <ShowCode file="/html/code/margin-1.css" lang="css" />
    <p>
      Il existe aussi les quatre propriétés <code>margin-top</code>,
      <code>margin-right</code>, <code>margin-bottom</code> et
      <code>margin-left</code> et leur équivalent en padding pour ne spécifier
      qu'un côté, utile lorsque nous aborderons l'<span
        class="text-blue-600 hover:underline"
        >héritage</span
      >.
    </p>
  </div>
</template>
