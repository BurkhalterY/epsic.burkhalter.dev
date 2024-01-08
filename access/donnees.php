<?php
	$title = 'Ajouter des données';
	include 'header.php';
?>
	<h1>Ajouter des données</h1>
	<p>Pour remplir notre base de données, nous allons utiliser le site <a href="https://www.generatedata.com/?lang=fr">generatedata.com</a></p>
	<img src="medias/generatedata.com.png" alt="generatedata.com" style="max-width: 100%;" />
	<br><br>
	<p>Il faut entrer le nom de tous les champs, avec le type de données voulu.</p>
	<ul>
		<li>Le nom et le prénom doivent être 2 champs séparés</li>
		<li>Pour que les dates soient compatibles avec Access, le format doit être "d.m.Y"</li>
	</ul>
	<p>Avant de générer vos données, sélectionnez Excel au lieu de HTML (par défaut).</p>
	<hr>
	<p>Copiez ensuite toutes les données générées sans les entêtes comme ceci.</p>
	<div class="row">
		<div class="col-xs-3">
			<img src="medias/excel_copy.png" alt="Excel" style="max-width: 100%;" />
		</div>
		<div class="col-xs-9">
			<img src="medias/import.gif" alt="Import dans Access" style="max-width: 100%;" />
		</div>
	</div>
	<br>
	<strong>Une erreur courante est qu'un Valide si empêche l'importation.</strong>
	<br><br>
<?php include 'footer.php'; ?>