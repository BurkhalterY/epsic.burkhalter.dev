<?php
	$title = 'Créer une liste avec VBA';
	include 'header.php';
?>
	<h1>Créer une liste avec VBA</h1>
	<p>La liste affichera toutes les voitures de la personne courante. Pour les chercher dans la table T_Avoir_Voiture, il faut remettre l'ID dans le formulaire car nous l'avions déselctionner dans l'assistant de formulaire.</p>

	<h3>Remettre l'ID</h3>
	<p>Dans le formulaire F_Personnes, en Mode Création, cliquez sur Ajouter des champs existants. Et double-cliquez sur ID_Personne.</p>
	<img src="medias/hidden_id1.png" alt="Ajouter des champs existants" />
	<hr>
	<p>Le champs se rajoute, mais nous aimerions qu'il soit masqué.<br>Allez dans les propriétés du champs ID_Personne et basculez Visible sur Non. Le champs ne se vera plus lorsque vous quitterais le Mode Création.</p>
	<img src="medias/hidden_id2.png" alt="Cacher l'ID" />
	<hr>

	<h3>Créer la requête</h3>
	<p>Nous allons créer une requête provisoir pour la mettre dans le VBA. Elle se chargera de prendre toutes les voitures appartenant à une personne.</p>
	<p>Allez dans le menu Créer → Création de requête.<br>Sélectionnez les 3 tables.</p>
	<img src="medias/requete1.png" alt="Créer requête" />
	<hr>
	<p>Dans la première colonne, mettez l'ID de la personne. Dans la deuxième, mettez le champs que vous voulez afficher, ici j'affiche la marque. La case Afficher doit être cochée pour la deuxième colonne uniquement. Dans la première colonne, mettez comme Critères [ID_Personne], qui doit être le nom du champs que l'on a ajouté plus haut.</p>
	<img src="medias/requete2.png" alt="Construire la requête" />
	<hr>
	<p>Passez en Mode SQl et Access génère la requête :</p>
	<pre>SELECT T_Voitures.Marque
FROM T_Voitures INNER JOIN (T_Personnes INNER JOIN T_Avoir_Voiture ON T_Personnes.ID_Personne = T_Avoir_Voiture.FK_Personne) ON T_Voitures.ID_Voiture = T_Avoir_Voiture.FK_Voiture
WHERE (((T_Personnes.ID_Personne)=[ID_Personne]));</pre>

	<h3>Ajouter la zone de liste</h3>
	<p>Passez en Mode Création et insérez une zone de liste. Vous pouvez directement annulez l'assistant.</p>
	<img src="medias/zone_liste.png" alt="Cancel" />
	<hr>
	<p>Allez ensuite dans les propriétés du formulaire, dans l'onglet Événement.</p>
	<img src="medias/zone_liste1.png" alt="Propriétés form" />
	<hr>
	<p>Cliquez sur les 3 points et sélectionnez Générateur de code.</p>
	<img src="medias/zone_liste2.png" alt="Select" />
	<hr>
	<p>On arrive sur un début de code</p>
	<img src="medias/vba.png" alt="Form_Current()" />
	<hr>

	<h3>Le code VBA</h3>
	<p>Collez ce code à l'emplacement du curseur :<p>
	<pre>'
' Votre NOM et votre PRENOM
'
' 12.5.2015
'
' Exemple de remplissage d'une zone de liste
' avec un test de la "NULL"(ité) de l'id_personne
' PS: ne pas confondre avec la nullité de la personne
'
' Un RECORDSET c'est un ensemble de données qui peut très facilement se manipuler en mémoire.
' Cela représente toutes les "lignes" (RECORDS) et les "champs" (FIELDS) des tables d'une DB
' Cela augmente la rapidité de traitement des données
'
' Déclaration des variables
'
Dim <span style="background-color: cyan;">EnsembleMails</span> As recordset
Dim <span style="background-color: pink;">ReqMailSql</span> As String
Dim liste_entete As String
Dim liste_element As String

' Test de la valeur de l'id de la personne
' si cette valeur est "null" cela provoque une erreur dans la requête
' on empêche cette erreur avec le test suivant
'
If IsNull(Me.<span style="background-color: yellow;">id_Personnes</span>.Value) Then
' Comme c'est une nouvelle personne, on ne peut pas faire la requête sans provoquer une erreur.
'
Else
    ' La requête SQL est réalisée grâce à l'outil de "création des requêtes"
    ' La condition WHERE contient le critère de comparaison
    ' entre le numéro de la personne dont on veut connaître les mails
    ' et le numéro de la personne affichée dans le formulaire
    '
    ' Comme la ligne est très longue on peut la placer sur plusieurs lignes grâce à une opération
    ' de concaténation de chaîne de caractères & _
    ' il faut respecter les espaces dans la requête SQL

    <span style="background-color: pink;">ReqMailSql</span> = "<span style="background-color: red;">SELECT T_Personnes.id_Personnes, T_Email.Email_Personne </span>" & _
                 "<span style="background-color: red;">FROM T_Personnes INNER JOIN (T_Email INNER JOIN T_Personnes_Email ON T_Email.id_Email = T_Personnes_Email.fk_Email) ON T_Personnes.id_Personnes = T_Personnes_Email.fk_Personnes </span>" & _
                 "<span style="background-color: red;">WHERE T_Personnes.id_Personnes=</span>" & Me.<span style="background-color: yellow;">id_Personnes</span>.Value & ""

    ' La requête est executée dans le RECORDSET
    Set <span style="background-color: cyan;">EnsembleMails</span> = CurrentDb.OpenRecordset(<span style="background-color: pink;">ReqMailSql</span>)

    ' Effacer le contenu avant toute chose.
    Me.<span style="background-color: lightgreen;">ListeMails</span>.RowSource = ""

    ' On parcourt un à un le contenu du RECORDSET
    Do While Not <span style="background-color: cyan;">EnsembleMails</span>.EOF

        ' Le SELECT ci-dessus retourne deux colonnes :
        ' la (0) représente la colonne T_Personnes.id_Personnes
        ' la (1) représente la colonne T_Email.Email_Personne
        liste_element = <span style="background-color: cyan;">EnsembleMails</span>.Fields(1)

       ' on ajoute le résultat de la colonne (1) dans la zone de liste
        Me.<span style="background-color: lightgreen;">ListeMails</span>.AddItem liste_element

        ' on continue sur l'enregistrement suivant
        <span style="background-color: cyan;">EnsembleMails</span>.MoveNext

    Loop

    ' Libère la mémoire
    CurrentDb.Close

    'Set CurrentDb = Nothing
    Set <span style="background-color: cyan;">EnsembleMails</span> = Nothing

End If</pre>
	<p>Le code a été trouvé <a href="https://www.epsic.ch/secure/moodle/mod/book/view.php?id=3696&chapterid=81">ici</a>.</p>
	<p>Dans ce code, j'ai mis en couleur ce qu'il faut remplacer :</p>
	...
<?php include 'footer.php'; ?>