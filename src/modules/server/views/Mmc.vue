<template>
  <div>
    <p>
      MMC (Microsoft Management Console) est un outil permettant de simplifier
      l'accès aux différents outils du système.
    </p>

    <span>Win+R, taper "mmc", appuyer sur OK</span>
    <a href="/server/medias/mmc-1.png" target="_blank">
      <img src="/server/medias/mmc-1.png" alt="Step 1" />
    </a>

    <span>
      Ctrl+M ou fichier -> Ajouter/Supprimer un composant logiciel enfichable...
    </span>
    <a href="/server/medias/mmc-2.png" target="_blank">
      <img src="/server/medias/mmc-2.png" alt="Step 2" />
    </a>

    <span>Sélectionner le DNS et l'ajouter</span>
    <a href="/server/medias/mmc-3.png" target="_blank">
      <img src="/server/medias/mmc-3.png" alt="Step 3" />
    </a>

    <span>
      La même pour l'AD (dernier élément de la liste pour gérer les OU,
      Utilisateurs, Computers etc.)
    </span>
    <a href="/server/medias/mmc-4.png" target="_blank">
      <img src="/server/medias/mmc-4.png" alt="Step 4" />
    </a>

    <span>Résultat :</span>
    <a href="/server/medias/mmc-5.png" target="_blank">
      <img src="/server/medias/mmc-5.png" alt="Step 5" />
    </a>

    <span>Fichier -> Enregistrer sous...</span>
    <a href="/server/medias/mmc-6.png" target="_blank">
      <img src="/server/medias/mmc-6.png" alt="Step 6" />
    </a>

    <p>Et la console est prête à être réutilisée.</p>
    <span>
      ⚠ Après chaque utilisation, ne pas oublier de sauvegarder ce qui est fait
      dans la console avec Ctrl+S avant de la fermer.
    </span>
    <p class="text-xl italic">
      Merci à JackTrash pour cette petite astuce. Retrouvez son site ici :
      <a href="https://epsic.jacktrash.ch" target="_blank" class="!inline"
        >https://epsic.jacktrash.ch</a
      >
    </p>
  </div>
</template>

<style scoped>
a {
  @apply block max-w-[50%];
}
</style>
