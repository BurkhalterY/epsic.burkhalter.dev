<script setup>
import ShowCode from "@/components/ShowCode.vue"
</script>

<template>
  <div>
    <p>
      Pour qu'on puisse interagir avec notre programme, le plus simple est
      d'utiliser le clavier pour écrire.
    </p>

    <h2>La classe Scanner</h2>
    <p>
      Pour cela, il existe la classe <code>Scanner</code>. Elle permet de lire
      ce qu'on a écrit dans la console.
    </p>
    <p>
      Avant de l'utiliser, il faut l'importer. Placer ceci en haut du fichier,
      après le package :
    </p>
    <ShowCode file="/java/code/import-scanner.java" lang="java" />
    <p>
      Normalement, si vous ne le mettez pas, NetBeans vous proposera de le
      mettre lui-même quand vous l'utiliserez.
    </p>

    <h2>Instanciation</h2>
    <p>
      Pour l'utiliser, nous devons écrire ceci au début de la fonction
      <code>main</code> :
    </p>
    <ShowCode file="/java/code/new-scanner.java" lang="java" />
    <span
      ><b>Scanner</b> : pour l'instant, voyez-vous ça comme un nouveau type de
      variable. On crée une variable de type Scanner.</span
    ><br />
    <span
      ><b>sc</b> : le nom de votre Scanner, appelez-le comme vous
      souhaitez.</span
    ><br />
    <span
      ><b>= new Scanner(System.in)</b> : un truc qui vous semble bizarre pour
      l'instant. Vous comprendrez immédiatement quand j'aborderai la
      <span title="Programmation orientée objet" class="cursor-help">POO</span
      >.</span
    >

    <h2>Utilisation</h2>
    <p>
      Lorsque vous écrivez une des fonctions ci-dessous, le programme se met en
      pause et attend que vous entriez quelque chose :
    </p>
    <table class="mx-auto">
      <thead>
        <tr>
          <th>Fonction</th>
          <th>Retourne</th>
          <th>Exemple</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>sc.nextByte()</td>
          <td><code>byte</code></td>
          <td>
            <ShowCode raw="byte maVar = sc.nextByte();" lang="java" />
          </td>
        </tr>
        <tr>
          <td>sc.nextShort()</td>
          <td><code>short</code></td>
          <td>
            <ShowCode raw="short maVar = sc.nextShort();" lang="java" />
          </td>
        </tr>
        <tr>
          <td>sc.nextInt()</td>
          <td><code>int</code></td>
          <td>
            <ShowCode raw="int maVar = sc.nextInt();" lang="java" />
          </td>
        </tr>
        <tr>
          <td>sc.nextLong()</td>
          <td><code>long</code></td>
          <td>
            <ShowCode raw="long maVar = sc.nextLong();" lang="java" />
          </td>
        </tr>
        <tr>
          <td>sc.nextFloat()</td>
          <td><code>float</code></td>
          <td>
            <ShowCode raw="float maVar = sc.nextFloat();" lang="java" />
          </td>
        </tr>
        <tr>
          <td>sc.nextDouble()</td>
          <td><code>double</code></td>
          <td>
            <ShowCode raw="double maVar = sc.nextDouble();" lang="java" />
          </td>
        </tr>
        <tr>
          <td>sc.nextLine()</td>
          <td><code>String</code></td>
          <td>
            <ShowCode raw="String maVar = sc.nextLine();" lang="java" />
          </td>
        </tr>
      </tbody>
    </table>
    <p>
      Attention donc à ce que pourrait écrire l'utilisateur. par exemple, s'il
      écrit <code>3.5</code> dans un <code>nextInt()</code>, votre programme
      plantera car on ne peut pas stocker de nombre à virgule dans un
      <code>int</code>.
    </p>

    <h2>Le bloc try catch</h2>
    <p>
      Pour pallier à ce problème, nous pouvons utiliser les exceptions. Les
      exceptions permettent d'exécuter un autre bout de code si le premier
      plante. Elles se présentent comme suit :
    </p>
    <ShowCode file="/java/code/try-catch.java" lang="java" />
    <p>
      En entrant dans le <code>try</code>, le code se déroule normalement. Si le
      <code>try</code> se passe bien, le <code>catch</code> n'est pas exécuté.
      Mais si le <code>try</code> plante, alors nous exécutons ce qu'il y a dans
      le <code>catch</code>. N'utiliser le bloc <code>try catch</code> seulement
      là où il est nécessaire, inutile de mettre tout votre programme dans un
      <code>try catch</code>.
    </p>
    <p>
      En paramètre, dans le <code>catch</code>, nous avons
      <code>NomDeLException</code>. Il s'agit du nom de l'exception. Indiquez
      ici le nom de l'exception à intercepter afin qu'elles ne soient pas toutes
      ignorées.
    </p>
    <p>
      Voici un bout de code qui l'utilise pour empêcher notre utilisateur
      d'entrer n'importe quoi :
    </p>
    <ShowCode file="/java/code/programme-saisie-nombres.java" lang="java" />
    <ul>
      <li>
        Voyez qu'on a utilisé l'exception : <code>NumberFormatException</code>.
      </li>
      <li>
        <code>Integer.parseInt(line)</code> prend en paramètre un texte
        <code>String</code> et renvoie un int si le <code>String</code> ne
        contient que des chiffres. Sinon, il appelle le bloc <code>catch</code>.
      </li>
    </ul>
  </div>
</template>
