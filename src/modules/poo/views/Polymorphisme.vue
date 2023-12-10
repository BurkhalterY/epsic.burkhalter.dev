<script setup>
import ShowCode from "@/components/ShowCode.vue"
</script>

<template>
  <div>
    <p>
      Le polymorphisme est un terme chelou et barbare mais qui représente en
      fait quelque chose d'assez simple.
    </p>
    <p>
      Nous avons déjà vu l'héritage. Il est bien évidemment possible de créer
      des tableaux d'objets. Par exemple, des tableaux de <code>Personne</code>.
      Mais si nous avons plusieurs classes enfants qui héritent de
      <code>Personne</code>, par exemple <code>Apprenti</code>,
      <code>Enseignant</code> et <code>Formateur</code>, nous serions coincés.
    </p>
    <p>
      C'est à cela que sert le polymorphisme. Il permet à un objet d'une classe
      parente de contenir un objet enfant, et vous n'avez rien besoin de
      modifier à vos classes pour cela.
    </p>
    <p>
      Pour l'exemple, reprenons le même projet que pour
      <router-link to="/poo/heritage">l'héritage</router-link>. Dans la classe
      principale :
    </p>
    <ShowCode file="/poo/code/polymorphisme.java" lang="java" />
    <p>
      Vous voyez que l'on peut mettre un objet de classe
      <code>Apprenti</code> dans un objet de type <code>Personne</code>.
      Attention cependant car l'inverse n'est pas possible. Vous pouvez essayer
      par vous-même. 😉
    </p>
  </div>
</template>
