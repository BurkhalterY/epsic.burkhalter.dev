<?php defined('BASEPATH') OR exit('No direct script access allowed'); ?>
<h1>Créer un nouveau projet</h1>
<ol>
	<li>Ouvrez NetBeans.</li>
	<li>Cliquez sur Nouveau projet en haut à gauche.</li>
	<img src="<?=base_url('medias/java/new1.png')?>" alt="étape 1" />
	<li>Sélectionnez Java, puis Java Application.</li>
	<img src="<?=base_url('medias/java/new2.png')?>" alt="étape 2" />
	<li>Nommez votre programme et choisissez son emplacement.</li>
	<img src="<?=base_url('medias/java/new3.png')?>" alt="étape 3" />
	<li>Votre programme devrait ressembler à ça :</li>
	<pre><code class="language-java">/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package monprogramme;

/**
 *
 * @author BurkhalterY
 */
public class Monprogramme {

	/**
	 * @param args the command line arguments
	 */
	public static void main(String[] args) {
		// TODO code application logic here
	}
	
}</code></pre>
	<li>Vous pouvez alors supprimer tous les commentaires inutiles.</li>
	<pre><code class="language-java">package monprogramme;

public class Monprogramme {

	public static void main(String[] args) {
		// Vous écrirez tout votre code ici.
	}
	
}</code></pre>
</ol>