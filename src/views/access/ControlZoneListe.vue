<template>
	<div>
		<h1>Importer, ajouter, modifier et supprimer des éléments d'une zone de liste (niveau avancé)</h1>
		<p>Ici, nous allons permettre d'interagir avec la zone de liste crée dans le chapitre précèdent. J'insiste sur le terme 'avancé' car nous allons utiliser beaucoup de VBA. J'essaierais d'expliquer au mieux.</p>
		<p>Commencez par créer 4 boutons :</p>
		<ul>
			<li>Un pour l'importation d'une adresse email (par importation, j'entends ajouter un email qui existe déjà)</li>
			<li>Un pour la création d'une adresse email</li>
			<li>Un pour la suppression d'une adresse email</li>
			<li>Un pour l'édition d'une adresse email</li>
		</ul>
		<img src="/medias/access/icud.png" />
		<p>Choisissez des icônes qui vous parlent, ne leur donné pas de fonctions pour l'instant.</p>

		<h3>Ajouter une adresse</h3>
		<p>Commençons par le bouton permettant d'ajouter une adresse email.</p>
		<p>Il faut utiliser l'assistant de formulaire et inclure aussi l'ID :</p>
		<img src="/medias/access/icud_c1.png" />
		<p>Nommez le formulaire F_Ajouter_Email, car nous devrons en faire un par fonction.</p>
		<p>Ajoutez-y un bouton avec la fonction Sauvegarder un enregistrement</p>
		<img src="/medias/access/icud_c2.png" />
		<p>Maintenant, passons aux choses sérieuses. Allez dans les propriétés du formulaire, sous Événement, cliquer sur Après insertion</p>
		<img src="/medias/access/icud_c3.png" />
		<p>L'éditeur VBA s'ouvre, collez-y le code suivant :</p>
		<pre class="language-visual-basic"><ShowCode file="access/Form_AfterInsert.vba" lang="Prism.languages.vba"></ShowCode></pre>
		
	</div>
</template>

<script>
	export default {
		name: 'ControlZoneListe',
	}
</script>
