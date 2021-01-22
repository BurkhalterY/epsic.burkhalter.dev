<h1>Le polymorphisme</h1>
<p>Le polymorphisme est un terme chelou et barbare mais qui représente en fait quelque chose d'assez simple.</p>
<p>Nous avons déjà vu l'héritage. Il est bien évidement possible de créer des tableaux d'objets. Par Exemple des tableaux de Personnes. Mais si nous avons plusieurs classes enfants qui héritent de Personne, par exemple Apprenti, Enseignant et Formateur. Nous serions coincés.</p>
<p>C'est à cela que sert le polymorphisme. Il permet à un objet d'une classe parente à contenir un objet enfant. Et vous n'avez rien besoin de modifier à vos classes pour cela.</p>
<p>Pour l'exemple, reprenons le même projet que pour <a href="<?=base_url('poo/heritage')?>">l'héritage</a> : dans la classe principale :</p>
<pre><code class="language-java">package testheritage;

public class Monprogramme {

	public static void main(String[] args) {

		// Déclaration d'un tableau de 3 personnes
		Personne[] personnes = new Personne[3];

		personnes[0] = new Personne(); // ajout d'une personne vide
		personnes[1] = new Personne("Alice", 'F', 19); // ajout d'une personne
		personnes[2] = new Apprenti("Bob", 'H', 20, "Informaticien"); // ajout d'un apprenti

		// On affiche les 3 personnes
		personne[0].afficher();
		personne[1].afficher();
		personne[2].afficher();
	}
	
}</code></pre>
<p>Vous voyez que l'on peut mettre un objet de classe Apprenti dans un objet de type Personne. (Attention, l'inverse n'est pas possible)</p>	