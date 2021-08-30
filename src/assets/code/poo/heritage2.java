package testheritage;

public class Apprenti extends Personne {
	protected String formation;

	public Apprenti() {
		super(); // super() permet d'appeller le constructeur de la classe parent, attention : il doit toujours être appeller en premier
		this.formation = "";
	}

	public Apprenti(String nomApp, int ageApp, char sexeApp, String formationApp) {
		super(nomApp, ageApp, sexeApp); // super() peut aussi s'utiliser avec les constructeurs surchargés
		this.formation = formationApp;
	}

	/*
	 *	ici la fonction afficher() n'est pas déclarée, mais elle est quand même utilisable car elle est hérité de Personne
	 */

}