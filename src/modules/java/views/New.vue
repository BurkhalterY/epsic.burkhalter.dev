<script setup>
import ShowCode from "@/components/ShowCode.vue"
</script>

<template>
  <div>
    <ol>
      <li>Ouvrez NetBeans.</li>
      <li>Cliquez sur <i>Nouveau projet</i> en haut à gauche.</li>
      <img src="/java/medias/new1.png" alt="étape 1" />
      <li>Sélectionnez <i>Java</i>, puis <i>Java Application</i>.</li>
      <img src="/java/medias/new2.png" alt="étape 2" />
      <li>Nommez votre programme et choisissez son emplacement.</li>
      <img src="/java/medias/new3.png" alt="étape 3" />
      <li>Votre programme devrait ressembler à ceci :</li>
      <ShowCode file="/java/code/new-project.java" lang="java" />
      <li>Vous pouvez alors supprimer tous les commentaires inutiles.</li>
      <ShowCode file="/java/code/new-project-no-comment.java" lang="java" />
    </ol>
  </div>
</template>
