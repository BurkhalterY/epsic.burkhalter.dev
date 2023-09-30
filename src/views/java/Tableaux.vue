<script setup>
import ShowCode from "@/components/ShowCode.vue"
</script>

<template>
  <div>
    <p>
      Un tableau est une variable qui contient plusieures valeurs
      différenciables grâce à un index.
    </p>

    <h2>Déclaration d'un tableau</h2>
    <ShowCode
      raw="int monTableau[] = { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 };"
      lang="java"
    />
    <p>
      Un tableau ne peut contenir que des valeurs de même type. Il est
      impossible de créer un tableau qui contient des <code>int</code> ET des
      <code>String</code>.
    </p>
    <p>
      Une fois la taille du tableau choisie, elle ne peut plus être modifiée.
    </p>
    <p>
      Si vous ne voulez pas initialiser votre tableau, vous pouvez le noter
      comme ceci.
    </p>
    <ShowCode
      raw="int monTableau[] = new int[10]; // 10 représente la taille du tableau, inchangeable par la suite"
      lang="java"
    />
    <p>
      Attention cependant car avec cette méthode, toutes les cases vaudront
      <code>null</code>, ce qui veut dire qu'elles ne seront pas utilisables
      telles quelles.
    </p>

    <h2>Utilisation du tableau</h2>
    <p>Voici le code pour récupérer la valeur d'une case du tableau :</p>
    <ShowCode raw="System.out.println(monTableau[2]);" lang="java" />
    <p>Et pour la modifier :</p>
    <ShowCode raw="monTableau[2] = 5;" lang="java" />
    <p>
      Attention, les index commencent à 0. L'index de la dernière case du
      tableau est égale à la taille du tableau moins un.
    </p>
    <p>Il existe un attribut pour la taille du tableau :</p>
    <ShowCode raw="monTableau.length;" lang="java" />
    <p>
      Attention, il s'agit d'un attribut. Il s'appelle donc comme ceci, sans
      parenthèses.
    </p>

    <h2>Les tableaux à deux dimensions</h2>
    <p>
      Il est aussi possible de créer un tableau de type <code>int[]</code>.
      Concrètement, c'est un tableau de tableaux. Il se déclare comme ça :
    </p>
    <ShowCode
      raw="int monTableau[][] = {{ 0, 1, 2 }, { 3, 4, 5 }, { 6, 7, 8 }};"
      lang="java"
    />
    <p>On y accède comme cela :</p>
    <ShowCode
      raw="System.out.println(monTableau[0][0]); // affiche 0
System.out.println(monTableau[0][1]); // affiche 1
System.out.println(monTableau[1][0]); // affiche 3"
      lang="java"
    />
    <p>
      On peut bien sûr aussi faire des tableaux à trois, quatre ou <i>n</i>
      dimensions, mais je ne pense que ce serait un peu difficile à illustrer
      dans ce cours.
    </p>

    <h2>Parcourir un tableau</h2>
    <p>
      Les boucles <code>for</code> sont très pratiques pour parcourir un tableau
      :
    </p>
    <ShowCode
      raw="for (int i = 0; i < monTableau.length; i++) {
	System.out.println(monTableau[i]);
}"
      lang="java"
    />
    <p>Et pour un tableau 2D :</p>
    <ShowCode
      raw="for (int i = 0; i < monTableau.length; i++) {
	for (int j = 0; j < monTableau[i].length; j++) {
		System.out.println(monTableau[i][j]);
	}
}"
      lang="java"
    />
  </div>
</template>
