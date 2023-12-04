<script setup>
import ShowCode from "@/components/ShowCode.vue"
</script>

<template>
  <div>
    <h2>Le switch</h2>
    <p>
      Le bloc <code>switch</code> permet de simplifier un code où on utiliserait
      plusieurs <code>else if</code> à la suite. Exemple :
    </p>
    <table>
      <thead>
        <tr>
          <th>If else if ...</th>
          <th>Switch</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <ShowCode file="/java/code/if-else-if-else.java" lang="java" />
          </td>
          <td>
            <ShowCode file="/java/code/switch.java" lang="java" />
          </td>
        </tr>
      </tbody>
    </table>
    <p>
      Le <code>break</code> est très important. Il sert à sortir du
      <code>switch</code> si la condition est remplie. Si vous l'oubliez, alors
      votre <code>switch</code> exécutera également le code des conditions se
      trouvant après.
    </p>
  </div>
</template>

<style scoped>
td {
  @apply align-top;
}
</style>
