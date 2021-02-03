# OM DE B MARS 2019 Home.py
# Tout ce qui concerne la gestion de la page "maison" (homepage)

# OM 2019.03.29 Pour gérer les "alias" et autres chemins il faut passer par "blueprint", cela permet de séparer en plusieurs fichiers moins "gros"
# et de placer les fichiers dans des dossiers séparés.
from flask import Blueprint

# OM 2019.03.29 On doit importer cette méthode "render_template"
from flask import render_template


# OM 2019.03.29 On définit une chaîne de caractère qui va permettre de repèrer les répertoires
# de définir des alias. J'ai volontairement joué avec la casse des caractères pour bien montrer
# où sont les "variables", où on définit les noms des répertoires, etc
# Pour vous faire parcourir les différents fichiers 
# Cliquez deux fois sur le mot "HoMe", puis rechercher dans tous les fichiers (CTRL-SHIFT-F) et enfin (ALT-C) sensible à la casse.
HOME = Blueprint('HoMe', __name__, template_folder='/')



# OM 2019.03.09 Définition d'une "route" HOME, RACINE, cela va permettre de programmer quelles actions sont réalisées avant de l'envoyer
# au navigateur par la méthode "render_template", s'il y a une erreur c'est cette méthode "render_template" doit être "importée" au début de ce fichier.
@HOME.route('/')
def varPyRouteHome():
    return render_template('/EtTelMaison/Home.html')