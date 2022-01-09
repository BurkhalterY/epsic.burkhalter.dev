<template>
	<div>
		<h1>Les tableaux</h1>
		<p>Un tableau est une variable qui contient plusieurs valeurs, différenciables grâce à un index.</p>

		<h3>Déclaration d'un tableau</h3>
		<pre class="language-java"><ShowCode inlineCode="int monTableau[] = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9};" lang="java"/></pre>
		<p>Un tableau ne peut contenir que des valeurs de même type. Il est impossible de créer un tableau qui contient des int ET des String.</p>
		<p>Une fois la taille du tableau choisi, elle ne peut plus être modifiée.</p>
		<p>Si vous ne voulez pas initialiser votre tableau, vous pouvez le noter comme ceci.</p>
		<pre class="language-java"><ShowCode inlineCode="int monTableau[] = new int[10]; //Le 10 représente la taille du tableau, inchangeable par la suite." lang="java"/></pre>
		<p>Attention cependant, car avec cette méthode, toutes les cases vaudront null, ce qui veut dire qu'elles ne seront pas utilisables tel quel pour des calculs.</p>

		<h3>Utilisation du tableau</h3>
		<p>Voici le code pour récupérer la valeur d'une case du tableau :</p>
		<pre class="language-java"><ShowCode inlineCode="System.out.println(monTableau[2]);" lang="java"/></pre>
		<p>Et pour la modifier :</p>
		<pre class="language-java"><ShowCode inlineCode="monTableau[2] = 5;" lang="java"/></pre>
		<p>Attention, les index commencent à 0, donc l'index de la dernière case du tableau est égale a la taille du tableau moins un.</p>
		<p>Il existe un attribut pour la taille du tableau :</p>
		<pre class="language-java"><ShowCode inlineCode="monTableau.length;" lang="java"/></pre>
		<p>Attention il s'agit d'un attribut, notez juste qu'il s'écrit comme ceci sans parenthèses.</p>

		<h3>Les tableaux à 2 dimensions</h3>
		<p>Il est aussi possible de créer un tableau de type int[]. Concrètement un tableau de tableaux. Il se déclare comme ça :</p>
		<pre class="language-java"><ShowCode inlineCode="int monTableau[][] = { {0, 1, 2},{3, 4, 5},{6, 7, 8} };" lang="java"/></pre>
		<p>On y accède comme cela :</p>
		<pre class="language-java"><ShowCode inlineCode="System.out.println(monTableau[0][0]); //affiche 0
		System.out.println(monTableau[0][1]); //affiche 1
		System.out.println(monTableau[1][0]); //affiche 3" lang="java"/></pre>
		<p>On peut bien sûr aussi faire des tableaux à 3, 4 ou 5 dimensions. Mais ça n'a pas vraiment d'intérêt.</p>

		<h3>Parcourir un tableau</h3>
		<p>Les boucles for sont très pratiques pour parcourir un tableau :</p>
		<pre class="language-java"><ShowCode inlineCode="for (int i = 0; i < monTableau.length; i++) {
			System.out.println(monTableau[i]);
		}" lang="java"/></pre>
		<p>Et pour un tableau 2D :</p>
		<pre class="language-java"><ShowCode inlineCode="for (int i = 0; i < monTableau.length; i++) {
			for (int j = 0; j < monTableau[i].length; j++) {
				System.out.println(monTableau[i][j]);
			}
		}" lang="java"/></pre>
	</div>
</template>

<script>
	import ShowCode from '../../components/ShowCode.vue'

	export default {
		name: 'Tableaux',
		components: {
			ShowCode,
		},
	}
</script>
