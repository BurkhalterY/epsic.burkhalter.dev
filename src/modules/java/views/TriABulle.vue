<script setup>
import ShowCode from "@/components/ShowCode.vue"
</script>

<template>
  <div>
    <p>L'algorithme du tri à bulle permet de trier un tableau.</p>
    <p>
      On parcourt le tableau et on vérifie que la case d'avant est plus petite
      que la case d'après. Sinon, on les inverse.<br />Pour que le tableau soit
      trier à 100&nbsp;%, il faut répéter l'opération autant de fois qu'il y a
      de case, moins une.
    </p>
    <ShowCode file="/java/code/trier.java" lang="java" />
  </div>
</template>
