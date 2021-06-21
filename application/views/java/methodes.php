<h1>Les méthodes</h1>
<p>Les méthodes permettent de subdiviser un programme en plusieurs parties et d'éviter la redondance.</p>
<img src="<?=base_url('medias/java/methodes.png')?>" alt="methodes" />
<br><br>
<p>Son avantage est qu'elle peut être utiliser plusieurs fois dans le programme. Plus besoin de copier-coller un code, il suffit de le mettre dans une méthode.</p>

<h3>Déclaration</h3>
<p>Une méthode se déclare comme suit :</p>
<pre><code class="language-java">public static typeRetour nomMethode(typeArg1 arg1, typeArg2, arg2, ...) {
	// Code de la méthode
	return x;
}</code></pre>
<ul>
	<li><strong>public</strong> et <strong>static</strong> : ne vous en préoccuper pas pour l'instant.</li>
	<li><strong>typeRetour</strong> : le type de variable que la méthode retourne, tapez void si elle ne retourne rien.</li>
	<li><strong>nomMethode</strong> : le nom de la méthode, même règles qu'avec les noms de variable.</li>
	<li><strong>typeArg1 arg1</strong> : un ou plusieurs argument(s) et son/leurs type(s), facultatif.</li>
	<li><strong>return x</strong> : Ce que retourne la fonction, ne pas mettre si retourne void.</li>
</ul>

<h3>Exemples</h3>
<p>Le code suivant contient une fonction additionner() qui prend deux paramètres et les additionne.</p>
<pre><code class="language-java">package monprogramme;

public class Monprogramme {

	public static void main(String[] args) {
		int a = 4;
		int b = 5;

		int resultat = 0;

		resultat = additionner(a, b);

		System.out.println(resultat); //affiche 9
	}

	public static int additionner(int a, int b){
		return a + b;
	}
}</code></pre>