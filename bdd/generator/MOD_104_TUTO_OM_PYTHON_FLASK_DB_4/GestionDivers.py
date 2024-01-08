# OM DE B MARS 2019 GestionDivers.py
# Tout ce qui concerne la gestion des choses qui ne sont pas des films et des genres de films

# OM 2019.03.29 Pour gérer les "alias" et autres chemins il faut passer par "blueprint", cela permet de séparer en plusieurs fichiers moins "gros"
# et de placer les fichiers dans des dossiers séparés.
from flask import Blueprint

# OM 2019.03.29 On doit importer cette méthode "render_template"
from flask import render_template


# OM 2019.03.29 On définit une chaîne de caractère qui va permettre de repèrer les répertoires
# de définir des alias.
divers = Blueprint('divers', __name__, template_folder='templates')

#---------------------------------------------------------------------------------------------------
# OM 2019.03.29 Définition d'une "route", cela va permettre de déterminer quelles actions sont réalisées avant de l'envoyer
# au navigateur
#---------------------------------------------------------------------------------------------------
@divers.route('/about')
def varPyRouteAbout():
    return render_template('/divers/About.html')