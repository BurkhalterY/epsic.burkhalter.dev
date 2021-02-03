# OM DE B MARS 2019 GestionPersonnes.py
# Tout ce qui concerne la gestion des personnes des films.

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
personnes = Blueprint('personnes', __name__, template_folder='templates')

# OM 2019.03.25 On doit importer le module "ConnectDB.py", outils autour de la BD.
from ConnectDB import DbUtil

# OM 2019.03.25 On doit importer cette méthode "render_template"
# Request pour gérer les méthodes HTTP POST et GET
from flask import render_template, request

#---------------------------------------------------------------------------------------------------
# OM 2019.03.25 Définition d'une "route" /personnesAfficher , cela va permettre de programmer quelles actions sont réalisées avant de l'envoyer
# au navigateur par la méthode "render_template", si il y a une erreur c'est cette méthode "render_template" doit être "importer" au début de ce fichier.
#---------------------------------------------------------------------------------------------------
@personnes.route('/personnesAfficher', methods=['GET', 'POST'])
def varPyRoutePersonnes():

    # OM 2019.03.25 Pour savoir si les données d'un formulaire sont un affichage ou un envoi de donnée par des champs utilisateurs.
    if request.method == "GET":
        try: 
            # OM 2019.03.25 CONNECTION A LA BD
            connection_dbc = DbUtil.get_connection()

            # OM 2019.03.25 Définition d'un "curseur" qui va permettre d'interagir avec la BD pour faire des requêtes.
            curseur_dbc = connection_dbc.cursor()

            # OM 2019.03.25 C'EST LA QUE VOUS ALLEZ DEVOIR PLACER VOTRE PROPRE LOGIQUE MySql
            strsqlPersonnesAfficher = "SELECT * FROM t_personnes"
            # OM 2019.03.25 La chaîne de caractères MySql est envoyée au serveur MySql.
            curseur_dbc.execute(strsqlPersonnesAfficher)
            # OM 2019.03.25 On récupère dans "dataPersonnes" toutes les lignes et les colonnes demandées par l'instruction MySql
            dataPersonnes = curseur_dbc.fetchall()

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
    return render_template('personnes/PersonnesAfficher.html',data = dataPersonnes, msgHtml = message_html)


#---------------------------------------------------------------------------------------------------
# OM 2019.03.17 Définition d'une "route" /personnesAdd , cela va permettre de programmer quelles actions sont réalisées avant de l'envoyer
# au navigateur par la méthode "render_template".
#---------------------------------------------------------------------------------------------------
@personnes.route('/personnesAdd',methods = ['POST', 'GET'])
def personnesAddPydef():

    # OM 2019.03.17 Pour
    message_html = 'Ajouter un personne !'

    # OM 2019.03.17 Pour savoir si les données d'un formulaire sont un affichage ou un envoi de donnée par des champs utilisateurs.
    if request.method == 'POST':
        try:
            # OM 2019.03.17 CONNECTION A LA BD
            connection_dbc = DbUtil.get_connection()

            # OM 2019.03.17 Définition d'un "curseur" qui va permettre d'interagir avec la BD pour faire des requêtes.
            curseur_dbc = connection_dbc.cursor()
            
            # OM 2019.03.17 Récupère le contenu du champ dans le formulaire HTML "PersonnesAdd.html"
            nomPersonne = request.form['nomPersonneHTML']
            prenomPersonne = request.form['prenomPersonneHTML']
            # OM 2019.03.17 Commande MySql pour l'insertion de la valeur "CLAVIOTTEE" dans le champ du form HTML
            # le "%s" permet d'éviter des injections SQL "simples"
            strsqlInsertPersonne = "INSERT INTO t_personnes (nom, prenom) VALUES (%s, %s)"

            # OM 2019.03.17 Insertion de la valeur "CLAVIOTTEE" mais validée par la REGEX
            curseur_dbc.execute(strsqlInsertPersonne, (nomPersonne, prenomPersonne))

            # OM 2019.03.17 "commit" permet de finaliser la transaction !!
            connection_dbc.commit()

            # OM 2019.03.17 Commande MySql pour afficher la liste des personnes classée par ordre décroissant
            # ainsi on voit la dernière valeur insérée en premier dans la liste.
            strsqlPersonnesAfficher = "SELECT * FROM t_personnes ORDER BY id DESC"
            # OM 2019.03.17 La chaîne de caractères MySql est envoyée au serveur MySql.
            curseur_dbc.execute(strsqlPersonnesAfficher)

            # OM 2019.03.17 On récupère dans "dataPersonnes" toutes les lignes et les colonnes demandées par l'instruction MySql                
            dataPersonnes = curseur_dbc.fetchall()

            # OM 2019.03.17 Message de confirmation pour prendre soin du moral de l'utilisateur
            message_html = 'Personne ajouté.'
            # OM 2019.03.17 On va afficher la liste des personnes des films
            return render_template('personnes/PersonnesAfficher.html', data = dataPersonnes, msgHtml = message_html)


        except (pymysql.err.OperationalError, pymysql.ProgrammingError, pymysql.InternalError, pymysql.IntegrityError, TypeError) as error:
            # OM 2019.03.28 Traiter spécifiquement l'erreur MySql 1062
            # pour obtenir cette erreur 1062 il faut que la colonne "intitule_personne" dans la table "t_personnes"
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
    return render_template('personnes/PersonnesAdd.html', msgHtml = message_html)



#---------------------------------------------------------------------------------------------------
# OM 2019.04.02 Définition d'une "route" /personnesEdit , cela va permettre de programmer quelles actions sont réalisées avant de l'envoyer
# au navigateur par la méthode "render_template".
# On change la valeur d'un personne de films par la commande MySql "UPDATE"
#---------------------------------------------------------------------------------------------------
@personnes.route('/personnesEdit',methods = ['POST', 'GET'])
def personnesEditPydef():

    # OM 2019.04.02 Les données sont affichées dans un formulaire, l'affichage de la sélection
    # d'une seule ligne choisie par le bouton "edit" dans le formulaire "PersonnesAfficher.html"
    if request.method == 'GET':
        try:
            # OM 2019.04.02 CONNECTION A LA BD
            connection_dbc = DbUtil.get_connection()

            # OM 2019.04.02 Définition d'un "curseur" qui va permettre d'interagir avec la BD pour faire des requêtes.
            curseur_dbc = connection_dbc.cursor()
            
            # OM 2019.04.02 Récupérer la valeur de "id" du formulaire html "PersonneAfficher.html"
            # l'utilisateur clique sur le lien "edit" et on récupére la valeur de "id" grâce à la variable "idEditHTML"
            # <a href="{{ url_for('personnes.personnesEditPydef', idEditHTML=row.id) }}">Edit</a>
            idEdit = request.values['idEditHTML']

            # OM 2019.04.02 Pour afficher dans la console la valeur de "id", une façon simple de se rassurer, sans utiliser le DEBUGGER.
            # print(idEdit)

            # OM 2019.04.02 Commande MySql pour afficher le personne sélectionné dans le tableau dans le formulaire HTML
            # le "%s" permet d'éviter des injections SQL "simples"
            strsqlId = "SELECT * FROM t_personnes WHERE id = %s"
            # OM 2019.04.02 La commande MySql est envoyée à la BD
            # la valeur du "%s" est enfin associée à "idEdit"
            curseur_dbc.execute(strsqlId, (idEdit,))

            # OM 2019.04.02 Toutes les données sont dans la variable "dataId"
            dataId = curseur_dbc.fetchall()

            # OM 2019.04.02 "commit" permet de finaliser la transaction !!
            # Remarque : dans le cas d'un SELECT ce n'est pas "très" utile, mais c'est surtout pour ne pas l'oublier 
            # lors des requêtes UPDATE, INSERT et DELETE
            connection_dbc.commit()
            # OM 2019.04.02 La ligne suivante permet d'indiquer à l'utilisateur que l'action s'est bien passée.
            message_html = "Editer le personne d'un film !!!"

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


    return render_template('personnes/PersonnesEdit.html', data = dataId, msgHtml = message_html)


#---------------------------------------------------------------------------------------------------    
# OM 2019.04.02 Définition d'une "route" /personnesUpdate , cela va permettre de programmer quelles actions sont réalisées avant de l'envoyer
# au navigateur par la méthode "render_template".
# Permettre à l'utilisateur de modifier un personne, et de filtrer son entrée grâce à des expressions régulières REGEXP
#---------------------------------------------------------------------------------------------------
@personnes.route('/personnesUpdate',methods = ['POST', 'GET'])
def personnesUpdatePydef():

    # OM 2019.04.02 Pour
    message_html = 'Modifier un personne !'

    # OM 2019.04.02 Pour savoir si les données d'un formulaire sont un affichage ou un envoi de donnée par des champs utilisateurs.
    if request.method == 'POST':
        try:
            # OM 2019.04.02 CONNECTION A LA BD
            connection_dbc = DbUtil.get_connection()

            # OM 2019.04.02 Définition d'un "curseur" qui va permettre d'interagir avec la BD pour faire des requêtes.
            curseur_dbc = connection_dbc.cursor()

            # OM 2019.04.02 Récupérer la valeur de "id" du formulaire html "PersonneEdit.html"
            idEdit = request.form['idEditHTML']            
            # OM 2019.04.02 Récupère le contenu du champ "intitule_personne" dans le formulaire HTML "PersonnesEdit.html"
            nomPersonne = request.form['nomPersonneHTML']
            prenomPersonne = request.form['prenomPersonneHTML']
            # OM 2019.04.02 Commande MySql pour la MODIFICATION de la valeur "CLAVIOTTEE" dans le champ "nameEditIntitulePersonneHTML" du form HTML "PersonnesEdit.html"
            # le "%s" permet d'éviter des injections SQL "simples"
            # <td><input type = "text" name = "nameEditIntitulePersonneHTML" value="{{ row.intitule_personne }}"/></td>
            strsqlUpdateIntitulePersonne = "UPDATE t_personnes SET nom = %s, prenom = %s WHERE id = %s"

            # OM 2019.04.02 Insertion de la valeur "CLAVIOTTEE" mais validée par la REGEX
            curseur_dbc.execute(strsqlUpdateIntitulePersonne, (nomPersonne, prenomPersonne, idEdit,))
            # OM 2019.04.02 "commit" permet de finaliser la transaction !!
            connection_dbc.commit()

            # OM 2019.04.02 Commande MySql pour afficher la liste des personnes classée par ordre décroissant
            # ainsi on voit la dernière valeur insérée en premier dans la liste.
            strsqlPersonnesAfficher = "SELECT * FROM t_personnes ORDER BY id DESC"
            # OM 2019.04.02 La chaîne de caractères MySql est envoyée au serveur MySql.
            curseur_dbc.execute(strsqlPersonnesAfficher)

            # OM 2019.04.02 On récupère dans "dataPersonnes" toutes les lignes et les colonnes demandées par l'instruction MySql                
            dataPersonnes = curseur_dbc.fetchall()
            
            # OM 2019.04.02 "commit" permet de finaliser la transaction !!
            # Remarque : dans le cas d'un SELECT ce n'est pas "très" utile, mais c'est surtout pour ne pas l'oublier 
            # lors des requêtes UPDATE, INSERT et DELETE
            connection_dbc.commit()
            
            # OM 2019.04.02 Message de confirmation pour prendre soin du moral de l'utilisateur
            message_html = 'Personne modifié.'
            # OM 2019.04.02 On va afficher la liste des personnes des films
            return render_template('personnes/PersonnesAfficher.html', data = dataPersonnes, msgHtml = message_html)


        except (pymysql.err.OperationalError, pymysql.ProgrammingError, pymysql.InternalError, pymysql.IntegrityError, TypeError) as error:
            # OM 2019.03.28 Traiter spécifiquement l'erreur MySql 1062
            # pour obtenir cette erreur 1062 il faut que la colonne "intitule_personne" dans la table "t_personnes"
            # soit déclarée avec l'attribut "UNIQUE"
            if error.args[0] == 1062:
                # OM 2019.04.02 Deux façons de communiquer une erreur causée par l'insertion d'une valeur à double.
                message_html = "La valeur " + namePersonne + " existe déjà !!!"
                flash('Doublon !!! Introduire une valeur différente')
                # OM 2019.04.02 On doit afficher à nouveau le formulaire d'introduction.
                # avec ce que l'utilisateur avait sélectionné ---> Commande MySql pour Réafficher le personne sélectionné 
                # le "%s" permet d'éviter des injections SQL "simples"
                strsqlIdDbl = "SELECT * FROM t_personnes WHERE id = %s"
                # OM 2019.04.02 La commande MySql est envoyée à la BD
                # la valeur du "%s" est enfin associée à "idEdit"
                curseur_dbc.execute(strsqlIdDbl, (idEdit,))
                # OM 2019.04.02 Toutes les données sont dans la variable "dataId"
                dataId = curseur_dbc.fetchall()
                # OM 2019.04.02 "commit" permet de finaliser la transaction !!
                # Remarque : dans le cas d'un SELECT ce n'est pas "très" utile, mais c'est surtout pour ne pas l'oublier 
                # lors des requêtes UPDATE, INSERT et DELETE
                connection_dbc.commit()

                return render_template('personnes/PersonnesEdit.html', data = dataId, msgHtml = message_html)
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
    return render_template('personnes/PersonnesEdit.html', msgHtml = message_html)


#---------------------------------------------------------------------------------------------------
# OM 2019.04.04 Définition d'une "route" /personnesSelectDelete , cela va permettre de programmer quelles actions sont réalisées avant de l'envoyer
# au navigateur par la méthode "render_template".
# Afficher le "personne" qui va être effacé. Le "personne" à effacé est choisi par le bouton "DELETE" donc il renvoie "idDeleteHTML"
#---------------------------------------------------------------------------------------------------
@personnes.route('/personnesSelectDelete',methods = ['POST', 'GET'])
def personnesSelectDeletePydef():

    if request.method == 'GET':
        try:
            # OM 2019.04.04 CONNECTION A LA BD
            connection_dbc = DbUtil.get_connection()

            # OM 2019.04.04 Définition d'un "curseur" qui va permettre d'interagir avec la BD pour faire des requêtes.
            curseur_dbc = connection_dbc.cursor()

            # OM 2019.04.04 Récupérer la valeur de "idDeleteHTML" du formulaire html "PersonnesDelete.html"
            idSelectDelete = request.args.get('idDeleteHTML')
            # OM 2019.04.04 Afficher le "personne" à effacer (choisi par l'utilisateur) bouton "DELETE" du formulaire "PersonnesAfficher.html"
            # <a href="{{ url_for('personnes.personnesDeletePydef', idDeleteHTML=row.id) }}">Delete</a>
            # le "%s" permet d'éviter des injections SQL "simples"
            strsqlSelectDeletePersonne = "SELECT * FROM t_personnes WHERE id = %s"
            # OM 2019.04.04 La commande MySql est envoyée à la BD
            # la valeur du "%s" est enfin associée à "idSelectDelete"
            curseur_dbc.execute(strsqlSelectDeletePersonne, (idSelectDelete,))
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
    return render_template('personnes/PersonnesDelete.html', data = dataIdSousCategorieSelDel, msgHtml = message_html)


#---------------------------------------------------------------------------------------------------
# OM 2019.04.02 Définition d'une "route" /personnesUpdate , cela va permettre de programmer quelles actions sont réalisées avant de l'envoyer
# au navigateur par la méthode "render_template".
# Permettre à l'utilisateur de modifier un personne, et de filtrer son entrée grâce à des expressions régulières REGEXP
#---------------------------------------------------------------------------------------------------
@personnes.route('/personnesDelete',methods = ['POST', 'GET'])
def personnesDeletePydef():

    # OM 2019.04.02 Pour
    message_html = 'Effacer un personne !'

    # OM 2019.04.02 Pour savoir si les données d'un formulaire sont un affichage ou un envoi de donnée par des champs utilisateurs.
    if request.method == 'POST':
        try:
            # OM 2019.04.02 CONNECTION A LA BD
            connection_dbc = DbUtil.get_connection()

            # OM 2019.04.02 Définition d'un "curseur" qui va permettre d'interagir avec la BD pour faire des requêtes.
            curseur_dbc = connection_dbc.cursor()

            # OM 2019.04.02 Récupérer la valeur de "id" du formulaire html "PersonnesAfficher.html"
            idDelete = request.form['idDeleteHTML']            

            # OM 2019.04.02 On doit afficher à nouveau le formulaire d'introduction.
            # avec ce que l'utilisateur avait sélectionné ---> Commande MySql pour Réafficher le personne sélectionné 
            # le "%s" permet d'éviter des injections SQL "simples"
            strsqlDeletePersonne = "DELETE FROM t_personnes WHERE id = %s"
            # OM 2019.04.02 La commande MySql est envoyée à la BD
            # la valeur du "%s" est enfin associée à "idEdit"
            curseur_dbc.execute(strsqlDeletePersonne, (idDelete,))
            # OM 2019.04.02 "commit" permet de finaliser la transaction !!
            connection_dbc.commit()

            # OM 2019.04.02 Commande MySql pour afficher la liste des personnes classée par ordre décroissant
            # ainsi on voit la dernière valeur insérée en premier dans la liste.
            strsqlPersonnesAfficher = "SELECT * FROM t_personnes ORDER BY id DESC"
            # OM 2019.04.02 La chaîne de caractères MySql est envoyée au serveur MySql.
            curseur_dbc.execute(strsqlPersonnesAfficher)

            # OM 2019.04.02 On récupère dans "dataPersonnes" toutes les lignes et les colonnes demandées par l'instruction MySql                
            dataPersonnes = curseur_dbc.fetchall()
            
            # OM 2019.04.02 "commit" permet de finaliser la transaction !!
            # Remarque : dans le cas d'un SELECT ce n'est pas "très" utile, mais c'est surtout pour ne pas l'oublier 
            # lors des requêtes UPDATE, INSERT et DELETE
            connection_dbc.commit()
            
            # OM 2019.04.02 Message de confirmation pour prendre soin du moral de l'utilisateur
            message_html = 'Personne effacé.'
            # OM 2019.04.02 On va afficher la liste des personnes des films
            # OM 2019.04.02 Envoie la page "HTML" au serveur. On passe un message d'information dans "message_html"
            return render_template('personnes/PersonnesAfficher.html', data = dataPersonnes,  msgHtml = message_html)
            


        except (pymysql.err.OperationalError, pymysql.ProgrammingError, pymysql.InternalError, pymysql.IntegrityError, TypeError) as error:
            # OM 2019.03.28 Traiter spécifiquement l'erreur MySql 1451
            # Cette erreur 1451, signifie qu'on veut effacer un "personne" de films qui est associé dans "t_personne_film".
            if error.args[0] == 1451:
                # OM 2019.04.02 Deux façons de communiquer une erreur causée par l'insertion d'une valeur à double.
                message_html = "IMPOSSIBLE d'effacer l'id " + idDelete + " cette valeur est associée à des films !!!"
                flash('IMPOSSIBLE d\'effacer !!! Cette valeur est associée à des films !')
                # OM 2019.04.02 Commande MySql pour afficher la liste des personnes classée par ordre décroissant.
                strsqlPersonnesAfficher = "SELECT * FROM t_personnes"
                # OM 2019.04.02 La chaîne de caractères MySql est envoyée au serveur MySql.
                curseur_dbc.execute(strsqlPersonnesAfficher)

                # OM 2019.04.02 On récupère dans "dataPersonnes" toutes les lignes et les colonnes demandées par l'instruction MySql                
                dataPersonnesAfterDelete = curseur_dbc.fetchall()
                
                # OM 2019.04.02 "commit" permet de finaliser la transaction !!
                # Remarque : dans le cas d'un SELECT ce n'est pas "très" utile, mais c'est surtout pour ne pas l'oublier 
                # lors des requêtes UPDATE, INSERT et DELETE
                connection_dbc.commit()

                # OM 2019.04.02 On va afficher la liste des personnes des films
                return render_template('personnes/PersonnesAfficher.html', data = dataPersonnesAfterDelete, msgHtml = message_html)
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
    return render_template('personnes/PersonnesAfficher.html',  msgHtml = message_html)
