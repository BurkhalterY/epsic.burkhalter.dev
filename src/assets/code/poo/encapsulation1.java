package testpersonne;

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
}