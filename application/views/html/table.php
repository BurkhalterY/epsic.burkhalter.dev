<?php defined('BASEPATH') OR exit('No direct script access allowed'); ?>
<h1>Les tableaux</h1>
<p>Un tableau se constitue au minimum de 3 éléments : <code class="language-html">&lt;table&gt;</code>, <code class="language-html">&lt;tr&gt;</code> et <code class="language-html">&lt;td&gt;</code>. </p>
<ul>
	<li><code class="language-html">&lt;table&gt;</code> : c'est à l'intérieur qu'on va mettre nos lignes.</li>
	<li><code class="language-html">&lt;tr&gt;</code> : pour Table Row, c'est une ligne du tableau.</li>
	<li><code class="language-html">&lt;td&gt;</code> : pour Table Data, c'est une cellule du tableau.</li>
</ul>
<p><code class="language-html">&lt;th&gt;</code> (Table Header) peut parfois être utilisé à la place de <code class="language-html">&lt;td&gt;</code> lorsqu'on veut indiquer qu'une cellule fait partie de l'entête.</p>
<div class="row">
	<div class="col-md-6">
		<pre><code class="language-html"><?=htmlspecialchars(<<<HTML
		<table border>
			<tr>
				<th>#</th>
				<th>Nom</th>
				<th>Temps</th>
			</tr>
			<tr>
				<td>1</td>
				<td>Mecha Sonic</td>
				<td>01:20:103</td>
			</tr>
			<tr>
				<td>2</td>
				<td>Shadow</td>
				<td>01:20:978</td>
			</tr>
			<tr>
				<td>3</td>
				<td>Sonic</td>
				<td>01:21:537</td>
			</tr>
			<tr>
				<td>3</td>
				<td>Silver</td>
				<td>01:23:655</td>
			</tr>
		</table>
		HTML)?></code></pre>
	</div>
	<div class="col-md-6">
		<table border>
			<tr>
				<th>#</th>
				<th>Nom</th>
				<th>Temps</th>
			</tr>
			<tr>
				<td>1</td>
				<td>Mecha Sonic</td>
				<td>01:20:103</td>
			</tr>
			<tr>
				<td>2</td>
				<td>Shadow</td>
				<td>01:20:978</td>
			</tr>
			<tr>
				<td>3</td>
				<td>Sonic</td>
				<td>01:21:537</td>
			</tr>
			<tr>
				<td>3</td>
				<td>Silver</td>
				<td>01:23:655</td>
			</tr>
		</table>
	</div>
</div>
<p>L'attribut <code>border</code> est utilisé ici uniquement dans le but d'afficher les bordures mais est complétement facultatif voire déconseillé. Dans les bonnes pratiques, on devrait mettre les bordures dans le code CSS et non HTML.</p>