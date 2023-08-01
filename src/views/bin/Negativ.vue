<template>
  <div>
    <h2>Les nombres négatifs</h2>
    <p>
      Pour utiliser des entiers signés en informatique, on doit utiliser le MSB
      pour le signe.
    </p>
    <p>
      Et afin de pouvoir faire des opérations avec des nombres négatifs, il faut
      que ces nombres se suivent. D'où le cercle suivant :
    </p>
    <img
      src="/bin/medias/negativ_circle.gif"
      alt="Cyclicité"
      width="400"
      class="mx-auto"
    />
    <p>
      Avec ce système, on peut coder les nombres de -2<sup>N-1</sup> à
      2<sup>N-1</sup>-1. Par exemple, pour 8 bits : de -128 à 127.
    </p>

    <p>
      Pour trouver la valeur négative d'un nombre, il faut faire le complément à
      2.
    </p>

    <h2>Le complément à 1</h2>
    <p>Le complément à 1 est la première étape du complément à 2.</p>
    <p>
      Pour trouver le complément à 1, il suffit d'inverser tous les bits du
      nombre.
    </p>
    <p>
      Exemple :<br />
      9 en binaire = 1001<br />Complément à 1 de 9 en binaire = 0110
    </p>

    <h2>Le complément à 2</h2>
    <p>Pour trouver le complément à 2 :</p>
    <ul>
      <li>Faire le complément à 1 (inverser les 0 et les 1)</li>
      <li>Incrémenter (Additionner 1)</li>
    </ul>
    <p>Exemple :</p>
    <ul>
      <li>5 en binaire = 0101</li>
      <li>Complément à 1 de 5 en binaire = 1010</li>
      <li>Complément à 2 de 5 en binaire = 1011</li>
      <li>-5 = 1011</li>
    </ul>

    <h2>Les soustractions</h2>
    <p>
      Il est difficile de faire une soustraction en binaire car il faut faire
      beaucoup de retenues. À la place, on préfère additionner l'opposé du
      nombre. Explication :
    </p>
    <p>Au lieu de faire 7 - 3, on fait 7 + (-3).</p>
    <p>Donc en binaire, au lieu de faire 0111 - 0011, on fait 0111 + 1101.</p>
    <p>Exemple :</p>
    <img src="/bin/medias/sub.png" alt="0111 + 1101 = 0100" width="200" />
    <p>
      Si le nombre dépasse (comme ici le 1 barré), simplement ne pas en tenir
      compte.
    </p>

    <h2>Retrouver la valeur d'un nombre négatif</h2>
    <p>
      Imaginons qu'on ait un nombre comme 1011 codé sur 4 bits, On sait qu'il
      est négatif, mais on ne connaît pas sa valeur. Pour ça, il va falloir
      faire le complément à 2 à l'envers. Soit :
    </p>
    <ul>
      <li>Soustraire le nombre de 1</li>
      <li>Inverser tous les bits</li>
    </ul>
    <p>
      Ce qui donne 0101. De là, on peut facilement recalculer le nombre en
      décimal (= 5). Donc 1011 = -5.
    </p>
  </div>
</template>
