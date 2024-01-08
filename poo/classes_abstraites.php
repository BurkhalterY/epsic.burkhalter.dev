<?php
	$title = 'Les classes abstraites';
	include 'header.php';
?>
	<h1>Les classes abstraites</h1>
	<p>Une classe abstraite est une classe qui ne peut pas être instancié car certaines de ses méthodes ne sont pas définies. Son but est d'en faire hériter une autre classe pour surcharger ces méthodes. C'est une espèce de modèle de classe.</p>
	<p>Voici comment déclarer une classe abstraite et ses méthodes :</p>
	<pre><code class="language-java">public abstract class MaClasseAbstraite {

	// Méthodes abstraites
	public abstract void maMethode1();
	public abstract int maMethode2();
	public abstract String maMethode3();

}</code></pre>

	<h3>Exemple</h3>
	<p>Pour mieux comprendre leur fonctionnement, voici un exemple complet :</p>
	<p>Imaginez un programme permettant de calculer le périmètre et l'aire de plusieurs formes. Toutes ces formes auraient une manière différente de calculer le périmètre et l'aire. Si on veut les rassembler dans un tableau par exemple, il nous faudrait une classe parente commune et donc forcément abstraite.<br>Nous allons commencer avec 3 clases : Forme, Rectangle et Cercle.</p>
	<p>La classe abstraite Forme :</p>
	<pre><code class="language-java">package testclasseabstraite;

public abstract class Forme {

	public abstract double aire();
	public abstract double perimetre();

}</code></pre>
	<p>La classe Rectangle :</p>
	<pre><code class="language-java">package testclasseabstraite;

public class Rectangle extends Forme {

	protected double longueur, largeur;

	public Rectangle(double longueurRect, double largeurRect){
		this.longueur = longueurRect;
		this.largeur = largeurRect;
	}

	@Override
	public double aire() {
		return longueur * largeur;
	}

	@Override
	public double perimetre() {
		return 2*(largeur + longueur);
	}

}</code></pre>
	<p>La classe Cercle :</p>
	<pre><code class="language-java">package testclasseabstraite;

public class Cercle extends Forme {

	// Déclaration de la constante PI
	public static final double PI = 3.141592;

	protected double rayon;

	public Cercle(double rayon){
		this.rayon = rayon;
	}

	@Override
	public double aire() {
		return PI * rayon * rayon;
	}

	@Override
	public double perimetre() {
		return 2 * PI * rayon;
	}
	
}</code></pre>
	<p>La classe principale :</p>
	<pre><code class="language-java">package testclasseabstraite;

public class TestClasseAbstraite {

	public static void main(String[] args) {
		
		Forme[] collection = new Forme[3];
		collection[0] = new Cercle(20);
		collection[1] = new Rectangle(20, 10);
		collection[2] = new Rectangle(100, 40);
		
		// Affichage de l'aire et du périmètre pour chaque forme
		for(int i = 0; i < collection.length; i++){
			System.out.println("aire : "+collection[i].aire());
			System.out.println("perimetre : "+collection[i].perimetre());
			System.out.println();
		}

	}
}</code></pre>


<?php include 'footer.php'; ?>