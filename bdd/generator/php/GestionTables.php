<?php

foreach ($tables as $table) {

    $id = 'id';
    foreach ($table['columns'] as $col) {
        if(isset($col['pk'])){
            $id = $col['name'];
        }
    }

$file =

"# OM DE B MARS 2019 Gestion".ucfirst($table['name'])."s.py
# Tout ce qui concerne la gestion des ".$table['name']."s des films.

# OM 2019.03.09 Pour gérer les requêtes et la base de donnée MySql.
import pymysql
import pymysql.cursors

# OM 2019.03.25 Pour utiliser les expressions régulières REGEX
import re

# OM 2019.03.25 Pour gérer les \"alias\" et autres chemins il faut passer par \"blueprint\", cela permet de séparer en plusieurs fichiers moins \"gros\"
# et de placer les fichiers dans des dossiers
from flask import Blueprint

from flask import flash
# OM 2019.03.25 On définit une chaîne de caractère qui va permettre d'identifier les répertoires
".$table['name']."s = Blueprint('".$table['name']."s', __name__, template_folder='templates')

# OM 2019.03.25 On doit importer le module \"ConnectDB.py\", outils autour de la BD.
from ConnectDB import DbUtil

# OM 2019.03.25 On doit importer cette méthode \"render_template\"
# Request pour gérer les méthodes HTTP POST et GET
from flask import render_template, request

#---------------------------------------------------------------------------------------------------
# OM 2019.03.25 Définition d'une \"route\" /".$table['name']."sAfficher , cela va permettre de programmer quelles actions sont réalisées avant de l'envoyer
# au navigateur par la méthode \"render_template\", si il y a une erreur c'est cette méthode \"render_template\" doit être \"importer\" au début de ce fichier.
#---------------------------------------------------------------------------------------------------
@".$table['name']."s.route('/".$table['name']."sAfficher', methods=['GET', 'POST'])
def varPyRoute".ucfirst($table['name'])."s():

    # OM 2019.03.25 Pour savoir si les données d'un formulaire sont un affichage ou un envoi de donnée par des champs utilisateurs.
    if request.method == \"GET\":
        try: 
            # OM 2019.03.25 CONNECTION A LA BD
            connection_dbc = DbUtil.get_connection()

            # OM 2019.03.25 Définition d'un \"curseur\" qui va permettre d'interagir avec la BD pour faire des requêtes.
            curseur_dbc = connection_dbc.cursor()

            # OM 2019.03.25 C'EST LA QUE VOUS ALLEZ DEVOIR PLACER VOTRE PROPRE LOGIQUE MySql
            strsql".ucfirst($table['name'])."sAfficher = \"SELECT * FROM t_".$table['name']."s\"
            # OM 2019.03.25 La chaîne de caractères MySql est envoyée au serveur MySql.
            curseur_dbc.execute(strsql".ucfirst($table['name'])."sAfficher)
            # OM 2019.03.25 On récupère dans \"data".ucfirst($table['name'])."s\" toutes les lignes et les colonnes demandées par l'instruction MySql
            data".ucfirst($table['name'])."s = curseur_dbc.fetchall()

            # OM 2019.03.25 \"commit\" permet de finaliser la transaction !!
            # Remarque : dans le cas d'un SELECT ce n'est pas \"très\" utile, mais c'est surtout pour ne pas l'oublier 
            # lors des requêtes UPDATE, INSERT et DELETE
            connection_dbc.commit()
            # OM 2019.03.25 Les 2 lignes ci-après permettent de donner un sentiment rassurant aux utilisateurs.
            message_html = 'Données Listées !!'
            print(' Données Listées !!')            
        except (pymysql.err.OperationalError, pymysql.ProgrammingError, pymysql.InternalError, pymysql.IntegrityError, TypeError) as error:
            # OM 2019.03.25 Les 2 messages ci-après permettent de donner un sentiment rassurant aux utilisateurs.
            # On indique un problème, mais on ne dit rien en ce qui concerne la résolution.
            message_html = 'Problème avec la BD !!!'
            print(\"Problème avec la BD ! : %s\", error)

            # OM 2019.03.25 La méthode \"rollback\" est très importante, car elle permet de ne pas finaliser la transaction.
            # Remarque : dans le cas d'un SELECT ce n'est pas \"très\" utile, mais c'est surtout pour ne pas l'oublier 
            # lors des requêtes UPDATE, INSERT et DELETE            
            connection_dbc.rollback()

        finally:
            # OM 2019.03.25 On ferme ce qu'on a ouvert avant.
            connection_dbc.close()
            curseur_dbc.close()        
    
    # OM 2019.03.25 Envoie la page \"HTML\" au serveur. On passe des paramètres nécessaires à l'affichages des données
    # contenues dans la BD.
    return render_template('".$table['name']."s/".ucfirst($table['name'])."sAfficher.html',data = data".ucfirst($table['name'])."s, msgHtml = message_html)


#---------------------------------------------------------------------------------------------------
# OM 2019.03.17 Définition d'une \"route\" /".$table['name']."sAdd , cela va permettre de programmer quelles actions sont réalisées avant de l'envoyer
# au navigateur par la méthode \"render_template\".
#---------------------------------------------------------------------------------------------------
@".$table['name']."s.route('/".$table['name']."sAdd',methods = ['POST', 'GET'])
def ".$table['name']."sAddPydef():

    # OM 2019.03.17 Pour
    message_html = 'Ajouter un ".$table['name']." !'

    # OM 2019.03.17 Pour savoir si les données d'un formulaire sont un affichage ou un envoi de donnée par des champs utilisateurs.
    if request.method == 'POST':
        try:
            # OM 2019.03.17 CONNECTION A LA BD
            connection_dbc = DbUtil.get_connection()

            # OM 2019.03.17 Définition d'un \"curseur\" qui va permettre d'interagir avec la BD pour faire des requêtes.
            curseur_dbc = connection_dbc.cursor()
            
            # OM 2019.03.17 Récupère le contenu du champ dans le formulaire HTML \"".ucfirst($table['name'])."sAdd.html\"";

$bool = false;
$fields = '';
$percent_s = '';
$variables = '';
foreach ($table['columns'] as $col) {
    if(!isset($col['pk'])){
        $file .= "
            ".$col['name'].ucfirst($table['name'])." = request.form['".$col['name'].ucfirst($table['name'])."HTML']";

        if($bool){
            $fields .= ', ';
            $percent_s .= ', ';
            $variables .= ', ';
        }
        $fields .= $col['name'];
        $percent_s .= '%s';
        $variables .= $col['name'].ucfirst($table['name']);
        $bool = true;
    }
}

$file .= "
            # OM 2019.03.17 Commande MySql pour l'insertion de la valeur \"CLAVIOTTEE\" dans le champ du form HTML
            # le \"%s\" permet d'éviter des injections SQL \"simples\"
            strsqlInsert".ucfirst($table['name'])." = \"INSERT INTO t_".$table['name']."s (".$fields.") VALUES (".$percent_s.")\"

            # OM 2019.03.17 Insertion de la valeur \"CLAVIOTTEE\" mais validée par la REGEX
            curseur_dbc.execute(strsqlInsert".ucfirst($table['name']).", (".$variables."))

            # OM 2019.03.17 \"commit\" permet de finaliser la transaction !!
            connection_dbc.commit()

            # OM 2019.03.17 Commande MySql pour afficher la liste des ".$table['name']."s classée par ordre décroissant
            # ainsi on voit la dernière valeur insérée en premier dans la liste.
            strsql".ucfirst($table['name'])."sAfficher = \"SELECT * FROM t_".$table['name']."s ORDER BY ".$id." DESC\"
            # OM 2019.03.17 La chaîne de caractères MySql est envoyée au serveur MySql.
            curseur_dbc.execute(strsql".ucfirst($table['name'])."sAfficher)

            # OM 2019.03.17 On récupère dans \"data".ucfirst($table['name'])."s\" toutes les lignes et les colonnes demandées par l'instruction MySql                
            data".ucfirst($table['name'])."s = curseur_dbc.fetchall()

            # OM 2019.03.17 Message de confirmation pour prendre soin du moral de l'utilisateur
            message_html = '".ucfirst($table['name'])." ajouté.'
            # OM 2019.03.17 On va afficher la liste des ".$table['name']."s des films
            return render_template('".$table['name']."s/".ucfirst($table['name'])."sAfficher.html', data = data".ucfirst($table['name'])."s, msgHtml = message_html)


        except (pymysql.err.OperationalError, pymysql.ProgrammingError, pymysql.InternalError, pymysql.IntegrityError, TypeError) as error:
            # OM 2019.03.28 Traiter spécifiquement l'erreur MySql 1062
            # pour obtenir cette erreur 1062 il faut que la colonne \"intitule_".$table['name']."\" dans la table \"t_".$table['name']."s\"
            # soit déclarée avec l'attribut \"UNIQUE\"
            if error.args[0] == 1062:
                # OM 2019.03.17 Deux façons de communiquer une erreur causée par l'insertion d'une valeur à double.
                message_html = \"Cette valeur existe déjà !!!\"
                flash('Doublon !!! Introduire une autre valeur différente')
            else:
                # OM 2019.03.17 Trois façons de communiquer qu'une autre erreur que la 1062 est survenue.
                print( 'MySQL?????%d?%s' % (error.args[ 0 ], error.args[ 1 ]) )
                message_html = \"Problème monstrueux !!! \"
                flash('MySQL?????%d?%s' % (error.args[ 0 ], error.args[ 1 ]))

            # OM 2019.03.17 La méthode \"rollback\" est très importante, car elle permet de ne pas finaliser la transaction.
            connection_dbc.rollback()

        finally:
            # OM 2019.03.22 On ferme ce qu'on a ouvert avant.
            connection_dbc.close()
            curseur_dbc.close()                 


    # OM 2019.03.17 Envoie la page \"HTML\" au serveur. On passe un message d'information dans \"message_html\"
    return render_template('".$table['name']."s/".ucfirst($table['name'])."sAdd.html', msgHtml = message_html)



#---------------------------------------------------------------------------------------------------
# OM 2019.04.02 Définition d'une \"route\" /".$table['name']."sEdit , cela va permettre de programmer quelles actions sont réalisées avant de l'envoyer
# au navigateur par la méthode \"render_template\".
# On change la valeur d'un ".$table['name']." de films par la commande MySql \"UPDATE\"
#---------------------------------------------------------------------------------------------------
@".$table['name']."s.route('/".$table['name']."sEdit',methods = ['POST', 'GET'])
def ".$table['name']."sEditPydef():

    # OM 2019.04.02 Les données sont affichées dans un formulaire, l'affichage de la sélection
    # d'une seule ligne choisie par le bouton \"edit\" dans le formulaire \"".ucfirst($table['name'])."sAfficher.html\"
    if request.method == 'GET':
        try:
            # OM 2019.04.02 CONNECTION A LA BD
            connection_dbc = DbUtil.get_connection()

            # OM 2019.04.02 Définition d'un \"curseur\" qui va permettre d'interagir avec la BD pour faire des requêtes.
            curseur_dbc = connection_dbc.cursor()
            
            # OM 2019.04.02 Récupérer la valeur de \"".$id."\" du formulaire html \"".ucfirst($table['name'])."Afficher.html\"
            # l'utilisateur clique sur le lien \"edit\" et on récupére la valeur de \"".$id."\" grâce à la variable \"".$id."EditHTML\"
            # <a href=\"{{ url_for('".$table['name']."s.".$table['name']."sEditPydef', ".$id."EditHTML=row.".$id.") }}\">Edit</a>
            ".$id."Edit = request.values['".$id."EditHTML']

            # OM 2019.04.02 Pour afficher dans la console la valeur de \"".$id."\", une façon simple de se rassurer, sans utiliser le DEBUGGER.
            # print(".$id."Edit)

            # OM 2019.04.02 Commande MySql pour afficher le ".$table['name']." sélectionné dans le tableau dans le formulaire HTML
            # le \"%s\" permet d'éviter des injections SQL \"simples\"
            strsql".ucfirst($id)." = \"SELECT * FROM t_".$table['name']."s WHERE ".$id." = %s\"
            # OM 2019.04.02 La commande MySql est envoyée à la BD
            # la valeur du \"%s\" est enfin associée à \"".$id."Edit\"
            curseur_dbc.execute(strsql".ucfirst($id).", (".$id."Edit,))

            # OM 2019.04.02 Toutes les données sont dans la variable \"data".ucfirst($id)."\"
            data".ucfirst($id)." = curseur_dbc.fetchall()

            # OM 2019.04.02 \"commit\" permet de finaliser la transaction !!
            # Remarque : dans le cas d'un SELECT ce n'est pas \"très\" utile, mais c'est surtout pour ne pas l'oublier 
            # lors des requêtes UPDATE, INSERT et DELETE
            connection_dbc.commit()
            # OM 2019.04.02 La ligne suivante permet d'indiquer à l'utilisateur que l'action s'est bien passée.
            message_html = \"Editer le ".$table['name']." d'un film !!!\"

        except (pymysql.err.OperationalError, pymysql.ProgrammingError, pymysql.InternalError, pymysql.IntegrityError, TypeError) as error:
            # OM 2019.04.02 Les 2 messages ci-après permettent de donner un sentiment rassurant aux utilisateurs.
            # On indique un problème, mais on ne dit rien en ce qui concerne la résolution.
            message_html = 'Problème avec la BD !!!'
            print(\"Problème avec la BD ! : %s\", error)

            # OM 2019.04.02 La méthode \"rollback\" est très importante, car elle permet de ne pas finaliser la transaction.
            # Remarque : dans le cas d'un SELECT ce n'est pas \"très\" utile, mais c'est surtout pour ne pas l'oublier 
            # lors des requêtes UPDATE, INSERT et DELETE            
            connection_dbc.rollback()

        finally:
            # OM 2019.04.02 On ferme ce qu'on a ouvert avant.
            connection_dbc.close()
            curseur_dbc.close()    


    return render_template('".$table['name']."s/".ucfirst($table['name'])."sEdit.html', data = data".ucfirst($id).", msgHtml = message_html)


#---------------------------------------------------------------------------------------------------    
# OM 2019.04.02 Définition d'une \"route\" /".$table['name']."sUpdate , cela va permettre de programmer quelles actions sont réalisées avant de l'envoyer
# au navigateur par la méthode \"render_template\".
# Permettre à l'utilisateur de modifier un ".$table['name'].", et de filtrer son entrée grâce à des expressions régulières REGEXP
#---------------------------------------------------------------------------------------------------
@".$table['name']."s.route('/".$table['name']."sUpdate',methods = ['POST', 'GET'])
def ".$table['name']."sUpdatePydef():

    # OM 2019.04.02 Pour
    message_html = 'Modifier un ".$table['name']." !'

    # OM 2019.04.02 Pour savoir si les données d'un formulaire sont un affichage ou un envoi de donnée par des champs utilisateurs.
    if request.method == 'POST':
        try:
            # OM 2019.04.02 CONNECTION A LA BD
            connection_dbc = DbUtil.get_connection()

            # OM 2019.04.02 Définition d'un \"curseur\" qui va permettre d'interagir avec la BD pour faire des requêtes.
            curseur_dbc = connection_dbc.cursor()

            # OM 2019.04.02 Récupérer la valeur de \"".$id."\" du formulaire html \"".ucfirst($table['name'])."Edit.html\"
            ".$id."Edit = request.form['".$id."EditHTML']            
            # OM 2019.04.02 Récupère le contenu du champ \"intitule_".$table['name']."\" dans le formulaire HTML \"".ucfirst($table['name'])."sEdit.html\"";

$bool = false;
$fields = '';
$percent_s = '';
$variables = '';
foreach ($table['columns'] as $col) {
    if(!isset($col['pk'])){
        $file .= "
            ".$col['name'].ucfirst($table['name'])." = request.form['".$col['name'].ucfirst($table['name'])."HTML']";

        if($bool){
            $fields .= ', ';
            $variables .= ', ';
        }
        $fields .= $col['name'].' = %s';
        $variables .= $col['name'].ucfirst($table['name']);
        $bool = true;
    }
}

$file .= "
            # OM 2019.04.02 Commande MySql pour la MODIFICATION de la valeur \"CLAVIOTTEE\" dans le champ \"nameEditIntitule".ucfirst($table['name'])."HTML\" du form HTML \"".ucfirst($table['name'])."sEdit.html\"
            # le \"%s\" permet d'éviter des injections SQL \"simples\"
            # <td><input type = \"text\" name = \"nameEditIntitule".ucfirst($table['name'])."HTML\" value=\"{{ row.intitule_".$table['name']." }}\"/></td>
            strsqlUpdateIntitule".ucfirst($table['name'])." = \"UPDATE t_".$table['name']."s SET ".$fields." WHERE ".$id." = %s\"

            # OM 2019.04.02 Insertion de la valeur \"CLAVIOTTEE\" mais validée par la REGEX
            curseur_dbc.execute(strsqlUpdateIntitule".ucfirst($table['name']).", (".$variables.", ".$id."Edit,))
            # OM 2019.04.02 \"commit\" permet de finaliser la transaction !!
            connection_dbc.commit()

            # OM 2019.04.02 Commande MySql pour afficher la liste des ".$table['name']."s classée par ordre décroissant
            # ainsi on voit la dernière valeur insérée en premier dans la liste.
            strsql".ucfirst($table['name'])."sAfficher = \"SELECT * FROM t_".$table['name']."s ORDER BY ".$id." DESC\"
            # OM 2019.04.02 La chaîne de caractères MySql est envoyée au serveur MySql.
            curseur_dbc.execute(strsql".ucfirst($table['name'])."sAfficher)

            # OM 2019.04.02 On récupère dans \"data".ucfirst($table['name'])."s\" toutes les lignes et les colonnes demandées par l'instruction MySql                
            data".ucfirst($table['name'])."s = curseur_dbc.fetchall()
            
            # OM 2019.04.02 \"commit\" permet de finaliser la transaction !!
            # Remarque : dans le cas d'un SELECT ce n'est pas \"très\" utile, mais c'est surtout pour ne pas l'oublier 
            # lors des requêtes UPDATE, INSERT et DELETE
            connection_dbc.commit()
            
            # OM 2019.04.02 Message de confirmation pour prendre soin du moral de l'utilisateur
            message_html = '".ucfirst($table['name'])." modifié.'
            # OM 2019.04.02 On va afficher la liste des ".$table['name']."s des films
            return render_template('".$table['name']."s/".ucfirst($table['name'])."sAfficher.html', data = data".ucfirst($table['name'])."s, msgHtml = message_html)


        except (pymysql.err.OperationalError, pymysql.ProgrammingError, pymysql.InternalError, pymysql.IntegrityError, TypeError) as error:
            # OM 2019.03.28 Traiter spécifiquement l'erreur MySql 1062
            # pour obtenir cette erreur 1062 il faut que la colonne \"intitule_".$table['name']."\" dans la table \"t_".$table['name']."s\"
            # soit déclarée avec l'attribut \"UNIQUE\"
            if error.args[0] == 1062:
                # OM 2019.04.02 Deux façons de communiquer une erreur causée par l'insertion d'une valeur à double.
                message_html = \"La valeur \" + name".ucfirst($table['name'])." + \" existe déjà !!!\"
                flash('Doublon !!! Introduire une valeur différente')
                # OM 2019.04.02 On doit afficher à nouveau le formulaire d'introduction.
                # avec ce que l'utilisateur avait sélectionné ---> Commande MySql pour Réafficher le ".$table['name']." sélectionné 
                # le \"%s\" permet d'éviter des injections SQL \"simples\"
                strsql".ucfirst($id)."Dbl = \"SELECT * FROM t_".$table['name']."s WHERE ".$id." = %s\"
                # OM 2019.04.02 La commande MySql est envoyée à la BD
                # la valeur du \"%s\" est enfin associée à \"".$id."Edit\"
                curseur_dbc.execute(strsql".ucfirst($id)."Dbl, (".$id."Edit,))
                # OM 2019.04.02 Toutes les données sont dans la variable \"data".ucfirst($id)."\"
                data".ucfirst($id)." = curseur_dbc.fetchall()
                # OM 2019.04.02 \"commit\" permet de finaliser la transaction !!
                # Remarque : dans le cas d'un SELECT ce n'est pas \"très\" utile, mais c'est surtout pour ne pas l'oublier 
                # lors des requêtes UPDATE, INSERT et DELETE
                connection_dbc.commit()

                return render_template('".$table['name']."s/".ucfirst($table['name'])."sEdit.html', data = data".ucfirst($id).", msgHtml = message_html)
            else:
                # OM 2019.04.02 Trois façons de communiquer qu'une autre erreur que la 1062 est survenue.
                print( 'MySQL?????%d?%s' % (error.args[ 0 ], error.args[ 1 ]) )
                message_html = \"Problème monstrueux !!! \"
                flash('MySQL?????%d?%s' % (error.args[ 0 ], error.args[ 1 ]))

            # OM 2019.04.02 La méthode \"rollback\" est très importante, car elle permet de ne pas finaliser la transaction.
            connection_dbc.rollback()

        finally:
            # OM 2019.03.22 On ferme ce qu'on a ouvert avant.
            connection_dbc.close()
            curseur_dbc.close()                 


    # OM 2019.04.02 Envoie la page \"HTML\" au serveur. On passe un message d'information dans \"message_html\"
    return render_template('".$table['name']."s/".ucfirst($table['name'])."sEdit.html', msgHtml = message_html)


#---------------------------------------------------------------------------------------------------
# OM 2019.04.04 Définition d'une \"route\" /".$table['name']."sSelectDelete , cela va permettre de programmer quelles actions sont réalisées avant de l'envoyer
# au navigateur par la méthode \"render_template\".
# Afficher le \"".$table['name']."\" qui va être effacé. Le \"".$table['name']."\" à effacé est choisi par le bouton \"DELETE\" donc il renvoie \"".$id."DeleteHTML\"
#---------------------------------------------------------------------------------------------------
@".$table['name']."s.route('/".$table['name']."sSelectDelete',methods = ['POST', 'GET'])
def ".$table['name']."sSelectDeletePydef():

    if request.method == 'GET':
        try:
            # OM 2019.04.04 CONNECTION A LA BD
            connection_dbc = DbUtil.get_connection()

            # OM 2019.04.04 Définition d'un \"curseur\" qui va permettre d'interagir avec la BD pour faire des requêtes.
            curseur_dbc = connection_dbc.cursor()

            # OM 2019.04.04 Récupérer la valeur de \"".$id."DeleteHTML\" du formulaire html \"".ucfirst($table['name'])."sDelete.html\"
            ".$id."SelectDelete = request.args.get('".$id."DeleteHTML')
            # OM 2019.04.04 Afficher le \"".$table['name']."\" à effacer (choisi par l'utilisateur) bouton \"DELETE\" du formulaire \"".ucfirst($table['name'])."sAfficher.html\"
            # <a href=\"{{ url_for('".$table['name']."s.".$table['name']."sDeletePydef', ".$id."DeleteHTML=row.".$id.") }}\">Delete</a>
            # le \"%s\" permet d'éviter des injections SQL \"simples\"
            strsqlSelectDelete".ucfirst($table['name'])." = \"SELECT * FROM t_".$table['name']."s WHERE ".$id." = %s\"
            # OM 2019.04.04 La commande MySql est envoyée à la BD
            # la valeur du \"%s\" est enfin associée à \"".$id."SelectDelete\"
            curseur_dbc.execute(strsqlSelectDelete".ucfirst($table['name']).", (".$id."SelectDelete,))
            # OM 2019.04.04 Toutes les données du SELECT sont dans la variable \"dataIdSousCategorieSelDel\"        
            dataIdSousCategorieSelDel = curseur_dbc.fetchall()
            # OM 2019.04.04 \"commit\" permet de finaliser la transaction !!
            # Remarque : dans le cas d'un SELECT ce n'est pas \"très\" utile, mais c'est surtout pour ne pas l'oublier 
            # lors des requêtes UPDATE, INSERT et DELETE            
            connection_dbc.commit()
            message_html = \"EFFACER et c'est terminé pour cette \\\"POV\\\" valeur !!!\"

        except (pymysql.err.OperationalError, pymysql.ProgrammingError, pymysql.InternalError, pymysql.IntegrityError, TypeError) as error:            
            # OM 2019.04.04 La méthode \"rollback\" est très importante, car elle permet de ne pas finaliser la transaction.
            connection_dbc.rollback()
            # OM 2019.04.04 Trois façons de communiquer qu'une autre erreur est survenue.
            print( 'MySQL?????%d?%s' % (error.args[ 0 ], error.args[ 1 ]) )
            message_html = \"Problème monstrueux !!! \"
            flash('MySQL?????%d?%s' % (error.args[ 0 ], error.args[ 1 ]))
        finally:
            # OM 2019.04.04 On ferme ce qu'on a ouvert avant.
            connection_dbc.close()
            curseur_dbc.close()

    # OM 2019.04.04 Envoie la page \"HTML\" au serveur. On passe un message d'information dans \"message_html\"
    return render_template('".$table['name']."s/".ucfirst($table['name'])."sDelete.html', data = dataIdSousCategorieSelDel, msgHtml = message_html)


#---------------------------------------------------------------------------------------------------
# OM 2019.04.02 Définition d'une \"route\" /".$table['name']."sUpdate , cela va permettre de programmer quelles actions sont réalisées avant de l'envoyer
# au navigateur par la méthode \"render_template\".
# Permettre à l'utilisateur de modifier un ".$table['name'].", et de filtrer son entrée grâce à des expressions régulières REGEXP
#---------------------------------------------------------------------------------------------------
@".$table['name']."s.route('/".$table['name']."sDelete',methods = ['POST', 'GET'])
def ".$table['name']."sDeletePydef():

    # OM 2019.04.02 Pour
    message_html = 'Effacer un ".$table['name']." !'

    # OM 2019.04.02 Pour savoir si les données d'un formulaire sont un affichage ou un envoi de donnée par des champs utilisateurs.
    if request.method == 'POST':
        try:
            # OM 2019.04.02 CONNECTION A LA BD
            connection_dbc = DbUtil.get_connection()

            # OM 2019.04.02 Définition d'un \"curseur\" qui va permettre d'interagir avec la BD pour faire des requêtes.
            curseur_dbc = connection_dbc.cursor()

            # OM 2019.04.02 Récupérer la valeur de \"".$id."\" du formulaire html \"".ucfirst($table['name'])."sAfficher.html\"
            ".$id."Delete = request.form['".$id."DeleteHTML']            

            # OM 2019.04.02 On doit afficher à nouveau le formulaire d'introduction.
            # avec ce que l'utilisateur avait sélectionné ---> Commande MySql pour Réafficher le ".$table['name']." sélectionné 
            # le \"%s\" permet d'éviter des injections SQL \"simples\"
            strsqlDelete".ucfirst($table['name'])." = \"DELETE FROM t_".$table['name']."s WHERE ".$id." = %s\"
            # OM 2019.04.02 La commande MySql est envoyée à la BD
            # la valeur du \"%s\" est enfin associée à \"".$id."Edit\"
            curseur_dbc.execute(strsqlDelete".ucfirst($table['name']).", (".$id."Delete,))
            # OM 2019.04.02 \"commit\" permet de finaliser la transaction !!
            connection_dbc.commit()

            # OM 2019.04.02 Commande MySql pour afficher la liste des ".$table['name']."s classée par ordre décroissant
            # ainsi on voit la dernière valeur insérée en premier dans la liste.
            strsql".ucfirst($table['name'])."sAfficher = \"SELECT * FROM t_".$table['name']."s ORDER BY ".$id." DESC\"
            # OM 2019.04.02 La chaîne de caractères MySql est envoyée au serveur MySql.
            curseur_dbc.execute(strsql".ucfirst($table['name'])."sAfficher)

            # OM 2019.04.02 On récupère dans \"data".ucfirst($table['name'])."s\" toutes les lignes et les colonnes demandées par l'instruction MySql                
            data".ucfirst($table['name'])."s = curseur_dbc.fetchall()
            
            # OM 2019.04.02 \"commit\" permet de finaliser la transaction !!
            # Remarque : dans le cas d'un SELECT ce n'est pas \"très\" utile, mais c'est surtout pour ne pas l'oublier 
            # lors des requêtes UPDATE, INSERT et DELETE
            connection_dbc.commit()
            
            # OM 2019.04.02 Message de confirmation pour prendre soin du moral de l'utilisateur
            message_html = '".ucfirst($table['name'])." effacé.'
            # OM 2019.04.02 On va afficher la liste des ".$table['name']."s des films
            # OM 2019.04.02 Envoie la page \"HTML\" au serveur. On passe un message d'information dans \"message_html\"
            return render_template('".$table['name']."s/".ucfirst($table['name'])."sAfficher.html', data = data".ucfirst($table['name'])."s,  msgHtml = message_html)
            


        except (pymysql.err.OperationalError, pymysql.ProgrammingError, pymysql.InternalError, pymysql.IntegrityError, TypeError) as error:
            # OM 2019.03.28 Traiter spécifiquement l'erreur MySql 1451
            # Cette erreur 1451, signifie qu'on veut effacer un \"".$table['name']."\" de films qui est associé dans \"t_".$table['name']."_film\".
            if error.args[0] == 1451:
                # OM 2019.04.02 Deux façons de communiquer une erreur causée par l'insertion d'une valeur à double.
                message_html = \"IMPOSSIBLE d'effacer l'".$id." \" + ".$id."Delete + \" cette valeur est associée à des films !!!\"
                flash('IMPOSSIBLE d\'effacer !!! Cette valeur est associée à des films !')
                # OM 2019.04.02 Commande MySql pour afficher la liste des ".$table['name']."s classée par ordre décroissant.
                strsql".ucfirst($table['name'])."sAfficher = \"SELECT * FROM t_".$table['name']."s\"
                # OM 2019.04.02 La chaîne de caractères MySql est envoyée au serveur MySql.
                curseur_dbc.execute(strsql".ucfirst($table['name'])."sAfficher)

                # OM 2019.04.02 On récupère dans \"data".ucfirst($table['name'])."s\" toutes les lignes et les colonnes demandées par l'instruction MySql                
                data".ucfirst($table['name'])."sAfterDelete = curseur_dbc.fetchall()
                
                # OM 2019.04.02 \"commit\" permet de finaliser la transaction !!
                # Remarque : dans le cas d'un SELECT ce n'est pas \"très\" utile, mais c'est surtout pour ne pas l'oublier 
                # lors des requêtes UPDATE, INSERT et DELETE
                connection_dbc.commit()

                # OM 2019.04.02 On va afficher la liste des ".$table['name']."s des films
                return render_template('".$table['name']."s/".ucfirst($table['name'])."sAfficher.html', data = data".ucfirst($table['name'])."sAfterDelete, msgHtml = message_html)
            else:
                # OM 2019.04.02 Trois façons de communiquer qu'une autre erreur que la 1062 est survenue.
                print( 'MySQL?????%d?%s' % (error.args[ 0 ], error.args[ 1 ]) )
                message_html = \"Problème monstrueux !!! \"
                flash('MySQL?????%d?%s' % (error.args[ 0 ], error.args[ 1 ]))

            # OM 2019.04.02 La méthode \"rollback\" est très importante, car elle permet de ne pas finaliser la transaction.
            connection_dbc.rollback()

        finally:
            # OM 2019.03.22 On ferme ce qu'on a ouvert avant.
            connection_dbc.close()
            curseur_dbc.close()                 


    # OM 2019.04.02 Envoie la page \"HTML\" au serveur. On passe un message d'information dans \"message_html\"
    return render_template('".$table['name']."s/".ucfirst($table['name'])."sAfficher.html',  msgHtml = message_html)
";

    if (!file_exists('generator/output/'.$time)) {
        mkdir('generator/output/'.$time);
    }
    $fp = fopen('generator/output/'.$time.'/Gestion'.ucfirst($table['name']).'s.py', 'w');
    fwrite($fp, $file);
    fclose($fp);
}
?>