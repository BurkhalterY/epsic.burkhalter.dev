<h1>L'encapsulation</h1>
<p>Dans de gros projets informatiques, on aime pouvoir diviser les taches entre plusieurs développeurs. Et chaque développeur ne peut pas forcément connaître tout le projet.</p>
<p>Les fonctions mises en place par certains développeurs devront néanmoins interagir avec celles d'autres développeurs.</p>
<p>La solution est de définir des inputs et des outputs pour chaque objet sans se préoccuper de leurs fonctionnements, juste de leurs utilisations.</p>
<br>
<br>
<p>Pour mettre ça en place, il ne faut pas que n'importe quel objet puisse modifier les attributs ou appeler certaines méthodes d'un autre objet. Cela pourrait le faire bugger.</p>
<p>On a donc mis en place un système de "droit" entre les objets :</p>
<ul>
	<li><strong>public</strong> : l'élément est visible depuis toutes les classes</li>
	<li><strong>protected</strong> : l'élément n'est visible que dans le package et les classe don elle <a href="<?=base_url('poo/heritage')?>">hérite</a></li>
	<li><strong>private</strong> : l'élément est visible uniquement dans la classe en cours</li>
</ul>

<h3>Définir la portée d'un élément</h3>
<p>Pour définir la portée d'un attribut ou d'une méthode, on l'ajoute simplement devant :</p>
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
<p>Ici les 3 attributs sont en private et la fonction est en public.</p>
<p>Attention, on met toujours les attributs en protected ou private.</p>

<h3>Accéder aux attributs</h3>
<p>Mais si on met les attributs en protected ou private, certaine classe ne pourront pas les utiliser.</p>
<p>Pour remédier à ce problème, on crée des getters et des setters. Ce sont des fonctions public.</p>
<p>Le rôle des getters et de renvoyer un attribut. Et celui des setters de remplacer un attribut avec un paramètre.</p>
<br>
<p>Voici la classe Personne avec un getter et un setter pour nom.</p>
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

	public String getNom(){
		return this.nom;
	}

	public void setNom(String nouveauNom){
		this.nom = nouveauNom;
	}
}</code></pre>
<p>Je ne l'ai volontairement pas fait pour tous les attributs pour ne pas surcharger l'exemple.</p>