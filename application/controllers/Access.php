<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Access extends MY_Controller {

	public $description = "Module 100 : concevoir une base de données avec Access";
	public $dir = 'access';

	public function index() {
		$this->display_view('access/index', ['title' => 'Menu']);
	}

	public function tables() {
		$this->display_view('access/tables', ['title' => 'Les tables']);
	}
	
	public function relations() {
		$this->display_view('access/relations', ['title' => 'Les relations']);
	}
	
	public function valide_si() {
		$this->display_view('access/valide_si', ['title' => 'Valide si']);
	}
	
	public function donnees() {
		$this->display_view('access/donnees', ['title' => 'Ajouter des données']);
	}
	
	public function listes_deroulantes() {
		$this->display_view('access/listes_deroulantes', ['title' => 'Listes déroulantes pour les FK']);
	}
	
	public function formulaires() {
		$this->display_view('access/formulaires', ['title' => 'Créer un formulaire']);
	}
	
	public function boutons() {
		$this->display_view('access/boutons', ['title' => 'Ajouter des boutons aux formulaires']);
	}
	
	public function vba() {
		$this->display_view('access/vba', ['title' => 'Les bases du VBA']);
	}
	
	public function requetes() {
		$this->display_view('access/requetes', ['title' => 'Afficher une liste avec une requête']);
	}
	
	public function control_zone_liste() {
		$this->display_view('access/control_zone_liste', ['title' => 'Importer, ajouter, modifier et supprimer des éléments d\'une zone de liste (niveau avancé)']);
	}
	
	public function etiquettes() {
		$this->display_view('access/etiquettes', ['title' => 'Imprimer des étiquettes']);
	}
	
	public function access1() {
		$this->display_view('access/access1', ['title' => 'Ma base de données en Access 1.0']);
	}
}