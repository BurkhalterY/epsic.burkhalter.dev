# OM DE B MARS 2019 GestionTypes.py
# Tout ce qui concerne la gestion des types des films.

# OM 2019.03.09 Pour gérer les requêtes et la base de donnée MySql.
import pymysql
import pymysql.cursors

# OM 2019.03.25 Pour utiliser les expressions régulières REGEX
import re

# OM 2019.03.25 Pour gérer les "alias" et autres chemins il faut passer par "blueprint", cela permet de séparer en plusieurs fichiers moins "gros"
# et de placer les fichiers dans des dossiers
from flask import Blueprint

from flask import flash
# OM 2019.03.25 On définit une chaîne de caractère qui va permettre d'identifier les répertoires
types = Blueprint('types', __name__, template_folder='templates')

# OM 2019.03.25 On doit importer le module "ConnectDB.py", outils autour de la BD.
from ConnectDB import DbUtil

# OM 2019.03.25 On doit importer cette méthode "render_template"
# Request pour gérer les méthodes HTTP POST et GET
from flask import render_template, request

#---------------------------------------------------------------------------------------------------
# OM 2019.03.25 Définition d'une "route" /typesAfficher , cela va permettre de programmer quelles actions sont réalisées avant de l'envoyer
# au navigateur par la méthode "render_template", si il y a une erreur c'est cette méthode "render_template" doit être "importer" au début de ce fichier.
#---------------------------------------------------------------------------------------------------
@types.route('/typesAfficher', methods=['GET', 'POST'])
def varPyRouteTypes():

    # OM 2019.03.25 Pour savoir si les données d'un formulaire sont un affichage ou un envoi de donnée par des champs utilisateurs.
    if request.method == "GET":
        try: 
            # OM 2019.03.25 CONNECTION A LA BD
            connection_dbc = DbUtil.get_connection()

            # OM 2019.03.25 Définition d'un "curseur" qui va permettre d'interagir avec la BD pour faire des requêtes.
            curseur_dbc = connection_dbc.cursor()

            # OM 2019.03.25 C'EST LA QUE VOUS ALLEZ DEVOIR PLACER VOTRE PROPRE LOGIQUE MySql
            strsqlTypesAfficher = "SELECT * FROM t_types"
            # OM 2019.03.25 La chaîne de caractères MySql est envoyée au serveur MySql.
            curseur_dbc.execute(strsqlTypesAfficher)
            # OM 2019.03.25 On récupère dans "dataTypes" toutes les lignes et les colonnes demandées par l'instruction MySql
            dataTypes = curseur_dbc.fetchall()

            # OM 2019.03.25 "commit" permet de finaliser la transaction !!
            # Remarque : dans le cas d'un SELECT ce n'est pas "très" utile, mais c'est surtout pour ne pas l'oublier 
            # lors des requêtes UPDATE, INSERT et DELETE
            connection_dbc.commit()
            # OM 2019.03.25 Les 2 lignes ci-après permettent de donner un sentiment rassurant aux utilisateurs.
            message_html = 'Données Listées !!'
            print(' Données Listées !!')            
        except (pymysql.err.OperationalError, pymysql.ProgrammingError, pymysql.InternalError, pymysql.IntegrityError, TypeError) as error:
            # OM 2019.03.25 Les 2 messages ci-après permettent de donner un sentiment rassurant aux utilisateurs.
            # On indique un problème, mais on ne dit rien en ce qui concerne la résolution.
            message_html = 'Problème avec la BD !!!'
            print("Problème avec la BD ! : %s", error)

            # OM 2019.03.25 La méthode "rollback" est très importante, car elle permet de ne pas finaliser la transaction.
            # Remarque : dans le cas d'un SELECT ce n'est pas "très" utile, mais c'est surtout pour ne pas l'oublier 
            # lors des requêtes UPDATE, INSERT et DELETE            
            connection_dbc.rollback()

        finally:
            # OM 2019.03.25 On ferme ce qu'on a ouvert avant.
            connection_dbc.close()
            curseur_dbc.close()        
    
    # OM 2019.03.25 Envoie la page "HTML" au serveur. On passe des paramètres nécessaires à l'affichages des données
    # contenues dans la BD.
    return render_template('types/TypesAfficher.html',data = dataTypes, msgHtml = message_html)


#---------------------------------------------------------------------------------------------------
# OM 2019.03.17 Définition d'une "route" /typesAdd , cela va permettre de programmer quelles actions sont réalisées avant de l'envoyer
# au navigateur par la méthode "render_template".
#---------------------------------------------------------------------------------------------------
@types.route('/typesAdd',methods = ['POST', 'GET'])
def typesAddPydef():

    # OM 2019.03.17 Pour
    message_html = 'Ajouter un type !'

    # OM 2019.03.17 Pour savoir si les données d'un formulaire sont un affichage ou un envoi de donnée par des champs utilisateurs.
    if request.method == 'POST':
        try:
            # OM 2019.03.17 CONNECTION A LA BD
            connection_dbc = DbUtil.get_connection()

            # OM 2019.03.17 Définition d'un "curseur" qui va permettre d'interagir avec la BD pour faire des requêtes.
            curseur_dbc = connection_dbc.cursor()
            
            # OM 2019.03.17 Récupère le contenu du champ dans le formulaire HTML "TypesAdd.html"
            Nom_typeType = request.form['Nom_typeTypeHTML']
            # OM 2019.03.17 Commande MySql pour l'insertion de la valeur "CLAVIOTTEE" dans le champ du form HTML
            # le "%s" permet d'éviter des injections SQL "simples"
            strsqlInsertType = "INSERT INTO t_types (Nom_type) VALUES (%s)"

            # OM 2019.03.17 Insertion de la valeur "CLAVIOTTEE" mais validée par la REGEX
            curseur_dbc.execute(strsqlInsertType, (Nom_typeType))

            # OM 2019.03.17 "commit" permet de finaliser la transaction !!
            connection_dbc.commit()

            # OM 2019.03.17 Commande MySql pour afficher la liste des types classée par ordre décroissant
            # ainsi on voit la dernière valeur insérée en premier dans la liste.
            strsqlTypesAfficher = "SELECT * FROM t_types ORDER BY ID_type DESC"
            # OM 2019.03.17 La chaîne de caractères MySql est envoyée au serveur MySql.
            curseur_dbc.execute(strsqlTypesAfficher)

            # OM 2019.03.17 On récupère dans "dataTypes" toutes les lignes et les colonnes demandées par l'instruction MySql                
            dataTypes = curseur_dbc.fetchall()

            # OM 2019.03.17 Message de confirmation pour prendre soin du moral de l'utilisateur
            message_html = 'Type ajouté.'
            # OM 2019.03.17 On va afficher la liste des types des films
            return render_template('types/TypesAfficher.html', data = dataTypes, msgHtml = message_html)


        except (pymysql.err.OperationalError, pymysql.ProgrammingError, pymysql.InternalError, pymysql.IntegrityError, TypeError) as error:
            # OM 2019.03.28 Traiter spécifiquement l'erreur MySql 1062
            # pour obtenir cette erreur 1062 il faut que la colonne "intitule_type" dans la table "t_types"
            # soit déclarée avec l'attribut "UNIQUE"
            if error.args[0] == 1062:
                # OM 2019.03.17 Deux façons de communiquer une erreur causée par l'insertion d'une valeur à double.
                message_html = "Cette valeur existe déjà !!!"
                flash('Doublon !!! Introduire une autre valeur différente')
            else:
                # OM 2019.03.17 Trois façons de communiquer qu'une autre erreur que la 1062 est survenue.
                print( 'MySQL?????%d?%s' % (error.args[ 0 ], error.args[ 1 ]) )
                message_html = "Problème monstrueux !!! "
                flash('MySQL?????%d?%s' % (error.args[ 0 ], error.args[ 1 ]))

            # OM 2019.03.17 La méthode "rollback" est très importante, car elle permet de ne pas finaliser la transaction.
            connection_dbc.rollback()

        finally:
            # OM 2019.03.22 On ferme ce qu'on a ouvert avant.
            connection_dbc.close()
            curseur_dbc.close()                 


    # OM 2019.03.17 Envoie la page "HTML" au serveur. On passe un message d'information dans "message_html"
    return render_template('types/TypesAdd.html', msgHtml = message_html)



#---------------------------------------------------------------------------------------------------
# OM 2019.04.02 Définition d'une "route" /typesEdit , cela va permettre de programmer quelles actions sont réalisées avant de l'envoyer
# au navigateur par la méthode "render_template".
# On change la valeur d'un type de films par la commande MySql "UPDATE"
#---------------------------------------------------------------------------------------------------
@types.route('/typesEdit',methods = ['POST', 'GET'])
def typesEditPydef():

    # OM 2019.04.02 Les données sont affichées dans un formulaire, l'affichage de la sélection
    # d'une seule ligne choisie par le bouton "edit" dans le formulaire "TypesAfficher.html"
    if request.method == 'GET':
        try:
            # OM 2019.04.02 CONNECTION A LA BD
            connection_dbc = DbUtil.get_connection()

            # OM 2019.04.02 Définition d'un "curseur" qui va permettre d'interagir avec la BD pour faire des requêtes.
            curseur_dbc = connection_dbc.cursor()
            
            # OM 2019.04.02 Récupérer la valeur de "ID_type" du formulaire html "TypeAfficher.html"
            # l'utilisateur clique sur le lien "edit" et on récupére la valeur de "ID_type" grâce à la variable "ID_typeEditHTML"
            # <a href="{{ url_for('types.typesEditPydef', ID_typeEditHTML=row.ID_type) }}">Edit</a>
            ID_typeEdit = request.values['ID_typeEditHTML']

            # OM 2019.04.02 Pour afficher dans la console la valeur de "ID_type", une façon simple de se rassurer, sans utiliser le DEBUGGER.
            # print(ID_typeEdit)

            # OM 2019.04.02 Commande MySql pour afficher le type sélectionné dans le tableau dans le formulaire HTML
            # le "%s" permet d'éviter des injections SQL "simples"
            strsqlID_type = "SELECT * FROM t_types WHERE ID_type = %s"
            # OM 2019.04.02 La commande MySql est envoyée à la BD
            # la valeur du "%s" est enfin associée à "ID_typeEdit"
            curseur_dbc.execute(strsqlID_type, (ID_typeEdit,))

            # OM 2019.04.02 Toutes les données sont dans la variable "dataID_type"
            dataID_type = curseur_dbc.fetchall()

            # OM 2019.04.02 "commit" permet de finaliser la transaction !!
            # Remarque : dans le cas d'un SELECT ce n'est pas "très" utile, mais c'est surtout pour ne pas l'oublier 
            # lors des requêtes UPDATE, INSERT et DELETE
            connection_dbc.commit()
            # OM 2019.04.02 La ligne suivante permet d'indiquer à l'utilisateur que l'action s'est bien passée.
            message_html = "Editer le type d'un film !!!"

        except (pymysql.err.OperationalError, pymysql.ProgrammingError, pymysql.InternalError, pymysql.IntegrityError, TypeError) as error:
            # OM 2019.04.02 Les 2 messages ci-après permettent de donner un sentiment rassurant aux utilisateurs.
            # On indique un problème, mais on ne dit rien en ce qui concerne la résolution.
            message_html = 'Problème avec la BD !!!'
            print("Problème avec la BD ! : %s", error)

            # OM 2019.04.02 La méthode "rollback" est très importante, car elle permet de ne pas finaliser la transaction.
            # Remarque : dans le cas d'un SELECT ce n'est pas "très" utile, mais c'est surtout pour ne pas l'oublier 
            # lors des requêtes UPDATE, INSERT et DELETE            
            connection_dbc.rollback()

        finally:
            # OM 2019.04.02 On ferme ce qu'on a ouvert avant.
            connection_dbc.close()
            curseur_dbc.close()    


    return render_template('types/TypesEdit.html', data = dataID_type, msgHtml = message_html)


#---------------------------------------------------------------------------------------------------    
# OM 2019.04.02 Définition d'une "route" /typesUpdate , cela va permettre de programmer quelles actions sont réalisées avant de l'envoyer
# au navigateur par la méthode "render_template".
# Permettre à l'utilisateur de modifier un type, et de filtrer son entrée grâce à des expressions régulières REGEXP
#---------------------------------------------------------------------------------------------------
@types.route('/typesUpdate',methods = ['POST', 'GET'])
def typesUpdatePydef():

    # OM 2019.04.02 Pour
    message_html = 'Modifier un type !'

    # OM 2019.04.02 Pour savoir si les données d'un formulaire sont un affichage ou un envoi de donnée par des champs utilisateurs.
    if request.method == 'POST':
        try:
            # OM 2019.04.02 CONNECTION A LA BD
            connection_dbc = DbUtil.get_connection()

            # OM 2019.04.02 Définition d'un "curseur" qui va permettre d'interagir avec la BD pour faire des requêtes.
            curseur_dbc = connection_dbc.cursor()

            # OM 2019.04.02 Récupérer la valeur de "ID_type" du formulaire html "TypeEdit.html"
            ID_typeEdit = request.form['ID_typeEditHTML']            
            # OM 2019.04.02 Récupère le contenu du champ "intitule_type" dans le formulaire HTML "TypesEdit.html"
            Nom_typeType = request.form['Nom_typeTypeHTML']
            # OM 2019.04.02 Commande MySql pour la MODIFICATION de la valeur "CLAVIOTTEE" dans le champ "nameEditIntituleTypeHTML" du form HTML "TypesEdit.html"
            # le "%s" permet d'éviter des injections SQL "simples"
            # <td><input type = "text" name = "nameEditIntituleTypeHTML" value="{{ row.intitule_type }}"/></td>
            strsqlUpdateIntituleType = "UPDATE t_types SET Nom_type = %s WHERE ID_type = %s"

            # OM 2019.04.02 Insertion de la valeur "CLAVIOTTEE" mais validée par la REGEX
            curseur_dbc.execute(strsqlUpdateIntituleType, (Nom_typeType, ID_typeEdit,))
            # OM 2019.04.02 "commit" permet de finaliser la transaction !!
            connection_dbc.commit()

            # OM 2019.04.02 Commande MySql pour afficher la liste des types classée par ordre décroissant
            # ainsi on voit la dernière valeur insérée en premier dans la liste.
            strsqlTypesAfficher = "SELECT * FROM t_types ORDER BY ID_type DESC"
            # OM 2019.04.02 La chaîne de caractères MySql est envoyée au serveur MySql.
            curseur_dbc.execute(strsqlTypesAfficher)

            # OM 2019.04.02 On récupère dans "dataTypes" toutes les lignes et les colonnes demandées par l'instruction MySql                
            dataTypes = curseur_dbc.fetchall()
            
            # OM 2019.04.02 "commit" permet de finaliser la transaction !!
            # Remarque : dans le cas d'un SELECT ce n'est pas "très" utile, mais c'est surtout pour ne pas l'oublier 
            # lors des requêtes UPDATE, INSERT et DELETE
            connection_dbc.commit()
            
            # OM 2019.04.02 Message de confirmation pour prendre soin du moral de l'utilisateur
            message_html = 'Type modifié.'
            # OM 2019.04.02 On va afficher la liste des types des films
            return render_template('types/TypesAfficher.html', data = dataTypes, msgHtml = message_html)


        except (pymysql.err.OperationalError, pymysql.ProgrammingError, pymysql.InternalError, pymysql.IntegrityError, TypeError) as error:
            # OM 2019.03.28 Traiter spécifiquement l'erreur MySql 1062
            # pour obtenir cette erreur 1062 il faut que la colonne "intitule_type" dans la table "t_types"
            # soit déclarée avec l'attribut "UNIQUE"
            if error.args[0] == 1062:
                # OM 2019.04.02 Deux façons de communiquer une erreur causée par l'insertion d'une valeur à double.
                message_html = "La valeur " + nameType + " existe déjà !!!"
                flash('Doublon !!! Introduire une valeur différente')
                # OM 2019.04.02 On doit afficher à nouveau le formulaire d'introduction.
                # avec ce que l'utilisateur avait sélectionné ---> Commande MySql pour Réafficher le type sélectionné 
                # le "%s" permet d'éviter des injections SQL "simples"
                strsqlID_typeDbl = "SELECT * FROM t_types WHERE ID_type = %s"
                # OM 2019.04.02 La commande MySql est envoyée à la BD
                # la valeur du "%s" est enfin associée à "ID_typeEdit"
                curseur_dbc.execute(strsqlID_typeDbl, (ID_typeEdit,))
                # OM 2019.04.02 Toutes les données sont dans la variable "dataID_type"
                dataID_type = curseur_dbc.fetchall()
                # OM 2019.04.02 "commit" permet de finaliser la transaction !!
                # Remarque : dans le cas d'un SELECT ce n'est pas "très" utile, mais c'est surtout pour ne pas l'oublier 
                # lors des requêtes UPDATE, INSERT et DELETE
                connection_dbc.commit()

                return render_template('types/TypesEdit.html', data = dataID_type, msgHtml = message_html)
            else:
                # OM 2019.04.02 Trois façons de communiquer qu'une autre erreur que la 1062 est survenue.
                print( 'MySQL?????%d?%s' % (error.args[ 0 ], error.args[ 1 ]) )
                message_html = "Problème monstrueux !!! "
                flash('MySQL?????%d?%s' % (error.args[ 0 ], error.args[ 1 ]))

            # OM 2019.04.02 La méthode "rollback" est très importante, car elle permet de ne pas finaliser la transaction.
            connection_dbc.rollback()

        finally:
            # OM 2019.03.22 On ferme ce qu'on a ouvert avant.
            connection_dbc.close()
            curseur_dbc.close()                 


    # OM 2019.04.02 Envoie la page "HTML" au serveur. On passe un message d'information dans "message_html"
    return render_template('types/TypesEdit.html', msgHtml = message_html)


#---------------------------------------------------------------------------------------------------
# OM 2019.04.04 Définition d'une "route" /typesSelectDelete , cela va permettre de programmer quelles actions sont réalisées avant de l'envoyer
# au navigateur par la méthode "render_template".
# Afficher le "type" qui va être effacé. Le "type" à effacé est choisi par le bouton "DELETE" donc il renvoie "ID_typeDeleteHTML"
#---------------------------------------------------------------------------------------------------
@types.route('/typesSelectDelete',methods = ['POST', 'GET'])
def typesSelectDeletePydef():

    if request.method == 'GET':
        try:
            # OM 2019.04.04 CONNECTION A LA BD
            connection_dbc = DbUtil.get_connection()

            # OM 2019.04.04 Définition d'un "curseur" qui va permettre d'interagir avec la BD pour faire des requêtes.
            curseur_dbc = connection_dbc.cursor()

            # OM 2019.04.04 Récupérer la valeur de "ID_typeDeleteHTML" du formulaire html "TypesDelete.html"
            ID_typeSelectDelete = request.args.get('ID_typeDeleteHTML')
            # OM 2019.04.04 Afficher le "type" à effacer (choisi par l'utilisateur) bouton "DELETE" du formulaire "TypesAfficher.html"
            # <a href="{{ url_for('types.typesDeletePydef', ID_typeDeleteHTML=row.ID_type) }}">Delete</a>
            # le "%s" permet d'éviter des injections SQL "simples"
            strsqlSelectDeleteType = "SELECT * FROM t_types WHERE ID_type = %s"
            # OM 2019.04.04 La commande MySql est envoyée à la BD
            # la valeur du "%s" est enfin associée à "ID_typeSelectDelete"
            curseur_dbc.execute(strsqlSelectDeleteType, (ID_typeSelectDelete,))
            # OM 2019.04.04 Toutes les données du SELECT sont dans la variable "dataIdSousCategorieSelDel"        
            dataIdSousCategorieSelDel = curseur_dbc.fetchall()
            # OM 2019.04.04 "commit" permet de finaliser la transaction !!
            # Remarque : dans le cas d'un SELECT ce n'est pas "très" utile, mais c'est surtout pour ne pas l'oublier 
            # lors des requêtes UPDATE, INSERT et DELETE            
            connection_dbc.commit()
            message_html = "EFFACER et c'est terminé pour cette \"POV\" valeur !!!"

        except (pymysql.err.OperationalError, pymysql.ProgrammingError, pymysql.InternalError, pymysql.IntegrityError, TypeError) as error:            
            # OM 2019.04.04 La méthode "rollback" est très importante, car elle permet de ne pas finaliser la transaction.
            connection_dbc.rollback()
            # OM 2019.04.04 Trois façons de communiquer qu'une autre erreur est survenue.
            print( 'MySQL?????%d?%s' % (error.args[ 0 ], error.args[ 1 ]) )
            message_html = "Problème monstrueux !!! "
            flash('MySQL?????%d?%s' % (error.args[ 0 ], error.args[ 1 ]))
        finally:
            # OM 2019.04.04 On ferme ce qu'on a ouvert avant.
            connection_dbc.close()
            curseur_dbc.close()

    # OM 2019.04.04 Envoie la page "HTML" au serveur. On passe un message d'information dans "message_html"
    return render_template('types/TypesDelete.html', data = dataIdSousCategorieSelDel, msgHtml = message_html)


#---------------------------------------------------------------------------------------------------
# OM 2019.04.02 Définition d'une "route" /typesUpdate , cela va permettre de programmer quelles actions sont réalisées avant de l'envoyer
# au navigateur par la méthode "render_template".
# Permettre à l'utilisateur de modifier un type, et de filtrer son entrée grâce à des expressions régulières REGEXP
#---------------------------------------------------------------------------------------------------
@types.route('/typesDelete',methods = ['POST', 'GET'])
def typesDeletePydef():

    # OM 2019.04.02 Pour
    message_html = 'Effacer un type !'

    # OM 2019.04.02 Pour savoir si les données d'un formulaire sont un affichage ou un envoi de donnée par des champs utilisateurs.
    if request.method == 'POST':
        try:
            # OM 2019.04.02 CONNECTION A LA BD
            connection_dbc = DbUtil.get_connection()

            # OM 2019.04.02 Définition d'un "curseur" qui va permettre d'interagir avec la BD pour faire des requêtes.
            curseur_dbc = connection_dbc.cursor()

            # OM 2019.04.02 Récupérer la valeur de "ID_type" du formulaire html "TypesAfficher.html"
            ID_typeDelete = request.form['ID_typeDeleteHTML']            

            # OM 2019.04.02 On doit afficher à nouveau le formulaire d'introduction.
            # avec ce que l'utilisateur avait sélectionné ---> Commande MySql pour Réafficher le type sélectionné 
            # le "%s" permet d'éviter des injections SQL "simples"
            strsqlDeleteType = "DELETE FROM t_types WHERE ID_type = %s"
            # OM 2019.04.02 La commande MySql est envoyée à la BD
            # la valeur du "%s" est enfin associée à "ID_typeEdit"
            curseur_dbc.execute(strsqlDeleteType, (ID_typeDelete,))
            # OM 2019.04.02 "commit" permet de finaliser la transaction !!
            connection_dbc.commit()

            # OM 2019.04.02 Commande MySql pour afficher la liste des types classée par ordre décroissant
            # ainsi on voit la dernière valeur insérée en premier dans la liste.
            strsqlTypesAfficher = "SELECT * FROM t_types ORDER BY ID_type DESC"
            # OM 2019.04.02 La chaîne de caractères MySql est envoyée au serveur MySql.
            curseur_dbc.execute(strsqlTypesAfficher)

            # OM 2019.04.02 On récupère dans "dataTypes" toutes les lignes et les colonnes demandées par l'instruction MySql                
            dataTypes = curseur_dbc.fetchall()
            
            # OM 2019.04.02 "commit" permet de finaliser la transaction !!
            # Remarque : dans le cas d'un SELECT ce n'est pas "très" utile, mais c'est surtout pour ne pas l'oublier 
            # lors des requêtes UPDATE, INSERT et DELETE
            connection_dbc.commit()
            
            # OM 2019.04.02 Message de confirmation pour prendre soin du moral de l'utilisateur
            message_html = 'Type effacé.'
            # OM 2019.04.02 On va afficher la liste des types des films
            # OM 2019.04.02 Envoie la page "HTML" au serveur. On passe un message d'information dans "message_html"
            return render_template('types/TypesAfficher.html', data = dataTypes,  msgHtml = message_html)
            


        except (pymysql.err.OperationalError, pymysql.ProgrammingError, pymysql.InternalError, pymysql.IntegrityError, TypeError) as error:
            # OM 2019.03.28 Traiter spécifiquement l'erreur MySql 1451
            # Cette erreur 1451, signifie qu'on veut effacer un "type" de films qui est associé dans "t_type_film".
            if error.args[0] == 1451:
                # OM 2019.04.02 Deux façons de communiquer une erreur causée par l'insertion d'une valeur à double.
                message_html = "IMPOSSIBLE d'effacer l'ID_type " + ID_typeDelete + " cette valeur est associée à des films !!!"
                flash('IMPOSSIBLE d\'effacer !!! Cette valeur est associée à des films !')
                # OM 2019.04.02 Commande MySql pour afficher la liste des types classée par ordre décroissant.
                strsqlTypesAfficher = "SELECT * FROM t_types"
                # OM 2019.04.02 La chaîne de caractères MySql est envoyée au serveur MySql.
                curseur_dbc.execute(strsqlTypesAfficher)

                # OM 2019.04.02 On récupère dans "dataTypes" toutes les lignes et les colonnes demandées par l'instruction MySql                
                dataTypesAfterDelete = curseur_dbc.fetchall()
                
                # OM 2019.04.02 "commit" permet de finaliser la transaction !!
                # Remarque : dans le cas d'un SELECT ce n'est pas "très" utile, mais c'est surtout pour ne pas l'oublier 
                # lors des requêtes UPDATE, INSERT et DELETE
                connection_dbc.commit()

                # OM 2019.04.02 On va afficher la liste des types des films
                return render_template('types/TypesAfficher.html', data = dataTypesAfterDelete, msgHtml = message_html)
            else:
                # OM 2019.04.02 Trois façons de communiquer qu'une autre erreur que la 1062 est survenue.
                print( 'MySQL?????%d?%s' % (error.args[ 0 ], error.args[ 1 ]) )
                message_html = "Problème monstrueux !!! "
                flash('MySQL?????%d?%s' % (error.args[ 0 ], error.args[ 1 ]))

            # OM 2019.04.02 La méthode "rollback" est très importante, car elle permet de ne pas finaliser la transaction.
            connection_dbc.rollback()

        finally:
            # OM 2019.03.22 On ferme ce qu'on a ouvert avant.
            connection_dbc.close()
            curseur_dbc.close()                 


    # OM 2019.04.02 Envoie la page "HTML" au serveur. On passe un message d'information dans "message_html"
    return render_template('types/TypesAfficher.html',  msgHtml = message_html)
