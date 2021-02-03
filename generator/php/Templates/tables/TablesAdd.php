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
        <BODY bgcolor=\"brown\">
        <form method=\"POST\" action=\"\">
            {% with messages = get_flashed_messages() %}
                {% if messages %}
                    <ul class=flashes>
                    {% for message in messages %}
                    <li>{{ message }}</li>
                    {% endfor %}
                    </ul>
                {% endif %}
            {% endwith %}
            <div>
                {{ msgHtml }}
                {% if error %}
                    <p class=error><strong>Error:</strong> {{ error }}
                {% endif %}
            </div>
            <center>
                <H1>Clavioter un nouveau ".strtoupper($table['name'])."</H1> <br>";

foreach ($table['columns'] as $col) {
    if(!isset($col['pk'])){
        $file .= "
                ".$col['name']." <input type = \"text\" name= \"".$col['name'].ucfirst($table['name'])."HTML\" /> <br>";
    }
}
$file .= "
                <input type = \"submit\">
            </center>
        </form>
        </BODY>
    </div>
{% endblock %}";

    if (!file_exists('generator/output/'.$time.'/Templates/'.ucfirst($table['name']).'s')) {
        mkdir('generator/output/'.$time.'/Templates/'.ucfirst($table['name']).'s');
    }
    $fp = fopen('generator/output/'.$time.'/Templates/'.ucfirst($table['name']).'s/'.ucfirst($table['name']).'sAdd.html', 'w');
    fwrite($fp, $file);
    fclose($fp);
}
?>