<?php defined('BASEPATH') OR exit('No direct script access allowed'); ?>
<h1>Les commentaires</h1>
<p>Les commentaires servent à rendre le code plus compréhensible. Ils sont ignorés lors de la compilation.</p>

<h3>Les commentaires sur une seule ligne</h3>
<p>Les commentaires qui s'écrivent sur une seule ligne sont indiqué par un double slash. Attention à toujours le placer après le point-virgule.</p>
<pre><code class="language-java">maVar = 2 + 2; //maVar vaut maintenant 4</code></pre>
<p>Ils peuvent aussi ocuper l'intégralité de la ligne.</p>
<pre><code class="language-java">//maVar vaut maintenant 4</code><br><code class="language-java">maVar = 2 + 2;</code></pre>

<h3>Les commentaires multi lignes</h3>
<p>Utiles si vous devez faire des longs commentaires, sur plusieurs lignes.</p>
<pre><code class="language-java">/* Salut,
Je suis un commentaire
...

Un très long commentaire
*/</code></pre>
<p>Ils commencent par /* et se finissent pas */.</p>