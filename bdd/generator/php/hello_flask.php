<?php

$file =

"# OM 2019.03.09 on doit importer le module \"ConnectDB.py\", c'est pour bien séparer la connection de la BD.
# (Suggestion d'un élève sympathique mais \"agaçant\", car très haut, Mr ChoOyu (8201 [m]) contre OM dit \"Cime de l'EST\" (3178 [m]))
from ConnectDB import DbUtil
# OM 2019.03.09 On doit importer la  méthode \"pymysql\"
# pour gérer facilement les requêtes à la BD
import pymysql
import pymysql.cursors


# OM 2019.03.09 On doit importer ce \"framework\"...oppss... \"Microframework\" comme m'a rappelé un \"brillant\" élève, mais avec une détermination d'un être nuisible pour mon \"ego\"
# si par hasard il y avait une erreur sur cette ligne. Il faut utiliser le gestionnaire \"pip install Flask\" dans le terminal de commande.
from flask import Flask



# OM 2019.03.09 On doit importer cette méthode \"render_template\"
# Request pour gérer les méthodes HTTP POST et GET
from flask import render_template, request


";

foreach ($tables as $table) {
	$file .=
"
# OM 2019.03.25 on doit importer le module ".$table['name']."s définit grâce à \"blueprint\"
# cela allège le fichier principal
from Gestion".ucfirst($table['name'])."s import ".$table['name']."s
";
}

$file .=
"# OM 2019.03.29 on doit importer le module divers (about et autres outils de votre future application) définit grâce à \"blueprint\"
from GestionDivers import divers

# OM 2019.03.29 on doit importer le module divers (about et autres outils de votre future application) définit grâce à \"blueprint\"
from GestionHome import HOME

# OM 2019.03.25 Le microframework \"Flask\", va pouvoir interpréter les valeurs des routes définies après
app = Flask(__name__)


";

foreach ($tables as $table) {
	$file .=
"
# OM 2019.03.25 Tout ce qui concerne les ".$table['name']."s va commencer par la chaîne de caractère \"".$table['name']."s\"
app.register_blueprint(".$table['name']."s, url_prefix='/".$table['name']."s')
";
}

$file .=
"
# OM 2019.03.25 Chaque chemin qui concerne les choses qui n'ont rien à voir avec les films et les genres vont par la chaîne de caractère \"genres\"
app.register_blueprint(divers, url_prefix='/divers')

# OM 2019.03.25 Chaque chemin qui concerne la Home page (ET téléphone Maison)
app.register_blueprint(HOME, url_prefix='/')



# OM 2019.03.25 L'application \"démarre\" elle peut être utilisée dans un navigateur
# à l'URL http://127.0.0.1:5000/
if __name__ == '__main__':
    # OM 2019.03.25 Une clé est nécessaire pour crypter les \"cookies\" utilisés par les messages FLASH.
    app.secret_key = b'_5#_GRAND_PAS_ARAGORN_F4Q8z\\n\\xec]'
    app.debug = True # inutile de vous dire que c'est insdipensable ... avant la version finale
    app.run()";

if (!file_exists('generator/output/'.$time)) {
    mkdir('generator/output/'.$time);
}
$fp = fopen('generator/output/'.$time.'/hello_flask.py', 'w');
fwrite($fp, $file);
fclose($fp);

?>