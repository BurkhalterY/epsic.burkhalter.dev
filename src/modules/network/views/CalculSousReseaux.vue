<template>
  <div>
    <p>Subdiviser un réseau permet :</p>
    <ul>
      <li>De se calquer à la structure de l'entreprise</li>
      <li>D'optimiser les flux de trafic</li>
      <li>D'éviter les phénomènes de contagion</li>
    </ul>

    <h2>Checklist</h2>
    <ol>
      <li>Déterminer les besoins (inclure les réserves)</li>
      <li>
        Calculer et réserver le nombre de bits nécessaires (Host_ID et
        Subnet_ID)
      </li>
      <li>Définir la classe et le Net_ID</li>
      <li>Déterminer le masque (réseau et sous-réseau)</li>
      <li>Calculer les adresses de chaque sous-réseau</li>
      <li>Réaliser l'annuaire</li>
    </ol>

    <h2>Exemple avec un exercice disponible sur Moodle</h2>
    <p>
      <a href="/network/files/projet_1.pdf" target="_blank">projet_1.pdf</a>
    </p>

    <hr />
    <h2>1) Déterminer les besoins (inclure les réserves)</h2>
    <h3>Nombre d'IP</h3>
    <p>On prend le plus grand sous-réseau, ici c'est Lausanne.</p>
    <p>
      10 + 5 + 5 + 2 = 22<br />
      22 + 1 (passerelle) = 23<br />
      23 + 10% = <strong>26</strong> (arrondi supérieur)
    </p>
    <h3>Nombre de sous-réseaux</h3>
    <p>
      Le patron prévoit 2 bureaux supplémentaires → 4 sous-réseaux<br />
      4 + 10% = <strong>5</strong>
    </p>

    <hr />
    <h2>
      2) Calculer et réserver le nombre de bits nécessaires (Host_ID et
      Subnet_ID)
    </h2>
    <h3>Pour les sous-réseaux</h3>
    <p>
      Le nombre de sous-réseaux à partir du nombre de bits se calcul comme ça :
      SR = 2<sup>n</sup> - 2
    </p>
    <p>Ici, nous cherchons n, donc n = ln(SR + 2) / ln(2)</p>

    <div class="alert-info">ln est le logarithme naturel</div>
    <p>
      ln(5 + 2) / ln(2) = ~2.807... → <strong>3</strong><br />
      <a href="/network/medias/ti-30xpro-ln.png" target="_blank">
        Voir sur la calculatrice.
      </a>
    </p>
    <h3>Pour les IP</h3>
    <p>
      n = ln(IP + 2) / ln(2)<br />
      ln(26 + 2) / ln(2) = ~4.807... → <strong>5</strong>
    </p>

    <hr />
    <h2>3) Définir la classe et le Net_ID</h2>
    <h3>La classe 😎</h3>
    <p>
      Soit n le nombre de bits pour l'IP + le nombre de bits pour le
      sous-réseau,<br />
      Si n ≤ 8 → Classe C<br />
      Si n ≤ 16 → Classe B<br />
      Si n ≤ 24 → Classe A
    </p>
    <p>Ici, ce sera donc une <strong>classe C</strong>.</p>
    <h3>Le NET_ID</h3>
    <p>
      Les adresses privées pour une classe C sont de 192.168.0.x à
      192.168.255.x. Nous pouvons choisir par exemple
      <strong>192.168.1.0</strong> comme NET_ID.
    </p>

    <hr />
    <h2>4) Déterminer le masque (réseau et sous-réseau)</h2>
    <p>
      Nous avons une adresse constituée de :<br />
      24 bits pour le réseau<br />
      3 bits pour le sous-réseau<br />
      5 bits pour l'host
    </p>
    <p>Structure bits à bits :</p>
    <pre>	RRRRRRRR.RRRRRRRR.RRRRRRRR.SSSHHHHH</pre>
    <p>Donc le masque :</p>
    <pre>	11111111.11111111.11111111.11100000</pre>
    <p>Ou en décimal :</p>
    <pre>	255.255.255.224</pre>
    <p>
      Le masque de réseau est 255.255.255.0 et le masque de sous-réseau est
      255.255.255.224, se note aussi /27 car 27 bits à 1.
    </p>

    <hr />
    <h2>5) Calculer les adresses de chaque sous-réseau</h2>
    <p>
      Ici, il faut écrire toutes les possibilités de sous-réseau, on doit
      supprimer le premier et le dernier :
    </p>
    <pre><s>00000000</s>
00100000
01000000
01100000
10000000
10100000
11000000
<s>11100000</s></pre>
    <p>On traduit en décimal. Le premier donne le pas.</p>
    <pre>
00100000 = 32
01000000 = 64 (32 + 32)
01100000 = 96 (64 + 32)
10000000 = 128 (96 + 32)
10100000 = 160 (128 + 32)
11000000 = 192 (160 + 32)</pre
    >

    <hr />
    <h2>6) Réaliser l'annuaire</h2>
    <ul>
      <li>Adresse du sous-réseau = les adresses calculées précédemment</li>
      <li>Première adresse IP = l'adresse du sous-réseau + 1</li>
      <li>Adresse de diffusion = l'adresse du prochain sous-réseau - 1</li>
      <li>Dernière adresse IP = l'adresse de diffusion - 1</li>
    </ul>
    <table>
      <tr>
        <th>Adresse du sous-réseau</th>
        <th>Première adresse IP</th>
        <th>Dernière adresse IP</th>
        <th>Adresse de diffusion</th>
      </tr>
      <tr>
        <td>192.168.1.32</td>
        <td>192.168.1.33</td>
        <td>192.168.1.62</td>
        <td>192.168.1.63</td>
      </tr>
      <tr>
        <td>192.168.1.64</td>
        <td>192.168.1.65</td>
        <td>192.168.1.94</td>
        <td>192.168.1.95</td>
      </tr>
      <tr>
        <td>192.168.1.96</td>
        <td>192.168.1.97</td>
        <td>192.168.1.126</td>
        <td>192.168.1.127</td>
      </tr>
      <tr>
        <td>192.168.1.128</td>
        <td>192.168.1.129</td>
        <td>192.168.1.158</td>
        <td>192.168.1.159</td>
      </tr>
      <tr>
        <td>192.168.1.160</td>
        <td>192.168.1.161</td>
        <td>192.168.1.190</td>
        <td>192.168.1.191</td>
      </tr>
      <tr>
        <td>192.168.1.192</td>
        <td>192.168.1.193</td>
        <td>192.168.1.222</td>
        <td>192.168.1.223</td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
h3 {
  @apply text-xl;
}
</style>
