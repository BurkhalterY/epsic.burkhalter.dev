# OM DE B MARS 2019 GestionFilmsGenres.py
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
# OM 2019.04.06 On définit une chaîne de caractère qui va permettre d'identifier les répertoires
filmsgenres = Blueprint('films_genres', __name__, template_folder='templates')

# OM 2019.03.25 On doit importer le module "ConnectDB.py", outils autour de la BD.
from ConnectDB import DbUtil

# OM 2019.03.25 On doit importer cette méthode "render_template"
# Request pour gérer les méthodes HTTP POST et GET
from flask import render_template, request, session



# OM 2019.03.09 Définition d'une "route" /filmsGenresAfficher , cela va permettre de programmer quelles actions sont réalisées avant de l'envoyer
# au navigateur par la méthode "render_template", si il y a une erreur c'est cette méthode "render_template" doit être "importer" au début de ce fichier.
@filmsgenres.route('/filmsGenresAfficher', methods=['GET', 'POST'])
def varPyRouteFilmsGenres():

    # OM 2019.03.22 Pour savoir si les données d'un formulaire sont un affichage ou un envoi de donnée par des champs utilisateurs.
    if request.method == "GET":
        try: 
            # OM 2019.03.09 CONNECTION A LA BD
            connection_dbc = DbUtil.get_connection()

            # OM 2019.03.09 Définition d'un "curseur" qui va permettre d'interagir avec la BD pour faire des requêtes.
            curseur_dbc = connection_dbc.cursor()

            # OM 2019.03.22 C'EST LA QUE VOUS ALLEZ DEVOIR PLACER VOTRE PROPRE LOGIQUE MySql

            strsqlFilmsGenresAfficher = "SELECT id_film, nom_film, duree_film, description_film, cover_link_film, date_sortie_film, GROUP_CONCAT(intitule_genre) as GenresFilms FROM t_genre_film AS T1"
            strsqlFilmsGenresAfficher += " RIGHT JOIN t_film AS T2 ON T2.id_film = T1.fk_film"
            strsqlFilmsGenresAfficher += " LEFT JOIN t_genres AS T3 ON T3.id_genre = T1.fk_genre"
            strsqlFilmsGenresAfficher += " GROUP BY id_film"            
            # OM 2019.03.22 La chaîne de caractères MySql est envoyée au serveur MySql.
            curseur_dbc.execute(strsqlFilmsGenresAfficher)
            # OM 2019.03.22 On récupère dans "dataGenreFilmsBD" toutes les lignes et les colonnes demandées par l'instruction MySql
            dataGenreFilmsBD = curseur_dbc.fetchall()

            # OM 2019.03.22 "commit" permet de finaliser la transaction !!
            # Remarque : dans le cas d'un SELECT ce n'est pas "très" utile, mais c'est surtout pour ne pas l'oublier 
            # lors des requêtes UPDATE, INSERT et DELETE
            connection_dbc.commit()
            # OM 2019.03.22 Les 2 lignes ci-après permettent de donner un sentiment rassurant aux utilisateurs.
            message_html = 'Données Listées !!'
            print(' Données Listées !!')            
        except (pymysql.err.OperationalError, pymysql.ProgrammingError, pymysql.InternalError, pymysql.IntegrityError, TypeError) as error:
            # OM 2019.03.22 Les 2 messages ci-après permettent de donner un sentiment rassurant aux utilisateurs.
            # On indique un problème, mais on ne dit rien en ce qui concerne la résolution.
            message_html = 'Problème avec la BD !!!'
            print("Problème avec la BD ! : %s", error)

            # OM 2019.03.22 La méthode "rollback" est très importante, car elle permet de ne pas finaliser la transaction.
            # Remarque : dans le cas d'un SELECT ce n'est pas "très" utile, mais c'est surtout pour ne pas l'oublier 
            # lors des requêtes UPDATE, INSERT et DELETE            
            connection_dbc.rollback()

        finally:
            # OM 2019.03.22 On ferme ce qu'on a ouvert avant.
            connection_dbc.close()
            curseur_dbc.close()        
    
    # OM 2019.03.22 Envoie la page "HTML" au serveur. On passe des paramètres nécessaires à l'affichages des données
    # contenues dans la BD.
    return render_template('filmsGenres/FilmsGenresAfficher.html',data = dataGenreFilmsBD, msgHtml = message_html)




#---------------------------------------------------------------------------------------------------
# OM 2019.04.02 Définition d'une "route" /filmsGenresListBoxAfficher , cela va permettre de programmer quelles actions sont réalisées avant de l'envoyer
# au navigateur par la méthode "render_template".
# On change la valeur d'un genre de films par la commande MySql "UPDATE"
# Intialiser le contenu des deux listes pour les genres des films.
# La liste de gauche ---> les genres disponibles pour les films
# la liste de droite ---> les genres attribués au film
#---------------------------------------------------------------------------------------------------
@filmsgenres.route('/filmsGenresListBoxAfficher',methods = ['POST', 'GET'])
def varPyRoutefilmsGenresListBoxAfficher():

    # OM 2019.04.02 Les données sont affichées dans un formulaire, l'affichage de la sélection
    # d'une seule ligne choisie par le bouton "edit" dans le formulaire "GenresAfficher.html"
    if request.method == 'GET':
        try:
            # OM 2019.04.02 CONNECTION A LA BD
            connection_dbc = DbUtil.get_connection()

            # OM 2019.04.02 Définition d'un "curseur" qui va permettre d'interagir avec la BD pour faire des requêtes.
            curseur_dbc = connection_dbc.cursor()
            
            # OM 2019.04.02 Récupérer la valeur de "id_film" du formulaire html "FilmsGenresAfficher.html"
            # l'utilisateur clique sur le lien "Modifier genres de ce film" et on récupére la valeur de "id_film" grâce à la variable "idFilmGenresEditHTML"
            # <a href="{{ url_for('films_genres.varPyRoutefilmsGenresListBoxAfficher', idFilmGenresEditHTML=row.id_film) }}">Modifier genres de ce film</a>
            idFilmGenresEditHTML = request.values['idFilmGenresEditHTML']

            # OM 2019.04.11 Mémorise l'id du film dans une variable de session (ici la sécurité de l'application n'est pas engagée)
            # il faut éviter de stocker des données sensibles dans des variables de sessions .
            session['session_idFilmGenresEditHTML'] = idFilmGenresEditHTML

            # OM 2019.03.25 C'EST LA QUE VOUS ALLEZ DEVOIR PLACER VOTRE PROPRE LOGIQUE MySql
            strsqlIdFilmsGenresAfficher = "SELECT id_film, nom_film, duree_film, description_film, cover_link_film, date_sortie_film, GROUP_CONCAT(id_genre) as GenresFilms FROM t_genre_film AS T1"
            strsqlIdFilmsGenresAfficher += " INNER JOIN t_film AS T2 ON T2.id_film = T1.fk_film"
            strsqlIdFilmsGenresAfficher += " INNER JOIN t_genres AS T3 ON T3.id_genre = T1.fk_genre"
            strsqlIdFilmsGenresAfficher += " WHERE id_film = %s"


# OM 2019.04.10 Pour vous simplifier la vie... pour modifier la requête selon votre BD avec phpmyadmin
# SELECT id_film, nom_film, duree_film, description_film, cover_link_film, date_sortie_film, GROUP_CONCAT(id_genre) as GenresFilms FROM t_genre_film AS T1
# INNER JOIN t_film AS T2 ON T2.id_film = T1.fk_film
# INNER JOIN t_genres AS T3 ON T3.id_genre = T1.fk_genre
# WHERE id_film = 3

#----- Pour vos essais de requêtes en MySql
# SELECT id_film, nom_film, duree_film, description_film, cover_link_film, date_sortie_film, id_genre, intitule_genre FROM t_genre_film AS T1
# INNER JOIN t_film AS T2 ON T2.id_film = T1.fk_film
# INNER JOIN t_genres AS T3 ON T3.id_genre = T1.fk_genre
# WHERE id_film = 3

            # OM 2019.03.25 La chaîne de caractères MySql est envoyée au serveur MySql.
            curseur_dbc.execute(strsqlIdFilmsGenresAfficher, (idFilmGenresEditHTML,) )
            # OM 2019.03.25 On récupère dans "dataIdFilmsGenresAfficher" toutes les lignes et les colonnes demandées par l'instruction MySql
            dataIdFilmsGenresAfficher = curseur_dbc.fetchall()

            # OM 2019.04.10 Si le film choisi n'a pas de GENRES associés il faut remplir tous les *GENRES" dans le composant "duallistbox_demo1"
            # Parcourir les résultats de la requête "strsqlIdFilmsGenresAfficher"
            for ligne in dataIdFilmsGenresAfficher:
                
                # print(ligne['GenresFilms'],ligne['id_film'])
                # OM 2019.04.10 Si le résultat de la requête "strsqlIdFilmsGenresAfficher" contient des lignes.
                if ligne['GenresFilms']:
                    # OM 2019.03.25 C'EST LA QUE VOUS ALLEZ DEVOIR PLACER VOTRE PROPRE LOGIQUE MySql
                    # OM 2019.04.02 Commande MySql pour afficher le genre sélectionné dans le tableau dans le formulaire HTML
                    # le "%s" permet d'éviter des injections SQL "simples"
                    strsqlFilmsGenresNonAttribues = "SELECT id_genre, intitule_genre FROM t_genres where id_genre not in(SELECT id_genre as idGenresFilms FROM t_genre_film AS T1"
                    strsqlFilmsGenresNonAttribues += " INNER JOIN t_film AS T2 ON T2.id_film = T1.fk_film"
                    strsqlFilmsGenresNonAttribues += " INNER JOIN t_genres AS T3 ON T3.id_genre = T1.fk_genre"
                    strsqlFilmsGenresNonAttribues += " WHERE id_film = %s)"

                    # OM 2019.04.02 La commande MySql est envoyée à la BD
                    # la valeur du "%s" est enfin associée à "idGenreEdit"
                    curseur_dbc.execute(strsqlFilmsGenresNonAttribues, (idFilmGenresEditHTML,))

                else:
                    # OM 2019.04.10 Commande MySql pour afficher tous les genres dans le tableau dans le formulaire HTML
                    # si le film n'a pas de genre attribué il renvoie la valeur "None"
                    # On doit alors remplir la liste de choix avec TOUS les genres contenus dans "t_genres"
                    strsqlIdGenre = "SELECT * FROM t_genres"
                    # OM 2019.04.02 La commande MySql est envoyée à la BD
                    # la valeur du "%s" est enfin associée à "idGenreEdit"
                    curseur_dbc.execute(strsqlIdGenre)


                # OM 2019.04.02 Toutes les données sont dans la variable "dataFilmsGenresNonAttribues"
                dataFilmsGenresNonAttribues = curseur_dbc.fetchall()

            # OM 2019.04.02 Toutes les données sont dans la variable "dataIdGenre"
            dataIdGenre = curseur_dbc.fetchall()

            # OM 2019.03.25 C'EST LA QUE VOUS ALLEZ DEVOIR PLACER VOTRE PROPRE LOGIQUE MySql
            # OM 2019.04.02 Commande MySql pour afficher TOUS LES GENRES ASSOCIES A UN FILM dans le composant "duallistbox_demo1"
            # le "%s" permet d'éviter des injections SQL "simples"
            strsqlFilmsGenresAttribues = "SELECT id_film, nom_film, duree_film, description_film, cover_link_film, date_sortie_film, id_genre, intitule_genre FROM t_genre_film AS T1"
            strsqlFilmsGenresAttribues += " INNER JOIN t_film AS T2 ON T2.id_film = T1.fk_film"
            strsqlFilmsGenresAttribues += " INNER JOIN t_genres AS T3 ON T3.id_genre = T1.fk_genre"
            strsqlFilmsGenresAttribues += " WHERE id_film = %s"

            # OM 2019.04.02 La commande MySql est envoyée à la BD
            # la valeur du "%s" est enfin associée à "idGenreEdit"
            curseur_dbc.execute(strsqlFilmsGenresAttribues, (idFilmGenresEditHTML,))

            # OM 2019.04.02 Toutes les données sont dans la variable "dataIdGenre"
            dataFilmsGenresAttribues = curseur_dbc.fetchall()
#----- Pour vos essais de requêtes en MySql
# SELECT id_film, nom_film, duree_film, description_film, cover_link_film, date_sortie_film, id_genre, intitule_genre FROM t_genre_film AS T1
# INNER JOIN t_film AS T2 ON T2.id_film = T1.fk_film
# INNER JOIN t_genres AS T3 ON T3.id_genre = T1.fk_genre
# WHERE id_film = 3

#----- Pour vos essais de requêtes en MySql
# SELECT id_genre FROM t_genres where id_genre not in(SELECT GROUP_CONCAT(id_genre) as idGenresFilms FROM t_genre_film AS T1
# INNER JOIN t_film AS T2 ON T2.id_film = T1.fk_film
# INNER JOIN t_genres AS T3 ON T3.id_genre = T1.fk_genre
# WHERE id_film = 3)


            # OM 2019.04.02 "commit" permet de finaliser la transaction !!
            # Remarque : dans le cas d'un SELECT ce n'est pas "très" utile, mais c'est surtout pour ne pas l'oublier 
            # lors des requêtes UPDATE, INSERT et DELETE
            connection_dbc.commit()
            # OM 2019.04.02 La ligne suivante permet d'indiquer à l'utilisateur que l'action s'est bien passée.
            message_html = "Associer des genres à un film !!!"

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
    # OM 2019.04.02 On envoie les données à la page "FilmsGenresListBoxAfficher.html" pour remplir les listes du composant "duallistbox_demo1"
    return render_template('filmsGenres/FilmsGenresListBoxAfficher.html', 
                            dataFilms = dataIdFilmsGenresAfficher, 
                            data = dataIdGenre, 
                            dataIdGenresAttribues = dataFilmsGenresAttribues,
                            dataIdGenresNonAttribues = dataFilmsGenresNonAttribues,
                            msgHtml = message_html)


#---------------------------------------------------------------------------------------------------    
# OM 2019.04.07 Définition d'une "route" /filmsGenresListBoxAfficherUpdate , cela va permettre de programmer quelles actions sont réalisées avant de l'envoyer
# au navigateur par la méthode "render_template".
# Permettre à l'utilisateur d'associer des genres avec des films.
#---------------------------------------------------------------------------------------------------
@filmsgenres.route('/filmsGenresListBoxAfficherUpdate',methods = ['POST', 'GET'])
def varPyRoutefilmsGenresListBoxAfficherUpdate():

    # OM 2019.04.02 Pour indiquer à l'utilisateur quelles actions il peut faire
    message_html = 'Associer des genres à des films !'

    # OM 2019.04.02 Pour savoir si les données d'un formulaire sont un affichage ou un envoi de donnée par des champs utilisateurs.
    if request.method == 'POST':
        try:
            # OM 2019.04.02 CONNECTION A LA BD
            connection_dbc = DbUtil.get_connection()

            # OM 2019.04.02 Définition d'un "curseur" qui va permettre d'interagir avec la BD pour faire des requêtes.
            curseur_dbc = connection_dbc.cursor()

            # OM 2019.04.11 Les 3 lignes suivantes ... rassurent la 8ème couche OSI lors de la construction de ce délicieux programme.
            print('nameItemsSelectGenreLstBoxHTML ' + request.form['nameItemsSelectGenreLstBoxHTML[]'])
            print('nameItemsSelectGenreLstBoxHTML values ' + request.values['nameItemsSelectGenreLstBoxHTML[]'])
            print('idFilmGenresEditHTML *** ' + session['session_idFilmGenresEditHTML'])


            ItemsSelectGenreHTML = request.values['nameItemsSelectGenreLstBoxHTML[]']

            print('ItemsSelectGenreHTML values ' + ItemsSelectGenreHTML)
            print('TYPE ItemsSelectGenreHTML values ', type(ItemsSelectGenreHTML))

            # OM 2019.04.11 On récupère l'id du film depuis le formulaire "FilmsGenresAfficher.html", la valeur de l'id_films
            # est mémorisé dans une variable de session, ce mécanisme permet de PASSER (avec une sécurité faible) une variable
            # dans une autre partie des scripts Python.
            sessIdFilmGenresEditHTML = session['session_idFilmGenresEditHTML']



            # OM 2019.03.25 C'EST LA QUE VOUS ALLEZ DEVOIR PLACER VOTRE PROPRE LOGIQUE MySql
            # Afficher "id_genre" pour le film sélectionné
            strsqlIdGenresAfficherUnFilm = "SELECT id_genre FROM t_genre_film AS T1"
            strsqlIdGenresAfficherUnFilm += " INNER JOIN t_film AS T2 ON T2.id_film = T1.fk_film"
            strsqlIdGenresAfficherUnFilm += " INNER JOIN t_genres AS T3 ON T3.id_genre = T1.fk_genre"
            strsqlIdGenresAfficherUnFilm += " WHERE id_film = %s"
            # OM 2019.03.22 La chaîne de caractères MySql est envoyée au serveur MySql.
            curseur_dbc.execute(strsqlIdGenresAfficherUnFilm, (sessIdFilmGenresEditHTML,) )
            # OM 2019.03.22 On récupère dans "dataFilms" toutes les lignes et les colonnes demandées par l'instruction MySql
            IdGenresAfficherUnFilm = curseur_dbc.fetchall()
            # OM 2019.10.04 Pour le savoir "culture générale" du langage cela peut vous guider pour connaître et afficher le type de la variable
            print('type IdGenresAfficherUnFilm' , type(IdGenresAfficherUnFilm))
            print('IdGenresAfficherUnFilm' , IdGenresAfficherUnFilm)

            # OM 2019.04.10 Convertit les résultats venus de la BD en une liste de "keys" : "id_genre"
            # exemple [{'id_genre': 8}, {'id_genre': 9}
            list_IdGenresAfficherUnFilm = list(IdGenresAfficherUnFilm)
            print('list_IdGenresAfficherUnFilm  ', list_IdGenresAfficherUnFilm, ' type ', type(list_IdGenresAfficherUnFilm))


            # OM 2019.04.10 Si le film choisi n'a pas de GENRES associés il faut remplir tous les *GENRES" dans le composant "duallistbox_demo1"
            # Parcourir les résultats de la requête "strsqlIdFilmsGenresAfficher"
            # Constituer une liste des "fk_genre" associés aux films actuellement dans la "t_genre_film"
            # pour pouvoir la comparer à la liste des genres choisis dans la duallistbox
            # Il faut récupérer les nombres et les "append" les uns après les autres sous forme de liste de nombres
            list_IdGenresAfficherUnFilm = []
            for ligne in IdGenresAfficherUnFilm:
                print(ligne['id_genre'])
                list_IdGenresAfficherUnFilm.append(ligne['id_genre'])

            print('test_list_a  ', list_IdGenresAfficherUnFilm, ' type ', type(list_IdGenresAfficherUnFilm), ' nb ', len(list_IdGenresAfficherUnFilm))

       
            # OM 2019.04.10 Si le film choisi n'a pas de GENRES associés il faut remplir tous les *GENRES" dans le composant "duallistbox_demo1"
            # Parcourir les résultats de la requête "strsqlIdFilmsGenresAfficher"
            print(request.form.getlist("nameItemsSelectGenreLstBoxHTML[]"))
            print(request.args.getlist("nameItemsSelectGenreLstBoxHTML[]"))            
            print(str(request.form.getlist('nameItemsSelectGenreLstBoxHTML[]')[0]))

            # OM 2019.04.10 Récupérer le(s) "id_genre" SLECTIONNEES  du composant "bootstrapDualListbox" par l'intermédiaire du champ caché "hidden"
            # <input name="nameItemsSelectGenreLstBoxHTML[]" type="hidden"/>
            # 
            ItemsSelectGenre = request.form.getlist('nameItemsSelectGenreLstBoxHTML[]')
            # OM 2019.04.10 Le champ nameItemsSelectGenreLstBoxHTML[] retourne ['4,65,2']
            # Récupère uniquement les valeurs numériques de cette chaîne de caractères.
            list_re_ItemsSelectGenre = re.findall('\\d+', str(ItemsSelectGenre))
            # OM 2019.04.10 Petite aide pyscologique dans le terminal.
            print('list_re_ItemsSelectGenre  ', list_re_ItemsSelectGenre, ' type ', type(list_re_ItemsSelectGenre))

            # OM 2019.04.10 Dans "list_re_ItemsSelectGenre" il y a ['4','65','2']
            # On transforme en une liste de valeurs numériques. [4,65,2]
            list_IdGenresSelectDualList = list(map(int, list_re_ItemsSelectGenre)) 
            # OM 2019.04.10 Petite aide pyscologique dans le terminal.
            print('test_list  ', list_IdGenresSelectDualList, ' type ', type(list_IdGenresSelectDualList), ' nb ', len(list_IdGenresSelectDualList))


            # OM 2019.04.10 Une liste de "id_genre" qui doivent être effacés de la BD
            listdiff_Genres_Delete_1 = list(set(list_IdGenresAfficherUnFilm) - set(list_IdGenresSelectDualList))
            # OM 2019.04.10 Une liste de "id_genre" qui doivent être ajoutés à la BD
            listdiff_Genres_Insert_2 = list(set(list_IdGenresSelectDualList) - set(list_IdGenresAfficherUnFilm))
            # OM 2019.04.10 Petite aide pyscologique dans le terminal.
            print(' set 1  ' , listdiff_Genres_Delete_1, ' set 2 ', listdiff_Genres_Insert_2)

            # OM 2019.04.10 Longueur des deux listes pour les boucles "for"
            nb_id_genres_update = len(listdiff_Genres_Insert_2)
            nb_id_genres_delete = len(listdiff_Genres_Delete_1)
            # OM 2019.04.14 UNE DES DEUX LISTES EST VIDE, ON AVERTI L'UTILISATEUR  
            if (nb_id_genres_update == 0 | nb_id_genres_delete == 0):
                print(' Liste Vide ')
                message_html = "Pas de modifications pour les genres associés à ce film !!!"
            else:                
                # OM 2019.04.14 Insérer les valeurs des "id_genre" dans la "t_genre_film"                
                for items in range(nb_id_genres_update):
                    print(' ItemsSelectGenre[i] ',listdiff_Genres_Insert_2[items])
                    # OM 2019.04.14 Filtrer les erreurs MySql
                    try:
                        # OM 2019.04.14 C'EST LA QUE VOUS ALLEZ DEVOIR PLACER VOTRE PROPRE LOGIQUE MySql
                        # Insèrer une (des) nouvelle(s) association(s) entre "if_film" et "id_genre" dans la "t_genre_film"
                        strsqlIdGenresInsererGenresFilm = "INSERT INTO t_genre_film (id_genre_film, fk_genre, fk_film)"
                        strsqlIdGenresInsererGenresFilm += " VALUES (NULL, %s, %s)"

                        # OM 2019.03.22 La chaîne de caractères MySql est envoyée au serveur MySql.
                        curseur_dbc.execute(strsqlIdGenresInsererGenresFilm, (listdiff_Genres_Insert_2[items], sessIdFilmGenresEditHTML,) )
                        # OM 2019.03.22 "commit" permet de finaliser la transaction !!
                        # Remarque : dans le cas d'un SELECT ce n'est pas "très" utile, mais c'est surtout pour ne pas l'oublier 
                        # lors des requêtes UPDATE, INSERT et DELETE
                        connection_dbc.commit()
                    except (pymysql.err.OperationalError, pymysql.ProgrammingError, pymysql.InternalError, pymysql.IntegrityError, TypeError) as error:
                        # OM 2019.04.02 Trois façons de communiquer qu'une autre erreur que la 1062 est survenue.
                        print( 'MySQL?????%d?%s' % (error.args[ 0 ], error.args[ 1 ]) )
                        message_html = "Problème monstrueux !!! IMPOSSIBLE DE MODIFIER LES GENRES DES FILMS"
                        flash('MySQL?????%d?%s' % (error.args[ 0 ], error.args[ 1 ]))

                        # OM 2019.04.02 La méthode "rollback" est très importante, car elle permet de ne pas finaliser la transaction.
                        connection_dbc.rollback()                                





                # OM 2019.04.14 Boucle pour l'effacement les lignes de la "t_genre_film" suivant "id_film" ET "id_genre"
                for items in range(nb_id_genres_delete):
                    print(' ItemsSelectGenre[i] ',listdiff_Genres_Delete_1[items])

                    try:
                        # OM 2019.04.14 C'EST LA QUE VOUS ALLEZ DEVOIR PLACER VOTRE PROPRE LOGIQUE MySql
                        # Effacer une (des) nouvelle(s) association(s) entre "if_film" et "id_genre" dans la "t_genre_film"
                        
                        strsqlIdGenresDeleteGenresFilm = "DELETE FROM t_genre_film WHERE fk_genre = %s AND fk_film = %s"

                        # OM 2019.03.22 La chaîne de caractères MySql est envoyée au serveur MySql.
                        curseur_dbc.execute(strsqlIdGenresDeleteGenresFilm, (listdiff_Genres_Delete_1[items], sessIdFilmGenresEditHTML,) )
                        # OM 2019.03.22 "commit" permet de finaliser la transaction !!
                        # Remarque : dans le cas d'un SELECT ce n'est pas "très" utile, mais c'est surtout pour ne pas l'oublier 
                        # lors des requêtes UPDATE, INSERT et DELETE
                        connection_dbc.commit()
                    except (pymysql.err.OperationalError, pymysql.ProgrammingError, pymysql.InternalError, pymysql.IntegrityError, TypeError) as error:
                        # OM 2019.04.02 Trois façons de communiquer qu'une autre erreur que la 1062 est survenue.
                        print( 'MySQL?????%d?%s' % (error.args[ 0 ], error.args[ 1 ]) )
                        message_html = "Problème monstrueux !!! IMPOSSIBLE D'EFFACER LES GENRES DES FILMS"
                        flash('MySQL?????%d?%s' % (error.args[ 0 ], error.args[ 1 ]))

                        # OM 2019.04.02 La méthode "rollback" est très importante, car elle permet de ne pas finaliser la transaction.
                        connection_dbc.rollback()                                





            # OM 2019.03.25 C'EST LA QUE VOUS ALLEZ DEVOIR PLACER VOTRE PROPRE LOGIQUE MySql
            # Afficher le SEUL film dont on vient de modifier les genres associés.
            # Cette requête affiche les genres qui se trouvent dans la BD
            # On doit comparer ce résultat avec le résultat de la bootstrapDualListbox dans "FilmsGenresListBoxAfficher.html"
            # L'utilisateur peut avoir tout effacé les genres associés au film "id_film"
            # L'utilisateur peut avoir AJOUTE un ou des genres associé(s) au film "id_film"
            # L'utilisateur peut avoir EFFACE un ou des genres associé(s) au film "id_film"
            strsqlFilmsGenresAfficher = "SELECT id_film, nom_film, duree_film, description_film, cover_link_film, date_sortie_film, GROUP_CONCAT(intitule_genre) as GenresFilms FROM t_genre_film AS T1"
            strsqlFilmsGenresAfficher += " INNER JOIN t_film AS T2 ON T2.id_film = T1.fk_film"
            strsqlFilmsGenresAfficher += " INNER JOIN t_genres AS T3 ON T3.id_genre = T1.fk_genre"
            strsqlFilmsGenresAfficher += " WHERE id_film = %s"
          
            # OM 2019.03.22 La chaîne de caractères MySql est envoyée au serveur MySql.
            curseur_dbc.execute(strsqlFilmsGenresAfficher, (sessIdFilmGenresEditHTML,) )
            # OM 2019.03.22 On récupère dans "dataGenreFilmsBD" toutes les lignes et les colonnes demandées par l'instruction MySql
            dataGenreFilmsBD = curseur_dbc.fetchall()

            # OM 2019.03.22 "commit" permet de finaliser la transaction !!
            # Remarque : dans le cas d'un SELECT ce n'est pas "très" utile, mais c'est surtout pour ne pas l'oublier 
            # lors des requêtes UPDATE, INSERT et DELETE
            connection_dbc.commit()

        except (pymysql.err.OperationalError, pymysql.ProgrammingError, pymysql.InternalError, pymysql.IntegrityError, TypeError) as error:

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
    return render_template('filmsGenres/FilmsGenresAfficherUpdate.html',data = dataGenreFilmsBD, msgHtml = message_html)