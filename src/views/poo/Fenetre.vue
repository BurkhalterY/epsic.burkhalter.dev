<script setup>
import ShowCode from "@/components/ShowCode.vue"
</script>

<template>
  <div>
    <p>
      Pour créer une fenêtre en Java, il faut créer une nouvelle classe héritée
      de la classe <code>JFrame</code>.<br /><code>JFrame</code> est une classe
      permettant d'afficher une fenêtre et d'y configurer pas mal d'options.
    </p>
    <p>Notre classe <code>Fenetre</code> :</p>
    <ShowCode file="/poo/code/fenetre0.java" lang="java" />
    <p>
      Et la classe principale dans laquelle nous instancions cette nouvelle
      classe <code>Fenetre</code> :
    </p>
    <ShowCode file="/poo/code/fenetre1.java" lang="java" />
    <p>
      Lancez le programme, une fenêtre vide apparaîtra au milieu de l'écran :
    </p>
    <img src="/poo/medias/fenetre.png" alt="Fenêtre de 600x800" />
  </div>
</template>
