package testheritage;

public class Apprenti extends Personne {
	protected String formation;

	public Apprenti() {
		super(); // super() permet d'appeller le constructeur de la classe parente. Attention, il doit toujours être appellé en premier
		this.formation = "";
	}

	public Apprenti(String nomApp, int ageApp, char sexeApp, String formationApp) {
		super(nomApp, ageApp, sexeApp); // super() peut aussi s'utiliser avec les constructeurs surchargés
		this.formation = formationApp;
	}

	/*
	 *	Ici, la fonction afficher() n'est pas déclarée, mais elle est quand même utilisable car elle est héritée de Personne
	 */

}