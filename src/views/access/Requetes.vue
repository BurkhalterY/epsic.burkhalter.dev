<template>
	<div>
		<h1>Afficher une liste avec une requête</h1>
		<!--Une méthode plus simple que le long code de M. Maccaud-->

		<h3>Créer la requête</h3>
		<p>Commençons par créer une requête, cliquez sur Création de requête dans l'onglet Créer :</p>
		<p style="text-align: center;"><img src="/medias/access/requete_1.png" /></p>
		<p>Sélectionnez les 3 tables qui doivent déjà être liées entre elles :</p>
		<img src="/medias/access/requete_2.png" />
		<p>Une requête permet de récupérer des données de plusieurs tables selon des critères.</p>
		<p>Dans notre cas, nous allons rechercher les emails appartenant à une personne.<br>Nous avons donc besoin de récupérer l'adresse (de la table T_Email) en fonction de l'ID de la personne.<br>Comme nous choisissons ID_Personne, pas besoin de cocher la case Afficher.</p>
		<p>Il faut aussi prendre les ID de T_Avoir_email et T_Email.<br>Le critère pour ID_Personne est [Forms]![F_Personne]![ID_Personne]</p>
		<img src="/medias/access/requete_3.png" />
		<p>Une fois la requête terminée, sauvegardez là : R_Avoir_email</p>

		<h3>Créer la zone de liste</h3>
		<p>Passez dans le formulaire F_Personne en Mode Création et insérez-y une zone de liste :</p>
		<img src="/medias/access/requete_4.png" />
		<p>Vous pouvez directement annuler l'assistant :</p>
		<img src="/medias/access/requete_5.png" />
		<p>Commencez par renommez la liste :</p>
		<img src="/medias/access/requete_6.png" />
		<p>Puis, dans l'onglet Données, dans Contenu, mettez R_Avoir_email :</p>
		<img src="/medias/access/requete_7.png" />
		<p>Dans l'onglet Format, mettez le champ Nbre colonnes sur 3, car nous affichons 3 champs dans notre requête.<br>Et dans Largeurs colonnes, mettez "0cm;0cm", car ici nous avons 2 colonnes à cacher (les IDs) :</p>
		<img src="/medias/access/requete_8.png" />
		<p>Allez dans les propriétés du formulaire, dans l'onglet Événement, sur activation et sélectionnez Générateur de code :</p>
		<img src="/medias/access/requete_9.png" />
		<p>Access ouvre alors l'éditeur VBA :</p>
		<img src="/medias/access/requete_10.png" />
		<p>Collez-y la ligne suivante : <code>Me.Emails.Requery</code></p>
		<img src="/medias/access/requete_11.png" />
		<p>Voilà, maintenant vous pouvez fermer l'éditeur VBA et quitter le mode création. Les emails s'afficheront en fonction de la personne.</p>
		<img src="/medias/access/requete_12.png" />
	</div>
</template>

<script>
	export default {
		name: 'Requetes',
	}
</script>
