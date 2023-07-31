<template>
  <div>
    <h2>Se connecter à phpMyAdmin</h2>
    <p>
      Si vous avez suivi la procédure de la page précédente, vous devriez déjà
      avoir la page de connexion de phpMyAdmin sous les yeux. Si ce n'est
      néanmoins pas le cas, l'adresse est généralement la suivante :
      <a href="http://localhost/mysql/" target="_blank">
        http://localhost/mysql/
      </a>
    </p>
    <p>Les identifiant et mot de passe par défaut sont root et root.</p>
    <img src="/bdd/medias/phpmyadmin_login.png" alt="Écran de connexion" />
    <p>Après connexion, vous arriverez sur cette page :</p>
    <img src="/bdd/medias/phpmyadmin_home.png" alt="Page principale" />

    <h2>Créer une nouvelle base de données</h2>
    <div class="alert-warning">
      <h3 class="alert-title">Ne pas confondre table et base de données.</h3>
      <div>
        Une base de données correspondrait dans Access au fichier .accdb et les
        tables en font partie.
      </div>
    </div>
    <p>
      Pour créer une base de données, cliquez
      <i>Nouvelle base de données</i> dans le menu de droite.
    </p>
    <img
      src="/bdd/medias/phpmyadmin_new_base.png"
      alt="Nouvelle base de données"
    />
    <p>
      Entrez le nom de votre base et laissez l'interclassement par défaut pour
      l'instant.
    </p>
    <img
      src="/bdd/medias/phpmyadmin_new_base2.png"
      alt="Nom de la base de données"
    />
    <p>Puis cliquez <i>Créer</i>.</p>

    <h2>Créer une nouvelle table</h2>
    <p>
      La base est vide. Pour y ajouter une table, donnez-lui un nom et cliquez
      <i>Exécuter</i>.
    </p>
    <img src="/bdd/medias/phpmyadmin_new_table.png" alt="Nouvelle table" />
    <p>Vous pouvez ensuite définir les champs comme dans Access.</p>
    <img src="/bdd/medias/phpmyadmin_new_table2.png" alt="Définir les champs" />
    <p>Les types de champs sont les suivants :</p>
    <table class="table table-responsive">
      <tr>
        <th>Nom</th>
        <th>Description</th>
        <th>Exemple de valeurs</th>
      </tr>
      <tr>
        <td>BOOLEAN</td>
        <td>Vrai (1) ou faux (0)</td>
        <td>0, 1</td>
      </tr>
      <tr>
        <td>INT</td>
        <td>Nombre entier</td>
        <td>-4, 100, 0, -999</td>
      </tr>
      <tr>
        <td>FLOAT</td>
        <td>Nombre à virgule</td>
        <td>3.33, 0.05, 10, -42.69</td>
      </tr>
      <tr>
        <td>VARCHAR</td>
        <td>Chaine de caractères</td>
        <td>"Hello World !", "adfgdfg"</td>
      </tr>
      <tr>
        <td>DATE</td>
        <td>Uniquement date</td>
        <td>2002-02-08, 2018-10-03</td>
      </tr>
      <tr>
        <td>DATETIME</td>
        <td>Date et heure</td>
        <td>2018-10-03 12:35:00</td>
      </tr>
    </table>
    <p>
      Il faut juste encore indiquez à phpMyAdmin que id_personne est l'ID de la
      personne. Pour se faire, scrollez horizontalement et cocher la case A_I
      (Auto_Increment) pour id_personne.
    </p>
    <img src="/bdd/medias/phpmyadmin_a_i.png" alt="A_I" />
    <p>Une fenêtre apparait, cliquez simplement <i>Exécuter</i>.</p>
    <img src="/bdd/medias/phpmyadmin_primary.png" alt="Primary" />
    <p>Cliquez <i>Sauvegarder</i> et la table est prête.</p>
  </div>
</template>
