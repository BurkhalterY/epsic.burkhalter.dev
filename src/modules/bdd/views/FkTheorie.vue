<template>
  <div>
    <h2>Pour une relation 1 à n</h2>
    <p>Deux tables, T_Personnes :</p>
    <table>
      <tr>
        <th>ID_Personne</th>
        <th>Nom_pers</th>
        <th>Prenom_pers</th>
        <th>FK_Sexe</th>
        <th>Etc.</th>
      </tr>
      <tr>
        <td>1</td>
        <td>Roger</td>
        <td>Tom</td>
        <td>1</td>
        <td></td>
      </tr>
      <tr>
        <td>2</td>
        <td>Breton</td>
        <td>Alexia</td>
        <td>2</td>
        <td></td>
      </tr>
      <tr>
        <td>3</td>
        <td>Leroy</td>
        <td>Rémi</td>
        <td>1</td>
        <td></td>
      </tr>
      <tr>
        <td>4</td>
        <td>Blanchard</td>
        <td>Amandine</td>
        <td>2</td>
        <td></td>
      </tr>
      <tr>
        <td>5</td>
        <td>Collin</td>
        <td>Françoise</td>
        <td>2</td>
        <td></td>
      </tr>
    </table>
    <p>Et T_Sexes :</p>
    <table>
      <tr>
        <th>ID_Sexe</th>
        <th>Nom_sexe</th>
      </tr>
      <tr>
        <td>1</td>
        <td>Homme</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Femme</td>
      </tr>
    </table>
    <p>
      Le champ FK_Sexe de T_Personnes prend comme valeur l'ID du sexe de la
      personne.
    </p>
    <p>Petit schéma :</p>
    <img src="/bdd/medias/schema_fk_1_n.png" alt="Schéma 1 à n" />
    <p>Ainsi chaque personne a un sexe attribué et les avantages sont :</p>
    <ul>
      <li>Juste un nombre à la place d'un mot de 5 lettres à stocker</li>
      <li>
        Modifier un élément de la table T_Sexes le modifiera pour tout le monde
      </li>
    </ul>

    <h2>Pour une relation n à n</h2>
    <p>Imaginons maintenant cet exemple. Nous gardons la table T_Personnes :</p>
    <table>
      <tr>
        <th>ID_Personne</th>
        <th>Nom_pers</th>
        <th>Prenom_pers</th>
        <th>FK_Sexe</th>
        <th>Etc…</th>
      </tr>
      <tr>
        <td>1</td>
        <td>Roger</td>
        <td>Tom</td>
        <td>1</td>
        <td></td>
      </tr>
      <tr>
        <td>2</td>
        <td>Breton</td>
        <td>Alexia</td>
        <td>2</td>
        <td></td>
      </tr>
      <tr>
        <td>3</td>
        <td>Leroy</td>
        <td>Rémi</td>
        <td>1</td>
        <td></td>
      </tr>
      <tr>
        <td>4</td>
        <td>Blanchard</td>
        <td>Amandine</td>
        <td>2</td>
        <td></td>
      </tr>
      <tr>
        <td>5</td>
        <td>Collin</td>
        <td>Françoise</td>
        <td>2</td>
        <td></td>
      </tr>
    </table>
    <p>Et nous avons maintenant la table T_Emails :</p>
    <table>
      <tr>
        <th>ID_Email</th>
        <th>Adresse_email</th>
      </tr>
      <tr>
        <td>1</td>
        <td>yannis.burkhalter@normalux.ch</td>
      </tr>
      <tr>
        <td>2</td>
        <td>bdepsic@yahoo.fr</td>
      </tr>
      <tr>
        <td>3</td>
        <td>prenom.nom@gmail.com</td>
      </tr>
      <tr>
        <td>4</td>
        <td>info@esat.ch</td>
      </tr>
      <tr>
        <td>5</td>
        <td>info@normalux.ch</td>
      </tr>
    </table>
    <p>
      Petit problème ; une adresse peut appartenir à plusieurs personnes et une
      personne peut avoir plusieurs adresses.<br />Nous ne pouvons donc pas
      mettre de champs FK dans une de ces deux tables.
    </p>
    <p>Il va donc falloir créer une table intermédiaire T_Avoir_Email :</p>
    <table>
      <tr>
        <th>ID_Avoir_Email</th>
        <th>FK_Personne</th>
        <th>FK_Email</th>
      </tr>
      <tr>
        <td>&nbsp;</td>
        <td></td>
        <td></td>
      </tr>
    </table>
    <p>
      Et à chaque fois qu'une personne possède une adresse e-mail, nous allons
      ajouter l'ID de la personne et l'ID de l'e-mail dans les champs ainsi :
    </p>
    <table>
      <tr>
        <th>ID_Avoir_Email</th>
        <th>FK_Personne</th>
        <th>FK_Email</th>
      </tr>
      <tr>
        <td>1</td>
        <td>1</td>
        <td>1</td>
      </tr>
      <tr>
        <td>2</td>
        <td>1</td>
        <td>2</td>
      </tr>
      <tr>
        <td>3</td>
        <td>2</td>
        <td>3</td>
      </tr>
      <tr>
        <td>4</td>
        <td>3</td>
        <td>3</td>
      </tr>
      <tr>
        <td>5</td>
        <td>5</td>
        <td>4</td>
      </tr>
    </table>
    <p>Selon cet exemple :</p>
    <ul>
      <li>
        Roger Tom a 2 adresses : yannis.burkhalter@normalux.ch et
        bdepsic@yahoo.fr
      </li>
      <li>
        Breton Alexia et Leroy Rémi se partagent l'adresse prenom.nom@gmail.com
      </li>
      <li>Collin Françoise a l'adresse info@esat.ch</li>
      <li>
        Blanchard Amandine n'a aucune adresse et info@normalux.ch n'appartient à
        personne.
      </li>
    </ul>
    <p>Ce schéma vous parlera peut-être un peu plus :</p>
    <img src="/bdd/medias/schema_fk_n_n.png" alt="Schéma n à n" />
  </div>
</template>

<style scoped>
th,
td {
  @apply border border-black;
}
</style>
