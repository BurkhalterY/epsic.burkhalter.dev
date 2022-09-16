<template>
  <div>
    <h1>Partie 3</h1>
    <h2>Types d'images vectorielles et matricielles</h2>
    <div class="row">
      <div class="col-md-6">
        <h3>Vectoriel</h3>
        <p>
          Les images vectorielles sont composées d'objets géométriques plus ou
          moins complexes.
        </p>
        <p>Elles sont enregistrées sous forme d'équations mathématiques.</p>
        <h4>Principaux formats :</h4>
        <p>.svg .ai .swf</p>
        <h4>Avantages :</h4>
        <ul>
          <li>Plus léger à stocker qu'une image au point</li>
          <li>Zoomable à l'infini sans perte de qualité</li>
        </ul>
        <h4>Inconvénients :</h4>
        <ul>
          <li>Impossible d'être généré par un appareil photo</li>
        </ul>
      </div>
      <div class="col-md-6">
        <h3>Matriciel</h3>
        <p>
          Les images au point ou images matricielle sont exclusivement composées
          de pixels.
        </p>
        <p>
          Chaque pixel est codé individuellement, ce qui nécessite une grande
          capacité mémoire pour leur stockage.
        </p>
        <h4>Principaux formats :</h4>
        <p>.jpg .jpeg .png .gif .bmp .tiff</p>
        <h4>Attention :</h4>
        <p>Une fois imprimé, un pixel s'appelle un dot.</p>
      </div>
    </div>

    <hr />

    <h3>Format d'image et d'écran</h3>
    <p>
      Le format d'une image ou d'un écran désigne le rapport largeur sur hauteur
      (x:y)
    </p>
    <p>Voici une liste des formats les plus courants :</p>
    <table class="table-responsive text-center">
      <tr>
        <th>x</th>
        <th></th>
        <th>y</th>
        <th>Format</th>
        <th>D</th>
      </tr>
      <tr>
        <td>4</td>
        <td>:</td>
        <td>3</td>
        <td>1.33</td>
        <td>5</td>
      </tr>
      <tr>
        <td>16</td>
        <td>:</td>
        <td>9</td>
        <td>1.77</td>
        <td>18.36</td>
      </tr>
      <tr>
        <td>16</td>
        <td>:</td>
        <td>10</td>
        <td>1.6</td>
        <td>9.43</td>
      </tr>
    </table>
    <br />
    <p>
      <strong>D</strong> est la diagonale d'écran. Calculé √(x<sup>2</sup> +
      y<sup>2</sup>)
    </p>

    <h3>Définition</h3>
    <p>
      La définition d'une image désigne le nombre de pixels que contient cette
      image (x * y)
    </p>
    <p><strong>Exemple</strong> : image de 9x5 px soit 45 px au total.</p>
    <table class="pixel-table">
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </table>

    <h3>Résolution</h3>
    <p>
      La résolution d'une image est définie par le nombre de pixels par unité de
      longueur (souvent des pouces).
    </p>
    <p>C'exprime en PPI (Pixels per Inch) ou en DPI (Dot per Inch)</p>
    <p><br />Résolution = nombre de pixels / nombre de pouces</p>

    <hr />

    <h3>Taille des fichiers</h3>
    <p>
      Sans compression, la formule est toujours :
      <i style="text-decoration: underline"
        >nombre de bits par pixel * largeur en pixels * hauteur en pixels</i
      >
      .
    </p>
    <p>
      Donc, pour une image en noir et blanc : directement largeur * hauteur. Car
      un pixel vaut soit 0 (noir), soit 1 (blanc).
    </p>
    <p>
      Pour une image en RGB, on a 3 couleurs qui se combinent; Rouge, Vert et
      Bleu. Chacune sur 8 bits. Il faut donc 24 bits par pixel : 24 * largeur *
      hauteur.
    </p>
    <p>
      Attention : ces formules ne sont pas toujours valables... Il arrive
      parfois que l'on utilise moins de bits par couleurs, auquel cas il faut
      adapter le calcul.
    </p>
    <br />
    <p>Pour convertir le résultat obtenu dans l'unité adéquate :</p>
    <table class="table-responsive">
      <tr>
        <td>bits</td>
        <td>→</td>
        <td>8x</td>
        <td>→</td>
        <td>o</td>
      </tr>
      <tr>
        <td>o</td>
        <td>→</td>
        <td>1024x</td>
        <td>→</td>
        <td>ko</td>
      </tr>
      <tr>
        <td>ko</td>
        <td>→</td>
        <td>1024x</td>
        <td>→</td>
        <td>Mo</td>
      </tr>
      <tr>
        <td>Mo</td>
        <td>→</td>
        <td>1024x</td>
        <td>→</td>
        <td>Go</td>
      </tr>
      <tr>
        <td>Go</td>
        <td>→</td>
        <td>1024x</td>
        <td>→</td>
        <td>To</td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
.pixel-table td {
  width: 16px;
  height: 16px;
  border: 1px solid black;
}
</style>

<script>
export default {
  name: "Partie3",
}
</script>
