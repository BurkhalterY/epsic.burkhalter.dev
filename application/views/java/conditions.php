<?php defined('BASEPATH') OR exit('No direct script access allowed'); ?>
<h1>Les conditions</h1>
<p>Une condition sert à n'exécuter le code qui suit seulement si elle est remplie.</p>

<h3>If</h3>
<p>La condition if se note comme cela :</p>
<pre><code class="language-java">if (condition) {
	//code si oui
}</code></pre>
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
			<td><pre><code class="language-java">if (a == 10)</code></pre></td>
			<td>Si la variable a vaut 10, la condition est vraie.</td>
		</tr>
		<tr>
			<td>&lt;</td>
			<td>Plus petit que</td>
			<td><pre><code class="language-java">if (a &lt; 10)</code></pre></td>
			<td>Si la variable a vaut moins que 10, la condition est vraie.</td>
		</tr>
		<tr>
			<td>&gt;</td>
			<td>Plus grand que</td>
			<td><pre><code class="language-java">if (a &gt; 10)</code></pre></td>
			<td>Si la variable a vaut moins que 10, la condition est vraie.</td>
		</tr>
		<tr>
			<td>&lt;=</td>
			<td>Plus petit ou égale</td>
			<td><pre><code class="language-java">if (a &lt;= 10)</code></pre></td>
			<td>Si la variable a vaut 10 ou moins, la condition est vraie.</td>
		</tr>
		<tr>
			<td>&gt;=</td>
			<td>Plus grand ou égale</td>
			<td><pre><code class="language-java">if (a &gt;= 10)</code></pre></td>
			<td>Si la variable a vaut 10 ou plus, la condition est vraie.</td>
		</tr>
		<tr>
			<td>!=</td>
			<td>Inégalité</td>
			<td><pre><code class="language-java">if (a != 10)</code></pre></td>
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
			<td><pre><code class="language-java">if (a &gt; 10 && a &lt; 20)</code></pre></td>
			<td>Si la variable a est plus grande que 10 mais plus petite que 20, la condition est vraie.</td>
		</tr>
		<tr>
			<td>||</td>
			<td>Ou</td>
			<td><pre><code class="language-java">if (a &gt; 10 || b &gt; 10)</code></pre></td>
			<td>Si une des deux variables a ou b est plus grande que 10, la condition est vraie.</td>
		</tr>
		<tr>
			<td>!</td>
			<td>Non</td>
			<td><pre><code class="language-java">if (!condition)</code></pre></td>
			<td>Renvoie l'inverse de la condition, dans ce cas il faudrait que condition soit à false pour que la condition soit vraie.</td>
		</tr>
	</tbody>
</table>
<p>Comme pour les calculs, on peut utiliser des parenthèses pour donner une priorité de calcul</p>
<td><pre><code class="language-java">if ((a == 5 || b == 5) && c &gt; 10)
//pour que cette condition soit valide, il faut que soit a, soit b soit à 5 et que c soit plus grand que 10</code></pre></td>

<h3>Else</h3>
<p>Else sert à exécuter un autre bout de code si la première condition n'est pas valide, exemple</p>
<pre><code class="language-java">if (condition) {
	//code si oui
} else {
	//code si non
}</code></pre>