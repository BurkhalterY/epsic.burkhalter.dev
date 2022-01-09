<template>
	<div>
		<h1>L'Unicode et UTF-8</h1>
		<h3>L'Unicode</h3>
		<img src="/medias/bin/Unicode_logo.svg" alt="logo Unicode" width="100" style="float: right;" />
		<p>Unicode est un jeu de caractères comme ASCII, sauf qu'il en contient beaucoup plus.</p>
		<p>Il a été développé pour contenir tous les symboles de toutes les langues.</p>
		<ul>
			<li>Les points code Unicode se notent U+XXXX où XXXX représente le code en hexadécimal.</li>
			<li>Exemple : « é » se note U+00E9.</li>
		</ul>

		<h3>UTF-8</h3>
		<p>UTF-8 est un encodage utilisé pour minimiser le nombre d'octet pour écrire un caractère Unicode.</p>
		<ul>
			<li>Si le premier bit est à 0, le point code est sur 1 octet (code ASCII)</li>
			<li>S'il est à 1, cela signifie qu'il est sur plus d'un octet.</li>
			<li>Le nombre de 1 sur le premier octet donne le nombre d'octets utilisés. Il est suivit d'un 0 qui marque le début du point code.</li>
			<li>Tous les octets suivant commencent par 10</li>
		</ul>
		<table class="table">
			<tr>
				<th>Caractères codés</th>
				<th>Représentation binaire UTF-8</th>
				<th>Nombre de bits utilisables</th>
			</tr>
			<tr>
				<td>0 à 127</td>
				<td>0xxx xxxx</td>
				<td>7</td>
			</tr>
			<tr>
				<td>128 à 2047</td>
				<td>110x xxxx 10xx xxxx</td>
				<td>11</td>
			</tr>
			<tr>
				<td>2048 à 65'535</td>
				<td>1110 xxxx 10xx xxxx 10xx xxxx</td>
				<td>16</td>
			</tr>
			<tr>
				<td>65'536 à 2'097'151</td>
				<td>1111 0xxx 10xx xxxx 10xx xxxx 10xx xxxx</td>
				<td>21</td>
			</tr>
		</table>

		<h3>Exemple</h3>
		<p>Le caractère « é » utilise le point code Unicode U+00E9.</p>
		<p>Ici, on a besoin de 8 bits, on utilise donc le 2<sup>ème</sup> modèle dans le tableau.</p>
		<p>On écrit simplement les bits dans le premier emplacement libre en partant de la droite.</p>
		<table style="text-align: center; width: 100%;">
			<tr><th>Point code base 16</th><td></td><td></td><td><span class="bg-blue">E</span></td><td><span class="bg-orange">9</span></td></tr>
			<tr><th>Point code base 2</th><td><i><span class="bg-green">0000</span></i></td><td><i><span class="bg-green">0000</span></i></td><td><span class="bg-blue">1110</span></td><td><span class="bg-orange">1001</span></td></tr>
			<tr><th>Modèle UTF-8</th><td><span class="bg-red">110</span>x</td><td>xxxx</td><td><span class="bg-red">10</span>xx</td><td>xxxx</td></tr>
			<tr><th>Code UTF-8 base 2</th><td><span class="bg-red">110</span><span class="bg-green">0</span></td><td><span class="bg-green">00</span><span class="bg-blue">11</span></td><td><span class="bg-red">10</span><span class="bg-blue">10</span></td><td><span class="bg-orange">1001</span></td></tr>
			<tr><th>Code UTF-8 base 16</th><td>C</td><td>3</td><td>A</td><td>9</td></tr>
		</table>
		<p>Code UTF-8 : C3 A9</p>
	</div>
</template>

<style scoped>
	.bg-green {
		background-color: lightgreen;
	}
	.bg-blue {
		background-color: cyan;
	}
	.bg-orange {
		background-color: orange;
	}
	.bg-red {
		background-color: pink;
	}
</style>

<script>
	export default {
		name: 'UnicodeUtf8',
	}
</script>
