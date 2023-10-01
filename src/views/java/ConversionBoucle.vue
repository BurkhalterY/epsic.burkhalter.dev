<script setup>
import ShowCode from "@/components/ShowCode.vue"
</script>

<template>
  <div>
    <p>Voici deux morceaux de codes qui font exactement la même chose :</p>
    <table>
      <thead>
        <tr>
          <th>Boucle for</th>
          <th>Boucle while</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><ShowCode file="/java/code/conv-for.java" lang="java" /></td>
          <td><ShowCode file="/java/code/conv-while.java" lang="java" /></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
td {
  @apply align-top;
}
</style>
