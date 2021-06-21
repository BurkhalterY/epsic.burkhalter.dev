<h1>Les tableaux</h1>
<p>Un tableau est une variable qui contient plusieurs valeurs, différenciables grâce à un index.</p>

<h3>Déclaration d'un tableau</h3>
<pre><code class="language-java">int monTableau[] = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9};</code></pre>
<p>Un tableau ne peut contenir que des valeurs de même type. Il est impossible de créer un tableau qui contient des int ET des String.</p>
<p>Une fois la taille du tableau choisis, elle ne peut plus être modifiée.</p>
<p>Si vous ne voulez pas initialiser votre tableau, vous pouvez le noter comme ceci.</p>
<pre><code class="language-java">int monTableau[] = new int[10]; //Le 10 représente la taille du tableau, inchangeable par la suite.</code></pre>
<p>Attention cependant, car avec cette méthode, toutes les cases vaudront null, ce qui veut dire qu'elles ne seront pas utilisables tel quel pour des calculs.</p>

<h3>Utilisation du tableau</h3>
<p>Voici le code pour récupérer la valeur d'une case du tableau :</p>
<pre><code class="language-java">System.out.println(monTableau[2]);</code></pre>
<p>Et pour la modifier :</p>
<pre><code class="language-java">monTableau[2] = 5;</code></pre>
<p>Attention, les index commencent à 0, donc l'index de la dernière case du tableau est égale a la taille du tableau moins un.</p>
<p>Il existe un attribut pour la taille du tableau :</p>
<pre><code class="language-java">monTableau.length;</code></pre>
<p>Attention il s'agit d'un attribut, notez juste qu'il s'écrit comme ceci sans parenthèses.</p>

<h3>Les tableaux à 2 dimensions</h3>
<p>Il est aussi possible de créer un tableau de type int[]. Concrètement un tableau de tableau. Il se déclare comme ça :</p>
<pre><code class="language-java">int monTableau[][] = { {0, 1, 2},{3, 4, 5},{6, 7, 8} };</code></pre>
<p>On y accède comme cela :</p>
<pre><code class="language-java">System.out.println(monTableau[0][0]); //affiche 0
System.out.println(monTableau[0][1]); //affiche 1
System.out.println(monTableau[1][0]); //affiche 3</code></pre>
<p>On peut bien sûr aussi faire des tableaux à 3, 4 ou 5 dimensions. Mais ça n'a pas vraiment d'intérêt.</p>

<h3>Parcourir un tableau</h3>
<p>Les boucles for sont très pratiques pour parcourir un tableau :</p>
<pre><code class="language-java">for (int i = 0; i &lt; monTableau.length; i++) {
	System.out.println(monTableau[i]);
}</code></pre>
<p>Et pour un tableau 2D :</p>
<pre><code class="language-java">for (int i = 0; i &lt; monTableau.length; i++) {
	for (int j = 0; j &lt; monTableau[i].length; j++) {
		System.out.println(monTableau[i][j]);
	}
}</code></pre>