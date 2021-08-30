package testclasseabstraite;

public class Cercle extends Forme {

	// Déclaration de la constante PI
	public static final double PI = 3.141592;

	protected double rayon;

	public Cercle(double rayon){
		this.rayon = rayon;
	}

	@Override
	public double aire() {
		return PI * rayon * rayon;
	}

	@Override
	public double perimetre() {
		return 2 * PI * rayon;
	}

}