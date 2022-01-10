<template>
	<div>
		<h1>Installer un serveur MySQL</h1>
		<p>Dans ce module, nous n'allons plus utiliser Access. Nous allons donc devoir installer un serveur MySQL.</p>
		<p>C'est dans ce serveur que les données seront enregistrées. Il existe de nombreux logiciels qui permettent d'héberger un serveur MySQl : WAMP, XAMPP, MAMP, LAMP, EasyPHP, UwAmp et surement d'autres encore. Je vous conseille d'installer UwAmp car il est portable, c'est-à-dire que l'on peut le mettre sur une clé USB et le lancer sur n'importe quelle machine.</p>
		<p>Le lien de téléchargement : <a href="https://www.uwamp.com/fr/?page=download" target="_blank">https://www.uwamp.com/fr/?page=download</a></p>
		<img src="/medias/bdd/download_uwamp.png" alt="téléchargement d'UwAmp" class="img-fluid"/>
		<p>Une fois téléchargé, vous pouvez l'extraire dans le dossier de votre choix.</p>
		<p>Démarrez-le en double-cliquant dessus.</p>
		<p>Vous devriez avoir une fenêtre comme ça :</p>
		<img src="/medias/bdd/uwamp.png" alt="Fenêtre UwAmp" class="img-fluid"/>
		<p>Vous pouvez cliquer sur le bouton <img src="/medias/bdd/btn_phpmyadmin.png" alt="PHPMyAdmin"/> pour ouvrir phpMyAdmin.</p>
	</div>
</template>

<script>
	export default {
		name: 'InstallMysql',
	}
</script>
