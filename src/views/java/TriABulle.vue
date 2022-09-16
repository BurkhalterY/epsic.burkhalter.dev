<template>
  <div>
    <h1>Tri à bulle</h1>
    <p>L'algorithme du tri à bulle permet de trier un tableau.</p>
    <p>
      On parcourt le tableau et on vérifie que la case d'avant est plus petite
      que la case d'après, sinon on les inverse.<br />Pour que le tableau soit
      trier à 100%, il faut répéter l'opération autant de fois qu'il y a de case
      moins un.
    </p>
    <pre
      class="language-java"
    ><ShowCode file="java/trier.java" lang="java"/></pre>
  </div>
</template>

<script>
import ShowCode from "../../components/ShowCode.vue"

export default {
  name: "TriABulle",
  components: {
    ShowCode,
  },
}
</script>
