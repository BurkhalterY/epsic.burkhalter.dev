<?php

$file =

"<!DOCTYPE html>
<html lang=\"en\">

  <head>
    <meta charset=\"utf-8\">
    <title>Module 104 OM de ????</title>

    <!-- Bootstrap CSS -->
    <!-- OM 2019.03.20 OM JE PREFERE GARDER MES FICHIERS CSS ET JS DANS UN REPERTOIRE \"EN LOCAL\" 
        CAR ON EST TOUJOURS DEPENDANT D'UNE LIAISON A L'INTERNET.
    -->
    <link rel=\"stylesheet\" type=\"text/css\" href=\"{{ url_for('static', filename='bootstrap-4.3.1-dist/css/bootstrap.min.css') }}\">
    
  
    <!-- OM 2019.03.20 OM JE PREFERE GARDER MES FICHIERS CSS ET JS DANS UN REPERTOIRE \"EN LOCAL\" 
        CAR ON EST TOUJOURS DEPENDANT D'UNE LIAISON A L'INTERNET.
    -->
    <link rel=\"stylesheet\" type=\"text/css\" href=\"{{ url_for('static', filename='bootstrap-4.3.1-dist/css/blog-post.css') }}\">
    <script src=\"{{ url_for('static', filename='js/jquery-3.3.1.slim.min.js') }}\"></script>


    <link rel=\"stylesheet\" type=\"text/css\" href=\"{{ url_for('static', filename='Bootstrap-Dual-Listbox/dist/bootstrap-duallistbox.css') }}\">    
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <!-- OM 2019.03.20 OM JE PREFERE GARDER MES FICHIERS CSS ET JS DANS UN REPERTOIRE \"EN LOCAL\" 
        CAR ON EST TOUJOURS DEPENDANT D'UNE LIAISON A L'INTERNET.
    -->

    <script src=\"{{ url_for('static', filename='js/ajax/libs/popper.js/1.15.0/popper.min.js') }}\"></script>
    <script src=\"{{ url_for('static', filename='bootstrap-4.3.1-dist/js/bootstrap.min.js') }}\"></script>



    <script src=\"{{ url_for('static', filename='Bootstrap-Dual-Listbox/dist/jquery.bootstrap-duallistbox.js') }}\"></script>    
  </head>

<body>

  <!-- Barre de navigation -->
  <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark fixed-top\">
    <div class=\"container\">
      <a class=\"navbar-brand\" href=\"#\">Module 104 par OM de l'EPSIC</a>
      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">
        <span class=\"navbar-toggler-icon\"></span>
      </button>
      <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">
        <ul class=\"navbar-nav ml-auto\">
          <li class=\"nav-item active\">
            <a class=\"nav-link\" href=\"{{ url_for('HoMe.varPyRouteHome') }}\">Home
              <span class=\"sr-only\">(current)</span>
            </a>
          </li>";

foreach ($tables as $table) {
$file .= "
          <li class=\"nav-item\">
            <a class=\"nav-link\" href=\"{{ url_for('".$table['name']."s.varPyRoute".ucfirst($table['name'])."s') }}\">".ucfirst($table['name'])."s</a>
          </li>";
}
          $file .= "
          <li class=\"nav-item\">
            <a class=\"nav-link\" href=\"{{ url_for('divers.varPyRouteAbout') }}\">About</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    <!-- OM 2019.03.09 ATTENTION pour commenter le langage  Jinja il faut mettre des # au lieu des % !!!
      Car il l'interprète même dans un commentaire en HTML !!!!

      les deux instructions ci-dessous vont permettre de charger du HTML encadré par
      {# extends \"PagePrincipaleHome.html\" #}{# block content #} ...... code html .... {# endblock #}
    -->
  <div class=\"container\">
    {% block content %}
    {% endblock %}
  </div>
</body>
</html>";

if (!file_exists('generator/output/'.$time.'/Templates')) {
    mkdir('generator/output/'.$time.'/Templates');
}
$fp = fopen('generator/output/'.$time.'/Templates/PagePrincipaleHome.html', 'w');
fwrite($fp, $file);
fclose($fp);

?>