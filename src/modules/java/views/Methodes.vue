<script setup>
import ShowCode from "@/components/ShowCode.vue"
</script>

<template>
  <div>
    <p>
      Les méthodes permettent de subdiviser un programme en plusieurs parties et
      d'éviter la redondance.
    </p>
    <img src="/java/medias/methodes.png" alt="methodes" />
    <p>
      Une méthode peut être utilisée plusieurs fois dans le programme. Plus
      besoin de copier-coller du code, il suffit de le mettre dans une méthode.
    </p>

    <h2>Déclaration</h2>
    <p>Une méthode se déclare comme suit :</p>

    <ShowCode file="/java/code/methode.java" lang="java" />
    <ul>
      <li>
        <b>public</b> et <b>static</b> : ne vous en préoccuper pas pour
        l'instant. On verra ça dans le
        <router-link to="/poo">module 404</router-link>.
      </li>
      <li>
        <b>typeRetour</b> : le type de variable que la méthode retourne. Tapez
        <code>void</code> si elle ne retourne rien.
      </li>
      <li>
        <b>nomMethode</b> : le nom de la méthode, mêmes règles qu'avec les noms
        de variables.
      </li>
      <li>
        <b>typeArg1 arg1</b> : (facultatif), un ou plusieurs arguments et leurs
        types.
      </li>
      <li>
        <b>return x</b> : ce que retourne la fonction, ne pas mettre cette ligne
        si la méthode retourne <code>void</code>.
      </li>
    </ul>

    <h2>Exemple</h2>
    <p>
      Le code suivant contient une méthode <code>additionner()</code> qui prend
      deux paramètres et retourne la somme des deux.
    </p>
    <ShowCode file="/java/code/additionner.java" lang="java" />

    <div class="alert-quote">
      <h3 class="alert-title">Fonction vs. méthode</h3>
      <div>
        Il y une différence conceptuelle entre une fonction et une méthode. Une
        fonction n'est qu'une suite d'instructions. Une méthode aussi, mais
        elle, est ratachée à un objet. Nous n'avons pas encore abordé la POO
        (Programmation Orientée Objet), mais ce n'est pas très importants car
        les deux termes sont très souvents confondus et cela n'empêche pas les
        développeurs de se comprendre.
      </div>
    </div>
  </div>
</template>
