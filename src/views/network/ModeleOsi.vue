<template>
  <div>
    <table class="w-full">
      <tr>
        <th></th>
        <th>N°</th>
        <th>Couche modèle OSI</th>
        <th>Equivalence TCP/IP</th>
      </tr>
      <tr>
        <td rowspan="4">Couches hautes</td>
        <td class="text-center">7</td>
        <td class="bg-[#d8ec9b] rounded-tr-xl">Application</td>
        <td rowspan="3">Application</td>
      </tr>
      <tr>
        <td class="text-center">6</td>
        <td class="bg-[#d8ec9b]">Présentation</td>
      </tr>
      <tr>
        <td class="text-center">5</td>
        <td class="bg-[#d8ec9b]">Session</td>
      </tr>
      <tr>
        <td class="text-center">4</td>
        <td class="bg-[#e7ed9c]">Transport</td>
        <td class="!border-t">Transport</td>
      </tr>
      <tr class="border-t border-black">
        <td rowspan="3">Couches matérielles</td>
        <td class="text-center">3</td>
        <td class="bg-[#eddc9c]">Réseau</td>
        <td class="!border-b">Internet</td>
      </tr>
      <tr>
        <td class="text-center">2</td>
        <td class="bg-[#e9c189]">Liaison</td>
        <td rowspan="2">Accès réseau</td>
      </tr>
      <tr>
        <td class="text-center">1</td>
        <td class="bg-[#e9988a]">Physique</td>
      </tr>
    </table>
    <br />

    <h2>Application</h2>
    <p>Le logiciel qui gère le rendu et les entrées</p>

    <h2>Présentation</h2>
    <p>Affichage visuel (GUI)</p>

    <h2>Session</h2>
    <p>Certaines adresses demandent une authentification</p>

    <h2>Transport</h2>
    <p>Gestion des ports, entre autres</p>

    <h2>Réseau</h2>
    <p>Gère la communication avec les adresses IP</p>

    <h2>Liaison</h2>
    <p>Liaison entre les couches 1 et 3<br />Adresse MAC</p>

    <h2>Physique</h2>
    <p>Transmission par les câbles</p>
  </div>
</template>

<style scoped>
td {
  @apply border-0 py-px;
}
</style>
