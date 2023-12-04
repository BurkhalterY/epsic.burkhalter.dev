<template>
  <div>
    <div class="alert-warning">
      <h3 class="alert-title">Mise à jour de generatedata.com</h3>
      <div>
        Le site présenté ici,
        <a href="https://generatedata.com/" target="_href">generatedata.com</a>,
        a été mis à jour depuis la publication de cette page. Je considère que
        la nouvelle version (v4.x) est suffisamment semblable à la précédente
        (v3.x) pour qu'il n'y ai pas besoin de changer les screenshots. Si tel
        n'est pas le cas, n'hésitez pas à me contacter (ou même à faire une
        merge request si vous êtes chaud).
      </div>
    </div>

    <p>
      Pour remplir notre base de données, nous allons utiliser le site
      <a href="https://generatedata.com/fr" target="_blank">generatedata.com</a
      >.
    </p>
    <img src="/access/medias/generatedata.com.png" alt="generatedata.com" />
    <p>
      Il faut entrer le nom de tous les champs avec le type de données voulu.
    </p>
    <ul>
      <li><span>Le nom et le prénom doivent être deux champs séparés</span></li>
      <li>
        <span
          >Pour que les dates soient compatibles avec Access, le format doit
          être "d.m.Y"</span
        >
      </li>
    </ul>
    <p>
      Avant de générer vos données, sélectionnez Excel au lieu de HTML (par
      défaut).
    </p>
    <hr />
    <p>
      Copiez ensuite toutes les données générées, sans les entêtes, comme ceci :
    </p>
    <div>
      <img src="/access/medias/excel_copy.png" alt="Excel" class="inline" />
      <img
        src="/access/medias/import.gif"
        alt="Import dans Access"
        class="inline"
      />
    </div>
    <p class="font-bold">
      ⚠️ Une erreur courante est qu'un <i>Valide si</i> empêche l'importation !
    </p>
  </div>
</template>
