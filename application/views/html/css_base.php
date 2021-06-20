<?php defined('BASEPATH') OR exit('No direct script access allowed'); ?>
<h1>Les bases du CSS</h1>
<p>Le CSS (Cascading Style Sheets ou Feuilles de Style en Cascade en français) est un langage permettant la mise en forme d'élements HTML.</p>
<p>Le CSS a besoin de deux choses pour s'appliquer : l'élement sur lequel agir et quel style lui appliquer. Et on l'écrira comme ça :</p>
<pre><code class="language-css">selecteur {
	propriété-css: valeur;
}</code></pre>

<h2>Les sélecteurs</h2>
<p>Pour savoir sur quel(s) élement(s) le CSS doit s'appliquer, on utilise les sélecteurs. Il y a 3 types de sélecteurs : pour les balises HTML, les classes et les id.</p>
<table class="table">
	<tr>
		<th>Balise HTML</th>
		<th>Classe</th>
		<th>ID</th>
	</tr>
	<tr>
		<td><pre><code class="language-css">p {
	...
}</code></pre></td>
		<td><pre><code class="language-css">.red-text {
	...
}</code></pre></td>
		<td><pre><code class="language-css">#header {
	...
}</code></pre></td>
	</tr>
	<tr>
		<td>Pour sélectionner un type de balise HTML (ex: p, h1). On écrit simplement la balise sans &lt; &gt;</td>
		<td>Pour sélectionner tous les élement ayant une certaine classe. On écrit la classe précédé du caractère point (.)<br>Il est possible de sélectionner un élement seulement s'il possède deux classes ou plus les ajoutant simplement à la suite séparées par un autre point. Exemple :<br><code class="language-css">.first-class.second-class { ... }</code></td>
		<td>Pour sélectionner l'élement possédant un id précis (normalement un seul par page), on écrit l'id précédé du caractère dièse (#)</td>
	</tr>
</table>
<p>Il est également possible d'utiliser deux sélecteurs séparés par une virgule afin de créer un "OU". C'est-à-dire que l'élement soit touché s'il respecte un ou l'autre des sélecteurs. Exemple :</p>
<pre><code class="language-css">p, .red-text {
	...
}</code></pre>

<h2>Les propriétés CSS</h2>
<p>Les propriétés modifient le style de l'élement ou des élements trouvés par le sélecteur. Il en existe beaucoup. Voici un exemple avec des propriétés de base et assez intuitives :</p>
<div class="row">
	<div class="col-md-6">
		<pre><code class="language-css">#exemple1 {
	color: green;
	font-size: 150%;
	font-family: consola;
}</code></pre>
	</div>
	<div class="col-md-6">
		<pre><code class="language-html">&lt;p id="exemple1"&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit...&lt;/p&gt;</code></pre>
	</div>
</div>
<span>Résultat :</span>
<p style="color: green; font-size: 150%; font-family: consola;">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>