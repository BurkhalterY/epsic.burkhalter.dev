<template>
  <div>
    <p>
      Pour cette démonstration, je vais prendre un exemple simple. Soit une
      table de personnes qui peuvent chacune posséder une ou plusieurs adresses.
      Les adresses ont un champ FK_Ville et les villes ont chacune un code
      postale.
    </p>
    <img src="/access/medias/etiquettes_1.png" />

    <h2>Création de la requête</h2>
    <p>
      Nous allons créer une requête afin de pouvoir prendre l'adresse et la
      ville des personnes afin de les afficher.
    </p>
    <p>
      Menu Créer → Création de requête, sélectionnez toutes les tables qui
      contiennent au moins un champ que vous souhaitez afficher.<br />Pour moi :
    </p>
    <img src="/access/medias/etiquettes_2.png" />
    <p>
      Dans le tableau en base, sélectionnez simplement tout ce que vous
      souhaitez afficher :
    </p>
    <img src="/access/medias/etiquettes_3.png" />
    <p>
      Pour moi, ce sera le nom et le prénom de la personne, la rue et le numéro
      de rue, la ville et le code postal.
    </p>
    <p>
      Vous pouvez l'enregistrer avec un nom qui commence par R_ (pour requête).
      Par exemple : R_Etiquettes_Personne
    </p>

    <h2>Création de l'état</h2>
    <p>
      Dans le menu, cliquez sur <i>Étiquettes</i> (dans la catégorie États).
    </p>
    <p>
      Vous devez sélectionner un format d'étiquettes. Sur
      <a
        href="https://www.epsic.ch/secure/moodle/mod/book/view.php?id=3787"
        target="_blank"
        >Moodle</a
      >, il est dit qu'il faut utiliser les Avery J8560 :
    </p>
    <img src="/access/medias/etiquettes_4.png" />
    <p>Rien de spécial sur la deuxième page :</p>
    <img src="/access/medias/etiquettes_5.png" />
    <p>
      Ici, vous devez placer les éléments tels qu'ils vont s'afficher sur vos
      étiquettes :
    </p>
    <img src="/access/medias/etiquettes_6.png" />
    <p>J'ai fait un truc dans ce genre-là :</p>
    <img src="/access/medias/etiquettes_7.png" />
    <p>
      C'est facultatif, mais si vous le souhaitez, vous pouvez aussi trier les
      étiquettes :
    </p>
    <img src="/access/medias/etiquettes_8.png" />
    <p>
      Voilà, vous pouvez donner un nom final à votre état et l'enregistrer :
    </p>
    <img src="/access/medias/etiquettes_9.png" />
    <p>Et voici nos étiquettes :</p>
    <img src="/access/medias/etiquettes_10.png" />

    <h2>Un bouton d'ouverture</h2>
    <p>
      Vous pouvez utiliser le code VBA suivant sur un bouton pour ouvrir l'état
      :
      <samp class="bg-gray-200">
        DoCmd.OpenReport "E_Etiquettes_Personne", acViewPreview
      </samp>
    </p>
  </div>
</template>
