<script setup>
import ShowCode from "@/components/ShowCode.vue"
</script>

<template>
  <div>
    <p>
      Un objet informatique représente un concept, par exemple une fenêtre ou un
      bouton. Comme dans la vraie vie, un objet a des caractéristiques et des
      fonctionnalités. Une caractéristique, c'est par exemple pour une voiture,
      le nombre de roues ou la vitesse maximale. Et une fonctionnalité, pour
      notre voiture, ça pourrait être d'avancer ou de tourner.
    </p>
    <p>
      En informatique, c'est la même chose. Les caractéristiques (nommées
      attributs) d'une fenêtre sont, entre autres, sa taille et sa position. Ses
      fonctionnalités (nommées méthodes) serait quant à elles de l'agrandir avec
      la souris ou de la fermer.
    </p>

    <h2>Les classes</h2>
    <p>
      Une classe est comparable à un moule. On crée une classe qui permettra de
      créer (instancier) des objets. La classe contient tous les attributs et
      toutes les méthodes, mais sans valeur. Une fois l'objet instancié à partir
      de la classe, on pourra attribuer des valeurs à ses attributs.
    </p>

    <h2>Créer une classe</h2>
    <p>
      Commencer par
      <router-link to="/java/new">créer un nouveau projet</router-link>.
    </p>
    <p>
      Faites un clic droit sur le package, puis <i>New</i> et
      <i>Java Class</i> :
    </p>
    <img src="/poo/medias/new_class_1.png" alt="Nouvelle classe" />
    <p>
      Donnez un nom à votre classe, par exemple <code>Personne</code>. Les noms
      des classes commencent toujours par une majuscule.
    </p>
    <img src="/poo/medias/new_class_2.png" alt="Nouvelle classe" />
    <p>Supprimez les commentaires par défaut.</p>
    <ShowCode file="/poo/code/objet0.java" lang="java" />

    <h2>Ajouter des attributs</h2>
    <p>
      Il suffit pour cela de noter les attributs comme des variables mais sans
      les initialiser.
    </p>
    <ShowCode file="/poo/code/objet1.java" lang="java" />

    <h2>Ajouter des méthodes</h2>
    <p>
      Comme pour les attributs, écrivez simplement les méthodes dans la classe.
    </p>
    <ShowCode file="/poo/code/objet2.java" lang="java" />
    <p>Cette méthode affichera toutes les données de la personne.</p>
  </div>
</template>
