<h1>Les interfaces</h1>
<p>Une interface ressemble beaucoup à une classe abstraite. Mais avec une grosse différence : une classe peut utiliser plusieurs interfaces.</p>
<p>Déclaration d'une interface :</p>
<pre><code class="language-java">public interface MonInterface {

	// Les méthodes de l'interface
	public void methodeExemple();

}</code></pre>
<p>Utilisation d'une interface dans une classe :</p>
<pre><code class="language-java">public class MaClasseNormale implements monInterface {

	// Surcharge des méthodes de l'interface
	@Override
	public void methodeExemple(){
		// Code exemple
	}
}</code></pre>
<br>
<p>Cas pratique : vous voulez que certaines de vos classes puissent afficher une description d'elles-mêmes</p>
<p>On crée donc une classe abstraite Description par exemple :</p>
<pre><code class="language-java">public interface Description {

	public void afficher();

}</code></pre>
<p>Et dans toutes nos classe où l'on veut qu'elle puissent afficher une description, on implémente l'interface : Exemple avec 2 classes.</p>
<pre><code class="language-java">public class Personne implements Description {

	@Override
	public void afficher(){
		System.out.println("Je suis une personne !");
	}

}</code></pre>
<pre><code class="language-java">public class Rectangle implements Description {

	@Override
	public void afficher(){
		System.out.println("Je suis un rectangle !");
	}

}</code></pre>
<p>On peut ainsi faire des tableaux de type Description et le boucler pour afficher toutes les descriptions.</p>