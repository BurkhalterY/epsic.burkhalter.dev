<?php
	$title = 'Les bases du VBA';
	include 'header.php';
?>
	<h1>Les bases du VBA</h1>
	<p>Le VBA (Visual Basic for Applications) permet, de faire divers actions dans et entre les formuaires d'Access.</p>

	<h3>Associer du code VBA à un bouton</h3>
	<p>Créez un bouton normal avec n'importe quelle fonction. Puis allez dans les propriétés puis Événement et changer [Macro incorporée] en [Procédure événementielle].</p>
	<img src="medias/vba_bouton.png" />
	<p>Cliquez sur les 3 points (...)<br>L'éditeur VBA s'ouvre.</p>
	<p>Voici les pricipales fonctions VBA :</p>
	<table class="table">
		<tr>
			<td><samp>DoCmd.OpenForm "F_Formulaire"</samp></td>
			<td>Ouvre le formulaire F_Formulaire.</td>
		</tr>
		<tr>
			<td><samp>DoCmd.OpenForm "F_Formulaire", , , , acFormAdd</samp></td>
			<td>Ouvre le formulaire F_Formulaire sur un nouvel enregistrement.</td>
		</tr>
		<tr>
			<td><samp>DoCmd.Close</samp></td>
			<td>Ferme le formulaire.</td>
		</tr>
	</table>
<?php include 'footer.php'; ?>