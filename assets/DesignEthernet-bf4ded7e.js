import{_ as d,o as t,c as a,s as c}from"./index-974d2cc0.js";const b="/network/medias/plan_reseau.png";const e={},v=c('<a target="_blank" href="/network/medias/mediatis_0.jpg" data-v-bd382cbc>Schéma vierge</a><h2 data-v-bd382cbc>Cahier des charges</h2><ol data-v-bd382cbc><li data-v-bd382cbc> Les arrivées et départs des lignes se font au niveau du local technique. </li><li data-v-bd382cbc> Les équipements réseaux doivent travailler au niveau 2 du modèle OSI. </li><li data-v-bd382cbc>Les serveurs se trouvent dans le local technique.</li><li data-v-bd382cbc> On doit avoir 10 ports 1000 base T de libre sur le(s) switch(s) du local technique pour y connecter les serveurs. </li><li data-v-bd382cbc> Les équipements réseaux se trouvent dans le local technique ou dans des armoires de brassage placées dans le couloir central du bâtiment. </li><li data-v-bd382cbc> On dispose de 4 imprimantes monochromes en réseau placées dans le couloir central. </li><li data-v-bd382cbc> On veut pouvoir administrer l&#39;ensemble des équipements réseaux depuis le local technique. </li></ol><p data-v-bd382cbc>Ce qui veut dire que :</p><ol data-v-bd382cbc><li data-v-bd382cbc>Le routeur est dans le local technique.</li><li data-v-bd382cbc> Il faudra utiliser des switchs (couche 2) et non des hubs (couche 1). </li><li data-v-bd382cbc>OK.</li><li data-v-bd382cbc>Prévoir les switchs avec 10 ports supplémentaires.</li><li data-v-bd382cbc> Ne pas mettre de switch autre pars que dans le local technique ou dans le couloir central. </li><li data-v-bd382cbc>Choisir des imprimantes monochromes.</li><li data-v-bd382cbc>Choisir des switchs administrables.</li></ol><h2 data-v-bd382cbc>Marche à suivre</h2><p data-v-bd382cbc> Nous allons tracer des cercles sur le plan de manière à le recouvrir (presque) entièrement en n&#39;en utilisant le moins possible. </p><p data-v-bd382cbc>Quel sera le rayon du cercle ?</p><p data-v-bd382cbc> La distance maximale de la norme 1000BASE-T est de 100 mètres. Nous allons dire 80 mètres pour avoir une marge. Moins 10 mètres car il y a une distance verticale entre le plafond et les prises.<br data-v-bd382cbc>Il faut, de plus, prendre en compte que cette distance représente la taille totale du câble. Or ici, nous calculons le rayon, donc la distance que le câble peut atteindre s&#39;il va tout droit, mais en pratique, il y aura des virages. En divisant cette distance par deux, cela jouera dans la majorité des cas. </p><p data-v-bd382cbc> OK, nous devons faire des cercles d&#39;environ 35 mètres de rayon. Pour tout recouvrir, je dois en placer 3 (ce n&#39;est pas grave s&#39;ils ne sont pas faits au compas). </p><p data-v-bd382cbc><a target="_blank" href="/network/medias/mediatis_1.jpg" data-v-bd382cbc> Voir sur le schéma </a></p><p data-v-bd382cbc> Nous devons maintenant placer un switch au centre de chacun des cercles. Ainsi, les câbles pourront être branchés aux switchs et nous pourrons connecter les switch au routeur avec de la fibre optique. </p><p data-v-bd382cbc><a target="_blank" href="/network/medias/mediatis_2.jpg" data-v-bd382cbc> Voir sur le schéma </a></p><p data-v-bd382cbc> Il ne reste ensuite plus qu&#39;à relier chaque prise au switch le plus proche. </p><p data-v-bd382cbc><a target="_blank" href="/network/medias/mediatis_3.jpg" data-v-bd382cbc> Voir sur le schéma </a></p><p data-v-bd382cbc>Et ajouter les imprimantes.</p><p data-v-bd382cbc><a target="_blank" href="/network/medias/mediatis_4.jpg" data-v-bd382cbc> Voir sur le schéma final </a></p><h2 data-v-bd382cbc>Remplir la liste des équipements</h2><table data-v-bd382cbc><tr data-v-bd382cbc><th data-v-bd382cbc>Nom de l&#39;équipement</th><th data-v-bd382cbc>Modèle</th><th data-v-bd382cbc>Justification du choix</th></tr><tr data-v-bd382cbc><td data-v-bd382cbc>R-1</td><td data-v-bd382cbc>RF</td><td data-v-bd382cbc>Le seul routeur de la liste</td></tr><tr data-v-bd382cbc><td data-v-bd382cbc>R-2</td><td data-v-bd382cbc>RE</td><td data-v-bd382cbc> Le plus grand switch a besoin de 24 ports et d&#39;au moins un port fibre </td></tr><tr data-v-bd382cbc><td data-v-bd382cbc>R-3</td><td data-v-bd382cbc>RE</td><td data-v-bd382cbc>On prend 3 fois le même</td></tr><tr data-v-bd382cbc><td data-v-bd382cbc>R-4</td><td data-v-bd382cbc>RE</td><td data-v-bd382cbc>&quot;</td></tr><tr data-v-bd382cbc><td data-v-bd382cbc>I-1</td><td data-v-bd382cbc>IF</td><td data-v-bd382cbc> Une imprimante monochrome, j&#39;ai vérifié qu&#39;elle ne soit pas en USB mais avec un port réseau </td></tr><tr data-v-bd382cbc><td data-v-bd382cbc>I-2</td><td data-v-bd382cbc>IF</td><td data-v-bd382cbc>3 fois la même</td></tr><tr data-v-bd382cbc><td data-v-bd382cbc>I-3</td><td data-v-bd382cbc>IF</td><td data-v-bd382cbc>&quot;</td></tr></table><h2 data-v-bd382cbc>Remplir la matrice des jonctions</h2><table data-v-bd382cbc><tr data-v-bd382cbc><th data-v-bd382cbc>Nom</th><th data-v-bd382cbc>Modèle</th><th data-v-bd382cbc>Port</th><th data-v-bd382cbc>Prise</th><th data-v-bd382cbc>Longueur</th><th data-v-bd382cbc>Emplacement</th></tr><tr data-v-bd382cbc><td data-v-bd382cbc>R-2</td><td data-v-bd382cbc>RE</td><td data-v-bd382cbc>0</td><td data-v-bd382cbc>1</td><td data-v-bd382cbc>36 m</td><td data-v-bd382cbc>Local technique</td></tr><tr data-v-bd382cbc><td data-v-bd382cbc>R-2</td><td data-v-bd382cbc>RE</td><td data-v-bd382cbc>1</td><td data-v-bd382cbc>2</td><td data-v-bd382cbc>32 m</td><td data-v-bd382cbc>Local technique</td></tr><tr data-v-bd382cbc><td data-v-bd382cbc>R-2</td><td data-v-bd382cbc>RE</td><td data-v-bd382cbc>2</td><td data-v-bd382cbc>3</td><td data-v-bd382cbc>72 m</td><td data-v-bd382cbc>Magasin</td></tr><tr data-v-bd382cbc><td data-v-bd382cbc>R-2</td><td data-v-bd382cbc>RE</td><td data-v-bd382cbc>3</td><td data-v-bd382cbc>4</td><td data-v-bd382cbc>62 m</td><td data-v-bd382cbc>Magasin</td></tr><tr data-v-bd382cbc><td data-v-bd382cbc>R-2</td><td data-v-bd382cbc>RE</td><td data-v-bd382cbc>4</td><td data-v-bd382cbc>5</td><td data-v-bd382cbc>75 m</td><td data-v-bd382cbc>Bibliothèque</td></tr><tr data-v-bd382cbc><td data-v-bd382cbc>R-3</td><td data-v-bd382cbc>RE</td><td data-v-bd382cbc>0</td><td data-v-bd382cbc>6</td><td data-v-bd382cbc>70 m</td><td data-v-bd382cbc>Bibliothèque</td></tr><tr data-v-bd382cbc><td data-v-bd382cbc>R-3</td><td data-v-bd382cbc>RE</td><td data-v-bd382cbc>1</td><td data-v-bd382cbc>7</td><td data-v-bd382cbc>62 m</td><td data-v-bd382cbc>Test</td></tr><tr data-v-bd382cbc><td data-v-bd382cbc>R-3</td><td data-v-bd382cbc>RE</td><td data-v-bd382cbc>2</td><td data-v-bd382cbc>8</td><td data-v-bd382cbc>42 m</td><td data-v-bd382cbc>Test</td></tr><tr data-v-bd382cbc><td data-v-bd382cbc>R-4</td><td data-v-bd382cbc>RE</td><td data-v-bd382cbc>0</td><td data-v-bd382cbc>9</td><td data-v-bd382cbc>42 m</td><td data-v-bd382cbc>Test</td></tr><tr data-v-bd382cbc><td data-v-bd382cbc>R-4</td><td data-v-bd382cbc>RE</td><td data-v-bd382cbc>1</td><td data-v-bd382cbc>10</td><td data-v-bd382cbc>37 m</td><td data-v-bd382cbc>Vente</td></tr><tr data-v-bd382cbc><td data-v-bd382cbc>R-4</td><td data-v-bd382cbc>RE</td><td data-v-bd382cbc>2</td><td data-v-bd382cbc>11</td><td data-v-bd382cbc>47 m</td><td data-v-bd382cbc>Vente</td></tr><tr data-v-bd382cbc><td data-v-bd382cbc>R-4</td><td data-v-bd382cbc>RE</td><td data-v-bd382cbc>3</td><td data-v-bd382cbc>12</td><td data-v-bd382cbc>48 m</td><td data-v-bd382cbc>Compta</td></tr><tr data-v-bd382cbc><td data-v-bd382cbc>R-4</td><td data-v-bd382cbc>RE</td><td data-v-bd382cbc>4</td><td data-v-bd382cbc>13</td><td data-v-bd382cbc>53 m</td><td data-v-bd382cbc>Compta</td></tr><tr data-v-bd382cbc><td data-v-bd382cbc>R-2</td><td data-v-bd382cbc>RE</td><td data-v-bd382cbc>5</td><td data-v-bd382cbc>14</td><td data-v-bd382cbc>27 m</td><td data-v-bd382cbc>Techniciens</td></tr><tr data-v-bd382cbc><td data-v-bd382cbc>R-2</td><td data-v-bd382cbc>RE</td><td data-v-bd382cbc>6</td><td data-v-bd382cbc>15</td><td data-v-bd382cbc>32 m</td><td data-v-bd382cbc>Techniciens</td></tr><tr data-v-bd382cbc><td data-v-bd382cbc>R-2</td><td data-v-bd382cbc>RE</td><td data-v-bd382cbc>7</td><td data-v-bd382cbc>16</td><td data-v-bd382cbc>37 m</td><td data-v-bd382cbc>Techniciens</td></tr><tr data-v-bd382cbc><td data-v-bd382cbc>R-2</td><td data-v-bd382cbc>RE</td><td data-v-bd382cbc>8</td><td data-v-bd382cbc>17</td><td data-v-bd382cbc>42 m</td><td data-v-bd382cbc>Montage</td></tr><tr data-v-bd382cbc><td data-v-bd382cbc>R-3</td><td data-v-bd382cbc>RE</td><td data-v-bd382cbc>3</td><td data-v-bd382cbc>18</td><td data-v-bd382cbc>25 m</td><td data-v-bd382cbc>Montage</td></tr><tr data-v-bd382cbc><td data-v-bd382cbc>R-4</td><td data-v-bd382cbc>RE</td><td data-v-bd382cbc>5</td><td data-v-bd382cbc>19</td><td data-v-bd382cbc>27 m</td><td data-v-bd382cbc>Montage</td></tr><tr data-v-bd382cbc><td data-v-bd382cbc>R-4</td><td data-v-bd382cbc>RE</td><td data-v-bd382cbc>6</td><td data-v-bd382cbc>20</td><td data-v-bd382cbc>37 m</td><td data-v-bd382cbc>Direction</td></tr><tr data-v-bd382cbc><td data-v-bd382cbc>R-4</td><td data-v-bd382cbc>RE</td><td data-v-bd382cbc>7</td><td data-v-bd382cbc>21</td><td data-v-bd382cbc>32 m</td><td data-v-bd382cbc>Direction</td></tr><tr data-v-bd382cbc><td data-v-bd382cbc>R-4</td><td data-v-bd382cbc>RE</td><td data-v-bd382cbc>8</td><td data-v-bd382cbc>22</td><td data-v-bd382cbc>32 m</td><td data-v-bd382cbc>Secrétariat</td></tr><tr data-v-bd382cbc><td data-v-bd382cbc>R-4</td><td data-v-bd382cbc>RE</td><td data-v-bd382cbc>9</td><td data-v-bd382cbc>23</td><td data-v-bd382cbc>37 m</td><td data-v-bd382cbc>Secrétariat</td></tr><tr data-v-bd382cbc><td data-v-bd382cbc>R-2</td><td data-v-bd382cbc>RE</td><td data-v-bd382cbc>9</td><td data-v-bd382cbc>24</td><td data-v-bd382cbc>17 m</td><td data-v-bd382cbc>Couloir central</td></tr><tr data-v-bd382cbc><td data-v-bd382cbc>R-3</td><td data-v-bd382cbc>RE</td><td data-v-bd382cbc>4</td><td data-v-bd382cbc>25</td><td data-v-bd382cbc>12 m</td><td data-v-bd382cbc>Couloir central</td></tr><tr data-v-bd382cbc><td data-v-bd382cbc>R-4</td><td data-v-bd382cbc>RE</td><td data-v-bd382cbc>10</td><td data-v-bd382cbc>26</td><td data-v-bd382cbc>15 m</td><td data-v-bd382cbc>Couloir central</td></tr><tr data-v-bd382cbc><td data-v-bd382cbc>R-4</td><td data-v-bd382cbc>RE</td><td data-v-bd382cbc>11</td><td data-v-bd382cbc>27</td><td data-v-bd382cbc>21 m</td><td data-v-bd382cbc>Couloir central</td></tr><tr data-v-bd382cbc><td data-v-bd382cbc>R-4</td><td data-v-bd382cbc>RE</td><td data-v-bd382cbc>12</td><td data-v-bd382cbc>28</td><td data-v-bd382cbc>17 m</td><td data-v-bd382cbc>Vente</td></tr><tr data-v-bd382cbc><td data-v-bd382cbc>R-2</td><td data-v-bd382cbc>RE</td><td data-v-bd382cbc>10</td><td data-v-bd382cbc>101</td><td data-v-bd382cbc></td><td data-v-bd382cbc>Local technique prise de réserve</td></tr><tr data-v-bd382cbc><td data-v-bd382cbc>R-2</td><td data-v-bd382cbc>RE</td><td data-v-bd382cbc>11</td><td data-v-bd382cbc>102</td><td data-v-bd382cbc></td><td data-v-bd382cbc>Local technique prise de réserve</td></tr><tr data-v-bd382cbc><td data-v-bd382cbc>R-2</td><td data-v-bd382cbc>RE</td><td data-v-bd382cbc>12</td><td data-v-bd382cbc>103</td><td data-v-bd382cbc></td><td data-v-bd382cbc>Local technique prise de réserve</td></tr><tr data-v-bd382cbc><td data-v-bd382cbc>R-2</td><td data-v-bd382cbc>RE</td><td data-v-bd382cbc>13</td><td data-v-bd382cbc>104</td><td data-v-bd382cbc></td><td data-v-bd382cbc>Local technique prise de réserve</td></tr><tr data-v-bd382cbc><td data-v-bd382cbc>R-2</td><td data-v-bd382cbc>RE</td><td data-v-bd382cbc>14</td><td data-v-bd382cbc>105</td><td data-v-bd382cbc></td><td data-v-bd382cbc>Local technique prise de réserve</td></tr><tr data-v-bd382cbc><td data-v-bd382cbc>R-2</td><td data-v-bd382cbc>RE</td><td data-v-bd382cbc>15</td><td data-v-bd382cbc>106</td><td data-v-bd382cbc></td><td data-v-bd382cbc>Local technique prise de réserve</td></tr><tr data-v-bd382cbc><td data-v-bd382cbc>R-2</td><td data-v-bd382cbc>RE</td><td data-v-bd382cbc>16</td><td data-v-bd382cbc>107</td><td data-v-bd382cbc></td><td data-v-bd382cbc>Local technique prise de réserve</td></tr><tr data-v-bd382cbc><td data-v-bd382cbc>R-2</td><td data-v-bd382cbc>RE</td><td data-v-bd382cbc>17</td><td data-v-bd382cbc>108</td><td data-v-bd382cbc></td><td data-v-bd382cbc>Local technique prise de réserve</td></tr><tr data-v-bd382cbc><td data-v-bd382cbc>R-2</td><td data-v-bd382cbc>RE</td><td data-v-bd382cbc>18</td><td data-v-bd382cbc>109</td><td data-v-bd382cbc></td><td data-v-bd382cbc>Local technique prise de réserve</td></tr><tr data-v-bd382cbc><td data-v-bd382cbc>R-2</td><td data-v-bd382cbc>RE</td><td data-v-bd382cbc>19</td><td data-v-bd382cbc>110</td><td data-v-bd382cbc></td><td data-v-bd382cbc>Local technique prise de réserve</td></tr></table><h2 data-v-bd382cbc>Dessiner le plan du réseau</h2><p data-v-bd382cbc> On doit avoir, pour le réseau, un maximum de deux niveaux dans la hiérarchie du réseau. </p><img src="'+b+'" class="mx-auto" data-v-bd382cbc>',24),r=[v];function s(i,n){return t(),a("div",null,r)}const o=d(e,[["render",s],["__scopeId","data-v-bd382cbc"]]);export{o as default};
