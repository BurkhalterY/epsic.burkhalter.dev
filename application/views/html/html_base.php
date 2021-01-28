<?php defined('BASEPATH') OR exit('No direct script access allowed'); ?>
<h1>Les bases du HTML</h1>
<p>Le HTML sert à structurer le contenu. Pour cela, on utilise des balises.</p>

<h2>Les balises</h2>
<p>Pour commencer, voici un exemple de balise que nous allons décortiquer juste après :</p>
<pre><code class="language-html"><?=htmlspecialchars('<p>Hello world</p>')?></code></pre>
<p>Ceci est une balise de paragraphe <code class="language-html">&lt;p&gt;</code> qui a comme contenu "Hello world". Elle a pour fonction d'afficher son contenu dans la page. Ce qui donne :</p>
<p>Hello world</p>

<h2>La structure de la page</h2>
<p>Cependant, ce que je viens de faire n'est pas juste. Parce que je n'ai pas écris la structure de la page HTML. La structure de base d'une page HTML est la suivante :</p>
<pre><code class="language-html"><?=htmlspecialchars(<<<HTML
<!DOCTYPE html>
<html>
	<head>
		<title>Ma première page en HTML</title>
		<meta charset="utf-8">
	</head>
	<body>
		<p>Hello world</p>
	</body>
</html>
HTML)?></code></pre>

<p>Cette structure minimale est obligatoire. Analisons-la ensembles.</p>
<p>Elle contient les balises suivantes :</p>
<ul>
	<li><code class="language-html">&lt;!DOCTYPE html&gt;</code> : Indique au navigateur la version d'HTML à utiliser. Toujours utiliser cette valeur afin d'utiliser la dernière version : la version 5. Cette balise n'a pas besoin d'être refermée.</li>
	<li><code class="language-html">&lt;html&gt;</code> : Indique le début du code HTML. Rien, à part le DOCTYPE ne doit se trouver à l'extérieur de cette balise.</li>
	<ul>
		<li><code class="language-html">&lt;head&gt;</code> : C'est ici qu'on va définir les métadonnées de notre page et chager les fichiers complémentairs tels que les fichiers .css et .js.</li>
		<ul>
			<li><code class="language-html">&lt;title&gt;</code> : Le titre de la page que l'on peut lire dans l'onglet.</li>
			<li><code class="language-html">&lt;meta charset="utf-8"&gt;</code> : Permet de spécifier l'encodage de la page. S'il n'est pas précisé, vous risquez d'avoir des problèmes avec les accents et autres caractères Unicode.</li>
		</ul>
		<li><code class="language-html">&lt;body&gt;</code> : C'est la balise qui va contenir tout ce qui sera visible dans la page. Les textes, les images, etc...</li>
		<ul>
			<li><code class="language-html">&lt;p&gt;</code> : Un balise paragraphe, utilisée ici simplement dans le but de ne pas laisser vide la balise body.</li>
		</ul>
	</ul>
</ul>

<h2>Créer un fichier .html</h2>
<p>Pour pouvoir coder des pages HTML, il vous faudra un éditeur de texte et un navigateur. Les fichiers doivent avoir l'extention .html et peuvent être ouvert directement avec votre navigateur par défaut en double-cliquant dessus. Pour en créer un, copiez-collez le code ci-dessus dans votre éditeur favori et enregistrez-le quelque part. Pour l'ouvrir, double-clic et il s'affichera dans votre navigateur par défaut.</p>