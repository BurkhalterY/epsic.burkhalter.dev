<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Poo extends MY_Controller {

	public $description = "Module introuvable";
	public $dir = 'poo';

	public function index() {
		$this->display_view('poo/index', ['title' => 'Menu']);
	}

	public function objet() {
		$this->display_view('poo/objet', ['title' => 'Qu\'est-ce qu\'un objet']);
	}

	public function constructeur() {
		$this->display_view('poo/constructeur', ['title' => 'Les constructeurs']);
	}

	public function encapsulation() {
		$this->display_view('poo/encapsulation', ['title' => 'L\'encapsulation']);
	}

	public function heritage() {
		$this->display_view('poo/heritage', ['title' => 'L\'héritage']);
	}

	public function polymorphisme() {
		$this->display_view('poo/polymorphisme', ['title' => 'Le polymorphisme']);
	}

	public function classes_abstraites() {
		$this->display_view('poo/classes_abstraites', ['title' => 'Les classes abstraites']);
	}

	public function interfaces() {
		$this->display_view('poo/interfaces', ['title' => 'Les interfaces']);
	}

	public function fenetre() {
		$this->display_view('poo/fenetre', ['title' => 'Première fenêtre']);
	}
}