<script setup>
import ShowCode from "@/components/ShowCode.vue"
</script>

<template>
  <div>
    <p>
      Une condition sert à n'exécuter une portion de code seulement si cette
      dernière est remplie.
    </p>

    <h2>if</h2>
    <p>La condition if se note comme cela :</p>
    <ShowCode file="/java/code/if.java" lang="java" />
    <p>Ici, condition est une variable de type <code>boolean</code>.</p>

    <h2>Les opérateurs de comparaison</h2>
    <p>
      Pour créer des <code>boolean</code> (qui ne peuvent contenir que vrai ou
      faux), on utilise des opérateurs de comparaison. En voici la liste :
    </p>
    <table>
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
          <td>==</td>
          <td>Égalité</td>
          <td>
            <ShowCode raw="if (a == 10)" lang="java" />
          </td>
          <td>
            Si la variable <code>a</code> vaut 10, la condition est vraie.
          </td>
        </tr>
        <tr>
          <td>&lt;</td>
          <td>Plus petit que</td>
          <td>
            <ShowCode raw="if (a < 10)" lang="java" />
          </td>
          <td>
            Si la variable <code>a</code> vaut moins que 10, la condition est
            vraie.
          </td>
        </tr>
        <tr>
          <td>&gt;</td>
          <td>Plus grand que</td>
          <td>
            <ShowCode raw="if (a > 10)" lang="java" />
          </td>
          <td>
            Si la variable <code>a</code> vaut plus que 10, la condition est
            vraie.
          </td>
        </tr>
        <tr>
          <td>&lt;=</td>
          <td>Plus petit ou égale</td>
          <td>
            <ShowCode raw="if (a <= 10)" lang="java" />
          </td>
          <td>
            Si la variable <code>a</code> vaut 10 ou moins, la condition est
            vraie.
          </td>
        </tr>
        <tr>
          <td>&gt;=</td>
          <td>Plus grand ou égale</td>
          <td>
            <ShowCode raw="if (a >= 10)" lang="java" />
          </td>
          <td>
            Si la variable <code>a</code> vaut 10 ou plus, la condition est
            vraie.
          </td>
        </tr>
        <tr>
          <td>!=</td>
          <td>Inégalité</td>
          <td>
            <ShowCode raw="if (a != 10)" lang="java" />
          </td>
          <td>
            Si la variable <code>a</code> vaut n'importe quoi sauf 10, la
            condition est vraie.
          </td>
        </tr>
      </tbody>
    </table>

    <h2>Conditions avancées</h2>
    <p>
      On peut également créer des combinaisons de conditions. Pour cela, on
      utilise les opérateurs logiques. Voici la liste avec des exemples.
    </p>
    <table>
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
          <td>&&</td>
          <td>Et</td>
          <td>
            <ShowCode raw="if (a > 10 && a < 20)" lang="java" />
          </td>
          <td>
            Si la variable <code>a</code> est plus grande que 10 mais plus
            petite que 20, la condition est vraie.
          </td>
        </tr>
        <tr>
          <td>||</td>
          <td>Ou</td>
          <td>
            <ShowCode raw="if (a < 10 || b > 10)" lang="java" />
          </td>
          <td>
            Si une des deux variables <code>a</code> ou <code>n</code> est plus
            grande que 10, la condition est vraie.
          </td>
        </tr>
        <tr>
          <td>!</td>
          <td>Non</td>
          <td>
            <ShowCode raw="if (!condition)" lang="java" />
          </td>
          <td>
            Renvoie l'inverse de la condition (qui doit être une valeur de type
            <code>boolean</code>). Dans ce cas, il faudrait que condition soit à
            <code>false</code> pour que la condition soit vraie.
          </td>
        </tr>
      </tbody>
    </table>
    <p>
      Comme pour les calculs, on peut utiliser des parenthèses pour donner une
      priorité de calcul.
    </p>
    <ShowCode
      raw="if ((a == 5 || b == 5) && c > 10)&NewLine;// pour que cette condition soit valide, il faut que a ou b égale 5 et que c soit plus grand que 10"
      lang="java"
    />

    <h2>else</h2>
    <p>
      <code>else</code> sert à exécuter un autre bout de code si la première
      condition n'est pas valide. Exemple :
    </p>
    <ShowCode file="/java/code/else.java" lang="java" />
  </div>
</template>
