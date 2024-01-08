<?php
	$title = 'Qu\'est-ce qu\'un objet';
	include 'header.php';
?>
	<h1>Qu'est-ce qu'un objet</h1>
	<p>Un objet informatique représente un concept. Par exemple une fenêtre ou un bouton. Comme dans la vraie vie, un objet a des caractéristiques et des fonctionnalités. Une caractèristique, c'est par exemple, pour une voiture, le nombre de roues ou la vitesse max. Et une fonctionnalité, pour notre voiture, ça pourrait être rouler.</p>
	<p>En informatique c'est la même chose. Les caractéristiques (nommées attributs) d'une fenêtre seraient sa taille et sa position. Et ses fonctionnalités (nommées méthodes) seraient par exemple de l'agrandir avec la souris, etc.</p>

	<h3>Les classes</h3>
	<p>Une classe est comparable à un moule. On crée une classe qui permettra de créer (instancier) des objets. La classe contient tous les attributs et toutes les méthodes, mais sans valeur. Une fois l'objet instancié à partir de la classe, on pourra attribuer des valeurs à ses attributs.</p>

	<h3>Créer une classe</h3>
	<p>Commencer par <a href="../java/new.php">créer un nouveau projet</a>.</p>
	<p>Faites un clic droit sur le package, puis New et Java Class :</p>
	<img src="medias/new_class_1.png" alt="Nouvelle classe" />
	<p>Donnez un nom à votre classe, par exemple Personne. Les noms des classes commencent toujours par une majuscule.</p>
	<img src="medias/new_class_2.png" alt="Nouvelle classe" />
	<p>Supprimez les commentaires par défaut.</p>
	<pre><code class="language-java">package testpersonne;

public class Personne {
	
}</code></pre>

	<h3>Lui ajouter des attributs</h3>
	<p>Il suffit pour cela de mettre de noter les attributs comme des variables mais sans les initialiser.</p>
	<pre><code class="language-java">package testpersonne;

public class Personne {
	
	private String nom;
	private char sexe;
	private int age;
}</code></pre>

<h3>Lui ajouter des méthodes</h3>
	<p>Comme pour les attributs, écrivez simplement les méthodes dans la classe.</p>
	<pre><code class="language-java">package testpersonne;

public class Personne {
	
	private String nom;
	private char sexe;
	private int age;
	
	public void afficher(){
		System.out.println(nom);
		System.out.println(sexe);
		System.out.println(age);
	}
}</code></pre>
<p>Ici une méthode qui affichera toutes les données sur la personne.</p>

<?php include 'footer.php'; ?>