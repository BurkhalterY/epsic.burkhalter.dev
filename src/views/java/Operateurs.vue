<template>
	<div>
		<h1>Les opérateurs</h1>

		<h3>Changer la valeur d'une variable</h3>
		<p>On utilise le signe = pour donner une nouvelle valeur à une variable.</p>
		<pre class="language-java"><ShowCode inlineCode="maVariable = 5;" lang="java"/></pre>

		<h3>Effectuer un calcul</h3>
		<p>Il existe 5 opérations de bases :</p>
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
					<td>+</td>
					<td>Addition</td>
					<td><pre class="language-java"><ShowCode inlineCode="maVar = 3 + 4; //maVar vaut 7" lang="java"/></pre></td>
					<td></td>
				</tr>
				<tr>
					<td>-</td>
					<td>Soustraction</td>
					<td><pre class="language-java"><ShowCode inlineCode="maVar = 10 - 4; //maVar vaut 6" lang="java"/></pre></td>
					<td></td>
				</tr>
				<tr>
					<td>*</td>
					<td>Multiplication</td>
					<td><pre class="language-java"><ShowCode inlineCode="maVar = 3 * 3; //maVar vaut 9" lang="java"/></pre></td>
					<td></td>
				</tr>
				<tr>
					<td>/</td>
					<td>Division</td>
					<td><pre class="language-java"><ShowCode inlineCode="maVar = 20 / 4; //maVar vaut 5
		maVar = 20 / 3; //maVar vaut 6" lang="java"/></pre></td>
					<td>Si les deux nombres sont des entiers (byte, short, int ou long), alors le résultat sera aussi un nombre entier. Arrondi inférieur.</td>
				</tr>
				<tr>
					<td>%</td>
					<td>Modulo</td>
					<td><pre class="language-java"><ShowCode inlineCode="maVar = 42 % 10; //maVar vaut 2" lang="java"/></pre></td>
					<td>Renvoie le reste de la division.</td>
				</tr>
			</tbody>
		</table>

		<h3>Effectuer un calcul complexe</h3>
		<p>Vous pouvez mettre plus d'un opérateur par calcul :</p>
		<pre class="language-java"><ShowCode inlineCode="maVar = 2 + 3 + 4; //maVar vaut 9" lang="java"/></pre>
		<p>Attention cependant à la priorité des opérations. Vous pouvez mettre des parenthèses comme en mathématique.</p>
		<pre class="language-java"><ShowCode inlineCode="maVar = 2 + 3 * 5; //maVar vaut 17
		maVar = (2 + 3) * 5; //maVar vaut 25" lang="java"/></pre>

		<h3>Raccourci de programmation</h3>
		<p>C'est bien connu, les programmeurs sont des flemmards, il existe donc des écritures raccourcies pour certaines opérations :</p>
		<table class="table">
			<thead>
				<tr>
					<th>Symbole</th>
					<th>Avant</th>
					<th>Après</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>+=</td>
					<td><pre class="language-java"><ShowCode inlineCode="maVar = maVar + 10;" lang="java"/></pre></td>
					<td><pre class="language-java"><ShowCode inlineCode="maVar += 10;" lang="java"/></pre></td>
				</tr>
				<tr>
					<td>-=</td>
					<td><pre class="language-java"><ShowCode inlineCode="maVar = maVar - 10;" lang="java"/></pre></td>
					<td><pre class="language-java"><ShowCode inlineCode="maVar -= 10;" lang="java"/></pre></td>
				</tr>
				<tr>
					<td>*=</td>
					<td><pre class="language-java"><ShowCode inlineCode="maVar = maVar * 2;" lang="java"/></pre></td>
					<td><pre class="language-java"><ShowCode inlineCode="maVar *= 2;" lang="java"/></pre></td>
				</tr>
				<tr>
					<td>/=</td>
					<td><pre class="language-java"><ShowCode inlineCode="maVar = maVar / 2;" lang="java"/></pre></td>
					<td><pre class="language-java"><ShowCode inlineCode="maVar /= 2;" lang="java"/></pre></td>
				</tr>
				<tr>
					<td>%=</td>
					<td><pre class="language-java"><ShowCode inlineCode="maVar = maVar % 5;" lang="java"/></pre></td>
					<td><pre class="language-java"><ShowCode inlineCode="maVar %= 5;" lang="java"/></pre></td>
				</tr>
				<tr>
					<td>++</td>
					<td><pre class="language-java"><ShowCode inlineCode="maVar += 1;" lang="java"/></pre></td>
					<td><pre class="language-java"><ShowCode inlineCode="maVar++;" lang="java"/></pre></td>
				</tr>
				<tr>
					<td>--</td>
					<td><pre class="language-java"><ShowCode inlineCode="maVar -= 1;" lang="java"/></pre></td>
					<td><pre class="language-java"><ShowCode inlineCode="maVar--;" lang="java"/></pre></td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
	import ShowCode from '../../components/ShowCode.vue'

	export default {
		name: 'Operateurs',
		components: {
			ShowCode,
		},
	}
</script>
