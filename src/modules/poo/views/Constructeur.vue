<script setup>
import ShowCode from "@/components/ShowCode.vue"
</script>

<template>
  <div>
    <p>
      Les constructeurs servent à initialiser l'objet lors de l'instanciation.
      Ce sont simplement des méthodes qui ont le même nom que la classe.
      Attention, ces méthodes n'ont pas de type de retour, même pas
      <code>void</code>.
    </p>
    <ShowCode file="/poo/code/constructeur0.java" lang="java" />
    <p>
      Rappelez-vous qu'il est possible d'avoir plusieurs méthodes avec le même
      nom si les arguments sont différents. Java choisira tout seul en fonction
      des arguments passés. Ceci s'appelle la surcharge d'une méthode.
    </p>
    <p>Je peux maintenant instancier mon objet.</p>
    <ShowCode file="/poo/code/constructeur1.java" lang="java" />
  </div>
</template>
