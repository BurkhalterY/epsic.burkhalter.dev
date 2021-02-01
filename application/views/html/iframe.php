<?php defined('BASEPATH') OR exit('No direct script access allowed'); ?>
<h1>L'intégration (iframe)</h1>
<p>L'intégration est une technique qui permet d'insérer une page web complète dans votre site. La page est "encapsulée" dans une frame qui se comportera comme une div. La balise à utiliser et <code class="language-html">&lt;iframe&gt;</code> avec l'attribut <code>src</code>.</p>
<pre><code class="language-html">&lt;iframe src="ma-page.html"&gt;&lt;/iframe&gt;</code></pre>
<iframe src="<?=base_url()?>" width="75%" height="400px"></iframe>

<h2>Vidéo YouTube</h2>
<p>C'est avec ce même procédé qu'on va pouvoir intégrer une vidéo YouTube à l'intérieur de notre site. Ça se passe directement dans l'onglet partager de la vidéo à intégrer :</p>
<img src="<?=base_url('medias/html/youtube-share-1.png')?>" alt="Step 1" class="img-fluid" />
<hr>
<p>Puis dans intégrer :</p>
<img src="<?=base_url('medias/html/youtube-share-2.png')?>" alt="Step 2" class="img-fluid" />
<hr>
<p>Copiez-collez le code. Vous pouvez aussi définir quelques options avancées que je vous laisserais découvrir :</p>
<img src="<?=base_url('medias/html/youtube-share-3.png')?>" alt="Step 3" class="img-fluid" />
<hr>
<h3>Résultat</h3>
<iframe width="560" height="315" src="https://www.youtube.com/embed/kJQP7kiw5Fk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>