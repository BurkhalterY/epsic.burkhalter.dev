<template>
  <div>
    <table class="mx-auto">
      <tr>
        <th>Nom</th>
        <th>Symbole</th>
      </tr>
      <tr>
        <td>Modem</td>
        <td><img src="/network/medias/Sy_modem.png" alt="Modem" /></td>
      </tr>
      <tr>
        <td>Répéteur</td>
        <td><img src="/network/medias/Sy_repeteur.png" alt="Répéteur" /></td>
      </tr>
      <tr>
        <td>Concentrateur (Hub)</td>
        <td><img src="/network/medias/Sy_hub.png" alt="Hub" /></td>
      </tr>
      <tr>
        <td>Pont (Bridge)</td>
        <td><img src="/network/medias/Sy_pont.png" alt="Pont" /></td>
      </tr>
      <tr>
        <td>Commutateur (Switch)</td>
        <td><img src="/network/medias/Sy_switch.png" alt="Switch" /></td>
      </tr>
      <tr>
        <td>Routeur</td>
        <td><img src="/network/medias/Sy_routeur.png" alt="Routeur" /></td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
img {
  @apply m-0;
}
tr > th:first-child {
  @apply text-start;
}
tr > td:first-child {
  @apply align-top pt-3;
}
</style>
