<template>
  <div>
    <h1>Les constructeurs</h1>
    <p>
      Les constructeurs servent à initialiser l'objet lors de l'instanciation.
      Ce sont simplement des méthodes qui ont le même nom que la classe.
      Attention, ces méthodes n'ont pas de type de retour, même pas void.
      Exemple :
    </p>
    <pre
      class="language-java"
    ><ShowCode file="poo/constructeur0.java" lang="java"/></pre>
    <p>
      Rappelez-vous qu'il est possible d'avoir plusieurs méthodes avec le même
      nom si les arguments sont différents. Java choisira tous seul en fonction
      des arguments passés. Ceci s'appelle la surcharge d'une méthode.
    </p>
    <p>Je peux maintenant instancier mon objet :</p>
    <pre
      class="language-java"
    ><ShowCode file="poo/constructeur1.java" lang="java"/></pre>
  </div>
</template>

<script>
import ShowCode from "../../components/ShowCode.vue"

export default {
  name: "Constructeur",
  components: {
    ShowCode,
  },
}
</script>
