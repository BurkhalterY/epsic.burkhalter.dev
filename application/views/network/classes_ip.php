<?php defined('BASEPATH') OR exit('No direct script access allowed'); ?>
<h1>Les classes d'adresses IP</h1>
<table class="table">
	<tr>
		<th>Classe</th>
		<th>Premier octet</th>
		<th>Première IP</th>
		<th>Dernière IP</th>
		<th>Masque</th>
	</tr>
	<tr>
		<td>Classe A</td>
		<td>0xxxxxxx</td>
		<td>0.0.0.0</td>
		<td>127.255.255.255</td>
		<td>255.0.0.0</td>
	</tr>
	<tr>
		<td>Classe B</td>
		<td>10xxxxxx</td>
		<td>128.0.0.0</td>
		<td>191.255.255.255</td>
		<td>255.255.0.0</td>
	</tr>
	<tr>
		<td>Classe C</td>
		<td>110xxxxx</td>
		<td>192.0.0.0</td>
		<td>223.255.255.255</td>
		<td>255.255.255.0</td>
	</tr>
	<tr>
		<td>Classe D (multicast)</td>
		<td>1110xxxx</td>
		<td>224.0.0.0</td>
		<td>239.255.255.255</td>
	</tr>
	<tr>
		<td>Classe E (réservée)</td>
		<td>1111xxxx</td>
		<td>240.0.0.0</td>
		<td>255.255.255.255</td>
	</tr>
</table>
<p>Adresses réseaux réservées (non assignables) :</p>
<ul>
	<li>0.0.0.0 (BootP)</li>
	<li>127.0.0.0 (Loopback)</li>
	<li>169.254.0.0 (APIA)</li>
</ul>
<p>Adresses privées (non routable sur Internet)</p>
<ul>
	<li>Classe A: 10.0.0.0 - 10.255.255.255</li>
	<li>Classe B: 172.16.0.0 - 172.31.255.255</li>
	<li>Classe C: 192.168.0.0 - 192.168.255.255</li>
</ul>

<h3>Formules :</h3>
<p>NET = 2<sup>n</sup><br>HOST = 2<sup>n</sup> - 2</p>
<p>Où n = le nombre de bits.</p>