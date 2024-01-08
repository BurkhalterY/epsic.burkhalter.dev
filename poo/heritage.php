<?php
	$title = 'L\'héritage';
	include 'header.php';
?>
	<h1>L'héritage</h1>
	<p>L’héritage est une notion de POO, elle permet de définir une classe comme enfant d’une autre classe. C’est-à-dire que la classe enfant va reprendre toutes les méthodes et tous les attributs de la classe parent. Le programmeur peut quand même y ajouter ses propres méthodes et attributs.</p>
	<p>Pour faire hériter une classe d’une autre classe, on utilise le mot réservé extends. Il s’utilise comme ceci dans la déclaration de la classe :</p>
	<pre><code class="language-java">public class ClasseEnfant extends ClasseParent {<?="\n"?>}</code></pre>
	<p>Les classes enfants ont les propriétés suivantes :</p>
	<ul>
		<li>Elles reprennent tous les attributs et méthodes de la classe parent.</li>
		<li>Si on y déclare une méthode avec le même nom que la classe parent, celle de la classe parent sera ignoré et remplacé par celle de la classe enfant.</li>
	</ul>
	<p>Voici un exemple d’une classe qui hérite d’une autre :</p>
	La classe parent : Personne
	<pre><code class="language-java">package testheritage;

public class Personne {
	protected String nom;
	protected int age;
	protected char sexe;

	public Personne() {
		this.nom = "";
		this.age = 0;
		this.sexe = '';
	}

	public Personne(String nomPers, int agePers, char sexePers) {
		this.nom = nomPers;
		this.age = agePers;
		this.sexe = sexePers;
	}

	public void afficher() {
		System.out.println("Nom :\t" + nom);
		System.out.println("Age :\t" + age);
		System.out.println("Sexe :\t" + sexe);
	}
}</code></pre>
	La classe enfant : Apprenti
	<pre><code class="language-java">package testheritage;

public class Apprenti extends Personne {
	protected String formation;

	public Apprenti() {
		super(); // super() permet d'appeller le constructeur de la classe parent, attention : il doit toujours être appeller en premier
		this.formation = "";
	}

	public Apprenti(String nomApp, int ageApp, char sexeApp, String formationApp) {
		super(nomApp, ageApp, sexeApp); // super() peut aussi s'utiliser avec les constructeurs surchargé
		this.formation = formationApp;
	}

	/*
	 *	ici la fonction afficher() n'est pas déclarée, mais elle est quand même utilisable car elle est hérité de Personne
	 */

}</code></pre>
	<p>Ici, la classe Apprenti hérite de Personne. Ce qui veut dire qu'elle peut être utilisé exactement comme la classe Personne mais avec l'attribut formation en plus.</p>
<?php include 'footer.php'; ?>