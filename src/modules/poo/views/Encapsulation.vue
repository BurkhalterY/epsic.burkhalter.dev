<script setup>
import ShowCode from "@/components/ShowCode.vue"
</script>

<template>
  <div>
    <p>
      Dans de gros projets informatiques, on aime pouvoir diviser les taches
      entre plusieurs développeurs. Et chaque développeur ne peut pas forcément
      connaître tout le projet.
    </p>
    <p>
      Les fonctions mises en place par certains développeurs devront néanmoins
      interagir avec celles d'autres développeurs.
    </p>
    <p>
      La solution est de définir des inputs et des outputs pour chaque objet
      sans se préoccuper de leurs fonctionnements, juste de leurs utilisations.
    </p>
    <br />
    <p>
      Pour mettre cela en place, il ne faut pas que n'importe quel objet puisse
      modifier les attributs ou appeler certaines méthodes d'un autre objet.
      Cela pourrait le faire bugger grave.
    </p>
    <p>On a donc mis en place un système de "droit" entre les objets :</p>
    <ul>
      <li>
        <strong>public</strong> : l'élément est visible depuis toutes les
        classes
      </li>
      <li>
        <strong>protected</strong> : l'élément n'est visible que dans le package
        et les classes dont sa classe
        <router-link to="/poo/heritage">hérite</router-link>
      </li>
      <li>
        <strong>private</strong> : l'élément est visible uniquement dans la
        classe courante
      </li>
    </ul>

    <h2>Définir la portée d'un élément</h2>
    <p>
      Pour définir la portée d'un attribut ou d'une méthode, on l'ajoute
      simplement devant comme ceci :
    </p>
    <ShowCode file="/poo/code/encapsulation0.java" lang="java" />
    <p>
      Ici, les trois attributs sont en <code>private</code> et la fonction est
      en <code>public</code>.
    </p>
    <p>
      Attention, on met toujours les attributs en <code>protected</code> ou
      <code>private</code>.
    </p>

    <h2>Accéder aux attributs</h2>
    <p>
      Mais si on met les attributs en <code>protected</code> ou
      <code>private</code>, certaines classes ne pourront pas y accèder. Pour
      remédier à ce problème, on crée des getters et des setters. Ce sont des
      fonctions <code>public</code>. Le rôle des getters et de renvoyer un
      attribut. Celui des setters de mettre à jour un attribut en prennant sa
      nouvelle valeur en paramètre.
    </p>
    <p>
      Voici la classe <code>Personne</code> avec un getter et un setter pour
      nom.
    </p>
    <ShowCode file="/poo/code/encapsulation1.java" lang="java" />
    <p>
      (Je ne l'ai volontairement pas fait pour tous les attributs pour ne pas
      surcharger l'exemple.)
    </p>
  </div>
</template>
