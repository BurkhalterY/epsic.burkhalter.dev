package monprogramme;

public class Monprogramme {

	public static void main(String[] args) {
		int a = 4;
		int b = 5;

		int resultat = 0;

		resultat = additionner(a, b);

		System.out.println(resultat); // affiche 9
	}

	public static int additionner(int a, int b) {
		return a + b;
	}
}