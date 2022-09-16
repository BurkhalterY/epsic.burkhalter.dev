<template>
  <div>
    <h1>Imprimer des étiquettes</h1>
    <p>
      Pour cette démonstration, je vais prendre un exemple simple. Soit une
      table de personnes qui peuvent chacune posséder une ou plusieurs adresses.
      Les adresses ont un FK_Ville et les villes ont chacune un code postale.
    </p>
    <img src="/medias/access/etiquettes_1.png" class="img-fluid" />

    <h3>Création de la requête</h3>
    <p>
      On va créer une requête afin de pouvoir prendre l'adresse et la ville des
      personnes afin de les afficher.
    </p>
    <p>
      Menu Créer → Création de requête, sélectionnez toutes les tables qui
      contiennent un champ que vous voulez afficher.<br />Pour moi :
    </p>
    <img src="/medias/access/etiquettes_2.png" class="img-fluid" />
    <p>
      Dans le tableau en base, sélectionnez simplement tous ce que vous voulez
      afficher :
    </p>
    <img src="/medias/access/etiquettes_3.png" class="img-fluid" />
    <p>
      Pour moi, ce sera le nom et le prénom de la personne, la rue et le numéro
      de rue, la ville et le code postal.
    </p>
    <p>
      Vous pouvez l'enregistrer avec un nom qui commence par R_ (pour requête).
      Par exemple : R_Etiquettes_Personne
    </p>

    <h3>Création de l'état</h3>
    <p>Dans le menu, cliquez sur Étiquettes (dans la catégorie États).</p>
    <p>
      Vous devez sélectionner un format d'étiquettes. Sur
      <a
        href="https://www.epsic.ch/secure/moodle/mod/book/view.php?id=3787"
        target="_blank"
        >Moodle</a
      >, il est dit qu'il faut utiliser les Avery J8560.
    </p>
    <img src="/medias/access/etiquettes_4.png" class="img-fluid" />
    <p>Rien de spécial sur la deuxième page :</p>
    <img src="/medias/access/etiquettes_5.png" class="img-fluid" />
    <p>
      Ici, vous devez placer les éléments tels qu'ils vont s'afficher sur les
      étiquettes.
    </p>
    <img src="/medias/access/etiquettes_6.png" class="img-fluid" />
    <p>J'ai fait un truc dans ce genre-là :</p>
    <img src="/medias/access/etiquettes_7.png" class="img-fluid" />
    <p>
      C'est facultatif mais si vous voulez, vous pouvez aussi trier les
      étiquettes.
    </p>
    <img src="/medias/access/etiquettes_8.png" class="img-fluid" />
    <p>Voilà, vous pouvez donner un nom final à votre état et l'enregistrer.</p>
    <img src="/medias/access/etiquettes_9.png" class="img-fluid" />
    <p>Et voilà nos étiquettes :</p>
    <img src="/medias/access/etiquettes_10.png" class="img-fluid" />

    <h3>Un bouton d'ouverture</h3>
    <p>
      Vous pouvez utiliser le code VBA suivant sur un bouton pour ouvrir l'état
      :
      <samp style="background-color: lightgray"
        >DoCmd.OpenReport "E_Etiquettes_Personne", acViewPreview</samp
      >
    </p>
  </div>
</template>

<script>
export default {
  name: "Etiquettes",
}
</script>
