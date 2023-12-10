<script setup>
import ShowCode from "@/components/ShowCode.vue"
</script>

<template>
  <div>
    <p>
      Il existe deux types de liste : les listes non ordonnées (unordered) et
      les listes ordonnées (ordered).
    </p>
    <p>
      Les listes qu'on utilise le plus fréquemment sont les listes non
      ordonnées. Elles s'écrivent comme ceci avec une balise
      <ShowCode raw="<ul>" lang="html" :inline="true" /> qui contiendra tous les
      éléments de la liste entre balise
      <ShowCode raw="<li>" lang="html" :inline="true" /> :
    </p>
    <div class="grid items-center grid-cols-1 gap-x-5 w-fit sm:grid-cols-2">
      <ShowCode file="/html/code/ul.html" lang="html" />
      <ul>
        <li>Pierre</li>
        <li>Paul</li>
        <li>Jacques</li>
      </ul>
    </div>

    <p>
      Pour utiliser une liste ordonnée, simplement utiliser
      <ShowCode raw="<ol>" lang="html" :inline="true" /> à la place de
      <ShowCode raw="<ul>" lang="html" :inline="true" />. Les numéros seront
      générés automatiquement :
    </p>
    <div class="grid items-center grid-cols-1 gap-x-5 w-fit sm:grid-cols-2">
      <ShowCode file="/html/code/ol.html" lang="html" />
      <ol>
        <li>Pierre</li>
        <li>Paul</li>
        <li>Jacques</li>
      </ol>
    </div>

    <h2>Listes imbriquées</h2>
    <p>
      Il est également possible de mettre une liste
      <ShowCode raw="<ul>" lang="html" :inline="true" /> dans une autre afin
      d'avoir une liste avec plusieurs niveaux :
    </p>
    <div class="grid items-center grid-cols-1 gap-x-5 w-fit sm:grid-cols-2">
      <ShowCode file="/html/code/ul-lvl2.html" lang="html" />
      <ul>
        <li>Titre</li>
        <li>Menu 1</li>
        <ul>
          <li>Sous-menu 1</li>
          <li>Sous-menu 2</li>
        </ul>
        <li>Menu 2</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
td {
  @apply border-t-0;
}
</style>
