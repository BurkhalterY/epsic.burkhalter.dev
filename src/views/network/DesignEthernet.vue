<template>
  <div>
    <a target="_blank" href="/network/medias/mediatis_0.jpg">Schéma vierge</a>
    <h2>Cahier des charges</h2>
    <ol>
      <li>
        Les arrivées et départs des lignes se font au niveau du local technique.
      </li>
      <li>
        Les équipements réseaux doivent travailler au niveau 2 du modèle OSI.
      </li>
      <li>Les serveurs se trouvent dans le local technique.</li>
      <li>
        On doit avoir 10 ports 1000 base T de libre sur le(s) switch(s) du local
        technique pour y connecter les serveurs.
      </li>
      <li>
        Les équipements réseaux se trouvent dans le local technique ou dans des
        armoires de brassage placées dans le couloir central du bâtiment.
      </li>
      <li>
        On dispose de 4 imprimantes monochromes en réseau placées dans le
        couloir central.
      </li>
      <li>
        On veut pouvoir administrer l'ensemble des équipements réseaux depuis le
        local technique.
      </li>
    </ol>
    <p>Ce qui veut dire que :</p>
    <ol>
      <li>Le routeur est dans le local technique.</li>
      <li>
        Il faudra utiliser des switchs (couche 2) et non des hubs (couche 1)
      </li>
      <li>ok</li>
      <li>Prévoir les switchs avec 10 ports supplémentaires.</li>
      <li>
        Ne pas mettre de switch autre pars que dans le local technique ou dans
        le couloir central.
      </li>
      <li>Choisir des imprimantes monochromes</li>
      <li>Choisir des switchs administrables</li>
    </ol>

    <h2>Marche à suivre</h2>
    <p>
      Nous allons tracer des cercles sur le plan de manière à le recouvrir
      (presque) entièrement en n'en utilisant le moins possible.
    </p>
    <p>Quel sera le rayon du cercle ?</p>
    <p>
      La distance maximale de la norme 1000BASE-T est de 100 mètres. Nous allons
      dire 80 mètres pour avoir une marge. Moins 10 mètres car il y a une
      distance verticale entre le plafond et les prises.<br />Il faut, de plus,
      prendre en compte que cette distance représente la taille totale du câble.
      Or ici, nous calculons le rayon, donc la distance que le câble peut
      atteindre s'il va tout droit, mais en pratique, il y aura des virages. En
      divisant cette distance par deux, cela jouera dans la majorité des cas.
    </p>
    <p>
      OK, nous devons faire des cercles d'environ 35 mètres de rayon. Pour tout
      recouvrir, je dois en placer 3 (ce n'est pas grave s'ils ne sont pas faits
      au compas).
    </p>
    <p>
      <a target="_blank" href="/network/medias/mediatis_1.jpg">
        Voir sur le schéma
      </a>
    </p>
    <p>
      Nous devons maintenant placer un switch au centre de chacun des cercles.
      Ainsi, les câbles pourront être branchés aux switchs et nous pourrons
      connecter les switch au routeur avec de la fibre optique.
    </p>
    <p>
      <a target="_blank" href="/network/medias/mediatis_2.jpg">
        Voir sur le schéma
      </a>
    </p>
    <p>
      Il ne reste ensuite plus qu'à relier chaque prise au switch le plus
      proche.
    </p>
    <p>
      <a target="_blank" href="/network/medias/mediatis_3.jpg">
        Voir sur le schéma
      </a>
    </p>
    <p>Et ajouter les imprimantes.</p>
    <p>
      <a target="_blank" href="/network/medias/mediatis_4.jpg">
        Voir sur le schéma final
      </a>
    </p>

    <h2>Remplir la liste des équipements</h2>
    <table>
      <tr>
        <th>Nom de l'équipement</th>
        <th>Modèle</th>
        <th>Justification du choix</th>
      </tr>
      <tr>
        <td>R-1</td>
        <td>RF</td>
        <td>Le seul routeur de la liste</td>
      </tr>
      <tr>
        <td>R-2</td>
        <td>RE</td>
        <td>
          Le plus grand switch a besoin de 24 ports et d'au moins un port fibre
        </td>
      </tr>
      <tr>
        <td>R-3</td>
        <td>RE</td>
        <td>On prend 3 fois le même</td>
      </tr>
      <tr>
        <td>R-4</td>
        <td>RE</td>
        <td>"</td>
      </tr>
      <tr>
        <td>I-1</td>
        <td>IF</td>
        <td>
          Une imprimante monochrome, j'ai vérifié qu'elle ne soit pas en USB
          mais avec un port réseau
        </td>
      </tr>
      <tr>
        <td>I-2</td>
        <td>IF</td>
        <td>3 fois la même</td>
      </tr>
      <tr>
        <td>I-3</td>
        <td>IF</td>
        <td>"</td>
      </tr>
    </table>

    <h2>Remplir la matrice des jonctions</h2>
    <table>
      <tr>
        <th>Nom</th>
        <th>Modèle</th>
        <th>Port</th>
        <th>Prise</th>
        <th>Longueur</th>
        <th>Emplacement</th>
      </tr>
      <tr>
        <td>R-2</td>
        <td>RE</td>
        <td>0</td>
        <td>1</td>
        <td>36 m</td>
        <td>Local technique</td>
      </tr>
      <tr>
        <td>R-2</td>
        <td>RE</td>
        <td>1</td>
        <td>2</td>
        <td>32 m</td>
        <td>Local technique</td>
      </tr>
      <tr>
        <td>R-2</td>
        <td>RE</td>
        <td>2</td>
        <td>3</td>
        <td>72 m</td>
        <td>Magasin</td>
      </tr>
      <tr>
        <td>R-2</td>
        <td>RE</td>
        <td>3</td>
        <td>4</td>
        <td>62 m</td>
        <td>Magasin</td>
      </tr>
      <tr>
        <td>R-2</td>
        <td>RE</td>
        <td>4</td>
        <td>5</td>
        <td>75 m</td>
        <td>Bibliothèque</td>
      </tr>
      <tr>
        <td>R-3</td>
        <td>RE</td>
        <td>0</td>
        <td>6</td>
        <td>70 m</td>
        <td>Bibliothèque</td>
      </tr>
      <tr>
        <td>R-3</td>
        <td>RE</td>
        <td>1</td>
        <td>7</td>
        <td>62 m</td>
        <td>Test</td>
      </tr>
      <tr>
        <td>R-3</td>
        <td>RE</td>
        <td>2</td>
        <td>8</td>
        <td>42 m</td>
        <td>Test</td>
      </tr>
      <tr>
        <td>R-4</td>
        <td>RE</td>
        <td>0</td>
        <td>9</td>
        <td>42 m</td>
        <td>Test</td>
      </tr>
      <tr>
        <td>R-4</td>
        <td>RE</td>
        <td>1</td>
        <td>10</td>
        <td>37 m</td>
        <td>Vente</td>
      </tr>
      <tr>
        <td>R-4</td>
        <td>RE</td>
        <td>2</td>
        <td>11</td>
        <td>47 m</td>
        <td>Vente</td>
      </tr>
      <tr>
        <td>R-4</td>
        <td>RE</td>
        <td>3</td>
        <td>12</td>
        <td>48 m</td>
        <td>Compta</td>
      </tr>
      <tr>
        <td>R-4</td>
        <td>RE</td>
        <td>4</td>
        <td>13</td>
        <td>53 m</td>
        <td>Compta</td>
      </tr>
      <tr>
        <td>R-2</td>
        <td>RE</td>
        <td>5</td>
        <td>14</td>
        <td>27 m</td>
        <td>Techniciens</td>
      </tr>
      <tr>
        <td>R-2</td>
        <td>RE</td>
        <td>6</td>
        <td>15</td>
        <td>32 m</td>
        <td>Techniciens</td>
      </tr>
      <tr>
        <td>R-2</td>
        <td>RE</td>
        <td>7</td>
        <td>16</td>
        <td>37 m</td>
        <td>Techniciens</td>
      </tr>
      <tr>
        <td>R-2</td>
        <td>RE</td>
        <td>8</td>
        <td>17</td>
        <td>42 m</td>
        <td>Montage</td>
      </tr>
      <tr>
        <td>R-3</td>
        <td>RE</td>
        <td>3</td>
        <td>18</td>
        <td>25 m</td>
        <td>Montage</td>
      </tr>
      <tr>
        <td>R-4</td>
        <td>RE</td>
        <td>5</td>
        <td>19</td>
        <td>27 m</td>
        <td>Montage</td>
      </tr>
      <tr>
        <td>R-4</td>
        <td>RE</td>
        <td>6</td>
        <td>20</td>
        <td>37 m</td>
        <td>Direction</td>
      </tr>
      <tr>
        <td>R-4</td>
        <td>RE</td>
        <td>7</td>
        <td>21</td>
        <td>32 m</td>
        <td>Direction</td>
      </tr>
      <tr>
        <td>R-4</td>
        <td>RE</td>
        <td>8</td>
        <td>22</td>
        <td>32 m</td>
        <td>Secrétariat</td>
      </tr>
      <tr>
        <td>R-4</td>
        <td>RE</td>
        <td>9</td>
        <td>23</td>
        <td>37 m</td>
        <td>Secrétariat</td>
      </tr>
      <tr>
        <td>R-2</td>
        <td>RE</td>
        <td>9</td>
        <td>24</td>
        <td>17 m</td>
        <td>Couloir central</td>
      </tr>
      <tr>
        <td>R-3</td>
        <td>RE</td>
        <td>4</td>
        <td>25</td>
        <td>12 m</td>
        <td>Couloir central</td>
      </tr>
      <tr>
        <td>R-4</td>
        <td>RE</td>
        <td>10</td>
        <td>26</td>
        <td>15 m</td>
        <td>Couloir central</td>
      </tr>
      <tr>
        <td>R-4</td>
        <td>RE</td>
        <td>11</td>
        <td>27</td>
        <td>21 m</td>
        <td>Couloir central</td>
      </tr>
      <tr>
        <td>R-4</td>
        <td>RE</td>
        <td>12</td>
        <td>28</td>
        <td>17 m</td>
        <td>Vente</td>
      </tr>
      <tr>
        <td>R-2</td>
        <td>RE</td>
        <td>10</td>
        <td>101</td>
        <td></td>
        <td>Local technique prise de réserve</td>
      </tr>
      <tr>
        <td>R-2</td>
        <td>RE</td>
        <td>11</td>
        <td>102</td>
        <td></td>
        <td>Local technique prise de réserve</td>
      </tr>
      <tr>
        <td>R-2</td>
        <td>RE</td>
        <td>12</td>
        <td>103</td>
        <td></td>
        <td>Local technique prise de réserve</td>
      </tr>
      <tr>
        <td>R-2</td>
        <td>RE</td>
        <td>13</td>
        <td>104</td>
        <td></td>
        <td>Local technique prise de réserve</td>
      </tr>
      <tr>
        <td>R-2</td>
        <td>RE</td>
        <td>14</td>
        <td>105</td>
        <td></td>
        <td>Local technique prise de réserve</td>
      </tr>
      <tr>
        <td>R-2</td>
        <td>RE</td>
        <td>15</td>
        <td>106</td>
        <td></td>
        <td>Local technique prise de réserve</td>
      </tr>
      <tr>
        <td>R-2</td>
        <td>RE</td>
        <td>16</td>
        <td>107</td>
        <td></td>
        <td>Local technique prise de réserve</td>
      </tr>
      <tr>
        <td>R-2</td>
        <td>RE</td>
        <td>17</td>
        <td>108</td>
        <td></td>
        <td>Local technique prise de réserve</td>
      </tr>
      <tr>
        <td>R-2</td>
        <td>RE</td>
        <td>18</td>
        <td>109</td>
        <td></td>
        <td>Local technique prise de réserve</td>
      </tr>
      <tr>
        <td>R-2</td>
        <td>RE</td>
        <td>19</td>
        <td>110</td>
        <td></td>
        <td>Local technique prise de réserve</td>
      </tr>
    </table>

    <h2>Dessiner le plan du réseau</h2>
    <p>
      On doit avoir, pour le réseau, un maximum de deux niveaux dans la
      hiérarchie du réseau.
    </p>
    <img src="/network/medias/plan_reseau.png" class="mx-auto" />
  </div>
</template>

<style scoped>
th {
  @apply text-start;
}
</style>
