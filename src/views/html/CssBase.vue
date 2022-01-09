<template>
	<div>
		<h1>Les bases du CSS</h1>
		<p>Le CSS (Cascading Style Sheets ou Feuilles de Style en Cascade en français) est un langage permettant la mise en forme d'élements HTML.</p>
		<p>Le CSS a besoin de deux choses pour s'appliquer : l'élement sur lequel agir et quel style lui appliquer. Et on l'écrira comme ça :</p>
		<pre class="language-css"><ShowCode file="html/base.css" lang="css"/></pre>

		<h2>Les sélecteurs</h2>
		<p>Pour savoir sur quel(s) élement(s) le CSS doit s'appliquer, on utilise les sélecteurs. Il y a 3 types de sélecteurs : pour les balises HTML, les classes et les id.</p>
		<table class="table">
			<tr>
				<th>Balise HTML</th>
				<th>Classe</th>
				<th>ID</th>
			</tr>
			<tr>
				<td><pre class="language-css"><ShowCode file="html/selector-tag.css" lang="css"/></pre></td>
				<td><pre class="language-css"><ShowCode file="html/selector-class.css" lang="css"/></pre></td>
				<td><pre class="language-css"><ShowCode file="html/selector-id.css" lang="css"/></pre></td>
			</tr>
			<tr>
				<td>Pour sélectionner un type de balise HTML (ex: p, h1). On écrit simplement la balise sans &lt; &gt;</td>
				<td>Pour sélectionner tous les élement ayant une certaine classe. On écrit la classe précédé du caractère point (.)<br>Il est possible de sélectionner un élement seulement s'il possède deux classes ou plus les ajoutant simplement à la suite séparées par un autre point. Exemple :<br><ShowCode class="language-css" file="html/selector-classes.css" lang="css"/></td>
				<td>Pour sélectionner l'élement possédant un id précis (normalement un seul par page), on écrit l'id précédé du caractère dièse (#)</td>
			</tr>
		</table>
		<p>Il est également possible d'utiliser deux sélecteurs séparés par une virgule afin de créer un "OU". C'est-à-dire que l'élement soit touché s'il respecte un ou l'autre des sélecteurs. Exemple :</p>
		<pre class="language-css"><ShowCode file="html/selector-or.css" lang="css"/></pre>

		<h2>Les propriétés CSS</h2>
		<p>Les propriétés modifient le style de l'élement ou des élements trouvés par le sélecteur. Il en existe beaucoup. Voici un exemple avec des propriétés de base et assez intuitives :</p>
		<div class="row">
			<div class="col-md-6">
				<pre class="language-css"><ShowCode file="html/properties.css" lang="css"/></pre>
			</div>
			<div class="col-md-6">
				<pre class="language-html"><ShowCode file="html/css-base-exemple1.html" lang="html"/></pre>
			</div>
		</div>
		<span>Résultat :</span>
		<p style="color: green; font-size: 150%; font-family: consola;">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
	</div>
</template>

<script>
	import ShowCode from '../../components/ShowCode.vue'

	export default {
		name: 'CssBase',
		components: {
			ShowCode,
		},
	}
</script>
