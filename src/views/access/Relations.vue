<template>
  <div>
    <h1>Les relations</h1>
    <p>
      Les champs qui servent à faire des relations commencent par
      <strong>FK_</strong> (Foreign Key).<br />Ils sont toujours du type
      Numérique car ils ne contiennent que l'ID de l'enregistrement cible.
    </p>

    <h3>Créer les relations entre les tables</h3>
    <p>
      Allez dans le menu "Outils de base de données" → "Relations" et
      sélectionnez les 3 tables à lier.
    </p>
    <img
      src="/medias/access/relations_Afficher_la_table.png"
      class="img-fluid"
    />
    <br /><br />
    <p>
      Pour créer une relation, faire glisser le FK de la table d'association sur
      l'ID de la table de données.<br />Ne pas oublier de cocher "Appliquer
      l'intégrité référentielle".
    </p>
    <img
      src="/medias/access/relations_Creer.gif"
      alt="Petit gif qui montre comment faire"
      class="img-fluid"
    />
    <p>
      Si Access affiche une erreur, vérifiez que les onglets des 3 tables que
      vous essayé de lier sont fermées et que les FK_ sont bien en Numérique.
    </p>
  </div>
</template>

<script>
export default {
  name: "Relations",
};
</script>
