<template>
  <div>
    <p>
      Les fonctions logiques sont les seules opérations qu'un processeur peut
      effectuer. Il les combine ensuite pour en faire de plus complexes telles
      que l'addition, la multiplication, etc.
    </p>
    <p>Les 7 fonctions logiques de base sont :</p>
    <ul>
      <li>NOT</li>
      <li>AND</li>
      <li>OR</li>
      <li>XOR</li>
      <li>NAND</li>
      <li>NOR</li>
      <li>NXOR</li>
    </ul>

    <hr />
    <h2>NOT (fonction inverse)</h2>
    <p>Ne prend qu'un paramètre et en renvoie l'inverse :</p>
    <p>Table de vérité :</p>
    <table>
      <tr>
        <th>A</th>
        <th>S</th>
      </tr>
      <tr>
        <td>0</td>
        <td>1</td>
      </tr>
      <tr>
        <td>1</td>
        <td>0</td>
      </tr>
    </table>
    <p>Équation :</p>
    <p>S = <span class="overline">A</span></p>

    <hr />
    <h2>AND (fonction ET)</h2>
    <p>Renvoie 1 si toutes les entrées sont à 1</p>
    <p>Table de vérité :</p>
    <table>
      <tr>
        <th>A</th>
        <th>B</th>
        <th>S</th>
      </tr>
      <tr>
        <td>0</td>
        <td>0</td>
        <td>0</td>
      </tr>
      <tr>
        <td>0</td>
        <td>1</td>
        <td>0</td>
      </tr>
      <tr>
        <td>1</td>
        <td>0</td>
        <td>0</td>
      </tr>
      <tr>
        <td>1</td>
        <td>1</td>
        <td>1</td>
      </tr>
    </table>
    <p>Équation :</p>
    <p>
      S = A ∙ B
      <span class="text-sm italic text-neutral-700"> ou </span>
      S = A ∧ B
    </p>

    <hr />
    <h2>OR (fonction OU inclusif)</h2>
    <p>Renvoie 1 si au moins une entrée est à 1</p>
    <p>Table de vérité :</p>
    <table>
      <tr>
        <th>A</th>
        <th>B</th>
        <th>S</th>
      </tr>
      <tr>
        <td>0</td>
        <td>0</td>
        <td>0</td>
      </tr>
      <tr>
        <td>0</td>
        <td>1</td>
        <td>1</td>
      </tr>
      <tr>
        <td>1</td>
        <td>0</td>
        <td>1</td>
      </tr>
      <tr>
        <td>1</td>
        <td>1</td>
        <td>1</td>
      </tr>
    </table>
    <p>Équation :</p>
    <p>
      S = A + B
      <span class="text-sm italic text-neutral-700"> ou </span>
      S = A ∨ B
    </p>

    <hr />
    <h2>XOR (fonction OU exclusif)</h2>
    <p>Renvoie 1 si une seule entrée est à 1</p>
    <p>Table de vérité :</p>
    <table>
      <tr>
        <th>A</th>
        <th>B</th>
        <th>S</th>
      </tr>
      <tr>
        <td>0</td>
        <td>0</td>
        <td>0</td>
      </tr>
      <tr>
        <td>0</td>
        <td>1</td>
        <td>1</td>
      </tr>
      <tr>
        <td>1</td>
        <td>0</td>
        <td>1</td>
      </tr>
      <tr>
        <td>1</td>
        <td>1</td>
        <td>0</td>
      </tr>
    </table>
    <p>Équation :</p>
    <p>S = A ⊕ B</p>
    <div class="alert-warning">
      Attention, s'il y a plus de deux entrées, la fonction renvoie 1 s'il y a
      un nombre impaire de 1.
    </div>

    <hr />
    <h2>NAND (combinaison de NOT et AND)</h2>
    <p>Renvoie 0 si toutes les entrées sont à 1</p>
    <p>Table de vérité :</p>
    <table>
      <tr>
        <th>A</th>
        <th>B</th>
        <th>S</th>
      </tr>
      <tr>
        <td>0</td>
        <td>0</td>
        <td>1</td>
      </tr>
      <tr>
        <td>0</td>
        <td>1</td>
        <td>1</td>
      </tr>
      <tr>
        <td>1</td>
        <td>0</td>
        <td>1</td>
      </tr>
      <tr>
        <td>1</td>
        <td>1</td>
        <td>0</td>
      </tr>
    </table>
    <p>Équation :</p>
    <p>
      S = <span class="overline">A ∙ B</span>
      <span class="text-sm italic text-neutral-700"> ou </span>
      S = <span class="overline">A ∧ B</span>
    </p>

    <hr />
    <h2>NOR (combinaison de NOT et OR)</h2>
    <p>Renvoie 0 si au moins une entrée est à 1</p>
    <p>Table de vérité :</p>
    <table>
      <tr>
        <th>A</th>
        <th>B</th>
        <th>S</th>
      </tr>
      <tr>
        <td>0</td>
        <td>0</td>
        <td>1</td>
      </tr>
      <tr>
        <td>0</td>
        <td>1</td>
        <td>0</td>
      </tr>
      <tr>
        <td>1</td>
        <td>0</td>
        <td>0</td>
      </tr>
      <tr>
        <td>1</td>
        <td>1</td>
        <td>0</td>
      </tr>
    </table>
    <p>Équation :</p>
    <p>
      S = <span class="overline">A + B</span>
      <span class="text-sm italic text-neutral-700"> ou </span>
      S = <span class="overline">A ∨ B</span>
    </p>

    <hr />
    <h2>NXOR (combinaison de NOT et XOR)</h2>
    <p>Renvoie 0 si une seule entrée est à 1</p>
    <p>Table de vérité :</p>
    <table>
      <tr>
        <th>A</th>
        <th>B</th>
        <th>S</th>
      </tr>
      <tr>
        <td>0</td>
        <td>0</td>
        <td>1</td>
      </tr>
      <tr>
        <td>0</td>
        <td>1</td>
        <td>0</td>
      </tr>
      <tr>
        <td>1</td>
        <td>0</td>
        <td>0</td>
      </tr>
      <tr>
        <td>1</td>
        <td>1</td>
        <td>1</td>
      </tr>
    </table>
    <p>Équation :</p>
    <p>S = <span class="overline">A ⊕ B</span></p>
    <div class="alert-warning">
      Attention, s'il y a plus de deux entrées, la fonction renvoie 1 s'il y a
      un nombre pair de 1.
    </div>
  </div>
</template>

<style scoped>
th,
td {
  @apply border border-black text-center;
}
</style>
