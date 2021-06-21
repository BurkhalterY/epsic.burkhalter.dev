<h1>Les types de balises</h1>
<p>Il existe deux types de balises : <strong>block</strong> et <strong>inline</strong>. Voici un petit tableau récapitulatif :</p>
<table class="table">
	<tr>
		<th></th>
		<th>Block</th>
		<th>Inline</th>
	</tr>
	<tr>
		<th>Taille</th>
		<td>Occupe toute la largeur</td>
		<td>N'occupe que la largeur nécessaire</td>
	</tr>
	<tr>
		<th>Position</th>
		<td>L'un en dessous de l'autre</td>
		<td>Les deux côte-à-côte</td>
	</tr>
	<tr>
		<th>Exemple de balise</th>
		<td><code class="language-html">&lt;div&gt;</code></td>
		<td><code class="language-html">&lt;span&gt;</code></td>
	</tr>
</table>

<p>Mais en pratique, à quoi servent ces balises ? Voici un tableau avec les principales balises à connaître :</p>
<table class="table">
	<tr>
		<th>Balise</th>
		<th>Inline/block</th>
		<th>Description</th>
	</tr>
	<tr>
		<td><code class="language-html">&lt;div&gt;</code></td>
		<td>Block</td>
		<td>C'est la balise block "de base", elle permet de séparer les éléments pour, par exemple, leurs appliquer une classe CSS.</td>
	</tr>
	<tr>
		<td><code class="language-html">&lt;span&gt;</code></td>
		<td>Inline</td>
		<td>Équivalent de <code class="language-html">&lt;div&gt;</code> en inline.</td>
	</tr>
	<tr>
		<td><code class="language-html">&lt;p&gt;</code></td>
		<td>Block</td>
		<td>Un paragraphe. Pour insérer un retour à la ligne, écrire <code class="language-html">&lt;br&gt;</code>.</td>
	</tr>
	<tr>
		<td><code class="language-html">&lt;h1&gt;</code>, <code class="language-html">&lt;h2&gt;</code> ... <code class="language-html">&lt;h6&gt;</code></td>
		<td>Block</td>
		<td>Les titres et sous-titres du plus important (h1) au moins important (h6).</td>
	</tr>
	<tr>
		<td><code class="language-html">&lt;a href=""&gt;</code></td>
		<td>Inline</td>
		<td><a href="<?=base_url('html/hypertexte')?>">Un lien hypertexte.</a></td>
	</tr>
	<tr>
		<td><code class="language-html">&lt;img src="" alt="" /&gt;</code></td>
		<td>Block</td>
		<td><a href="<?=base_url('html/image')?>">Une image.</a></td>
	</tr>
	<tr>
		<td><code class="language-html">&lt;ul&gt;</code></td>
		<td>Block</td>
		<td><a href="<?=base_url('html/liste')?>">Une liste.</a></td>
	</tr>
	<tr>
		<td><code class="language-html">&lt;table&gt;</code></td>
		<td>Block</td>
		<td><a href="<?=base_url('html/table')?>">Un tableau.</a></td>
	</tr>
	<tr>
		<td><code class="language-html">&lt;input&gt;</code></td>
		<td>Inline</td>
		<td><a href="<?=base_url('html/form')?>">Des champs d'entrée.</a></td>
	</tr>
</table>