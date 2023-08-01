<template>
  <div>
    <ul>
      <li>Défini le nombre de 1 par rapport au nombre de bits.</li>
      <li>x = le nombre de 1</li>
      <li>n = le nombre total de bits</li>
      <li>
        Est utilisé pour les télécommunications afin de vérifier si une erreur
        s'est produite en comptant le nombre de 1.
      </li>
    </ul>

    <h2>Code 2 parmi 5</h2>
    <p>
      Consiste à utiliser 2 chiffres sur 5 qui, additionnés, donne un chiffre
      entre 0 et 9. C'est aussi une notation
      <router-link to="/bcd/bin">BCD</router-link> car on n'utilise pas les
      symboles A à F.
    </p>
    <p>
      En télécommunications, on utilise les chiffres
      <strong>0, 1, 2, 3 et 6</strong>.
    </p>
    <p>
      Dans le système POSTNET, on utilise les chiffres
      <strong>7, 4, 2, 1 et 0</strong>.
    </p>
    <table class="text-center">
      <tr>
        <th>
          <div class="text-center">Décimale</div>
          <div class="text-center">&nbsp;</div>
        </th>
        <th>
          <div class="text-center">Télécommunications</div>
          <div class="text-center">01236</div>
        </th>
        <th>
          <div class="text-center">POSTNET</div>
          <div class="text-center">74210</div>
        </th>
      </tr>
      <tr>
        <td>0</td>
        <td>01100</td>
        <td>11000</td>
      </tr>
      <tr>
        <td>1</td>
        <td>11000</td>
        <td>00011</td>
      </tr>
      <tr>
        <td>2</td>
        <td>10100</td>
        <td>00101</td>
      </tr>
      <tr>
        <td>3</td>
        <td>10010</td>
        <td>00110</td>
      </tr>
      <tr>
        <td>4</td>
        <td>01010</td>
        <td>01001</td>
      </tr>
      <tr>
        <td>5</td>
        <td>00110</td>
        <td>01010</td>
      </tr>
      <tr>
        <td>6</td>
        <td>10001</td>
        <td>01100</td>
      </tr>
      <tr>
        <td>7</td>
        <td>01001</td>
        <td>10001</td>
      </tr>
      <tr>
        <td>8</td>
        <td>00101</td>
        <td>10010</td>
      </tr>
      <tr>
        <td>9</td>
        <td>00011</td>
        <td>10100</td>
      </tr>
    </table>
    <p>
      Remarque : 0 s'écrit avec 1 et 2 tandis que 3 s'écrit avec 0 et 3. Comme
      il existe deux possibilités d'écrire 3 mais aucune d'écrire 0, on utilise
      1 et 2 pour écrire 0. C'est une exception ! De même pour le système
      POSTNET où 0 est écrit avec 7 et 4 car cette combinaison n'est pas
      utilisée.
    </p>
  </div>
</template>
