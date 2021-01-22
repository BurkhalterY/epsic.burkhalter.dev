<h1>Première fenêtre</h1>
<p>Pour créer une fenêtre en Java, il faut créer une nouvelle classe héritée de la classe JFrame. JFrame est une classe permettant d'afficher une fenêtre et d'y configurer pas mal d'options.</p>
<p>Notre classe Fenetre :</p>
<pre><code class="language-java">package testfenetre;

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
}</code></pre>
<p>Et la classe principale dans laquelle nous instancions cette Fenetre :</p>
<pre><code class="language-java">package testfenetre;

public class TestFenetre {
	
	public static void main(String[] args) {
		Fenetre fen = new Fenetre();
	}
	
}</code></pre>
<p>Lancez le programme, une fenêtre vide devrait apparaitre au milieu de l'écran :</p>
<img src="<?=base_url('medias/poo/fenetre.png')?>" alt="Fenêtre de 600x800" />