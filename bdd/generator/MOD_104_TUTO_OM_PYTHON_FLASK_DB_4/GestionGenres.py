# OM DE B MARS 2019 GestionGenres.py
# Tout ce qui concerne la gestion des genres des films.

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
genres = Blueprint('genres', __name__, template_folder='templates')

# OM 2019.03.25 On doit importer le module "ConnectDB.py", outils autour de la BD.
from ConnectDB import DbUtil

# OM 2019.03.25 On doit importer cette méthode "render_template"
# Request pour gérer les méthodes HTTP POST et GET
from flask import render_template, request

#---------------------------------------------------------------------------------------------------
# OM 2019.03.25 Définition d'une "route" /genresAfficher , cela va permettre de programmer quelles actions sont réalisées avant de l'envoyer
# au navigateur par la méthode "render_template", si il y a une erreur c'est cette méthode "render_template" doit être "importer" au début de ce fichier.
#---------------------------------------------------------------------------------------------------
@genres.route('/genresAfficher', methods=['GET', 'POST'])
def varPyRouteGenres():

    # OM 2019.03.25 Pour savoir si les données d'un formulaire sont un affichage ou un envoi de donnée par des champs utilisateurs.
    if request.method == "GET":
        try: 
            # OM 2019.03.25 CONNECTION A LA BD
            connection_dbc = DbUtil.get_connection()

            # OM 2019.03.25 Définition d'un "curseur" qui va permettre d'interagir avec la BD pour faire des requêtes.
            curseur_dbc = connection_dbc.cursor()

            # OM 2019.03.25 C'EST LA QUE VOUS ALLEZ DEVOIR PLACER VOTRE PROPRE LOGIQUE MySql
            strsqlGenresAfficher = "SELECT * FROM t_genres"
            # OM 2019.03.25 La chaîne de caractères MySql est envoyée au serveur MySql.
            curseur_dbc.execute(strsqlGenresAfficher)
            # OM 2019.03.25 On récupère dans "dataGenres" toutes les lignes et les colonnes demandées par l'instruction MySql
            dataGenres = curseur_dbc.fetchall()

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
    return render_template('genres/GenresAfficher.html',data = dataGenres, msgHtml = message_html)


#---------------------------------------------------------------------------------------------------
# OM 2019.03.17 Définition d'une "route" /genresAdd , cela va permettre de programmer quelles actions sont réalisées avant de l'envoyer
# au navigateur par la méthode "render_template".
#---------------------------------------------------------------------------------------------------
@genres.route('/genresAdd',methods = ['POST', 'GET'])
def genresAddPydef():

    # OM 2019.03.17 Pour
    message_html = 'Ajouter un genre !'

    # OM 2019.03.17 Pour savoir si les données d'un formulaire sont un affichage ou un envoi de donnée par des champs utilisateurs.
    if request.method == 'POST':
        try:
            # OM 2019.03.17 CONNECTION A LA BD
            connection_dbc = DbUtil.get_connection()

            # OM 2019.03.17 Définition d'un "curseur" qui va permettre d'interagir avec la BD pour faire des requêtes.
            curseur_dbc = connection_dbc.cursor()
            
            # OM 2019.03.17 Récupère le contenu du champ dans le formulaire HTML "GenresAdd.html"
            nameGenre = request.form['nameGenreHTML']

            # OM 2019.04.04 On ne doit pas accepter des valeurs vides, des valeurs avec des chiffres,
            # des valeurs avec des caractères qui ne sont pas des lettres.
            # Accepte le trait d'union ou l'apostrophe, et l'espace entre deux mots, mais pas plus d'une occurence.
            if not re.match("^([A-Z]|[a-z])[A-Za-z]*['\\- ]?[A-Za-z]+$", nameGenre):            

                # OM 2019.03.28 Message humiliant à l'attention de l'utilisateur.
                message_html = 'Une entrée...incorrecte !! Pas de chiffres, de caractères spéciaux, d\'espaces, de double apostrophe, de double trait union et ne doit pas être vide.'
                # OM 2019.03.28 On doit afficher à nouveau le formulaire d'introduction.
                return render_template('genres/GenresAdd.html', msgHtml = message_html)
            else:
                # OM 2019.03.17 Commande MySql pour l'insertion de la valeur "CLAVIOTTEE" dans le champ du form HTML
                # le "%s" permet d'éviter des injections SQL "simples"
                strsqlInsertGenre = "INSERT INTO t_genres (intitule_genre) VALUES (%s)"

                # OM 2019.03.17 Insertion de la valeur "CLAVIOTTEE" mais validée par la REGEX
                curseur_dbc.execute(strsqlInsertGenre, (nameGenre))

                # OM 2019.03.17 "commit" permet de finaliser la transaction !!
                connection_dbc.commit()

                # OM 2019.03.17 Commande MySql pour afficher la liste des genres classée par ordre décroissant
                # ainsi on voit la dernière valeur insérée en premier dans la liste.
                strsqlGenresAfficher = "SELECT * FROM t_genres ORDER BY id_genre DESC"
                # OM 2019.03.17 La chaîne de caractères MySql est envoyée au serveur MySql.
                curseur_dbc.execute(strsqlGenresAfficher)

                # OM 2019.03.17 On récupère dans "dataGenres" toutes les lignes et les colonnes demandées par l'instruction MySql                
                dataGenres = curseur_dbc.fetchall()

                # OM 2019.03.17 Message de confirmation pour prendre soin du moral de l'utilisateur
                message_html = 'Genre ajouté.'
                # OM 2019.03.17 On va afficher la liste des genres des films
                return render_template('genres/GenresAfficher.html', data = dataGenres, msgHtml = message_html)


        except (pymysql.err.OperationalError, pymysql.ProgrammingError, pymysql.InternalError, pymysql.IntegrityError, TypeError) as error:
            # OM 2019.03.28 Traiter spécifiquement l'erreur MySql 1062
            # pour obtenir cette erreur 1062 il faut que la colonne "intitule_genre" dans la table "t_genres"
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
    return render_template('genres/GenresAdd.html', msgHtml = message_html)



#---------------------------------------------------------------------------------------------------
# OM 2019.04.02 Définition d'une "route" /genresEdit , cela va permettre de programmer quelles actions sont réalisées avant de l'envoyer
# au navigateur par la méthode "render_template".
# On change la valeur d'un genre de films par la commande MySql "UPDATE"
#---------------------------------------------------------------------------------------------------
@genres.route('/genresEdit',methods = ['POST', 'GET'])
def genresEditPydef():

    # OM 2019.04.02 Les données sont affichées dans un formulaire, l'affichage de la sélection
    # d'une seule ligne choisie par le bouton "edit" dans le formulaire "GenresAfficher.html"
    if request.method == 'GET':
        try:
            # OM 2019.04.02 CONNECTION A LA BD
            connection_dbc = DbUtil.get_connection()

            # OM 2019.04.02 Définition d'un "curseur" qui va permettre d'interagir avec la BD pour faire des requêtes.
            curseur_dbc = connection_dbc.cursor()
            
            # OM 2019.04.02 Récupérer la valeur de "id_genre" du formulaire html "GenreAfficher.html"
            # l'utilisateur clique sur le lien "edit" et on récupére la valeur de "id_genre" grâce à la variable "idGenreEditHTML"
            # <a href="{{ url_for('genres.genresEditPydef', idGenreEditHTML=row.id_genre) }}">Edit</a>
            idGenreEdit = request.values['idGenreEditHTML']

            # OM 2019.04.02 Pour afficher dans la console la valeur de "id_genre", une façon simple de se rassurer, sans utiliser le DEBUGGER.
            # print(idGenreEdit)

            # OM 2019.04.02 Commande MySql pour afficher le genre sélectionné dans le tableau dans le formulaire HTML
            # le "%s" permet d'éviter des injections SQL "simples"
            strsqlIdGenre = "SELECT * FROM t_genres WHERE id_genre = %s"
            # OM 2019.04.02 La commande MySql est envoyée à la BD
            # la valeur du "%s" est enfin associée à "idGenreEdit"
            curseur_dbc.execute(strsqlIdGenre, (idGenreEdit,))

            # OM 2019.04.02 Toutes les données sont dans la variable "dataIdGenre"
            dataIdGenre = curseur_dbc.fetchall()

            # OM 2019.04.02 "commit" permet de finaliser la transaction !!
            # Remarque : dans le cas d'un SELECT ce n'est pas "très" utile, mais c'est surtout pour ne pas l'oublier 
            # lors des requêtes UPDATE, INSERT et DELETE
            connection_dbc.commit()
            # OM 2019.04.02 La ligne suivante permet d'indiquer à l'utilisateur que l'action s'est bien passée.
            message_html = "Editer le genre d'un film !!!"

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


    return render_template('genres/GenresEdit.html', data = dataIdGenre, msgHtml = message_html)


#---------------------------------------------------------------------------------------------------    
# OM 2019.04.02 Définition d'une "route" /genresUpdate , cela va permettre de programmer quelles actions sont réalisées avant de l'envoyer
# au navigateur par la méthode "render_template".
# Permettre à l'utilisateur de modifier un genre, et de filtrer son entrée grâce à des expressions régulières REGEXP
#---------------------------------------------------------------------------------------------------
@genres.route('/genresUpdate',methods = ['POST', 'GET'])
def genresUpdatePydef():

    # OM 2019.04.02 Pour
    message_html = 'Modifier un genre !'

    # OM 2019.04.02 Pour savoir si les données d'un formulaire sont un affichage ou un envoi de donnée par des champs utilisateurs.
    if request.method == 'POST':
        try:
            # OM 2019.04.02 CONNECTION A LA BD
            connection_dbc = DbUtil.get_connection()

            # OM 2019.04.02 Définition d'un "curseur" qui va permettre d'interagir avec la BD pour faire des requêtes.
            curseur_dbc = connection_dbc.cursor()

            # OM 2019.04.02 Récupérer la valeur de "id_genre" du formulaire html "GenreEdit.html"
            idGenreEdit = request.form['idGenreEditHTML']            
            # OM 2019.04.02 Récupère le contenu du champ "intitule_genre" dans le formulaire HTML "GenresEdit.html"
            nameGenre = request.form['nameEditIntituleGenreHTML']

            # OM 2019.04.04 On ne doit pas accepter des valeurs vides, des valeurs avec des chiffres,
            # des valeurs avec des caractères qui ne sont pas des lettres.
            # Accepte le trait d'union ou l'apostrophe, et l'espace entre deux mots, mais pas plus d'une occurence.
            if not re.match("^([A-Z]|[a-z])[A-Za-z]*['\\- ]?[A-Za-z]+$", nameGenre):

                # OM 2019.04.02 Message humiliant à l'attention de l'utilisateur.
                message_html = 'Pas de chiffres, de caractères spéciaux, d\'espaces, de double apostrophe, de double trait union et ne doit pas être vide.'


                # OM 2019.04.02 On doit afficher à nouveau le formulaire d'introduction.
                # avec ce que l'utilisateur avait sélectionné ---> Commande MySql pour Réafficher le genre sélectionné 
                # le "%s" permet d'éviter des injections SQL "simples"
                strsqlIdGenre = "SELECT * FROM t_genres WHERE id_genre = %s"
                # OM 2019.04.02 La commande MySql est envoyée à la BD
                # la valeur du "%s" est enfin associée à "idGenreEdit"
                curseur_dbc.execute(strsqlIdGenre, (idGenreEdit,))
                # OM 2019.04.02 Toutes les données sont dans la variable "dataIdGenre"
                dataIdGenre = curseur_dbc.fetchall()
                # OM 2019.04.02 "commit" permet de finaliser la transaction !!
                # Remarque : dans le cas d'un SELECT ce n'est pas "très" utile, mais c'est surtout pour ne pas l'oublier 
                # lors des requêtes UPDATE, INSERT et DELETE
                connection_dbc.commit()

                return render_template('genres/GenresEdit.html', data = dataIdGenre, msgHtml = message_html)
            else:
                # OM 2019.04.02 Commande MySql pour la MODIFICATION de la valeur "CLAVIOTTEE" dans le champ "nameEditIntituleGenreHTML" du form HTML "GenresEdit.html"
                # le "%s" permet d'éviter des injections SQL "simples"
                # <td><input type = "text" name = "nameEditIntituleGenreHTML" value="{{ row.intitule_genre }}"/></td>
                strsqlUpdateIntituleGenre = "UPDATE t_genres SET intitule_genre = %s WHERE id_genre = %s"

                # OM 2019.04.02 Insertion de la valeur "CLAVIOTTEE" mais validée par la REGEX
                curseur_dbc.execute(strsqlUpdateIntituleGenre, (nameGenre, idGenreEdit,))
                # OM 2019.04.02 "commit" permet de finaliser la transaction !!
                connection_dbc.commit()

                # OM 2019.04.02 Commande MySql pour afficher la liste des genres classée par ordre décroissant
                # ainsi on voit la dernière valeur insérée en premier dans la liste.
                strsqlGenresAfficher = "SELECT * FROM t_genres ORDER BY id_genre DESC"
                # OM 2019.04.02 La chaîne de caractères MySql est envoyée au serveur MySql.
                curseur_dbc.execute(strsqlGenresAfficher)

                # OM 2019.04.02 On récupère dans "dataGenres" toutes les lignes et les colonnes demandées par l'instruction MySql                
                dataGenres = curseur_dbc.fetchall()
                
                # OM 2019.04.02 "commit" permet de finaliser la transaction !!
                # Remarque : dans le cas d'un SELECT ce n'est pas "très" utile, mais c'est surtout pour ne pas l'oublier 
                # lors des requêtes UPDATE, INSERT et DELETE
                connection_dbc.commit()
                
                # OM 2019.04.02 Message de confirmation pour prendre soin du moral de l'utilisateur
                message_html = 'Genre modifié.'
                # OM 2019.04.02 On va afficher la liste des genres des films
                return render_template('genres/GenresAfficher.html', data = dataGenres, msgHtml = message_html)


        except (pymysql.err.OperationalError, pymysql.ProgrammingError, pymysql.InternalError, pymysql.IntegrityError, TypeError) as error:
            # OM 2019.03.28 Traiter spécifiquement l'erreur MySql 1062
            # pour obtenir cette erreur 1062 il faut que la colonne "intitule_genre" dans la table "t_genres"
            # soit déclarée avec l'attribut "UNIQUE"
            if error.args[0] == 1062:
                # OM 2019.04.02 Deux façons de communiquer une erreur causée par l'insertion d'une valeur à double.
                message_html = "La valeur " + nameGenre + " existe déjà !!!"
                flash('Doublon !!! Introduire une valeur différente')
                # OM 2019.04.02 On doit afficher à nouveau le formulaire d'introduction.
                # avec ce que l'utilisateur avait sélectionné ---> Commande MySql pour Réafficher le genre sélectionné 
                # le "%s" permet d'éviter des injections SQL "simples"
                strsqlIdGenreDbl = "SELECT * FROM t_genres WHERE id_genre = %s"
                # OM 2019.04.02 La commande MySql est envoyée à la BD
                # la valeur du "%s" est enfin associée à "idGenreEdit"
                curseur_dbc.execute(strsqlIdGenreDbl, (idGenreEdit,))
                # OM 2019.04.02 Toutes les données sont dans la variable "dataIdGenre"
                dataIdGenre = curseur_dbc.fetchall()
                # OM 2019.04.02 "commit" permet de finaliser la transaction !!
                # Remarque : dans le cas d'un SELECT ce n'est pas "très" utile, mais c'est surtout pour ne pas l'oublier 
                # lors des requêtes UPDATE, INSERT et DELETE
                connection_dbc.commit()

                return render_template('genres/GenresEdit.html', data = dataIdGenre, msgHtml = message_html)
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
    return render_template('genres/GenresUpdate.html', msgHtml = message_html)


#---------------------------------------------------------------------------------------------------
# OM 2019.04.04 Définition d'une "route" /genresSelectDelete , cela va permettre de programmer quelles actions sont réalisées avant de l'envoyer
# au navigateur par la méthode "render_template".
# Afficher le "genre" qui va être effacé. Le "genre" à effacé est choisi par le bouton "DELETE" donc il renvoie "idGenreDeleteHTML"
#---------------------------------------------------------------------------------------------------
@genres.route('/genresSelectDelete',methods = ['POST', 'GET'])
def genresSelectDeletePydef():

    if request.method == 'GET':
        try:
            # OM 2019.04.04 CONNECTION A LA BD
            connection_dbc = DbUtil.get_connection()

            # OM 2019.04.04 Définition d'un "curseur" qui va permettre d'interagir avec la BD pour faire des requêtes.
            curseur_dbc = connection_dbc.cursor()

            # OM 2019.04.04 Récupérer la valeur de "idGenreDeleteHTML" du formulaire html "GenresDelete.html"
            idGenreSelectDelete = request.args.get('idGenreDeleteHTML')
            # OM 2019.04.04 Afficher le "genre" à effacer (choisi par l'utilisateur) bouton "DELETE" du formulaire "GenresAfficher.html"
            # <a href="{{ url_for('genres.genresDeletePydef', idGenreDeleteHTML=row.id_genre) }}">Delete</a>
            # le "%s" permet d'éviter des injections SQL "simples"
            strsqlSelectDeleteGenre = "SELECT * FROM t_genres WHERE id_genre = %s"
            # OM 2019.04.04 La commande MySql est envoyée à la BD
            # la valeur du "%s" est enfin associée à "idGenreSelectDelete"
            curseur_dbc.execute(strsqlSelectDeleteGenre, (idGenreSelectDelete,))
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
    return render_template('genres/GenresDelete.html', data = dataIdSousCategorieSelDel, msgHtml = message_html)


#---------------------------------------------------------------------------------------------------
# OM 2019.04.02 Définition d'une "route" /genresUpdate , cela va permettre de programmer quelles actions sont réalisées avant de l'envoyer
# au navigateur par la méthode "render_template".
# Permettre à l'utilisateur de modifier un genre, et de filtrer son entrée grâce à des expressions régulières REGEXP
#---------------------------------------------------------------------------------------------------
@genres.route('/genresDelete',methods = ['POST', 'GET'])
def genresDeletePydef():

    # OM 2019.04.02 Pour
    message_html = 'Effacer un genre !'

    # OM 2019.04.02 Pour savoir si les données d'un formulaire sont un affichage ou un envoi de donnée par des champs utilisateurs.
    if request.method == 'POST':
        try:
            # OM 2019.04.02 CONNECTION A LA BD
            connection_dbc = DbUtil.get_connection()

            # OM 2019.04.02 Définition d'un "curseur" qui va permettre d'interagir avec la BD pour faire des requêtes.
            curseur_dbc = connection_dbc.cursor()

            # OM 2019.04.02 Récupérer la valeur de "id_genre" du formulaire html "GenresAfficher.html"
            idGenreDelete = request.form['idGenreDeleteHTML']            

            # OM 2019.04.02 On doit afficher à nouveau le formulaire d'introduction.
            # avec ce que l'utilisateur avait sélectionné ---> Commande MySql pour Réafficher le genre sélectionné 
            # le "%s" permet d'éviter des injections SQL "simples"
            strsqlDeleteGenre = "DELETE FROM t_genres WHERE id_genre = %s"
            # OM 2019.04.02 La commande MySql est envoyée à la BD
            # la valeur du "%s" est enfin associée à "idGenreEdit"
            curseur_dbc.execute(strsqlDeleteGenre, (idGenreDelete,))
            # OM 2019.04.02 "commit" permet de finaliser la transaction !!
            connection_dbc.commit()

            # OM 2019.04.02 Commande MySql pour afficher la liste des genres classée par ordre décroissant
            # ainsi on voit la dernière valeur insérée en premier dans la liste.
            strsqlGenresAfficher = "SELECT * FROM t_genres ORDER BY id_genre DESC"
            # OM 2019.04.02 La chaîne de caractères MySql est envoyée au serveur MySql.
            curseur_dbc.execute(strsqlGenresAfficher)

            # OM 2019.04.02 On récupère dans "dataGenres" toutes les lignes et les colonnes demandées par l'instruction MySql                
            dataGenres = curseur_dbc.fetchall()
            
            # OM 2019.04.02 "commit" permet de finaliser la transaction !!
            # Remarque : dans le cas d'un SELECT ce n'est pas "très" utile, mais c'est surtout pour ne pas l'oublier 
            # lors des requêtes UPDATE, INSERT et DELETE
            connection_dbc.commit()
            
            # OM 2019.04.02 Message de confirmation pour prendre soin du moral de l'utilisateur
            message_html = 'Genre effacé.'
            # OM 2019.04.02 On va afficher la liste des genres des films
            # OM 2019.04.02 Envoie la page "HTML" au serveur. On passe un message d'information dans "message_html"
            return render_template('genres/GenresAfficher.html', data = dataGenres,  msgHtml = message_html)
            


        except (pymysql.err.OperationalError, pymysql.ProgrammingError, pymysql.InternalError, pymysql.IntegrityError, TypeError) as error:
            # OM 2019.03.28 Traiter spécifiquement l'erreur MySql 1451
            # Cette erreur 1451, signifie qu'on veut effacer un "genre" de films qui est associé dans "t_genre_film".
            if error.args[0] == 1451:
                # OM 2019.04.02 Deux façons de communiquer une erreur causée par l'insertion d'une valeur à double.
                message_html = "IMPOSSIBLE d'effacer l'id_genre " + idGenreDelete + " cette valeur est associée à des films !!!"
                flash('IMPOSSIBLE d\'effacer !!! Cette valeur est associée à des films !')
                # OM 2019.04.02 Commande MySql pour afficher la liste des genres classée par ordre décroissant.
                strsqlGenresAfficher = "SELECT * FROM t_genres"
                # OM 2019.04.02 La chaîne de caractères MySql est envoyée au serveur MySql.
                curseur_dbc.execute(strsqlGenresAfficher)

                # OM 2019.04.02 On récupère dans "dataGenres" toutes les lignes et les colonnes demandées par l'instruction MySql                
                dataGenresAfterDelete = curseur_dbc.fetchall()
                
                # OM 2019.04.02 "commit" permet de finaliser la transaction !!
                # Remarque : dans le cas d'un SELECT ce n'est pas "très" utile, mais c'est surtout pour ne pas l'oublier 
                # lors des requêtes UPDATE, INSERT et DELETE
                connection_dbc.commit()

                # OM 2019.04.02 On va afficher la liste des genres des films
                return render_template('genres/GenresAfficher.html', data = dataGenresAfterDelete, msgHtml = message_html)
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
    return render_template('genres/GenresAfficher.html',  msgHtml = message_html)
