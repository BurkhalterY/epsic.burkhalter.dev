<?php defined('BASEPATH') OR exit('No direct script access allowed'); ?>
<h1>Lire les entrées clavier</h1>
<p>Pour qu'on puisse interagir avec notre programme, le plus simple est d'utiliser le clavier pour écrire.</p>

<h3>La classe Scanner</h3>
<p>Pour cela, il existe la classe Scanner. Elle permet de lire ce qu'on a écrit dans la console.</p>
<p>Avant de l'utiliser, il faut l'importer. Placer cela après le package :</p>
<pre><code class="language-java">package monprogramme;

import java.util.Scanner;</code></pre>
<p>Normalement, si vous ne la mettez pas, le programme vous proposera de la mettre lui-même quand vous l'utiliserez.</p>

<h3>Instanciation</h3>
<p>Pour l'utiliser, nous devons écrire ceci au début de la fonction main :</p>
<pre><code class="language-java">Scanner sc = new Scanner(System.in);</code></pre>
<span><strong>Scanner</strong> -&gt; Pour l'instant, imaginez-vous que c'est comme un type de variable : on crée une variable de type Scanner.</span><br>
<span><strong>sc</strong> -&gt; Le nom de votre Scanner, appelez-le comme vous souhaitez.</span><br>
<span><strong>= new Scanner(System.in)</strong> -&gt; Un truc qui vous semble bizarre pour l'instant. Vous comprendrez immédiatement quand j'aborderais la POO.</span>

<h3>Utilisation</h3>
<p>Lorsque vous écrivez une des fonctions si dessous, le programme ce met en pause et attend que vous entriez quelque chose :</p>
<table class="table">
	<thead>
		<tr>
			<th>Fonction</th>
			<th>Retourne</th>
			<th>Exemple</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>sc.nextByte()</td>
			<td>byte</td>
			<td><pre><code class="language-java">byte maVar = sc.nextByte();</code></pre></td>
		</tr>
		<tr>
			<td>sc.nextShort())</td>
			<td>short</td>
			<td><pre><code class="language-java">short maVar = sc.nextShort();</code></pre></td>
		</tr>
		<tr>
			<td>sc.nextInt()</td>
			<td>int</td>
			<td><pre><code class="language-java">int maVar = sc.nextInt();</code></pre></td>
		</tr>
		<tr>
			<td>sc.nextLong()</td>
			<td>long</td>
			<td><pre><code class="language-java">long maVar = sc.nextLong();</code></pre></td>
		</tr>
		<tr>
			<td>sc.nextFloat()</td>
			<td>float</td>
			<td><pre><code class="language-java">float maVar = sc.nextFloat();</code></pre></td>
		</tr>
		<tr>
			<td>sc.nextDouble()</td>
			<td>double</td>
			<td><pre><code class="language-java">double maVar = sc.nextDouble();</code></pre></td>
		</tr>
		<tr>
			<td>sc.nextLine()</td>
			<td>String</td>
			<td><pre><code class="language-java">String maVar = sc.nextLine();</code></pre></td>
		</tr>
	</tbody>
</table>
<p>Attention donc à ce que pourrait écrire l'utilisateur. Car s'il écrit 3.5 dans un nextInt, votre programme plantera car on ne peut pas stocker de nombre à virgule dans un int par exemple.</p>

<h3>Le bloc try catch</h3>
<p>Pour pallier à ce problème, nous pouvons utiliser les exceptions. Les exceptions permettent d'exécuter un autre bout de code si le premier plante. Elle se présente comme suit :</p>
<pre><code class="language-java">try {
	//Code susceptible de planter
} catch(NomDeLException e) {
	//Code à exécuter en cas de plantage
}</code></pre>
<p>En entrant dans le try, le code se déroule normalement. Si le try se passe bien, le catch n'est pas exécuter. Mais si le try plante, alors nous exécutons ce qu'il y a dans le catch. N'utiliser le bloc try catch seulement là où il est nécessaire, inutile de mettre tout votre programme dans un try catch.</p>
<p>En paramètre, dans le catch, nous avons NomDeLException. Il s'agit du nom de l'exception. Indiquez ici le nom de l'exception à intercepter.</p>
<p>Voici un bout de code qui l'utilise pour empêcher notre utilisateur de noter n'importe quoi :</p>
<pre><code class="language-java">public static void main(String[] args) {

	//Déclaration su Scanner
	Scanner sc = new Scanner(System.in);
	
	//Une variable qui contiendra notre nombre
	int number = 0;
	
	//Tant que le nombre est plus petit que 1 ou plus grand que 10
	while(number < 1 || number > 10){

		//Message pour l'utilisateur
		System.out.println("Saisissez un nombre entre 1 et 10 inclus :");

		//Attente d'une entrée par l'utilisateur et la stocker dans la variable line
		//Attention, elle est de type String pour que l'utilisateur puisse entrer n'importe quoi sans tout faire planter
		String line = sc.nextLine();

		//essayer de...
		try{

			//convertir notre String en int
			number = Integer.parseInt(line);

		//Si ça n'a pas marché alors...
		}catch(NumberFormatException e){

			//on remet notre nombre à 0 pour continuer la boucle
			number = 0;
		}
	}

	//Affichage du nombre final
	System.out.println(number);
}</code></pre>
<ul>
	<li>Voyez qu'on a utilisé l'exception : NumberFormatException.</li>
	<li>Integer.parseInt(line) prends en paramètre un texte String et renvoie un int si le String ne contient que des chiffres. Sinon il appelle le bloc catch.</li>
</ul>