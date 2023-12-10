<template>
  <div>
    <p>
      Les tables d'association sont au minimum composées de deux champs
      relationnels. Mais ces derniers sont numériques... Nous ne voyons donc que
      les IDs des enregistrements correspondants. Il est néanmoins possible
      d'afficher leurs noms à la place.
    </p>
    <p>État actuel :</p>
    <img src="/access/medias/liste_deroulante_0.png" alt="État actuel" />
    <div class="grid grid-cols-1 gap-4 p-4 md:grid-cols-2">
      <ul class="ml-3">
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
      <img src="/access/medias/liste_deroulante_1.png" alt="Options" />
    </div>
    <p>Résultat :</p>
    <img src="/access/medias/liste_deroulante_2.png" alt="Résultat" />
  </div>
</template>
