<template>
  <div>
    <img src="/bin/medias/qr_code.png" alt="un code QR" class="float-right" />
    <p>
      Le QR code (Quick Response Code) est un type de code-barres en deux
      dimensions.<br />Il peut contenir diverses données telles que du texte,
      des URL, des mots de passe Wi-Fi, des fiches de contacts vCard, etc.
    </p>
    <p>
      Il existe 40 versions de QR code. Chaque version ajoute 4 pixels en
      longueur et en largeur au QR code :
    </p>
    <table>
      <tr v-for="i in 40">
        <td>Version {{ i }}</td>
        <td>{{ 17 + i * 4 }} × {{ 17 + i * 4 }} px</td>
      </tr>
    </table>
    <hr />
    <p>Il y a plusieurs zones de contrôle dans les QR codes.</p>
  </div>
</template>
