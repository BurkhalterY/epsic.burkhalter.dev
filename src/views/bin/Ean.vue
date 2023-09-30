<template>
  <div>
    <h2>EAN : European Article Numbering</h2>
    <p>
      Le code EAN a pour but l'identification univoque d'objets (un seul code
      par produit) par une identification visuelle.
    </p>

    <h2>Les types de codes EAN</h2>
    <ul>
      <li>EAN 8 : réservés à l'usage sur des produits de petite taille.</li>
      <li>
        EAN 13 : utilisés sur presque tous les produits alimentaires et bien
        plus.
      </li>
      <li>
        EAN 128 : plus long, ils peuvent aussi contenir des informations sur le
        produit.
      </li>
    </ul>

    <h2>Les éléments EAN</h2>
    <p>
      Chaque chiffre (de 0 à 9) est codé sur 7 bits. Ils sont toujours organisés
      de manière à avoir deux barres blanches et deux barres noires.<br />Il y a
      trois manières de coder chacun des chiffres, selon qu'il soit un élément
      A, B ou C.
    </p>
    <img src="/bin/medias/EAN_list_codes.png" alt="Liste des codes EAN" />

    <h2>Les zones de garde</h2>
    <p>
      Les zones de garde sont des petits groupes d'octets qui sont utilisés pour
      délimiter le code-barres ou une partie du code-barres.
    </p>
    <table>
      <tr>
        <td>Zone de garde normale (normal guard)</td>
        <td class="text-center">101</td>
        <td>On l'utilise au début et à la fin du code-barres.</td>
      </tr>
      <tr>
        <td>Zone de garde central</td>
        <td class="text-center">01010</td>
        <td>On l'utilise au milieu du code-barres.</td>
      </tr>
    </table>
    <p>Les zones de garde dépassent du code-barres. Voir l'image ci-dessous.</p>
    <img src="/bin/medias/EAN_guard.png" />

    <h2>EAN-8</h2>
    <p>Les codes-barres EAN-8 sont composés de 8 chiffres :</p>
    <ul>
      <li>Zone de garde normale</li>
      <li>Chiffres 1 à 4 sous la forme d'éléments A</li>
      <li>Zone de garde central</li>
      <li>Chiffres 5 à 8 sous la forme d'éléments C</li>
      <li>Zone de garde normale</li>
    </ul>
    <img src="/bin/medias/EAN-8_structure.png" alt="Structure d'EAN-8" />

    <h2>EAN-13</h2>
    <p>Les codes-barres EAN-13 sont composés de 13 chiffres :</p>
    <ul>
      <li>
        Premier chiffre qui indique le paterne à suivre, sous la forme d'un
        élément A<br />ATTENTION : Il ne faut pas l'écrire dans le binaire
      </li>
      <li>Zone de garde normale</li>
      <li>
        Chiffres 2 à 7 sous la forme d'éléments A ou B en fonction du paterne
      </li>
      <li>Zone de garde central</li>
      <li>Chiffres 8 à 13 sous la forme d'éléments C</li>
      <li>Zone de garde normale</li>
    </ul>
    <p>Les paternes en fonction du premier chiffre :</p>
    <table class="text-center">
      <tr>
        <th>1<sup>er</sup> chiffre</th>
        <th>Paterne</th>
      </tr>
      <tr>
        <td>0</td>
        <td>[AAAAAA]</td>
      </tr>
      <tr>
        <td>1</td>
        <td>[AABABB]</td>
      </tr>
      <tr>
        <td>2</td>
        <td>[AABBAB]</td>
      </tr>
      <tr>
        <td>3</td>
        <td>[AABBBA]</td>
      </tr>
      <tr>
        <td>4</td>
        <td>[ABAABB]</td>
      </tr>
      <tr>
        <td>5</td>
        <td>[ABBAAB]</td>
      </tr>
      <tr>
        <td>6</td>
        <td>[ABBBAA]</td>
      </tr>
      <tr>
        <td>7</td>
        <td>[ABABAB]</td>
      </tr>
      <tr>
        <td>8</td>
        <td>[ABABBA]</td>
      </tr>
      <tr>
        <td>9</td>
        <td>[ABBABA]</td>
      </tr>
    </table>
  </div>
</template>
