<template>
  <div>
    <h2>Créer la requête</h2>
    <p>
      Commençons par créer une requête, cliquez sur
      <i>Création de requête</i> dans l'onglet Créer.
    </p>
    <img src="/access/medias/requete_1.png" class="mx-auto" />
    <p>
      Sélectionnez les trois tables qui doivent déjà être liées entre elles :
    </p>
    <img src="/access/medias/requete_2.png" />
    <p>
      Une requête permet de récupérer des données de plusieurs tables selon des
      critères choisis.
    </p>
    <p>
      Dans notre cas, nous allons rechercher les e-mails appartenant à une
      personne.<br />Nous avons donc besoin de récupérer l'adresse (de la table
      T_Email) en fonction de l'ID de la personne.<br />Comme nous choisissons
      ID_Personne, pas besoin de cocher la case <i>Afficher</i>.
    </p>
    <p>
      Il faut aussi prendre les ID de T_Avoir_email et T_Email.<br />Le critère
      pour ID_Personne est [Forms]![F_Personne]![ID_Personne]
    </p>
    <img src="/access/medias/requete_3.png" />
    <p>Une fois la requête terminée, sauvegardez-là : R_Avoir_email</p>

    <h2>Créer la zone de liste</h2>
    <p>
      Passez dans le formulaire F_Personne en <i>Mode Création</i> et insérez-y
      une zone de liste :
    </p>
    <img src="/access/medias/requete_4.png" />
    <p>Vous pouvez directement annuler l'assistant :</p>
    <img src="/access/medias/requete_5.png" />
    <p>Commencez par renommer la liste :</p>
    <img src="/access/medias/requete_6.png" />
    <p>
      Puis, dans l'onglet <i>Données</i>, dans le champ <i>Contenu</i>, mettez
      R_Avoir_email :
    </p>
    <img src="/access/medias/requete_7.png" />
    <p>
      Dans l'onglet <i>Format</i>, mettez le champ <i>Nbre colonnes</i> sur 3
      car nous affichons trois champs dans notre requête.<br />Dans
      <i>Largeurs colonnes</i>, mettez "0cm;0cm" car, ici, nous avons deux
      colonnes à cacher (les IDs) :
    </p>
    <img src="/access/medias/requete_8.png" />
    <p>
      Allez dans les propriétés du formulaire, dans l'onglet <i>Événement</i>,
      cliquez sur le bouton avec les trois petits points du champ
      <i>Sur activation</i> et sélectionnez <i>Générateur de code</i> :
    </p>
    <img src="/access/medias/requete_9.png" />
    <p>Access ouvre alors l'éditeur VBA :</p>
    <img src="/access/medias/requete_10.png" />
    <p>Collez-y la ligne suivante : <code>Me.Emails.Requery</code></p>
    <img src="/access/medias/requete_11.png" />
    <p>
      Voilà. Vous pouvez maintenant fermer l'éditeur VBA et quitter le mode
      création. Les e-mails s'afficheront en fonction de la personne.
    </p>
    <img src="/access/medias/requete_12.png" />
  </div>
</template>
