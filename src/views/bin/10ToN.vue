<template>
	<div>
		<h1>Conversion base 10 en base n</h1>
		<p>Pour passer du décimale à une autre base, on effectue un série de divisions.</p>

		<h3>Du décimal au binaire</h3>
		<p>Prenons par exemple le nombre 106<sub>10</sub></p>
		<table>
			<tr><td>106 ÷ 2 = 53&nbsp;</td><td>reste 0&nbsp;</td><td rowspan="7"><img src="/medias/bin/up.png" alr="fleche" /></td></tr>
			<tr><td>53 ÷ 2 = 26</td><td>reste 1</td></tr>
			<tr><td>26 ÷ 2 = 13</td><td>reste 0</td></tr>
			<tr><td>13 ÷ 2 = 6</td><td>reste 1</td></tr>
			<tr><td>6 ÷ 2 = 3</td><td>reste 0</td></tr>
			<tr><td>3 ÷ 2 = 1</td><td>reste 1</td></tr>
			<tr><td>1 ÷ 2 = 0</td><td>reste 1</td></tr>
		</table>
		<br>
		<p>On fait une division entière par 2 et on note le reste. On s'arrête quand le nombre à diviser est 0. Ensuite on lit les reste en partant d'en bas. Ce qui donne ici 1101010.</p>

		<h3>De décimal à l'hexa</h3>
		<p>Ici c'est un peu plus compliqué car il faut diviser par 16. Je recommande une calculatrice.</p>
		<p>Prenons par exemple le nombre 2675<sub>16</sub></p>
		<table>
			<tr><td>2675 ÷ 16 = 167&nbsp;</td><td>reste 3</td><td rowspan="3"><img src="/medias/bin/up1.png" alr="fleche" /></td></tr>
			<tr><td>167 ÷ 16 = 10</td><td>reste 7</td></tr>
			<tr><td>10 ÷ 16 = 0</td><td>reste 10 → A</td></tr>
		</table>
		<br>
		<p>Donc 1675<sub>10</sub> = A73<sub>16</sub></p>
		<p>Remarque : penser à remplacer les restes supérieurs à 9 par leur lettre correspondante.</p>
	</div>
</template>

<script>
	export default {
		name: '10ToN',
	}
</script>
