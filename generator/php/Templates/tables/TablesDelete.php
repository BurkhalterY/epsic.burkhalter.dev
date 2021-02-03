<?php

foreach ($tables as $table) {

    $id = 'id';
    foreach ($table['columns'] as $col) {
        if(isset($col['pk'])){
            $id = $col['name'];
        }
    }

$file =

"{% extends \"PagePrincipaleHome.html\" %}
{% block content %}
    <div class=\"home\">
        <BODY bgcolor=\"yellow\">
            <form method=\"POST\" action=\"{{ url_for('".$table['name']."s.".$table['name']."sDeletePydef') }}\">
                <div>
                    {{ msgHtml }}
                </div>
                <br>
                <table border=\"1\" cellpadding=\"5\" cellspacing=\"5\">
                    <thead>
                        <tr>";

foreach ($table['columns'] as $col) {
    $file .= "
                            <th>".$col['name']."</th>";
}
$file .= "
                        </tr>
                    </thead>
                    {% for row in data %}
                        <tr>";

foreach ($table['columns'] as $col) {
    if(!isset($col['pk'])){
        $file .= "
                            <td>{{ row.".$col['name']." }}</td>";
    } else {
        $file .= "
                            <td><input type=\"hidden\" name=\"".$id."DeleteHTML\" value=\"{{ row.".$id." }}\"></td>";
    }
}
$file .= "
                            <td><button class=\"btn btn-danger\" type=\"submit\">EFFACER</button></td>
                        </tr>
                    {% endfor %}
                </table>
            </form>
        </BODY>
    </div>
{% endblock %}";

    if (!file_exists('generator/output/'.$time.'/Templates/'.ucfirst($table['name']).'s')) {
        mkdir('generator/output/'.$time.'/Templates/'.ucfirst($table['name']).'s');
    }
    $fp = fopen('generator/output/'.$time.'/Templates/'.ucfirst($table['name']).'s/'.ucfirst($table['name']).'sDelete.html', 'w');
    fwrite($fp, $file);
    fclose($fp);
}
?>