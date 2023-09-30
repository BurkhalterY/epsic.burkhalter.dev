package testheritage;

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
}