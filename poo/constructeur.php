<?php
	$title = 'Les constructeurs';
	include 'header.php';
?>
	<h1>Les constructeurs</h1>
	<p>Les constructeurs servent à initialiser l'objet lors de l'instanciation. Ce sont simplement des méthodes qui ont le même nom que la classe. Attention, ces méthodes n'ont pas de type de retour, même pas void. Exemple :</p>
	<pre><code class="language-java">package testpersonne;

public class Personne {

	private String nom;
	private char sexe;
	private int age;

	// Le constructeur par défaut
	public Personne(){
		this.nom = "";
		this.sexe = '';
		this.age = 0;
	}

	// Surcharge du constructeur par défaut
	public Personne(String nomPers, char sexePers, int agePers){
		this.nom = nomPers;
		this.sexe = sexePers;
		this.age = agePers;
	}
}</code></pre>
	<p>Rappelez-vous qu'il est possible d'avoir plusieurs méthodes avec le même nom si les arguments sont différents. Java choisira tous seul en fonction des arguments passé. Ceci s'appelle la surcharge d'une méthode.</p>
	<p>Je peux maintenant instancier mon objet :</p>
	<pre><code class="language-java">package testpersonne;

public class TestPersonne {

	public static void main(String[] args) {
		
		Personne pers1 = new Personne(); //Utilisation du constructeur par défaut
		Personne pers2 = new Personne("Bob", 'H', 21); //Utilisation du constructeur surchargé

	}
	
}</code></pre>
<?php include 'footer.php'; ?>