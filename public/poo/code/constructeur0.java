package testpersonne;

public class Personne {

	private String nom;
	private char sexe;
	private int age;

	// Le constructeur par défaut
	public Personne() {
		this.nom = "";
		this.sexe = '';
		this.age = 0;
	}

	// Surcharge du constructeur par défaut
	public Personne(String nomPers, char sexePers, int agePers) {
		this.nom = nomPers;
		this.sexe = sexePers;
		this.age = agePers;
	}
}