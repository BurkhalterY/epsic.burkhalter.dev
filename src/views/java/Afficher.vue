<script setup>
import ShowCode from "@/components/ShowCode.vue"
</script>

<template>
  <div>
    <p>Lorsque vous lancez votre programme, la console apparaît en bas.</p>
    <p>Pour écrire dedans, on utilise l'une de ces deux fonctions :</p>
    <table>
      <thead>
        <tr>
          <th>Fonction</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <ShowCode
              raw="System.out.print(monTexte);"
              lang="java"
              :inline="true"
            />
          </td>
          <td>Affiche la valeur de <code>monTexte</code> dans la console.</td>
        </tr>
        <tr>
          <td>
            <ShowCode
              raw="System.out.println(monTexte);"
              lang="java"
              :inline="true"
            />
          </td>
          <td>
            Affiche la valeur de <code>monTexte</code> dans la console, suivi
            d'un retour à la ligne.
          </td>
        </tr>
      </tbody>
    </table>
    <p>
      La variable <code>monTexte</code> peut être de n'importe quel type
      primitif (<code>boolean</code>, <code>byte</code>, <code>short</code>,
      <code>int</code>, <code>long</code>, <code>float</code>,
      <code>double</code> ou <code>char</code>) ou un objet <code>String</code>.
    </p>

    <h2>Exemple</h2>
    <ShowCode raw='System.out.println("Hello World !");' lang="java" />

    <h2>Résultat</h2>
    <img src="/java/medias/console.png" alt="console" />
  </div>
</template>

<style scoped>
tr > th {
  @apply text-start;
}
tr > td {
  @apply py-3;
}
</style>
