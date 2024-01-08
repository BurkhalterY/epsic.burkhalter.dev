<?php
	$title = 'Les QR codes';
	include 'header.php';
?>
	<h1>Les QR codes</h1>
	<img style="float: right;" src="medias/qr_code.png" alt="un code QR" />
	<p>Le QR code (Quick Response Code) est un type de code-barres en 2 dimensions.<br>Ils peuvent contenir divers données tel que du texte, des URL, des mots de passe wifi, etc.</p>
	<p>Il existe 40 versions de QR code. Chaque version ajoute 4 pixels en longueur et en largeur au QR code :</p>
	<table class="table">
		<tr>
			<td>Version 1</td>
			<td>21 x 21 px</td>
		</tr>
		<tr>
			<td>Version 2</td>
			<td>25 x 25 px</td>
		</tr>
		<tr>
			<td>Version 3</td>
			<td>29 x 29 px</td>
		</tr>
		<tr>
			<td>Version 4</td>
			<td>33 x 33 px</td>
		</tr>
		<tr>
			<td>Version 40</td>
			<td>177 x 177 px</td>
		</tr>
	</table>
	<p>Il y a plusieurs zones de control dans les QR codes.</p>
<?php include 'footer.php'; ?>