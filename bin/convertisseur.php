<?php
	$title = 'Convertisseur';
	include 'header.php';
?>
	<h1>Convertisseur</h1>
	<script type="text/javascript" src="conversion.js"></script>
	<input type="text" name="number" id="number" />
	<span>en base</span>
	<input type="text" name="baseNumber" id="baseNumber" value="10" />
	<p>=</p>
	<input type="text" name="resultat" id="resultat" readonly />
	<span>en base</span>
	<input type="text" name="baseResultat" id="baseResultat" value="2" />
	<br>
	<button type="button" onclick="convertir();">Convertir</button>
<?php include 'footer.php'; ?>