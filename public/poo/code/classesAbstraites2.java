package testclasseabstraite;

public class Rectangle extends Forme {

	protected double longueur, largeur;

	public Rectangle(double longueurRect, double largeurRect) {
		this.longueur = longueurRect;
		this.largeur = largeurRect;
	}

	@Override
	public double aire() {
		return longueur * largeur;
	}

	@Override
	public double perimetre() {
		return 2 * (largeur + longueur);
	}

}