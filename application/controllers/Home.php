<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends MY_Controller {

	public $dir = 'home';

	public function index() {
		$this->display_view('home/index', ['title' => 'Accueil - epsic.burkhalter.dev', 'no_container' => true], false);
	}

	public function actualite() {
		$this->display_view('home/actualite', ['title' => 'Fil d\'actualité'], false);
	}

	/*public function programme_scolaire() {
		$this->display_view('home/programme_scolaire', ['title' => 'Programme scolaire']);
	}

	public function calcul_moyennes() {
		$this->display_view('home/calcul_moyennes', ['title' => 'Comment calculer votre moyenne']);
	}*/

	public function todo() {
		$this->display_view('home/todo', ['title' => 'À faire']);
	}

	public function et_oui() {
		$this->display_view('home/et_oui', ['title' => 'Et oui...']);
	}
}