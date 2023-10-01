<template>
  <div>
    <h2>Convertir un nombre réel en binaire.</h2>
    <p>
      Pour la partie entière, garder le même principe. Puis prendre la partie
      après la virgule.
    </p>
    <p class="ml-5">6,625 → 0,625</p>
    <p>
      Il faut multiplier le nombre par 2 et, si le resultat est supérieur ou
      égal à 1, noter 1. Sinon noter 0. Puis recommencer en prenant la partie
      après la virgule :
    </p>
    <table class="ml-5 example">
      <tr>
        <td>0,625</td>
        <td>× 2 =</td>
        <td><strong>1</strong>,25</td>
        <td>→ 1</td>
      </tr>
      <tr>
        <td>0,25</td>
        <td>× 2 =</td>
        <td><strong>0</strong>,5</td>
        <td>→ 0</td>
      </tr>
      <tr>
        <td>0,5</td>
        <td>× 2 =</td>
        <td><strong>1</strong>,0</td>
        <td>→ 1</td>
      </tr>
      <tr>
        <td></td>
      </tr>
    </table>
    <p>
      <small>(Se lit de haut en bas)</small><br />
      6,625<sub>10</sub> = 110,101<sub>2</sub>
    </p>
    <p>
      Pour être précis à 100&nbsp;%, il faut s'arrêter lorsqu'on obtient 1.0,
      comme ici.
    </p>
    <p>
      Attention cependant car certains nombres finis en décimal ne le sont pas
      forcément en binaire et inversement. À vous de voir où vous arrêter.
    </p>

    <h2>La norme IEEE 754</h2>
    <p>
      C'est la norme la plus utilisée pour stocker des nombres à virgules.<br />Elle
      existe en précision simple (32 bits) et double (64 bits).
    </p>
    <p>Les nombres sont structurés comme suit :</p>
    <div class="ieee-754">
      <div
        v-for="i of 32"
        class="aspect-square"
        :class="{
          'bg-red-200': 32 - i == 31,
          'bg-blue-200': 32 - i >= 23 && 32 - i <= 30,
          'bg-lime-200': 32 - i < 23,
        }"
      >
        <template v-if="[0, 22, 23, 30, 31].includes(32 - i)">
          {{ 32 - i }}
        </template>
      </div>
      <div class="bg-red-200 aspect-square">(S)</div>
      <div class="col-span-8 col-start-2 bg-blue-200">Exposant</div>
      <div class="col-start-10 col-span-full bg-lime-200">Mantisse</div>
    </div>
    <ul>
      <li>(S)igne :</li>
      <ul>
        <li>sur 1 bit</li>
        <li>0 si positif, 1 si négatif</li>
        <li>plus besoin de faire le complément à 2</li>
      </ul>
      <li>Exposant :</li>
      <ul>
        <li>sur 8 bits</li>
        <li>127 est défini comme 0</li>
        <li>donc 126 = -1 et 128 = 1, etc.</li>
      </ul>
      <li>Mantisse :</li>
      <ul>
        <li>sur 23 bits</li>
        <li>
          C'est la valeur numérique du nombre, la virgule se situe avant le
          premier bit.
        </li>
        <li>
          Une valeur de 1 est supposée avant la virgule mais elle n'est pas
          transmise car tous les nombres (sauf 0) contiennent au moins un 1.
        </li>
      </ul>
    </ul>

    <h2>Calculer le signe</h2>
    <p>
      Simplement,<br />Si le nombre est positif : mettre <strong>0</strong
      ><br />Si le nombre est négatif : mettre 1
    </p>
    <p>* On ne fait plus le complément à 2.</p>

    <h2>Calculer l'exposant</h2>
    <p>
      Si on prend le nombre 350,75<sub>10</sub>, cela donne 1 0101 1110,11<sub
        >2</sub
      >
    </p>
    <p>
      L'exposant est le nombre de crans dont on doit déplacer la virgule (vers
      la droite ou vers la gauche) pour arriver au premier 1. Ici, ça fait 8
      (1<b>,</b>0101 1110<span class="font-bold text-red-600">,</span>11)
    </p>
    <p>
      Si on la décale vers la gauche, on additionne, si on décale vers la
      droite, on soustrait. Le 127 est représenté comme étant 0. Donc ici on va
      faire 127 + 8 = 135 = <strong>1000 0111</strong>
    </p>

    <h2>Calculer la mantisse</h2>
    <p>
      Reprenons 350,75<sub>10</sub> qui vaut 1 0101 1110,11<sub>2</sub> en
      binaire. Pour calculer la mantisse, on va juste enlever la virgule et le
      premier 1 : 0101 1110 11<br />Puis, on complète avec des 0 afin de remplir
      les 23 bits : <strong>010 1111 0110 0000 0000 0000</strong>. Nous avons
      notre mantisse.
    </p>
    <p>
      Il ne reste plus qu'à tout appondre :
      <strong>0100 0011 1010 1111 0110 0000 0000 0000</strong>.
    </p>

    <h2>Cas particulier : le zéro</h2>
    <p>
      Pour écrire 0, on met simplement tous les bits à 0, soit :
      <strong>0000 0000 0000 0000 0000 0000 0000 0000</strong>
    </p>
    <p>
      * À savoir que 1000 0000 0000 0000 0000 0000 0000 0000 = -0 ce qui revient
      au même.
    </p>
  </div>
</template>

<style scoped>
table.example td {
  @apply border-0 px-px py-0;
}
.ieee-754 {
  @apply grid text-[1vw];
  grid-template-columns: repeat(32, minmax(0, 1fr));
}
.ieee-754 div {
  @apply border-l border-t border-black overflow-hidden flex justify-center items-center;
}
.ieee-754 div:nth-last-child(1),
.ieee-754 div:nth-last-child(4) {
  @apply border-r border-black overflow-hidden;
}
.ieee-754 div:nth-last-child(-n + 3) {
  @apply border-b border-black overflow-hidden;
}
</style>
