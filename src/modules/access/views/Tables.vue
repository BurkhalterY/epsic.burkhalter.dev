<template>
  <div>
    <p>Il existe deux types de tables :</p>
    <ul>
      <li>Les tables de données</li>
      <li>Les tables d'association</li>
    </ul>

    <h2>Les tables de données</h2>
    <p>
      Les tables de données servent à contenir certains types de données bien
      distincts (ex. Personnes, Voitures, etc.).
    </p>
    <hr />
    <div class="grid grid-cols-2">
      <div>
        Structure de la table T_Personnes :
        <img src="/access/medias/t_personnes.png" alt="T_Personnes" />
      </div>
      <div>
        Structure de la table T_Voitures :
        <img src="/access/medias/t_voitures.png" alt="T_Voitures" />
      </div>
    </div>

    <h2>Les tables d'association</h2>
    <p>
      Les tables d'association servent à faire une association entre deux tables
      de données (ex. Personne_avoir_Voiture).
    </p>
    <hr />
    <p>Structure de la table T_Avoir_Voiture :</p>
    <img src="/access/medias/t_avoir_voiture.png" alt="T_Avoir_Voiture" />
  </div>
</template>
