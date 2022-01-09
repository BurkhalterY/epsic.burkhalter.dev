(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21da27"],{d1ae:function(e,t,r){"use strict";r.r(t);var d=r("7a23"),s=Object(d["h"])('<h1>Les codes-barres EAN</h1><h3>EAN : European Article Numbering</h3><p>Le code EAN a pour but l&#39;identification univoque d&#39;objets (un seul code par produit) par une identification visuelle.</p><h3>Les types de codes EAN</h3><ul><li>EAN 8 : réservés à l&#39;usage sur des produits de petite taille.</li><li>EAN 13 : utilisés sur presque tous les produits alimentaires et bien plus.</li><li>EAN 128 : plus long, ils peuvent aussi contenir des informations sur le produit.</li></ul><h3>Les éléments EAN</h3><p>Chaque chiffre (de 0 à 9) est codé sur 7 bits. Ils sont toujours organisés de manière à avoir 2 barres blanches et 2 barres noires.<br>Il y a 3 manières de coder chacun des chiffres, selon qu&#39;il soit un élément A, B ou C.</p><img src="/medias/bin/EAN_list_codes.png" alt="Liste des codes EAN"><h3>Les zones de garde</h3><p>Les zones de garde sont des petits groupes d&#39;octets qui sont utilisé pour délimiter le code-barres ou une partie du code-barre.</p><table class="table"><tr><td>Zone de garde normale (normal guard)</td><td>101</td><td>On l&#39;utilise au début et à la fin du code-barres.</td></tr><tr><td>Zone de garde central</td><td>01010</td><td>On l&#39;utilise au milieu du code-barres.</td></tr></table><p>Les zones de garde dépassent du code-barres dessous.</p><img src="/medias/bin/EAN_guard.png"><h3>EAN-8</h3><p>Les codes-barres EAN-8 sont composés de 8 chiffres :</p><ul><li>Zone de garde normale</li><li>Chiffres 1 à 4 sous la forme d&#39;éléments A</li><li>Zone de garde central</li><li>Chiffres 5 à 8 sous la forme d&#39;éléments C</li><li>Zone de garde normale</li></ul><img src="/medias/bin/EAN-8_structure.png" alt="Structure d&#39;EAN-8"><h3>EAN-13</h3><p>Les codes-barres EAN-13 sont composés de 13 chiffres :</p><ul><li>Premier chiffre qui indique le paterne à suivre, sous la forme d&#39;un élément A<br>ATTENTION : Il ne faut pas l&#39;écrire dans le binaire</li><li>Zone de garde normale</li><li>Chiffres 2 à 7 sous la forme d&#39;éléments A ou B en fonction du paterne</li><li>Zone de garde central</li><li>Chiffres 8 à 13 sous la forme d&#39;éléments C</li><li>Zone de garde normale</li></ul><p>Les paternes en fonction du premier chiffre :</p><table><tr><th>1<sup>er</sup> chiffre </th><th>Paterne</th></tr><tr><td>0</td><td>[AAAAAA]</td></tr><tr><td>1</td><td>[AABABB]</td></tr><tr><td>2</td><td>[AABBAB]</td></tr><tr><td>3</td><td>[AABBBA]</td></tr><tr><td>4</td><td>[ABAABB]</td></tr><tr><td>5</td><td>[ABBAAB]</td></tr><tr><td>6</td><td>[ABBBAA]</td></tr><tr><td>7</td><td>[ABABAB]</td></tr><tr><td>8</td><td>[ABABBA]</td></tr><tr><td>9</td><td>[ABBABA]</td></tr></table>',22),i=[s];function l(e,t,r,s,l,n){return Object(d["s"])(),Object(d["f"])("div",null,i)}var n={name:"Ean"},a=r("d959"),o=r.n(a);const u=o()(n,[["render",l]]);t["default"]=u}}]);
//# sourceMappingURL=chunk-2d21da27.b7edc4c3.js.map