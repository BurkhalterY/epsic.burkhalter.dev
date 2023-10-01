<script setup>
import ShowCode from "@/components/ShowCode.vue"
</script>

<template>
  <div>
    <p>
      Une classe abstraite est une classe qui ne peut pas être instanciée car
      certaines de ses méthodes ne sont pas définies. Son but est d'en faire
      hériter une autre classe pour surcharger ces méthodes. C'est une espèce de
      modèle de classe.
    </p>
    <p>Voici comment déclarer une classe abstraite et ses méthodes :</p>
    <ShowCode file="/poo/code/classesAbstraites0.java" lang="java" />

    <h2>Exemple</h2>
    <p>Pour mieux comprendre leur fonctionnement, voici un exemple complet.</p>
    <p>
      Imaginez un programme permettant de calculer le périmètre et l'aire de
      plusieurs formes. Toutes ces formes auraient une manière différente de
      calculer le périmètre et l'aire. Si on veut les rassembler dans un
      tableau, par exemple, il nous faudrait une classe parente commune, et donc
      forcément abstraite.<br />Nous allons commencer avec 3 clases :
      <code>Forme</code>, <code>Rectangle</code> et <code>Cercle</code>.
    </p>
    <p>La classe abstraite <code>Forme</code> :</p>
    <ShowCode file="/poo/code/classesAbstraites1.java" lang="java" />
    <p>La classe <code>Rectangle</code> :</p>
    <ShowCode file="/poo/code/classesAbstraites2.java" lang="java" />
    <p>La classe <code>Cercle</code> :</p>
    <ShowCode file="/poo/code/classesAbstraites3.java" lang="java" />
    <p>La classe principale :</p>
    <ShowCode file="/poo/code/classesAbstraites4.java" lang="java" />
  </div>
</template>
