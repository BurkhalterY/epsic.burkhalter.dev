(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-871c361a"],{3622:function(d,t,a){"use strict";a("78b7")},5745:function(d,t,a){"use strict";a.r(t);var f=a("7a23"),e=Object(f["h"])('<h1 data-v-1ffd55c2>L&#39;Unicode et UTF-8</h1><h3 data-v-1ffd55c2>L&#39;Unicode</h3><img src="/medias/bin/Unicode_logo.svg" alt="logo Unicode" width="100" style="float:right;" data-v-1ffd55c2><p data-v-1ffd55c2>Unicode est un jeu de caractères comme ASCII, sauf qu&#39;il en contient beaucoup plus.</p><p data-v-1ffd55c2>Il a été développé pour contenir tous les symboles de toutes les langues.</p><ul data-v-1ffd55c2><li data-v-1ffd55c2>Les points code Unicode se notent U+XXXX où XXXX représente le code en hexadécimal.</li><li data-v-1ffd55c2>Exemple : « é » se note U+00E9.</li></ul><h3 data-v-1ffd55c2>UTF-8</h3><p data-v-1ffd55c2>UTF-8 est un encodage utilisé pour minimiser le nombre d&#39;octet pour écrire un caractère Unicode.</p><ul data-v-1ffd55c2><li data-v-1ffd55c2>Si le premier bit est à 0, le point code est sur 1 octet (code ASCII)</li><li data-v-1ffd55c2>S&#39;il est à 1, cela signifie qu&#39;il est sur plus d&#39;un octet.</li><li data-v-1ffd55c2>Le nombre de 1 sur le premier octet donne le nombre d&#39;octets utilisés. Il est suivit d&#39;un 0 qui marque le début du point code.</li><li data-v-1ffd55c2>Tous les octets suivant commencent par 10</li></ul><table class="table" data-v-1ffd55c2><tr data-v-1ffd55c2><th data-v-1ffd55c2>Caractères codés</th><th data-v-1ffd55c2>Représentation binaire UTF-8</th><th data-v-1ffd55c2>Nombre de bits utilisables</th></tr><tr data-v-1ffd55c2><td data-v-1ffd55c2>0 à 127</td><td data-v-1ffd55c2>0xxx xxxx</td><td data-v-1ffd55c2>7</td></tr><tr data-v-1ffd55c2><td data-v-1ffd55c2>128 à 2047</td><td data-v-1ffd55c2>110x xxxx 10xx xxxx</td><td data-v-1ffd55c2>11</td></tr><tr data-v-1ffd55c2><td data-v-1ffd55c2>2048 à 65&#39;535</td><td data-v-1ffd55c2>1110 xxxx 10xx xxxx 10xx xxxx</td><td data-v-1ffd55c2>16</td></tr><tr data-v-1ffd55c2><td data-v-1ffd55c2>65&#39;536 à 2&#39;097&#39;151</td><td data-v-1ffd55c2>1111 0xxx 10xx xxxx 10xx xxxx 10xx xxxx</td><td data-v-1ffd55c2>21</td></tr></table><h3 data-v-1ffd55c2>Exemple</h3><p data-v-1ffd55c2>Le caractère « é » utilise le point code Unicode U+00E9.</p><p data-v-1ffd55c2>Ici, on a besoin de 8 bits, on utilise donc le 2<sup data-v-1ffd55c2>ème</sup> modèle dans le tableau.</p><p data-v-1ffd55c2>On écrit simplement les bits dans le premier emplacement libre en partant de la droite.</p><table style="text-align:center;width:100%;" data-v-1ffd55c2><tr data-v-1ffd55c2><th data-v-1ffd55c2>Point code base 16</th><td data-v-1ffd55c2></td><td data-v-1ffd55c2></td><td data-v-1ffd55c2><span class="bg-blue" data-v-1ffd55c2>E</span></td><td data-v-1ffd55c2><span class="bg-orange" data-v-1ffd55c2>9</span></td></tr><tr data-v-1ffd55c2><th data-v-1ffd55c2>Point code base 2</th><td data-v-1ffd55c2><i data-v-1ffd55c2><span class="bg-green" data-v-1ffd55c2>0000</span></i></td><td data-v-1ffd55c2><i data-v-1ffd55c2><span class="bg-green" data-v-1ffd55c2>0000</span></i></td><td data-v-1ffd55c2><span class="bg-blue" data-v-1ffd55c2>1110</span></td><td data-v-1ffd55c2><span class="bg-orange" data-v-1ffd55c2>1001</span></td></tr><tr data-v-1ffd55c2><th data-v-1ffd55c2>Modèle UTF-8</th><td data-v-1ffd55c2><span class="bg-red" data-v-1ffd55c2>110</span>x</td><td data-v-1ffd55c2>xxxx</td><td data-v-1ffd55c2><span class="bg-red" data-v-1ffd55c2>10</span>xx</td><td data-v-1ffd55c2>xxxx</td></tr><tr data-v-1ffd55c2><th data-v-1ffd55c2>Code UTF-8 base 2</th><td data-v-1ffd55c2><span class="bg-red" data-v-1ffd55c2>110</span><span class="bg-green" data-v-1ffd55c2>0</span></td><td data-v-1ffd55c2><span class="bg-green" data-v-1ffd55c2>00</span><span class="bg-blue" data-v-1ffd55c2>11</span></td><td data-v-1ffd55c2><span class="bg-red" data-v-1ffd55c2>10</span><span class="bg-blue" data-v-1ffd55c2>10</span></td><td data-v-1ffd55c2><span class="bg-orange" data-v-1ffd55c2>1001</span></td></tr><tr data-v-1ffd55c2><th data-v-1ffd55c2>Code UTF-8 base 16</th><td data-v-1ffd55c2>C</td><td data-v-1ffd55c2>3</td><td data-v-1ffd55c2>A</td><td data-v-1ffd55c2>9</td></tr></table><p data-v-1ffd55c2>Code UTF-8 : C3 A9</p>',16),c=[e];function s(d,t,a,e,s,n){return Object(f["s"])(),Object(f["f"])("div",null,c)}var n={name:"UnicodeUtf8"},v=(a("3622"),a("d959")),l=a.n(v);const i=l()(n,[["render",s],["__scopeId","data-v-1ffd55c2"]]);t["default"]=i},"78b7":function(d,t,a){}}]);
//# sourceMappingURL=chunk-871c361a.583730c4.js.map