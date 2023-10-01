import{_ as e,o as s,c as r,B as n}from"./index-7f407549.js";const o="/access/medias/requete_1.png",t="/access/medias/requete_2.png",i="/access/medias/requete_3.png",c="/access/medias/requete_4.png",a="/access/medias/requete_5.png",p="/access/medias/requete_6.png",l="/access/medias/requete_7.png",m="/access/medias/requete_8.png",u="/access/medias/requete_9.png",_="/access/medias/requete_10.png",d="/access/medias/requete_11.png",g="/access/medias/requete_12.png",q={},h=n('<h2>Créer la requête</h2><p> Commençons par créer une requête, cliquez sur <i>Création de requête</i> dans l&#39;onglet Créer. </p><img src="'+o+'" class="mx-auto"><p> Sélectionnez les trois tables qui doivent déjà être liées entre elles : </p><img src="'+t+'"><p> Une requête permet de récupérer des données de plusieurs tables selon des critères choisis. </p><p> Dans notre cas, nous allons rechercher les e-mails appartenant à une personne.<br>Nous avons donc besoin de récupérer l&#39;adresse (de la table T_Email) en fonction de l&#39;ID de la personne.<br>Comme nous choisissons ID_Personne, pas besoin de cocher la case <i>Afficher</i>. </p><p> Il faut aussi prendre les ID de T_Avoir_email et T_Email.<br>Le critère pour ID_Personne est [Forms]![F_Personne]![ID_Personne] </p><img src="'+i+'"><p>Une fois la requête terminée, sauvegardez-là : R_Avoir_email</p><h2>Créer la zone de liste</h2><p> Passez dans le formulaire F_Personne en <i>Mode Création</i> et insérez-y une zone de liste : </p><img src="'+c+'"><p>Vous pouvez directement annuler l&#39;assistant :</p><img src="'+a+'"><p>Commencez par renommer la liste :</p><img src="'+p+'"><p> Puis, dans l&#39;onglet <i>Données</i>, dans le champ <i>Contenu</i>, mettez R_Avoir_email : </p><img src="'+l+'"><p> Dans l&#39;onglet <i>Format</i>, mettez le champ <i>Nbre colonnes</i> sur 3 car nous affichons trois champs dans notre requête.<br>Dans <i>Largeurs colonnes</i>, mettez &quot;0cm;0cm&quot; car, ici, nous avons deux colonnes à cacher (les IDs) : </p><img src="'+m+'"><p> Allez dans les propriétés du formulaire, dans l&#39;onglet <i>Événement</i>, cliquez sur le bouton avec les trois petits points du champ <i>Sur activation</i> et sélectionnez <i>Générateur de code</i> : </p><img src="'+u+'"><p>Access ouvre alors l&#39;éditeur VBA :</p><img src="'+_+'"><p>Collez-y la ligne suivante : <code>Me.Emails.Requery</code></p><img src="'+d+'"><p> Voilà. Vous pouvez maintenant fermer l&#39;éditeur VBA et quitter le mode création. Les e-mails s&#39;afficheront en fonction de la personne. </p><img src="'+g+'">',29),f=[h];function z(v,b){return s(),r("div",null,f)}const D=e(q,[["render",z]]);export{D as default};
