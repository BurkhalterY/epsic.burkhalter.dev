<template>
  <div>
    <p>
      Les champs qui servent à faire des relations sont appelés dans champs
      relationnels. Dans ce cours, la convention veut que leurs noms commencent
      par <b>FK_</b> pour Foreign Key. Ils seront toujours de type
      <i>Numérique</i> car ils ne contiennent que l'ID de l'enregistrement
      cible.
    </p>

    <h2>Créer les relations entre les tables</h2>
    <p>
      Allez dans le menu "Outils de base de données" → "Relations" et
      sélectionnez les trois tables à lier.
    </p>
    <img src="/access/medias/relations_Afficher_la_table.png" />
    <p>
      Pour créer une relation, faites glisser le champ relationnel de la table
      d'association sur l'ID de la table de données.<br />N'oubliez pas de
      cocher "Appliquer l'intégrité référentielle".
    </p>
    <img
      src="/access/medias/relations_Creer.gif"
      alt="Petit gif qui montre comment faire"
    />
    <p>
      Si Access affiche une erreur, vérifiez que les onglets des trois tables
      que vous essayez de lier sont fermés et que les champs FK_ soient bien en
      <i>Numérique</i>.
    </p>
  </div>
</template>
