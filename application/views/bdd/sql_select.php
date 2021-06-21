<h1>Récupérer des données avec des requêtes SQL</h1>
<p>Le SQL est un langage permettant d'interagir avec la base de données. Ici, nous allons l'utiliser pour récupérer des données d'une ou plusieurs tables.</p>

<h3>SELECT</h3>
<p>Pour récupérer des données, nous allons utiliser l'instruction SELECT. En voici un exemple :</p>
<pre><code class="language-sql">SELECT * FROM t_personnes</code></pre>
<p>L'étoile (*) signifie que nous voulons tous les champs de la table.<br><strong>FROM</strong> est un mot clé qui précède le nom de la table source.<br><strong>t_personne</strong> est la table source, mettez ici le nom de la table.</p>

<h3>Ne sélectionner que certains champs</h3>
<p>Pour ne prendre que certains champs de t_personnes, on peut remplacer l'étoile (*) par le nom de chacun des champs séparés d'une virgule :</p>
<pre><code class="language-sql">SELECT nom, prenom FROM t_personnes</code></pre>
<p>Cette requête renverra uniquement des valeurs pour nom et prenom et ignoreras les autres champs.</p>

<h3>Ajouter un filtre</h3>
<p>Le mot clé <strong>WHERE</strong> permet d'ajouter un filtre à une requête, ne prendre que les enregistrements qui remplissent la condition située après le WHERE. Exemple :</p>
<pre><code class="language-sql">SELECT * FROM t_personnes WHERE nom LIKE 'a%'</code></pre>
<p>Ici, l'opérateur est <strong>LIKE</strong>. Voici une liste des principaux opérateurs :</p>
<table class="table">
	<tr>
		<th>Opérateur</th>
		<th>Description</th>
		<th>Exemple</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>=</td>
		<td>Strictement égale</td>
		<td>WHERE id_pers = 5</td>
		<td>Uniquement la personne N°5</td>
	</tr>
	<tr>
		<td>&lt;</td>
		<td>Plus petit</td>
		<td>WHERE prix_article &lt; 10</td>
		<td>Tous les articles qui coutent moins de 10</td>
	</tr>
	<tr>
		<td>&lt;=</td>
		<td>Plus petit ou égale</td>
		<td>WHERE prix_article &lt;= 10</td>
		<td>Tous les articles qui coutent moins de 10 ou 10</td>
	</tr>
	<tr>
		<td>&gt;</td>
		<td>Plus grand</td>
		<td>WHERE prix_article &gt; 10</td>
		<td>Tous les articles qui coutent plus que 10</td>
	</tr>
	<tr>
		<td>&gt;=</td>
		<td>Plus grand ou égale</td>
		<td>WHERE prix_article &gt;= 10</td>
		<td>Tous les articles qui coutent plus que 10 ou 10</td>
	</tr>
	<tr>
		<td>LIKE</td>
		<td>Comme</td>
		<td>WHERE nom_pers LIKE '%a%'</td>
		<td>Toutes les personnes qui ont la lettre "a" dans leur nom (% est comme un joker)</td>
	</tr>
</table>
<p>Il est aussi possible de combiner des conditions avec les opérateurs AND et OR.</p>

<h3>Trier les enregistrements</h3>
<p>Il est possible de trier les enregistrements avec le mot clé <strong>ORDER BY</strong>. Exemple :</p>
<pre><code class="language-sql">SELECT * FROM t_personnes ORDER BY nom</code></pre>
<p>Cette requête renvoie les personnes triées par nom. ATTENTION cependant, cela ne tri pas les champs dans la bdd, juste à l'affichage. Un SELECT ne peut pas modifier la base de données.</p>
<p>Il est également possible d'ajouter le mot clé DESC pour trier à l'envers ou de trier sur plusieurs champs en les séparant par des virgules. Exemples :</p>
<p>Trier dans l'ordre alphabétique inverse :</p>
<pre><code class="language-sql">SELECT * FROM t_personnes ORDER BY nom DESC</code></pre>
<p>Trier par nom puis par prénom :</p>
<pre><code class="language-sql">SELECT * FROM t_personnes ORDER BY nom, prenom</code></pre>

<h3>Limiter le nombre affiché</h3>
<p>Il est possible de limiter le nombre d'enregistrements, pour ça ajouter le mot clé <strong>LIMIT</strong></p>
<p>Exemple :</p>
<pre><code class="language-sql">SELECT * FROM t_personnes LIMIT 20</code></pre>
<p>Affiche 20 enregistrements.</p>

<h3>Combiner ces règles</h3>
<p>Il est bien sûr possible de combiner plusieurs de ces mots clé pour créer une requête plus complexe :</p>
<pre><code class="language-sql">SELECT * FROM t_personnes WHERE nom LIKE 'a%' ORDER BY nom, prenom LIMIT 20</code></pre>
<p>Cette requête prend les 20 premières personnes (triées) dont le nom commence par "a".</p>