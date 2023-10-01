<template>
  <div>
    <p>
      Le VBA (Visual Basic for Applications) permet de faire divers actions dans
      et entre les formuaires d'Access.
    </p>

    <h2>Associer du code VBA à un bouton</h2>
    <p>
      Créez un bouton normal avec n'importe quelle fonction. Allez ensuite dans
      les propriétés → <i>Événement</i> et changez [Macro incorporée] en
      [Procédure événementielle].
    </p>
    <img src="/access/medias/vba_bouton.png" />
    <p>Cliquez sur les trois points (...)<br />L'éditeur VBA s'ouvre.</p>
    <p>Voici les pricipales fonctions VBA :</p>
    <table>
      <tr>
        <td><samp>DoCmd.OpenForm "F_Formulaire"</samp></td>
        <td>Ouvre le formulaire F_Formulaire</td>
      </tr>
      <tr>
        <td><samp>DoCmd.OpenForm "F_Formulaire", , , , acFormAdd</samp></td>
        <td>Ouvre le formulaire F_Formulaire sur un nouvel enregistrement</td>
      </tr>
      <tr>
        <td><samp>DoCmd.Close</samp></td>
        <td>Ferme le formulaire</td>
      </tr>
    </table>
  </div>
</template>
