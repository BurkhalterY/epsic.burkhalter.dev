<h1>Les listes</h1>
<p>Il existe deux types de liste: les listes non ordonnées (unordered) et les listes ordonnées (ordered).</p>
<p>Les listes qu'on utilise le plus fréquemment sont les listes non ordonnées. Elle se code comme ceci avec une balise <code class="language-html">&lt;ul&gt;</code> qui contiendra tous les éléments de la liste entre balise <code class="language-html">&lt;li&gt;</code> :</p>
<table>
	<tr>
		<td>
			<pre><code class="language-html"><?=htmlspecialchars(<<<HTML
			<ul>
				<li>Pierre</li>
				<li>Paul</li>
				<li>Jacques</li>
			</ul>
			HTML)?></code></pre>
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

<p>Pour utiliser une liste ordonnée, simplement utiliser <code class="language-html">&lt;ol&gt;</code> à la place de <code class="language-html">&lt;ul&gt;</code>. Les numéros seront générés automatiquement :</p>
<table>
	<tr>
		<td>
			<pre><code class="language-html"><?=htmlspecialchars(<<<HTML
			<ol>
				<li>Pierre</li>
				<li>Paul</li>
				<li>Jacques</li>
			</ol>
			HTML)?></code></pre>
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
<p>Il est également possible de mettre une liste <code class="language-html">&lt;ul&gt;</code> dans une autre afin d'avoir une sous-liste :</p>
<table>
	<tr>
		<td>
			<pre><code class="language-html"><?=htmlspecialchars(<<<HTML
			<ul>
				<li>Titre</li>
				<li>Menu 1</li>
				<ul>
					<li>Sous-menu 1</li>
					<li>Sous-menu 2</li>
				</ul>
				<li>Menu 2</li>
			</ul>
			HTML)?></code></pre>
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