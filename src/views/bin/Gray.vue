<template>
  <div>
    <h1>Code Gray</h1>
    <p>
      Le code de Gray, également appelé code Gray ou code binaire réfléchi, est
      un type de codage binaire permettant de ne modifier qu'un seul bit à la
      fois quand un nombre est augmenté d'une unité.
    </p>
    <table class="table-responsive">
      <tr>
        <th>Décimal&nbsp;</th>
        <th>Binaire pur&nbsp;</th>
        <th>Code Gray</th>
      </tr>
      <tr>
        <td>0</td>
        <td>0000</td>
        <td>0000</td>
      </tr>
      <tr>
        <td>1</td>
        <td>0001</td>
        <td>0001</td>
      </tr>
      <tr>
        <td>2</td>
        <td>0010</td>
        <td>0011</td>
      </tr>
      <tr>
        <td>3</td>
        <td>0011</td>
        <td>0010</td>
      </tr>
      <tr>
        <td>4</td>
        <td>0100</td>
        <td>0110</td>
      </tr>
      <tr>
        <td>5</td>
        <td>0101</td>
        <td>0111</td>
      </tr>
      <tr>
        <td>6</td>
        <td>0110</td>
        <td>0101</td>
      </tr>
      <tr>
        <td>7</td>
        <td>0111</td>
        <td>0100</td>
      </tr>
      <tr>
        <td>8</td>
        <td>1000</td>
        <td>1100</td>
      </tr>
      <tr>
        <td>9</td>
        <td>1001</td>
        <td>1101</td>
      </tr>
      <tr>
        <td>10</td>
        <td>1010</td>
        <td>1111</td>
      </tr>
      <tr>
        <td>11</td>
        <td>1011</td>
        <td>1110</td>
      </tr>
      <tr>
        <td>12</td>
        <td>1100</td>
        <td>1010</td>
      </tr>
      <tr>
        <td>13</td>
        <td>1101</td>
        <td>1011</td>
      </tr>
      <tr>
        <td>14</td>
        <td>1110</td>
        <td>1001</td>
      </tr>
      <tr>
        <td>15</td>
        <td>1111</td>
        <td>1000</td>
      </tr>
    </table>
    <br />

    <h3>Conversion binaire à Gray</h3>
    <ul>
      <li>Garder le MSB</li>
      <li>Comparer les bits 2 à 2</li>
      <ul>
        <li>Si les 2 bits sont les mêmes : écrire 0</li>
        <li>Si les 2 bits sont différents : écrire 1</li>
      </ul>
    </ul>
    <br />
    <p>Exemple : 1011<sub>2</sub></p>
    <ul>
      <li>On garde le MSB : 1...</li>
      <li>On compare les 2 premiers bits : <strong>10</strong>11</li>
      <li>Ils sont différents donc on écrit 1 → 11...</li>
      <li>
        On compare le bit précèdent avec le bit suivant : 1<strong>01</strong>1
      </li>
      <li>Ils sont différents donc on écrit 1 → 111...</li>
      <li>
        On compare le bit précèdent avec le bit suivant : 10<strong>11</strong>
      </li>
      <li>Ils sont égaux donc on écrit 0 → 1110</li>
      <li>1011<sub>2</sub> = 1110<sub>Gray</sub></li>
    </ul>

    <h3>Conversion Gray à binaire</h3>
    <ul>
      <li>Garder le MSB</li>
      <li>Comparer le bit qui vient d'être écrit avec le suivant</li>
      <ul>
        <li>Si les 2 bits sont les mêmes : écrire 0</li>
        <li>Si les 2 bits sont différents : écrire 1</li>
      </ul>
    </ul>
    <br />
    <p>Exemple : 1110<sub>Gray</sub></p>
    <ul>
      <li>On garde le MSB : 1...</li>
      <li>
        On compare le bit que l'on vient d'écrire avec le prochain :
        <strong>1</strong> et 1<strong>1</strong>10
      </li>
      <li>Ils sont égaux donc on écrit 0 → 10...</li>
      <li>
        On compare le bit que l'on vient d'écrire avec le prochain : 1<strong
          >0</strong
        >
        et 11<strong>1</strong>0
      </li>
      <li>Ils sont différents donc on écrit 1 → 101...</li>
      <li>
        On compare le bit que l'on vient d'écrire avec le prochain : 10<strong
          >1</strong
        >
        et 111<strong>0</strong>
      </li>
      <li>Ils sont différents donc on écrit 1 → 1011</li>
      <li>1110<sub>Gray</sub> = 1011<sub>2</sub></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Gray",
};
</script>
