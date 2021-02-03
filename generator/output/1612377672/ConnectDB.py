import pymysql
import pymysql.cursors
# OM 2019.03.09 FICHIER DANS LEQUEL SONT REGROUPES LES UTILITAIRES EN RAPPORT AVEC LA BD

class DbUtil:

    # OM 2019.03.09 CONNECTION A LA BD
    @staticmethod
    def get_connection():
        try:
            # OM 2019.03.09 ON SE CONNECTE A LA BASE DE DONNEE
            # ATTENTION : LE MOT DE PASSE PEUT CHANGER SUIVANT LE SERVEUR MySql QUE VOUS CHOISSISSEZ !!! (Uwamp, Xampp, etc)
            db = pymysql.connect(host='localhost', user='root', password='', db='nomprenomsujet_bd_104_v1', cursorclass=pymysql.cursors.DictCursor)
        except (pymysql.err.OperationalError, pymysql.ProgrammingError, pymysql.InternalError, pymysql.IntegrityError, TypeError) as error:
            # OM 2019.03.09 SI LA BD N'EST PAS CONNECTEE, ON ENVOIE AU TERMINAL DES MESSAGES POUR RASSURER L'UTILISATEUR.
            print("BD NON CONNECTEE, Il y a une ERREUR : %s", error)
            print('Exception number: {}, value {!r}'.format(error.args[0], error))
        else:
            # OM 2019.03.09 TOUT S'EST PARFAITEMENT BIEN PASSE. ON "RETOURNE" LE NOM DE LA CONNECTION.
            return db