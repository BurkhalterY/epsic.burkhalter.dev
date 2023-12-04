<template>
  <div>
    <p>
      Pour passer du décimale à une autre base, on effectue un série de
      divisions.
    </p>

    <h2>Du décimal au binaire</h2>
    <p>Prenons par exemple le nombre 106<sub>10</sub></p>
    <table>
      <tr class="!border-r-0">
        <td>106 ÷ 2 = 53</td>
        <td>reste 0</td>
        <td rowspan="7">
          <img src="/bin/medias/up.png" alt="↑" class="!my-0" />
        </td>
      </tr>
      <tr>
        <td>53 ÷ 2 = 26</td>
        <td>reste 1</td>
      </tr>
      <tr>
        <td>26 ÷ 2 = 13</td>
        <td>reste 0</td>
      </tr>
      <tr>
        <td>13 ÷ 2 = 6</td>
        <td>reste 1</td>
      </tr>
      <tr>
        <td>6 ÷ 2 = 3</td>
        <td>reste 0</td>
      </tr>
      <tr>
        <td>3 ÷ 2 = 1</td>
        <td>reste 1</td>
      </tr>
      <tr>
        <td>1 ÷ 2 = 0</td>
        <td>reste 1</td>
      </tr>
    </table>
    <p>
      On fait une division entière par 2 et on note le reste. On s'arrête quand
      le nombre à diviser est 0. Ensuite on lit les restes en partant du bas.
      Ici, ça donne 1101010.
    </p>

    <h2>Du décimal à l'hexadécimal</h2>
    <p>
      Ici c'est un peu plus compliqué car il faut diviser par 16. L'usage d'une
      calculatrice est recommandé.
    </p>
    <p>Prenons par exemple le nombre 2675<sub>16</sub></p>
    <table>
      <tr>
        <td>2675 ÷ 16 = 167</td>
        <td>reste 3</td>
        <td rowspan="3">
          <img src="/bin/medias/up1.png" alt="↑" class="!my-0" />
        </td>
      </tr>
      <tr>
        <td>167 ÷ 16 = 10</td>
        <td>reste 7</td>
      </tr>
      <tr>
        <td>10 ÷ 16 = 0</td>
        <td>reste 10 → A</td>
      </tr>
    </table>
    <br />
    <p>Donc 1675<sub>10</sub> = A73<sub>16</sub></p>
    <p>
      Remarque : pensez à remplacer les restes supérieurs à 9 par leur lettre
      respective.
    </p>
  </div>
</template>

<style scoped>
td {
  @apply border-none py-0;
}
</style>
