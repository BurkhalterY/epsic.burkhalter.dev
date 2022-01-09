package testclasseabstraite;

public class TestClasseAbstraite {

	public static void main(String[] args) {
		
		Forme[] collection = new Forme[3];
		collection[0] = new Cercle(20);
		collection[1] = new Rectangle(20, 10);
		collection[2] = new Rectangle(100, 40);
		
		// Affichage de l'aire et du périmètre pour chaque forme
		for(int i = 0; i < collection.length; i++){
			System.out.println("aire : "+collection[i].aire());
			System.out.println("perimetre : "+collection[i].perimetre());
			System.out.println();
		}

	}
}