<template>
	<div>
		<h1>BCD</h1>
		<p>Le décimal codé binaire (DCB) (binary coded decimal ou BCD en anglais), est un système de numération utilisé en électronique et en informatique pour coder des nombres en se rapprochant de la représentation humaine usuelle, en base 10. Dans ce format, les nombres sont représentés par les chiffres décimaux les composant, et chacun de ces chiffres est codé sur quatre bits : </p>
		<table class="table-responsive">
			<tr><th>Décimal&nbsp;</th><th>BCD</th></tr>
			<tr><td>0</td><td>0000</td></tr>
			<tr><td>1</td><td>0001</td></tr>
			<tr><td>2</td><td>0010</td></tr>
			<tr><td>3</td><td>0011</td></tr>
			<tr><td>4</td><td>0100</td></tr>
			<tr><td>5</td><td>0101</td></tr>
			<tr><td>6</td><td>0110</td></tr>
			<tr><td>7</td><td>0111</td></tr>
			<tr><td>8</td><td>1000</td></tr>
			<tr><td>9</td><td>1001</td></tr>
			<tr><td>/</td><td>1010</td></tr>
			<tr><td>/</td><td>1011</td></tr>
			<tr><td>/</td><td>1100</td></tr>
			<tr><td>/</td><td>1101</td></tr>
			<tr><td>/</td><td>1110</td></tr>
			<tr><td>/</td><td>1111</td></tr>
		</table>
		<br>
		<ul>
			<li>Chaque chiffre de la base 10 est enregistré dans un nibble (4 bits).</li>
			<li>6 ensembles de bits (1010 à 1111) ne sont donc pas utilisées.</li>
			<li>On a donc besoin d'un peu plus de mémoire pour stocker des grands nombres.</li>
		</ul>

		<p>Exemple : 534<sub>10</sub></p>
		<table class="table-responsive text-center">
			<tr><td style="border-right: 1px solid black;">5</td><td style="border-right: 1px solid black;">3</td><td>4</td></tr>
			<tr><td style="border-right: 1px solid black;">0101</td><td style="border-right: 1px solid black;">0011</td><td>0100</td></tr>
		</table>
		<p>= 0101 0011 0100<sub>BCD</sub></p>
	</div>
</template>

<script>
	export default {
		name: 'Bcd',
	}
</script>
