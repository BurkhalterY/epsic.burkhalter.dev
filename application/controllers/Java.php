<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Java extends MY_Controller {

	public $description = "Module 403, programmation en Java.";
	public $dir = 'java';

	public function index() {
		$this->display_view('java/index', ['title' => 'Menu']);
	}

	public function new() {
		$this->display_view('java/new', ['title' => 'Créer un nouveau projet']);
	}

	public function commentaires() {
		$this->display_view('java/commentaires', ['title' => 'Les commentaires']);
	}

	public function variables() {
		$this->display_view('java/variables', ['title' => 'Les variables']);
	}

	public function operateurs() {
		$this->display_view('java/operateurs', ['title' => 'Les opérateurs']);
	}

	public function afficher() {
		$this->display_view('java/afficher', ['title' => 'Afficher du texte dans la console']);
	}

	public function clavier() {
		$this->display_view('java/clavier', ['title' => 'Lire les entrées clavier']);
	}

	public function conditions() {
		$this->display_view('java/conditions', ['title' => 'Les conditions']);
	}

	public function conditions_avancees() {
		$this->display_view('java/conditions_avancees', ['title' => 'Les conditions avancées']);
	}

	public function boucles() {
		$this->display_view('java/boucles', ['title' => 'Les boucles']);
	}

	public function conversion_boucle() {
		$this->display_view('java/conversion_boucle', ['title' => 'Conversion d\'un for en while et inversement']);
	}

	public function methodes() {
		$this->display_view('java/methodes', ['title' => 'Les méthodes']);
	}

	public function tableaux() {
		$this->display_view('java/tableaux', ['title' => 'Les tableaux']);
	}

	public function tri_a_bulle() {
		$this->display_view('java/tri_a_bulle', ['title' => 'Tri à bulle']);
	}

	public function structogramme() {
		$this->display_view('java/structogramme', ['title' => 'Symboles Nassi-Shneidermann']);
	}
}