<?php
	$title = 'Calculateur de sous-réseaux';
	include 'header.php';
?>
	<h1>Calculateur de sous-réseaux</h1>
	<script type="text/javascript" src="calculateur_sr.js"></script>
	<label for="ip">Nombre max de machines (sans le routeur) :</label>
	<input type="number" name="ip" id="ip"><br>
	<label for="sr">Nombre max de sous-réseaux :</label>
	<input type="number" name="sr" id="sr"><br>
	<button type="button" onclick="calculer();">Calculer</button><br><br>
	<h3>1) Déterminer les besoins (inclure les réserves)</h3>
	<p id="step1_ip"></p>
	<p id="step1_sr"></p>
	<h3>2) Calculer et réserver le nombre de bits nécessaires (Host_ID et Subnet_ID)</h3>
	<p id="step2_ip"></p>
	<p id="step2_sr"></p>
	<h3>3) Définir la classe et le Net_ID</h3>
	<p id="step3_classe"></p>
	<p id="step3_net_id"></p>
	<p id="step35"></p>
	<h3>4) Déterminer le masque (réseau et sous-réseau)</h3>
	<p id="step4"></p>
	<h3>5) Calculer les adresses de chaque sous-réseau</h3>
	<p id="step5"></p>
	<h3>6) Réaliser l’annuaire</h3>
	<table class="table" id="step6"></table>
<?php include 'footer.php'; ?>