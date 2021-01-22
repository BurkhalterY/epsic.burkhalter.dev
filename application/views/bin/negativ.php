<?php defined('BASEPATH') OR exit('No direct script access allowed'); ?>
<h1>Soustractions et nombres négatifs</h1>
<p>Pour utiliser des entiers signés dans l'ordinateur, on doit utiliser le MSB pour le signe.</p>
<p>Et afin de pouvoir faire des opérations avec nombres négatifs, il faut que ces nombres se suivent. D'où le cercle suivant :</p>
<img src="<?=base_url('medias/bin/negativ_circle.gif')?>" alt="Cyclicité" width="400" />
<br><br>
<p>Avec ce système, on peut coder les nombres de -2<sup>N-1</sup> à 2<sup>N-1</sup>-1. Par exemple avec 8 bits : -128 à 127.</p>

<p>Pour trouver la valeur négative d'un nombre, il faut faire le complément à 2.</p>

<h3>Le complément à 1</h3>
<p>Le complément à 1 est la première étape du complément à 2.</p>
<p>Pour trouver le complément à 1, il suffit d'inverser tous les bits du nombre.</p>
<p>Exemple :<br> 9 en binaire = 1001<br>Complément à 1 de 9 en binaire = 0110</p>

<h3>Le complément à 2</h3>
<p>Pour trouver le complément à 2 :</p>
<ul>
	<li>Faire le complément à 1 (inverser les 0 et les 1)</li>
	<li>Incrémenter (Additionner 1)</li>
</ul>
<p>Exemple :</p>
<ul>
	<li> 5 en binaire = 0101</li>
	<li>Complément à 1 de 5 en binaire = 1010</li>
	<li>Complément à 2 de 5 en binaire = 1011</li>
	<li>-5 = 1011</li>
</ul>

<h3>Faire une soustraction</h3>
<p>Il est difficile de faire une soustraction en binaire car il y a beaucoup de retenus. À la place, on préfère additionner l'opposé du nombre. Explication :</p>
<p>Au lieu de faire 7 - 3, on fait 7 + (-3).</p>
<p>Donc en binaire au lieu de faire 0111 - 0011, on fait 0111 + 1101.</p>
<p>Exemple :</p>
<img src="<?=base_url('medias/bin/sub.png')?>" alt="0111 + 1101 = 0100" width="200" />
<p>Si le nombre dépasse (comme ici le 1 barré), simplement ne pas en tenir compte.</p>

<h3>Trouver la valeur d'un nombre négatif</h3>
<p>Imaginons qu'on ait un nombre comme 1011 codé sur 4 bits, on sait qu'il est négatif, mais on ne peut pas connaître sa valeur. Pour se faire, il va falloir faire le complément à 2 à l'envers. Soit :</p>
<ul>
	<li>Soustraire le nombre de 1</li>
	<li>Inverser tous les bits</li>
</ul>
<p>Ce qui donne 0101. De là, on peut facilement calculer 5. Donc 1011 = -5.</p>