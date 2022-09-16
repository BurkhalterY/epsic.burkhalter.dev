<template>
  <div>
    <h1>Nombres à virgules flottantes</h1>
    <h3>Convertir un nombre réel en binaire.</h3>
    <p>
      Pour la partie entière, garder le même principe. Puis prendre la partie
      après la virgule.
    </p>
    <p>
      Il faut multiplier le nombre par 2 et si c'est supérieur ou égal à 1,
      noter 1, sinon noter 0. Puis recommencer en prenant la partie après la
      virgule :
    </p>
    <p>6,625 → 0,625</p>
    <table class="table-responsive">
      <tr>
        <td>0,625 × 2 = <strong>1</strong>,25&nbsp;</td>
        <td>→ 1</td>
      </tr>
      <tr>
        <td>0,25 × 2 = <strong>0</strong>,5</td>
        <td>→ 0</td>
      </tr>
      <tr>
        <td>0,5 × 2 = <strong>1</strong>,0</td>
        <td>→ 1</td>
      </tr>
    </table>
    <p>(Ce lit de haut en bas)</p>
    <p>Pour être précis à 100%, il faut s'arrêter lorsqu'on obtient 1.0</p>
    <p>
      Attention cependant car certains nombres finis en décimal ne le sont pas
      forcément en binaire et inversement. À vous de voir où vous arrêter.
    </p>
    <br />
    <p>Ici : 6,625<sub>10</sub> = 110,101<sub>2</sub></p>

    <h3>La norme IEEE 754</h3>
    <p>
      C'est la norme la plus utilisé pour stocker des nombres à virgules.<br />Elle
      existe en précision simple (32 bits) et double (64 bits).
    </p>
    <p>Elle est constituée comme suit :</p>
    <img
      src="/medias/bin/ieee754.png"
      alt="structure de IEEE 754"
      class="img-fluid"
    />
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
        <li>donc 126 = -1 et 128 = 1, etc...</li>
      </ul>
      <li>Mantisse :</li>
      <ul>
        <li>sur 23 bits</li>
        <li>
          C'est la valeur numérique du nombre, la virgule se situe avant le
          premier bit.
        </li>
        <li>
          une valeur de 1 est supposée avant la virgule mais elle n'est pas
          transmise car tous les nombres (sauf 0) contiennent au moins un 1.
        </li>
      </ul>
    </ul>

    <h3>Calculer le signe</h3>
    <p>
      Simplement,<br />Si le nombre est positif : mettre <strong>0</strong
      ><br />Si le nombre est négatif : mettre 1
    </p>
    <p>* On n'a plus besoin de faire le complément à 2.</p>

    <h3>Calculer l'exposant</h3>
    <p>Si on prend le nombre 350,75, cela donne 1 0101 1110,11</p>
    <p>
      L'exposant est le nombre de crans dont on doit déplacer la virgule (vers
      la droite ou vers la gauche) pour arriver au premier 1. Ici, ça fait 8
      (1,0101 1110<span style="color: red">,</span>11)
    </p>
    <p>
      Si on la décale vers la gauche, on additionne, si on décale vers la
      droite, on soustrait. Le 127 est représenté comme étant 0. Donc ici on va
      faire 127 + 8 = 135 = <strong>1000 0111</strong>
    </p>

    <h3>Calculer la mantisse</h3>
    <p>
      Reprenons 350,75 qui vaut 1 0101 1110,11 en binaire. Pour calculer la
      mantisse, on va juste enlever la virgule et le premier 1 : 0101 1110 11<br />Puis
      on complète avec des 0 afin de remplir les 23 bits :
      <strong>010 1111 0110 0000 0000 0000</strong>. Nous avons notre mantisse.
    </p>
    <p>
      Il ne reste plus qu'à tout appondre :
      <strong>0100 0011 1010 1111 0110 0000 0000 0000</strong>.
    </p>

    <h3>Cas particulier : le zéro</h3>
    <p>
      Pour écrire 0, on met simplement tous les bits à 0 soit
      <strong>0000 0000 0000 0000 0000 0000 0000 0000</strong>.
    </p>
    <p>
      * À savoir que 1000 0000 0000 0000 0000 0000 0000 0000 = -0 ce qui revient
      au même.
    </p>
  </div>
</template>

<script>
export default {
  name: "Float",
};
</script>
