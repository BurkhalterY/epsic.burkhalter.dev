<template>
  <div>
    <table class="text-center">
      <tr>
        <th>Décimal</th>
        <th>Hexadécimal</th>
        <th>Binaire</th>
      </tr>
      <tr>
        <td>0</td>
        <td>0</td>
        <td>0000</td>
      </tr>
      <tr>
        <td>1</td>
        <td>1</td>
        <td>0001</td>
      </tr>
      <tr>
        <td>2</td>
        <td>2</td>
        <td>0010</td>
      </tr>
      <tr>
        <td>3</td>
        <td>3</td>
        <td>0011</td>
      </tr>
      <tr>
        <td>4</td>
        <td>4</td>
        <td>0100</td>
      </tr>
      <tr>
        <td>5</td>
        <td>5</td>
        <td>0101</td>
      </tr>
      <tr>
        <td>6</td>
        <td>6</td>
        <td>0110</td>
      </tr>
      <tr>
        <td>7</td>
        <td>7</td>
        <td>0111</td>
      </tr>
      <tr>
        <td>8</td>
        <td>8</td>
        <td>1000</td>
      </tr>
      <tr>
        <td>9</td>
        <td>9</td>
        <td>1001</td>
      </tr>
      <tr>
        <td>10</td>
        <td>A</td>
        <td>1010</td>
      </tr>
      <tr>
        <td>11</td>
        <td>B</td>
        <td>1011</td>
      </tr>
      <tr>
        <td>12</td>
        <td>C</td>
        <td>1100</td>
      </tr>
      <tr>
        <td>13</td>
        <td>D</td>
        <td>1101</td>
      </tr>
      <tr>
        <td>14</td>
        <td>E</td>
        <td>1110</td>
      </tr>
      <tr>
        <td>15</td>
        <td>F</td>
        <td>1111</td>
      </tr>
    </table>
    <p>
      Un symbole hexadécimal équivaut à 4 bits. On peut donc directement
      regrouper les bits par groupe de 4 et les remplacer selon le tableau.
    </p>
    <p>Exemple : 10010111010<sub>2</sub> = 4BA<sub>16</sub></p>
    <table class="example">
      <tr>
        <td>4</td>
        <td>B</td>
        <td>A</td>
      </tr>
      <tr>
        <td>100</td>
        <td>1011</td>
        <td>1010</td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
table.example td {
  @apply text-center border-y-0 border-x border-x-black p-0;
}
table.example td:first-child,
table.example td:last-child {
  @apply border-0;
}
</style>
