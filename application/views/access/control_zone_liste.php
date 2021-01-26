<?php defined('BASEPATH') OR exit('No direct script access allowed'); ?>
<link rel="stylesheet" href="<?=base_url('assets/css/prism.css')?>" />
<script src="<?=base_url('assets/js/prism-vba.js')?>"></script>
<h1>Importer, ajouter, modifier et supprimer des éléments d'une zone de liste (niveau avancé)</h1>
<p>Ici, nous allons permettre d'interagir avec la zone de liste crée dans le chapitre précèdent. J'insiste sur le terme 'avancé' car nous allons utiliser ~ beaucoup de VBA. J'essaierais d'expliquer au mieux.</p>
<p>Commencez par créer 4 boutons :</p>
<ul>
	<li>Un pour l'importation d'une adresse email (par importation, j'entends ajouter un email qui existe déjà)</li>
	<li>Un pour la création d'une adresse email</li>
	<li>Un pour la suppression d'une adresse email</li>
	<li>Un pour l'édition d'une adresse email</li>
</ul>
<img src="<?=base_url('medias/access/icud.png')?>" />
<p>Choisissez des icônes qui vous parlent, ne leur donné pas de fonctions pour l'instant.</p>

<h3>Ajouter une adresse</h3>
<p>Commençons par le bouton permettant d'ajouter une adresse email.</p>
<p>Il faut utiliser l'assistant de formulaire et inclure aussi l'ID :</p>
<img src="<?=base_url('medias/access/icud_c1.png')?>" />
<p>Nommez le formulaire F_Ajouter_Email, car nous devrons en faire un par fonction.</p>
<p>Ajoutez-y un bouton avec la fonction Sauvegarder un enregistrement</p>
<img src="<?=base_url('medias/access/icud_c2.png')?>" />
<p>Maintenant, passons aux choses sérieuses. Allez dans les propriétés du formulaire, sous Événement, cliquer sur Après insertion</p>
<img src="<?=base_url('medias/access/icud_c3.png')?>" />
<p>L'éditeur VBA s'ouvre, collez-y le code suivant :</p>
<pre><code class="language-visual-basic">Private Sub Form_AfterInsert()
	DoCmd.SetWarnings False
	DoCmd.RunSQL "INSERT INTO T_Avoir_Email (FK_Personne, FK_Email) VALUES (" & Me.OpenArgs & ", " & Me.ID_Email & ")"
	DoCmd.SetWarnings True
	DoCmd.Close
	Forms!F_Personne.Emails.Requery
End Sub</code></pre>
<p>Explication du code :</p>
<p>La deuxième ligne (DoCmd.RunSQL) permet d'exécuter une requête SQL, pour faire simple, c'est une manière de modifier la base de données depuis le code. Pensez a remplacer tous les noms de champs par les vôtres, sinon Access ne les trouveras pas.</p>
<p>Seulement, cette fonction affiche un avertissement, nous mettons donc la commande DoCmd.SetWarnings False avant afin de les désactiver et DoCmd.SetWarnings True après pour les réactiver.</p>
<p>DoCmd.Close ferme simplement le formulaire donc on devrait être retourné sur le formulaire F_Personne.</p>
<p>Pour finir, on fait un Requery sur le champ Emails de F_Personne pour l'actualiser et donc afficher la nouvelle adresse ajoutée.</p>
<p>Il faut ensuite retourner dans F_Personne et ajouter un évènement Sur clic au bouton + :</p>
<pre><code class="language-visual-basic">Private Sub Btn_ajouter_email_Click()
	DoCmd.OpenForm "F_Ajouter_Email", acNormal, , , acFormAdd, acDialog, Me.ID_Personne
End Sub</code></pre>
<p>Cela ouvrira le formulaire F_Ajouter_Email</p>

<h3>Importer une adresse</h3>
<p>Importer n'est peut-être pas le meilleur terme. Je veux dire par là, associer une adresse déjà existante a la personne.</p>
<p>Commencez par créer un nouveau formulaire avec l'assistant. Nommez le F_Importer_Email (par exemple) puis supprimez-y tous les champs.</p>
<p>Insérez à la place une Zone de liste déroulante</p>
<img src="<?=base_url('medias/access/icud_i1.png')?>" />
<p>Selectionnez T_Email</p>
<img src="<?=base_url('medias/access/icud_i2.png')?>" />
<p>Prenez au moins l'ID et l'adresse</p>
<img src="<?=base_url('medias/access/icud_i3.png')?>" />
<p>Il n'y a plus grand chose à configurer par la suite, vous pouvez faire suivant, suivant, suivant...</p>
<img src="<?=base_url('medias/access/icud_i4.png')?>" />
<img src="<?=base_url('medias/access/icud_i5.png')?>" />
<img src="<?=base_url('medias/access/icud_i6.png')?>" />
<img src="<?=base_url('medias/access/icud_i7.png')?>" />
<p>Une fois la liste déroulante créée, ajoutez un bouton, dans Événement, Sur clic, cela ouvre l'éditeur VBA.</p>
<p>Vous pouvez y coller le même code que précédemment, à l'exception de la requête SQL qui diffère un peu.</p>
<pre><code class="language-visual-basic">Private Sub Btn_selectionner_Click()
	DoCmd.SetWarnings False
	DoCmd.RunSQL "INSERT INTO T_Avoir_Email (FK_Personne, FK_Email) VALUES(" & Me.OpenArgs & ", " & Me.Emails.Column(0, Me.Emails.ListIndex) & ")"
	DoCmd.SetWarnings True
	DoCmd.Close
	Forms!F_Personne.Emails.Requery
End Sub</code></pre>
<p>Et, ne pas oublier de donner un évènement au bouton v dans le formulaire F_Personne</p>
<pre><code class="language-visual-basic">Private Sub Btn_importer_email_Click()
	DoCmd.OpenForm "F_Importer_Email", acNormal, , , acFormAdd, acDialog, Me.ID_Personne
End Sub</code></pre>

<h3>Supprimer une adresse</h3>
<p>Le bouton Supprimer n'aura pas pour effet de supprimer l'adresse, mais juste la relation entre la personne et l'adresse.</p>
<p>Ici, pas besoin de créer de formulaire. Allez dans les propriétés du bouton - et ajouté un l'événement Sur clic.</p>
<pre><code class="language-visual-basic">Private Sub Btn_supprimer_email_Click()
	If Me.Emails.ListIndex >= 0 Then
		reponse = MsgBox("Voulez-vous vraiment supprimer cet email ?", vbYesNo + vbCritical)
		If reponse = vbYes Then
			DoCmd.SetWarnings False
			DoCmd.RunSQL "DELETE FROM T_Avoir_Email WHERE ID_Avoir_Email = " & Me.Emails.Column(0, Me.Emails.ListIndex)
			DoCmd.SetWarnings True
			Forms!F_Personne.Emails.Requery
		End If
	End If
End Sub</code></pre>
<p>Nous avons ici 2 condition, la première c'est qu'il y ai un élément sélectionné dans la liste, la deuxième c'est que l'utilisateur confirme la suppression.</p>
<p>Ensuite, ça lance du SQL comme avant et réactualise le champ.</p>
<p>Il vous faudra surement renommer quelques trucs pour que cela marche.</p>

<h3>Modifier une adresse</h3>
<p>La modification est très proche de la création. Vous pouvez déjà copier-coller le formulaire F_Ajouter_Email et le renommer F_Modifier_Email.</p>
<p>Dans les événements, supprimer le Après insertion et cliquez sur Après MAJ.</p>
<p>Le code est très simple, je pense qu'il n'y a même pas besoin de l'expliquer :</p>
<pre><code class="language-visual-basic">Private Sub Form_AfterUpdate()
	DoCmd.Close
	Forms!F_Personne.Emails.Requery
End Sub</code></pre>
<p>Il faut aussi mettre un peu de code sur le bouton d'édition :</p>
<pre><code class="language-visual-basic">Private Sub Btn_modifier_email_Click()
	If Me.Emails.ListIndex >= 0 Then
		DoCmd.OpenForm "F_Modifier_Email", acNormal, , "ID_Email = " & Me.Emails.Column(1, Me.Emails.ListIndex), acFormEdit, acDialog
	End If
End Sub</code></pre>
<p>Je fais juste un petit test pour voir si un élément est sélectionné.</p>

<p>Voilà, tous les boutons devraient maintenant marcher. Le fichier est disponible <a href="<?=base_url('medias/access/Database2.accdb')?>">ici</a> si vous voulez vérifier ou comparer quelque chose.</p>