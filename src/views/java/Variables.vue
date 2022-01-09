<template>
	<div>
		<h1>Les variables</h1>
		<p>Les variables servent à mémoriser des données dans la RAM, pour pouvoir les réutiliser plus tard.</p>

		<h3>Les types de variables</h3>
		<table class="table">
			<thead>
				<tr>
					<th>Nom</th>
					<th>Taille</th>
					<th>Remarque</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>boolean</td>
					<td>1 bit</td>
					<td>Deux possibilités : true ou false</td>
				</tr>
				<tr>
					<td>byte</td>
					<td>1 octet</td>
					<td>Entre -128 et 127</td>
				</tr>
				<tr>
					<td>short</td>
					<td>2 octets</td>
					<td>Entre -32768 et 32767</td>
				</tr>
				<tr>
					<td>int</td>
					<td>4 octets</td>
					<td>Entre -2'147'483'648 et 2'147'483'647</td>
				</tr>
				<tr>
					<td>long</td>
					<td>8 octets</td>
					<td>Entre -9'223'372'036'854'775'808 et 9'223'372'036'854'775'807</td>
				</tr>
				<tr>
					<td>float</td>
					<td>4 octets</td>
					<td>Nombre à virgule</td>
				</tr>
				<tr>
					<td>double</td>
					<td>8 octets</td>
					<td>Nombre à virgule avec plus de précision</td>
				</tr>
				<tr>
					<td>char</td>
					<td>2 octets</td>
					<td>Un seul caractère</td>
				</tr>
				<tr>
					<td>String</td>
					<td>Taille variable</td>
					<td>Une chaîne de caractères</td>
				</tr>
			</tbody>
		</table>

		<h3>Utilisation</h3>
		<pre class="language-java"><ShowCode inlineCode="type nomVariable = 0;" lang="java"/></pre>
		<span><strong>type</strong> -&gt; un des types montrés en dessus, choisi en fonction du besoin.</span><br>
		<span><strong>nomVariable</strong> -&gt; Le nom qu'on utilisera après pour faire appelle à notre variable, sans espace ni caractères spéciaux, le plus souvent en <a href="https://fr.wikipedia.org/wiki/Camel_case" target="_blank">Camel Case</a>.</span><br>
		<span><strong>= 0</strong> -&gt; Sert à initialiser directement la variable avec une valeur. C'est facultatif, si on ne le mets pas, la variable vaut null, elle ne peut donc pas être utilisée pour un calcul.</span>

		<h3>Exemples</h3>
		<pre class="language-java"><ShowCode inlineCode="int maVariable; //crée une variable avec le nom maVariable
		maVariable = 0; //initialise la variable à 0" lang="java"/></pre>
		<pre class="language-java"><ShowCode inlineCode="int maVariable = 0; //crée et initialise la variable sur la même ligne" lang="java"/></pre>

		<h3>Remarques</h3>
		<ul>
			<li>Dans un nombre à virgule, on écrit un point et non pas une virgule. Exemple : 2.5</li>
			<li>Pour le type char, on écrit le caractère entre apostrophes. Exemple : 'a'</li>
			<li>Pour le type String (attention à la majuscule), on écrit les caractères entre guillemets. Exemple : "Hello world !"</li>
		</ul>
	</div>
</template>

<script>
	import ShowCode from '../../components/ShowCode.vue'

	export default {
		name: 'Variables',
		components: {
			ShowCode,
		},
	}
</script>
