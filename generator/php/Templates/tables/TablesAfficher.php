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
        
        <form method=\"POST\" action=\"\">

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
                    <td> <a href=\"{{ url_for('".$table['name']."s.".$table['name']."sAddPydef') }}\">Add</a> </td>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            {% for row in data %}
                <tr>";

foreach ($table['columns'] as $col) {
    $file .= "
                    <td>{{ row.".$col['name']." }}</td>";
}
$file .= "
                    <td> <a href=\"{{ url_for('".$table['name']."s.".$table['name']."sEditPydef', ".$id."EditHTML=row.".$id.") }}\">Edit</a> </td>
                    <td> <a href=\"{{ url_for('".$table['name']."s.".$table['name']."sSelectDeletePydef', ".$id."DeleteHTML=row.".$id.") }}\">Delete</a> </td>
                </tr>
            {% endfor %}
        </table>
        </form>
        
    </div>
{% endblock %}";

    if (!file_exists('generator/output/'.$time.'/Templates/'.ucfirst($table['name']).'s')) {
        mkdir('generator/output/'.$time.'/Templates/'.ucfirst($table['name']).'s');
    }
    $fp = fopen('generator/output/'.$time.'/Templates/'.ucfirst($table['name']).'s/'.ucfirst($table['name']).'sAfficher.html', 'w');
    fwrite($fp, $file);
    fclose($fp);
}
?>