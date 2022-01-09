<template>
	<div>
		<h1>Les conditions</h1>
		<p>Une condition sert à n'exécuter le code qui suit seulement si elle est remplie.</p>

		<h3>If</h3>
		<p>La condition if se note comme cela :</p>
		<pre class="language-java"><ShowCode file="java/if.java" lang="java"/></pre>
		<p>Ici, condition est une variable de type boolean.</p>

		<h3>Les opérateurs de comparaison</h3>
		<p>Pour créer des valeurs boolean (qui ne peut contenir que vrai ou faux), on utilise des opérateurs de comparaison. Voici la liste :</p>
		<table class="table">
			<thead>
				<tr>
					<th>Symbole</th>
					<th>Nom</th>
					<th>Exemple</th>
					<th>Remarque</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>==</td>
					<td>Égalité</td>
					<td><pre class="language-java"><ShowCode inlineCode="if (a == 10)" lang="java"/></pre></td>
					<td>Si la variable a vaut 10, la condition est vraie.</td>
				</tr>
				<tr>
					<td>&lt;</td>
					<td>Plus petit que</td>
					<td><pre class="language-java"><ShowCode inlineCode="if (a < 10)" lang="java"/></pre></td>
					<td>Si la variable a vaut moins que 10, la condition est vraie.</td>
				</tr>
				<tr>
					<td>&gt;</td>
					<td>Plus grand que</td>
					<td><pre class="language-java"><ShowCode inlineCode="if (a > 10)" lang="java"/></pre></td>
					<td>Si la variable a vaut plus que 10, la condition est vraie.</td>
				</tr>
				<tr>
					<td>&lt;=</td>
					<td>Plus petit ou égale</td>
					<td><pre class="language-java"><ShowCode inlineCode="if (a <= 10)" lang="java"/></pre></td>
					<td>Si la variable a vaut 10 ou moins, la condition est vraie.</td>
				</tr>
				<tr>
					<td>&gt;=</td>
					<td>Plus grand ou égale</td>
					<td><pre class="language-java"><ShowCode inlineCode="if (a >= 10)" lang="java"/></pre></td>
					<td>Si la variable a vaut 10 ou plus, la condition est vraie.</td>
				</tr>
				<tr>
					<td>!=</td>
					<td>Inégalité</td>
					<td><pre class="language-java"><ShowCode inlineCode="if (a != 10)" lang="java"/></pre></td>
					<td>Si la variable a vaut n'importe quoi sauf 10, la condition est vraie.</td>
				</tr>
			</tbody>
		</table>

		<h3>Conditions avancées</h3>
		<p>On peut également créer des combinaisons de conditions. Pour cela, on utilise les opérateurs logiques. Voici la liste avec des exemples.</p>
		<table class="table">
			<thead>
				<tr>
					<th>Symbole</th>
					<th>Nom</th>
					<th>Exemple</th>
					<th>Remarque</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>&&</td>
					<td>Et</td>
					<td><pre class="language-java"><ShowCode inlineCode="if (a > 10 && a < 20)" lang="java"/></pre></td>
					<td>Si la variable a est plus grande que 10 mais plus petite que 20, la condition est vraie.</td>
				</tr>
				<tr>
					<td>||</td>
					<td>Ou</td>
					<td><pre class="language-java"><ShowCode inlineCode="if (a < 10 || b > 10)" lang="java"/></pre></td>
					<td>Si une des deux variables a ou b est plus grande que 10, la condition est vraie.</td>
				</tr>
				<tr>
					<td>!</td>
					<td>Non</td>
					<td><pre class="language-java"><ShowCode inlineCode="if (!condition)" lang="java"/></pre></td>
					<td>Renvoie l'inverse de la condition, dans ce cas il faudrait que condition soit à false pour que la condition soit vraie.</td>
				</tr>
			</tbody>
		</table>
		<p>Comme pour les calculs, on peut utiliser des parenthèses pour donner une priorité de calcul</p>
		<pre class="language-java"><ShowCode inlineCode="if ((a == 5 || b == 5) && c > 10)
		//pour que cette condition soit valide, il faut que soit a, soit b soit à 5 et que c soit plus grand que 10" lang="java"/></pre>

		<h3>Else</h3>
		<p>Else sert à exécuter un autre bout de code si la première condition n'est pas valide, exemple</p>
		<pre class="language-java"><ShowCode file="java/else.java" lang="java"/></pre>
	</div>
</template>

<script>
	import ShowCode from '../../components/ShowCode.vue'

	export default {
		name: 'Conditions',
		components: {
			ShowCode,
		},
	}
</script>
