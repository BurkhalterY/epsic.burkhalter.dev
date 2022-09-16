<template>
  <div>
    <h1>Listes déroulantes pour les FK</h1>
    <p>
      Les tables d'association sont au minimum composées de 2 champs FK. Mais
      les FK sont numériques... Donc on ne voit que les ID des enregistrements
      correspondants. Mais il est possible d'afficher les noms à la place.
    </p>
    <p>État actuel :</p>
    <img
      src="/medias/access/liste_deroulante_0.png"
      alt="État actuel"
      class="img-fluid"
    />
    <br /><br />
    <div class="row">
      <div class="col-md-6">
        <ul>
          <li>Ouvrir la table en Mode Création</li>
          <li>Cliquer sur le champ FK</li>
          <li>Dans l'onglet Liste de choix (à coté de Général en bas)</li>
          <li>
            Sélectionner "Zone de liste déroulante" au lieu de "Zone de texte"
          </li>
          <li>Dans Contenu : la table qui reprend le FK (ici T_Personne)</li>
          <li>
            Dans Nbre colonnes : le nombre de colonnes à afficher + l'ID, les
            colonnes doivent se suivre
          </li>
          <li>Dans Largeur colonnes : 0, cela permet de masquer juste l'ID</li>
          <li>Faire la même chose pour tous les FK</li>
        </ul>
      </div>
      <div class="col-md-6">
        <img
          src="/medias/access/liste_deroulante_1.png"
          alt="Options"
          class="img-fluid"
        />
      </div>
    </div>
    <p>Résultat :</p>
    <img
      src="/medias/access/liste_deroulante_2.png"
      alt="Résultat"
      class="img-fluid"
    />
  </div>
</template>

<script>
export default {
  name: "ListesDeroulantes",
}
</script>
