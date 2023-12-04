<script setup>
import ShowCode from "@/components/ShowCode.vue"
</script>

<template>
  <div>
    <p>
      L'héritage est une notion de POO. Elle permet de définir une classe comme
      enfant d'une autre classe. C'est-à-dire que la classe enfant reprenne
      toutes les méthodes et tous les attributs de la classe parente. Le
      programmeur peut quand même y ajouter ses propres méthodes et attributs.
    </p>
    <p>
      Pour faire hériter une classe d'une autre classe, on utilise le mot
      réservé <code>extends</code>. Il s'utilise comme ceci dans la déclaration
      de la classe :
    </p>
    <ShowCode file="/poo/code/heritage0.java" lang="java" />
    <p>Les classes enfants ont les propriétés suivantes :</p>
    <ul>
      <li>
        Elles reprennent tous les attributs et méthodes de la classe parente.
      </li>
      <li>
        Si on y déclare une méthode avec le même nom que la classe parente,
        celle de la classe parente sera ignoré et remplacé par celle de la
        classe enfant.
      </li>
    </ul>
    <h2>Exemple</h2>
    La classe parente <code>Personne</code>
    <ShowCode file="/poo/code/heritage1.java" lang="java" />
    La classe enfant <code>Apprenti</code>
    <ShowCode file="/poo/code/heritage2.java" lang="java" />
    <p>
      Ici, la classe <code>Apprenti</code> hérite de <code>Personne</code>. Ce
      qui veut dire qu'elle peut être utilisé exactement comme la classe
      Personne mais avec l'attribut <code>formation</code> en plus.
    </p>
  </div>
</template>
