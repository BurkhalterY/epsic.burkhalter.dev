<script setup>
import ShowCode from "@/components/ShowCode.vue"
</script>

<template>
  <div>
    <p>
      Le SQL est un langage permettant d'interagir avec une base de données.
      Ici, nous allons l'utiliser pour récupérer des données d'une ou plusieurs
      tables.
    </p>

    <h2>SELECT</h2>
    <p>
      Pour récupérer des données, nous allons utiliser l'instruction SELECT. En
      voici un exemple :
    </p>
    <ShowCode raw="SELECT * FROM t_personnes" lang="sql" />
    <ul class="!list-none !ml-0">
      <li>
        L'étoile (<strong>*</strong>) signifie que nous voulons tous les champs
        de la table.
      </li>
      <li>
        <strong>FROM</strong> est un mot clé qui précède le nom de la table
        source.
      </li>
      <li>
        <strong>t_personne</strong> est la table source, mettez ici le nom de la
        table.
      </li>
    </ul>

    <h2>Ne sélectionner que les champs voulus</h2>
    <p>
      Pour ne prendre que certains champs de t_personnes, on peut remplacer
      l'étoile (*) par le nom de chacun des champs désirés séparés d'une virgule
      :
    </p>
    <ShowCode raw="SELECT nom, prenom FROM t_personnes" lang="sql" />
    <p>
      Cette requête renverra uniquement des valeurs pour les champs nom et
      prenom et ignorera les autres.
    </p>

    <h2>Ajouter un filtre</h2>
    <p>
      Le mot clé <strong>WHERE</strong> permet d'ajouter un filtre à une
      requête. Ne seront retournés que les enregistrements qui remplissent la
      condition située après le WHERE. Exemple :
    </p>
    <ShowCode raw="SELECT * FROM t_personnes WHERE nom LIKE 'a%'" lang="sql" />
    <p>
      Ici, l'opérateur est <strong>LIKE</strong>. Voici une liste des principaux
      opérateurs :
    </p>
    <table>
      <tr>
        <th>Opérateur</th>
        <th>Description</th>
        <th>Exemple</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>=</td>
        <td>Strictement égale</td>
        <td>WHERE id_pers = 5</td>
        <td>Uniquement la personne N° 5</td>
      </tr>
      <tr>
        <td>&lt;</td>
        <td>Plus petit</td>
        <td>WHERE prix_article &lt; 10</td>
        <td>Tous les articles qui coutent moins de 10</td>
      </tr>
      <tr>
        <td>&lt;=</td>
        <td>Plus petit ou égale</td>
        <td>WHERE prix_article &lt;= 10</td>
        <td>Tous les articles qui coutent moins de 10 ou 10</td>
      </tr>
      <tr>
        <td>&gt;</td>
        <td>Plus grand</td>
        <td>WHERE prix_article &gt; 10</td>
        <td>Tous les articles qui coutent plus que 10</td>
      </tr>
      <tr>
        <td>&gt;=</td>
        <td>Plus grand ou égale</td>
        <td>WHERE prix_article &gt;= 10</td>
        <td>Tous les articles qui coutent plus que 10 ou 10</td>
      </tr>
      <tr>
        <td>LIKE</td>
        <td>Comme</td>
        <td>WHERE nom_pers LIKE '%a%'</td>
        <td>
          Toutes les personnes qui ont la lettre "a" dans leur nom (% est un
          joker)
        </td>
      </tr>
    </table>
    <p>
      Il est aussi possible de combiner des conditions avec les opérateurs AND
      et OR et de régler leurs priorités avec des parenthèses.
    </p>

    <h2>Trier les enregistrements</h2>
    <p>
      Il est possible de trier les enregistrements avec le mot clé
      <strong>ORDER BY</strong>. Exemple :
    </p>
    <ShowCode raw="SELECT * FROM t_personnes ORDER BY nom" lang="sql" />
    <p>
      Cette requête renvoie les personnes triées par nom. ATTENTION cependant,
      cela ne change pas l'ordre des champs dans la table, mais uniquement à
      l'affichage. Un SELECT ne peut jamais (à lui seul) modifier la base de
      données.
    </p>
    <p>
      Il est également possible de<br />
      - ajouter le mot clé DESC pour trier à l'envers<br />
      - trier sur plusieurs champs en les séparant par des virgules<br />
    </p>
    <p>Exemples :</p>
    <p>Trier dans l'ordre alphabétique inverse :</p>
    <ShowCode raw="SELECT * FROM t_personnes ORDER BY nom DESC" lang="sql" />
    <p>Trier par nom puis par prénom :</p>
    <ShowCode raw="SELECT * FROM t_personnes ORDER BY nom, prenom" lang="sql" />

    <h2>Limiter le nombre de résultats</h2>
    <p>
      Il est possible de limiter le nombre d'enregistrements retournés. Pour ça,
      ajouter le mot clé <strong>LIMIT</strong>.
    </p>
    <p>Exemple, afficher 20 enregistrements :</p>
    <ShowCode raw="SELECT * FROM t_personnes LIMIT 20" lang="sql" />

    <h2>Combiner ces règles !</h2>
    <p>
      Il est bien sûr possible de combiner plusieurs de ces mots clés pour créer
      une requête plus complexe :
    </p>
    <ShowCode
      raw="SELECT * FROM t_personnes WHERE nom LIKE 'a%' ORDER BY nom, prenom LIMIT 20"
      lang="sql"
    />
    <p>
      Cette requête retourne les 20 personnes dont le nom commence par "a" qui
      sont les plus hautes dans l'ordre alphabétique.
    </p>
  </div>
</template>
