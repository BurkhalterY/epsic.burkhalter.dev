<template>
	<div>
		<h1>Plan du site</h1>
		<div class="my-3"><router-link to="/bin/modulo-ti30xpro">Astuce : Comment effectuer l'opération modulo sur la calculatrice ?</router-link></div>
		<h3>Partie 1</h3>
		<ul>
			<li><router-link to="/bin/n_to_10">Conversion base n en base 10</router-link></li>
			<li><router-link to="/bin/10_to_n">Conversion base 10 en base n</router-link></li>
			<li><router-link to="/bin/voc">Vocabulaire</router-link></li>
			<li><router-link to="/bin/bin_hex">Conversion binaire - hexa</router-link></li>
			<li><router-link to="/bin/gray">Code Gray</router-link></li>
			<li><router-link to="/bin/bcd">BCD</router-link></li>
			<li><router-link to="/bin/x_parmi_n">Code x parmi n</router-link></li>
			<li><router-link to="/bin/ascii">Code ASCII</router-link></li>
			<li><router-link to="/bin/unicode_utf8">L'Unicode et UTF-8</router-link></li>
			<li><router-link to="/bin/ean">Les codes-barres EAN</router-link></li>
			<li><router-link to="/bin/qr_code">Les QR codes</router-link></li>
			<br>
			<li><router-link to="/bin/convertisseur">Convertisseur</router-link></li>
		</ul>
		<h3>Partie 2</h3>
		<ul>
			<li><router-link to="/bin/addition">Additions en binaire</router-link></li>
			<li><router-link to="/bin/negativ">Soustractions et nombres négatifs</router-link></li>
			<li><router-link to="/bin/float">Nombres à virgules flottantes</router-link></li>
			<li><router-link to="/bin/fonctions_logiques">Les fonctions logiques</router-link></li>
		</ul>
		<h3><router-link to="/bin/partie3">Partie 3</router-link></h3>
		<!--<h3>Partie 4</h3>
		<ul>
			<li></li>
		</ul>-->
	</div>
</template>

<script>
	export default {
		name: 'Index',
	}
</script>
