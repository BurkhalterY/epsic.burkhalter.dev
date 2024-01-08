# OM DE B MARS 2019 GestionFilms.py
# Tout ce qui concerne la gestion des films


# OM 2019.03.09 Pour gérer les requêtes et la base de donnée MySql.
import pymysql
import pymysql.cursors

# OM 2019.03.25 Pour gérer les "alias" et autres chemins il faut passer par "blueprint", cela permet de séparer en plusieurs fichiers moins "gros"
# et de placer les fichiers dans des dossiers séparés.
from flask import Blueprint

# OM 2019.03.25 On définit une chaîne de caractère qui va permettre de repèrer les répertoires
# de définir des alias.
films = Blueprint('films', __name__, template_folder='templates')

# OM 2019.03.25 on doit importer le module "ConnectDB.py", outils autour de la BD.
from ConnectDB import DbUtil

# OM 2019.03.09 On doit importer cette méthode "render_template"
# Request pour gérer les méthodes HTTP POST et GET
from flask import render_template, request


# OM 2019.03.09 Définition d'une "route" /filmsAfficher , cela va permettre de programmer quelles actions sont réalisées avant de l'envoyer
# au navigateur par la méthode "render_template", si il y a une erreur c'est cette méthode "render_template" doit être "importer" au début de ce fichier.
@films.route('/filmsAfficher', methods=['GET', 'POST'])
def varPyRouteFilms():

    # OM 2019.03.22 Pour savoir si les données d'un formulaire sont un affichage ou un envoi de donnée par des champs utilisateurs.
    if request.method == "GET":
        try: 
            # OM 2019.03.09 CONNECTION A LA BD
            connection_dbc = DbUtil.get_connection()

            # OM 2019.03.09 Définition d'un "curseur" qui va permettre d'interagir avec la BD pour faire des requêtes.
            curseur_dbc = connection_dbc.cursor()

            # OM 2019.03.22 C'EST LA QUE VOUS ALLEZ DEVOIR PLACER VOTRE PROPRE LOGIQUE MySql
            strsqlFilmsAfficher = "SELECT * FROM t_film"
            # OM 2019.03.22 La chaîne de caractères MySql est envoyée au serveur MySql.
            curseur_dbc.execute(strsqlFilmsAfficher)
            # OM 2019.03.22 On récupère dans "dataGenreFilmsBD" toutes les lignes et les colonnes demandées par l'instruction MySql
            dataFilms = curseur_dbc.fetchall()

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
    return render_template('films/FilmsAfficher.html',data = dataFilms, msgHtml = message_html)