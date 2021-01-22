<?php defined('BASEPATH') OR exit('No direct script access allowed'); ?>
<h1>Conversion base n en base 10</h1>
<h3>La base 10</h3>
<p>La notation décimale est celle que nous utilisons tous les jours. Elle utilise 10 symboles qui permettent d'écrire n'importe quel nombre. Ces symboles sont : <strong>0, 1, 2, 3, 4, 5, 6, 7, 8 et 9</strong>. Il y a 10 symboles, on dit donc que l'on travaille en base 10.</p>
<p>125 est par exemple composé des nombres 1, 2 et 5.</p>

<h3>Les autres bases</h3>
<p>Nous utilisons quotidiennement la base 10, mais il en existe d'autre. Le binaire (base 2), l'octal (base 8), l'hexadécimal (base 16) et même la base 64.</p>
<p>En binaire, on utilise uniquement 2 symboles : <strong>0 et 1</strong>.</p>
<p>En hexadécimal, on utilise 16 symboles. Comme il n'existe que 10 chiffres, on utilise les 6 premières lettres de l'alphabet pour compléter : <strong>0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E et F</strong>.</p>

<h3>Convertir un nombre binaire en décimal.</h3>
<p>Prenons le nombre 125<sub>10</sub> par exemple. Il peut aussi s'écrire comme ceci : 1 × 10<sup>2</sup> + 2 × 10<sup>1</sup> + 5 × 10<sup>0</sup>.</p>
<p>Rappelle : n'importe quel nombre à la puissance zéro est toujours égale à 1.</p>
<p>Ça nous donne 100 + 20 + 5 = 125.</p>
<p>Dans notre calcul, le 10 correspond à la base. On peut donc prendre un nombre binaire et faire le même calcul en changeant les 10 en 2 :<br>110101<sub>2</sub> = 1 × 2<sup>5</sup> + 1 × 2<sup>4</sup> + 0 × 2<sup>3</sup> + 1 × 2<sup>2</sup> + 0 × 2<sup>1</sup> + 1 × 2<sup>0</sup></p>
<p>Si on fait le calcul, on obtient 53, donc :<br>110101<sub>2</sub> = 53<sub>10</sub></p>

<h3>Convertir un nombre hexadécimal en décimal.</h3>
<p>Un autre exemple avec un nombre en base 16.</p>
<p>4EA<sub>16</sub> = 4 × 16<sup>2</sup> + E(14) × 16<sup>1</sup> + A(10) × 16<sup>0</sup> = 1024 + 224 + 10 = <strong>1258</strong></p>