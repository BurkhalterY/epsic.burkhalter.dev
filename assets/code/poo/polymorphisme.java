package testheritage;

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
	
}