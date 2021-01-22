<?php defined('BASEPATH') OR exit('No direct script access allowed'); ?>
<h1>Modèle OSI</h1>
<table style="width: 100%;">
	<tr>
		<th></th>
		<th>N°</th>
		<th>Couche modèle OSI</th>
		<th>Equivalence TCP/IP</th>
	</tr>
	<tr>
		<td rowspan="4">Couches<br>hautes</td>
		<td>7</td>
		<td style="background-color: #d8ec9b; border-top-right-radius: 10px;">Application</td>
		<td rowspan="3">Application</td>
	</tr>
	<tr>
		<td>6</td>
		<td style="background-color: #d8ec9b;">Présentation</td>
	</tr>
	<tr>
		<td>5</td>
		<td style="background-color: #d8ec9b;">Session</td>
	</tr>
	<tr>
		<td>4</td>
		<td style="background-color: #e7ed9c;">Transport</td>
		<td  style="border-top: 1px solid gray;">Transport</td>
	</tr>
	<tr>
		<td rowspan="3" style="border-top: 1px solid black;">Couches<br>matérielles</td>
		<td>3</td>
		<td style="background-color: #eddc9c;">Réseau</td>
		<td  style="border-top: 1px solid gray;">Internet</td>
	</tr>
	<tr>
		<td>2</td>
		<td style="background-color: #e9c189;">Liaison</td>
		<td rowspan="2"  style="border-top: 1px solid gray;">Accès réseau</td>
	</tr>
	<tr>
		<td>1</td>
		<td style="background-color: #e9988a;">Physique</td>
	</tr>
</table>
<br>

<h3>Application</h3>
<p>Le logiciel qui gère le rendu et les entrées</p>

<h3>Présentation</h3>
<p>Affichage visuel (GUI)</p>

<h3>Session</h3>
<p>Certaines adresses demandent une authentification</p>

<h3>Transport</h3>
<p>Gestion des ports entre autres</p>

<h3>Réseau</h3>
<p>Gère la communication avec les adresses IP</p>

<h3>Liaison</h3>
<p>Liaison entre les couches 1 et 3</p>
<p>Adresse MAC</p>

<h3>Physique</h3>
<p>Transmission par les câbles</p>