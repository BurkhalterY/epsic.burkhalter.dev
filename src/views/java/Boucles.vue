<script setup>
import ShowCode from "@/components/ShowCode.vue"
</script>

<template>
  <div>
    <p>Une boucle sert à répéter une action.</p>

    <h2>La boucle while</h2>
    <p>La boucle <code>while</code> s'écrit comme ceci :</p>
    <ShowCode file="/java/code/while.java" lang="java" />
    <p>
      La variable <code>condition</code> doit être de type <code>boolean</code>.
      Si la condition est vraie, on entre dans la boucle, le code s'exécute.
      Quand il arrive à la fin, il vérifie à nouveau la condition. Si elle est
      toujours vraie, il recommence, sinon, il sort de la boucle.
    </p>
    <img src="/java/medias/boucle.png" alt="Boucle" />
    <p>
      Il faut donc s'assurer que le code qui s'exécute dans la boucle influence
      la condition car sinon, la condition sera toujours vraie et la boucle ne
      s'arrêtera jamais.
    </p>

    <h2>La boucle do ... while</h2>
    <p>
      La boucle <code>do while</code> fonctionne de la même façon que la boucle
      <code>while</code>, sauf qu'elle vérifie la condition à la fin. Ce qui
      veut dire qu'elle s'exécute toujours au moins une fois.
    </p>
    <ShowCode file="/java/code/do-while.java" lang="java" />
    <p>
      Remarquez bien la présence du point-virgule à la fin qui est obligatoire.
    </p>
    <p>
      Il est déconseillé de l'utiliser<sup>(?)</sup>, la boucle
      <code>while</code> classique est à privilégier.
    </p>

    <h2>La boucle for</h2>
    <p>
      La boucle <code>for</code> s'exécute tant qu'une condition est vraie,
      comme la boucle <code>while</code>, sauf qu'elle prend deux autres
      paramètres : l'initialisation d'une variable et une action qui sera
      exécutée à la fin de chaque itération.
    </p>
    <ShowCode file="/java/code/for.java" lang="java" />
    <p>(Cette boucle va se répeter 10 fois.)</p>
  </div>
</template>
