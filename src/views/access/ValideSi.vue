<template>
  <div>
    <p>
      <i>Valide si</i> est une des propriétés des champs. Elle permet de
      n'autoriser à entrer que des valeurs qui correspondent à cette règle.
    </p>
    <p>Exemples de valide si :</p>
    <table>
      <tr>
        <th colspan="2">Pour un champ <i>Texte</i></th>
      </tr>
      <tr>
        <td><samp>Pas Comme "*[!a-z -]*"</samp></td>
        <td>Autorise les noms avec accents, traits d'union et espaces</td>
      </tr>
      <tr>
        <td><samp>Comme "*@*.*"</samp></td>
        <td>Pour les e-mails, oblige au minimum un @ et un point</td>
      </tr>
      <tr>
        <td><samp>Comme "### ### ## ##"</samp></td>
        <td>Pour les numéros de téléphones (format : 012 345 67 89)</td>
      </tr>
      <tr>
        <td><samp>Comme "[+]## ## ### ## ##"</samp></td>
        <td>Pour les numéros de téléphones (format : +41 12 345 67 89)</td>
      </tr>
      <tr>
        <th colspan="2">Pour un champ <i>Date/Heure</i></th>
      </tr>
      <tr>
        <td><samp>&lt;=Maintenant()</samp></td>
        <td>Une date qui a déjà eu lieu</td>
      </tr>
      <tr>
        <th colspan="2">Pour un champ <i>Numérique</i></th>
      </tr>
      <tr>
        <td><samp>&lt;=Année(Maintenant())</samp></td>
        <td>Une année qui a déjà eu lieu</td>
      </tr>
      <tr>
        <td><samp>&gt;=1000 Et &lt;100000000</samp></td>
        <td>Un nombre qui a entre 4 et 8 chiffres (code PIN par exemple)</td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
th {
  @apply pt-4 pb-1 border-t-0;
}
</style>
