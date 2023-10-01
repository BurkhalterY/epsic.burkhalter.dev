<script setup>
import ShowCode from "@/components/ShowCode.vue"
</script>

<template>
  <div>
    <h2>Changer la valeur d'une variable</h2>
    <p>
      On utilise le signe <code>=</code> pour donner une nouvelle valeur à une
      variable.
    </p>
    <ShowCode raw="maVariable = 5;" lang="java" />

    <h2>Effectuer un calcul</h2>
    <p>Il existe 5 opérations de bases :</p>
    <table class="mx-auto">
      <thead>
        <tr>
          <th>Symbole</th>
          <th>Nom</th>
          <th>Exemple</th>
          <th>Remarque</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>+</td>
          <td>Addition</td>
          <td>
            <ShowCode raw="maVar = 3 + 4; // maVar vaut 7" lang="java" />
          </td>
          <td></td>
        </tr>
        <tr>
          <td>-</td>
          <td>Soustraction</td>
          <td>
            <ShowCode raw="maVar = 10 - 4; // maVar vaut 6" lang="java" />
          </td>
          <td></td>
        </tr>
        <tr>
          <td>*</td>
          <td>Multiplication</td>
          <td>
            <ShowCode raw="maVar = 3 * 3; // maVar vaut 9" lang="java" />
          </td>
          <td></td>
        </tr>
        <tr>
          <td>/</td>
          <td>Division</td>
          <td>
            <ShowCode
              raw="maVar = 20 / 4; // maVar vaut 5&NewLine;maVar = 20 / 3; // maVar vaut 6"
              lang="java"
            />
          </td>
          <td>
            Si les deux nombres sont des entiers (<code>byte</code>,
            <code>short</code>, <code>int</code> ou <code>long</code>), alors le
            résultat sera aussi un nombre entier (arrondi inférieur).
          </td>
        </tr>
        <tr>
          <td>%</td>
          <td>Modulo</td>
          <td>
            <ShowCode raw="maVar = 42 % 10; // maVar vaut 2" lang="java" />
          </td>
          <td>Renvoie le reste de la division.</td>
        </tr>
      </tbody>
    </table>

    <h2>Effectuer un calcul complexe</h2>
    <p>Vous pouvez mettre plus d'un opérateur par ligne :</p>
    <ShowCode raw="maVar = 2 + 3 + 4; // maVar vaut 9" lang="java" />
    <p>
      Attention cependant à la priorité des opérations. Vous pouvez mettre des
      parenthèses comme en mathématique.
    </p>
    <ShowCode
      raw="maVar = 2 + 3 * 5; // maVar vaut 17&NewLine;maVar = (2 + 3) * 5; // maVar vaut 25"
      lang="java"
    />

    <h2>Raccourci de programmation</h2>
    <p>
      C'est bien connu, les programmeurs sont flemmards. Il existe donc des
      écritures raccourcies pour certaines opérations :
    </p>
    <table class="mx-auto">
      <thead>
        <tr>
          <th>Symbole</th>
          <th>Avant</th>
          <th>Après</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>+=</td>
          <td>
            <ShowCode raw="maVar = maVar + 10;" lang="java" />
          </td>
          <td>
            <ShowCode raw="maVar += 10;" lang="java" />
          </td>
        </tr>
        <tr>
          <td>-=</td>
          <td>
            <ShowCode raw="maVar = maVar - 10;" lang="java" />
          </td>
          <td>
            <ShowCode raw="maVar -= 10;" lang="java" />
          </td>
        </tr>
        <tr>
          <td>*=</td>
          <td>
            <ShowCode raw="maVar = maVar * 2;" lang="java" />
          </td>
          <td>
            <ShowCode raw="maVar *= 2;" lang="java" />
          </td>
        </tr>
        <tr>
          <td>/=</td>
          <td>
            <ShowCode raw="maVar = maVar / 2;" lang="java" />
          </td>
          <td>
            <ShowCode raw="maVar /= 2;" lang="java" />
          </td>
        </tr>
        <tr>
          <td>%=</td>
          <td>
            <ShowCode raw="maVar = maVar % 5;" lang="java" />
          </td>
          <td>
            <ShowCode raw="maVar %= 5;" lang="java" />
          </td>
        </tr>
        <tr>
          <td>++</td>
          <td>
            <ShowCode raw="maVar += 1;" lang="java" />
          </td>
          <td>
            <ShowCode raw="maVar++;" lang="java" />
          </td>
        </tr>
        <tr>
          <td>--</td>
          <td>
            <ShowCode raw="maVar -= 1;" lang="java" />
          </td>
          <td>
            <ShowCode raw="maVar--;" lang="java" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
