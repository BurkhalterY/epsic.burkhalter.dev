<h1>Les marges</h1>
<p>Les marges permettent de mettre de l'espace entre les balises. Il en existe deux type :</p>
<ul>
	<li>Marges extérieures (margin)</li>
	<li>Marges intérieures (padding)</li>
</ul>
<div class="row">
	<div class="col-md-6">
		<img src="<?=base_url('medias/html/css-margin-padding.png')?>" alt="" />
	</div>
	<div class="col-md-6">
		<br>
		<ul>
			<li><span style="background-color: #CFF0FB;">Bleu</span> : la balise sur laquelle les marges sont appliquées</li>
			<li><span style="background-color: #E3DCFF;">Violet</span> : le padding (marges intérieures)</li>
			<li><span style="background-color: #737373; color: white;">Gris</span> : la bordure</li>
			<li><span style="background-color: #FDFFDF;">Jaune</span> : le margin (marges extérieures)</li>
		</ul>
	</div>
</div>
<p>Il est également possible de spécifier plusieurs valeurs, une pour chaque côté (dans le sens des aiguilles d'une montre en partant de <code>top</code>) :</p>
<pre><code class="language-css">.test1 {
	/* Margin de 10 pixels en haut, 20 à droite, 5 en bas et 15 à gauche (sens des aiguilles d'une montre) */
	margin: 10px 20px 5px 15px;
}</code></pre>
<pre><code class="language-css">.test2 {
	/* Margin de 10 pixels en haut, 20 à droite et à gauche et 5 en bas */
	/* Si gauche n'est pas spécifié, il prend la valeur de droite */
	margin: 10px 20px 5px;
}</code></pre>
<pre><code class="language-css">.test3 {
	/* Margin de 10 pixels en haut et en bas (vertical), et de 20 pixels à droite et à gauche (horizontal) */
	/* Si que deux valeurs ne sont précisées, haut = bas et gauche = droite */
	margin: 10px 20px;
}</code></pre>
<pre><code class="language-css">.test4 {
	/* Margin de 20 pixels de chaque côté */
	margin: 20px;
}</code></pre>

<p>Il existe aussi les quatre propriétés <code>margin-top</code>, <code>margin-right</code>, <code>margin-bottom</code> et <code>margin-left</code> et leur équivalent en padding pour ne spécifier qu'un côté. Utile lorsque nous aborderons l'<a href="<?=base_url('html/css_dom_heritage')?>">héritage</a>.</p>