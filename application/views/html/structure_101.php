<?php defined('BASEPATH') OR exit('No direct script access allowed'); ?>
<h1>Structure attendue pour le module 101</h1>
<p>Le module 101 exige que vous utilisiez une structure bien précise dans votre body.</p>
<pre><code class="language-html"><?=htmlspecialchars(<<<HTML
<!DOCTYPE html>
<html>
	<head>
		<title>Titre Ex</title>
		<meta charset="utf-8" />
	</head>
	<body>
		<div id="header">
			
		</div>
		<div id="nav">
			
		</div>
		<div id="content">
			
		</div>
		<div id="footer">
			
		</div>
	</body>
</html>
HTML)?></code></pre>
<p>Cette structure permet de bien séparer les 4 parties du body que sont :</p>
<ul>
	<li><strong>L'entête (header)</strong> : peut contenir par exemple logo du site</li>
	<li><strong>Le menu (navigation)</strong> : un menu (liens vers les pricipales pages du site)</li>
	<li><strong>Le contenu (content)</strong> : là où on va mettre tout le contenu spécifique à la page</li>
	<li><strong>Le pied de page (footer)</strong> : liens vers d'autres sites, copyright, etc...</li>
</ul>