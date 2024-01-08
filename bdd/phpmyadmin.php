<?php
	$title = 'Prise en main de phpMyAdmin';
	include 'header.php';
?>
	<h1>Prise en main de phpMyAdmin</h1>
	<h3>Se connecter à phpMyAdmin</h3>
	<p>Les identifiant et mot de passe par défaut sont root et root.</p>
	<img src="medias/phpmyadmin_login.png" alt="login()" />
	<p>Vous arrivez normalement sur cette page :</p>
	<img src="medias/phpmyadmin_home.png" alt="Page principale" />

	<h3>Créer une nouvelle base de données</h3>
	<p><img src="medias/danger_icon.png" alt="Attention" width="32" />Ne pas confondre table et base de données. Une base de données correspond aux fichier Access (.accdb) et les tables en font partie.</p>
	<p>Pour créer une nouvelle base de données, cliquez Nouvelle base de données sur le menu de droite.</p>
	<img src="medias/phpmyadmin_new_base.png" alt="Nouvelle base de données" />
	<p>Entrez le nom de votre base et laissez l'interclassement par défaut pour l'instant.</p>
	<img src="medias/phpmyadmin_new_base2.png" alt="Nom de la base de données" />
	<p>Puis cliquez sur Créer.</p>

	<h3>Créer une nouvelle table</h3>
	<p>La table est vide, pour y ajouter une table, donnez-lui un nom et cliquez sur Exécuter.</p>
	<img src="medias/phpmyadmin_new_table.png" alt="Nouvelle table" />
	<p>Vous pouvez ensuite définir les champs comme dans Access.</p>
	<img src="medias/phpmyadmin_new_table2.png" alt="Définir les champs" />
	<br><br>
	<p>Les types de champs sont les suivants :</p>
	<table class="table">
		<tr><th>Nom</th><th>Description</th><th>Exemple de valeurs</th></tr>
		<tr><td>BOOLEAN</td><td>Vrai (1) ou faux (0)</td><td>0, 1</tr>
		<tr><td>INT</td><td>Nombre entier</td><td>-4, 100, 0, -999</tr>
		<tr><td>FLOAT</td><td>Nombre à virgule</td><td>3.33, 0.05, 10, -42.69</tr>
		<tr><td>VARCHAR</td><td>Chaine de caractères</td><td>"Hello World !", "adfgdfg"</tr>
		<tr><td>DATE</td><td>Uniquement date</td><td>2002-02-08, 2018-10-03</tr>
		<tr><td>DATETIME</td><td>Date et heure</td><td>2018-10-03 12:35:00</tr>
	</table>
	<p>Il faut juste encore indiquez à phpMyAdmin que id_personne est l'ID de la personne. Pour ce faire, scrollez horizontalement et cocher la case A_I (Auto_Increment) pour id_personne.</p>
	<img src="medias/phpmyadmin_a_i.png" alt="A_I" />
	<p>Une fenêtre apparait, cliquez simplement sur Exécuter.</p>
	<img src="medias/phpmyadmin_primary.png" alt="Primary" />
	<p>Cliquez sur Sauvegarder et la table s'enregistre.</p>
<?php include 'footer.php'; ?>