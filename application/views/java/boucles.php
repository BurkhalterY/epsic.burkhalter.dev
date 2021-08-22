<h1>Les boucles</h1>
<p>Une boucle sert à répéter une action.</p>

<h3>La boucle while</h3>
<p>La boucle while s'écrit comme ceci :</p>
<pre><code class="language-java">while (condition) {
	//Code qui va se répeter
}</code></pre>
<p>La variable condition doit être une boolean. Si la condition est juste, on entre dans la boucle, le code s'exécute. Quand il arrive à la fin, il vérifie à nouveau la condition. Si elle vaut toujours true, il recommence, sinon il sort de la boucle.</p>
<img src="<?=base_url('medias/java/boucle.png')?>" alt="Boucle" />
<p>Il faut donc s'assurer que le code qui s'exécute dans la boucle influence la condition, car sinon la condition vaudra toujours true et la boucle ne s'arrêtera jamais.</p>

<h3>La boucle do ... while</h3>
<p>La boucle do while fonctionne de la même façon que la boucle while. Sauf qu'elle vérifie la condition à la fin. Ce qui veut dire qu'elle s'exécute au moins une fois.</p>
<pre><code class="language-java">do {
	//Code qui va se répeter
} while (condition);</code></pre>
<p>Remarquez bien la présence du point-virgule à la fin est obligatoire.</p>
<p>Il est déconseillé de l'utiliser, la boucle while classique est à privilégier.</p>

<h3>La boucle for</h3>
<p>La boucle for s'exécute tant qu'une condition est juste, comme la boucle while. Sauf qu'elle prend deux autres paramètres: l'initialisation d'une variable et une action qui sera exécuté à chaque fin de boucle</p>
<pre><code class="language-java">for (int i = 0; i &lt; 10; i++) {
	//Code qui va se répeter
}</code></pre>
<p>Cette boucle va se répeter 10 fois.</p>