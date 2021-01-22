<?php defined('BASEPATH') OR exit('No direct script access allowed'); ?>
<h1>Les supports de transmission</h1>
<h3>Câble paire torsadée</h3>
<table class="table">
	<tr>
		<td>UTP</td>
		<td>Unshielded twisted pair</td>
		<td>Paire torsadée non blindée</td>
		<td>La paire torsadée non blindée n'est entourée d'aucun blindage protecteur.</td>
	</tr>
	<tr>
		<td>FTP</td>
		<td>Foiled twisted pair</td>
		<td>Paire torsadée écrantée</td>
		<td>L'ensemble des paires torsadées a un blindage global assuré par une feuille d'aluminium. L'écran est disposé entre la gaine extérieure et les 4 paires torsadées. Les paires torsadées ne sont pas individuellement blindées.</td>
	</tr>
	<tr>
		<td>STP</td>
		<td>Shielded twisted pair</td>
		<td>Paire torsadée blindée</td>
		<td>Chaque paire torsadée blindée est entourée d'un feuillard en aluminium, de façon similaire à un câble coaxial.</td>
	</tr>
	<tr>
		<td>FFTP</td>
		<td>Foiled foiled twisted pair</td>
		<td>Paire torsadée doublement écrantée</td>
		<td>Chaque paire torsadée est entourée d'une feuille de blindage en aluminium. L'ensemble des paires torsadées a une feuille de blindage collectif en aluminium.</td>
	</tr>
	<tr>
		<td>SFTP</td>
		<td>Shielded foiled twisted pair</td>
		<td>Paire torsadée écrantée et blindée</td>
		<td>Câble doté d'un double écran (feuille métallisée et tresse) commun à l'ensemble des paires. Les paires torsadées ne sont pas individuellement blindées (contrairement à ce que le terme Shielded foiled twisted pair pourrait faire croire).</td>
	</tr>
	<tr>
		<td>SSTP</td>
		<td>Super Shielded Twisted Pair</td>
		<td>Paire torsadée super blindée</td>
		<td>Chacune des paires est blindée par un écran en aluminium, et en plus la gaine extérieure est blindée par une tresse en cuivre étamé.</td>
	</tr>
</table>

<h3>Connecteur RJ-45</h3>
<p>Ne pas confondre le connecteur (RJ-45) avec le cable (paire torsadée) → les cables RJ-45 n'existent pas !</p>
<br><br>
<p><strong>Câblage droit :</strong></p>
<img src="<?=base_url('medias/network/RJ-45_droit.png')?>" alt="Câblage droit" style="max-width: 100%; border: 1px solid black;" />
<p><strong>Câblage croisé :</strong></p>
<img src="<?=base_url('medias/network/RJ-45_croise.png')?>" alt="Câblage croisé" style="max-width: 100%; border: 1px solid black;" />
<br><br>

<h3>Fibre optique</h3>
<img src="<?=base_url('medias/network/fibre_optique_schema.png')?>" alt="Schéma fibre optique" style="max-width: 100%;" />
<hr>
<img src="<?=base_url('medias/network/fibre_optique_comp.png')?>" alt="Comparaison fibre optique" style="max-width: 100%;" />