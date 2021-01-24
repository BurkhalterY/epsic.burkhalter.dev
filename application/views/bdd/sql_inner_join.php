<?php defined('BASEPATH') OR exit('No direct script access allowed'); ?>
<h1>Requêtes sur plusieurs tables</h1>
<p>Pour effectuer une requête sur plusieurs tables, il faut utiliser <strong>INNER JOIN</strong>.</p>

<h3>Pour une relation 1 à n</h3>
<p>Quand il n'y a que 2 tables (une table contient un champs FK vers une autre table), on construit la requête comme ceci :</p>
<pre><code class="language-sql">SELECT nom, prenom, nom_sexe FROM t_personne
INNER JOIN t_sexe ON fk_sexe = id_sexe</code></pre>
<p>On préfère ne pas utiliser l'étoile quand on fait une requête sur plusieurs tables pour plus de clarté. Ici on prend le sexe en vérifiant que le FK égale l'ID.</p>

<h3>Pour une relation n à n</h3>
<p>Lorsqu'il y a 2 tables dans lesquelles allé chercher les données, on doit utiliser 2 fois <strong>INNER JOIN</strong> à la suite.</p>
<pre><code class="language-sql">SELECT nom, prenom, adresse FROM t_avoir_email
INNER JOIN t_personne ON fk_personne = id_personne
INNER JOIN t_email ON fk_email = id_email</code></pre>
<p>On peut bien évidement ajouté les même options supplémentaires qu'<a href="<?=base_url('bdd/sql_select')?>">ici</a>. Simplement les rajouter à la fin.</p>

<p>La base de données utilisée est disponible <a href="<?=base_url('medias/bdd/tuto.sql')?>">ici</a>.</p>