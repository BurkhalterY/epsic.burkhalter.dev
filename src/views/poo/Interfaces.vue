<script setup>
import ShowCode from "@/components/ShowCode.vue"
</script>

<template>
  <div>
    <p>
      Une interface ressemble beaucoup à une classe abstraite, mais avec une
      grosse différence : une classe peut utiliser plusieurs interfaces.
    </p>
    <p>Déclaration d'une interface :</p>
    <ShowCode file="/poo/code/interfaces0.java" lang="java" />
    <p>Utilisation d'une interface dans une classe :</p>
    <ShowCode file="/poo/code/interfaces1.java" lang="java" />
    <p>
      Cas pratique : vous voulez que certaines de vos classes puissent afficher
      une description d'elles-mêmes.
    </p>
    <p>
      On crée donc une classe abstraite <code>Description</code> par exemple :
    </p>
    <ShowCode file="/poo/code/interfaces2.java" lang="java" />
    <p>
      Et dans toutes nos classe qui doivent pouvoir afficher une description, on
      implémente l'interface.
    </p>
    <ShowCode file="/poo/code/interfaces3.java" lang="java" />
    <ShowCode file="/poo/code/interfaces4.java" lang="java" />
    <p>
      On peut ainsi faire des tableaux de type <code>Description</code> et
      boucler dessus pour afficher toutes les descriptions.
    </p>
  </div>
</template>
