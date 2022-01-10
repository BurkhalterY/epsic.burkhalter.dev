<template>
	<div>
		<h1>Les listes</h1>
		<p>Il existe deux types de liste: les listes non ordonnées (unordered) et les listes ordonnées (ordered).</p>
		<p>Les listes qu'on utilise le plus fréquemment sont les listes non ordonnées. Elle se code comme ceci avec une balise <ShowCode class="language-html" inlineCode="<ul>" lang="html"/> qui contiendra tous les éléments de la liste entre balise <ShowCode class="language-html" inlineCode="<li>" lang="html"/> :</p>
		<table class="table-responsive">
			<tr>
				<td>
					<pre class="language-html"><ShowCode file="html/ul.html" lang="html"/></pre>
				</td>
				<td>
					<ul>
						<li>Pierre</li>
						<li>Paul</li>
						<li>Jacques</li>
					</ul>
				</td>
			</tr>
		</table>

		<p>Pour utiliser une liste ordonnée, simplement utiliser <ShowCode class="language-html" inlineCode="<ol>" lang="html"/> à la place de <ShowCode class="language-html" inlineCode="<ul>" lang="html"/>. Les numéros seront générés automatiquement :</p>
		<table class="table-responsive">
			<tr>
				<td>
					<pre class="language-html"><ShowCode file="html/ol.html" lang="html"/></pre>
				</td>
				<td>
					<ol>
						<li>Pierre</li>
						<li>Paul</li>
						<li>Jacques</li>
					</ol>
				</td>
			</tr>
		</table>

		<h2>Listes imbriquées</h2>
		<p>Il est également possible de mettre une liste <ShowCode class="language-html" inlineCode="<ul>" lang="html"/> dans une autre afin d'avoir une sous-liste :</p>
		<table class="table-responsive">
			<tr>
				<td>
					<pre class="language-html"><ShowCode file="html/ul-lvl2.html" lang="html"/></pre>
				</td>
				<td>
					<ul>
						<li>Titre</li>
						<li>Menu 1</li>
						<ul>
							<li>Sous-menu 1</li>
							<li>Sous-menu 2</li>
						</ul>
						<li>Menu 2</li>
					</ul>
				</td>
			</tr>
		</table>
	</div>
</template>

<script>
	import ShowCode from '../../components/ShowCode.vue'

	export default {
		name: 'Liste',
		components: {
			ShowCode,
		},
	}
</script>
