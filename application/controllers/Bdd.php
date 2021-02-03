<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Bdd extends MY_Controller {

	public $description = "Module 104 : créer une &quot;vrai&quot; base de données";
	public $dir = 'bdd';

	public function index() {
		$this->display_view('bdd/index', ['title' => 'Menu']);
	}

	public function fk_theorie() {
		$this->display_view('bdd/fk_theorie', ['title' => 'Mieux comprendre les FK']);
	}

	public function install_mysql() {
		$this->display_view('bdd/install_mysql', ['title' => 'Installer un serveur MySQL']);
	}

	public function phpmyadmin() {
		$this->display_view('bdd/phpmyadmin', ['title' => 'Prise en main de phpMyAdmin']);
	}

	public function fk() {
		$this->display_view('bdd/fk', ['title' => 'Lier un champ FK_']);
	}

	public function sql_select() {
		$this->display_view('bdd/sql_select', ['title' => 'Récuperer des données avec des requêtes SQL']);
	}

	public function sql_inner_join() {
		$this->display_view('bdd/sql_inner_join', ['title' => 'Requêtes sur plusieurs tables']);
	}

	public function generator() {
		$this->display_view('bdd/generator', ['title' => 'Générateur de site Python tout fait']);
	}
}