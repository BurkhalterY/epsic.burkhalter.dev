package testfenetre;

import javax.swing.JFrame;

public class Fenetre extends JFrame {
	public Fenetre() {
		// Appel du constructeur parent
		super();

		// Titre de la fenêtre
		this.setTitle("Une première fenêtre JAVA");

		// Taille de la fenêtre (x, y)
		this.setSize(600, 600);

		// Positionne la fenêtre au centre de l'écran
		this.setLocationRelativeTo(null);

		// Termine le programme lorsqu'on clique sur la croix
		this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

		// Affiche la fenêtre (doit toujours être la dernière action du constructeur)
		this.setVisible(true);
	}
}