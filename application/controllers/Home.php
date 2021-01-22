<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends MY_Controller {

	public function index() {
		$this->display_view('home/index', ['title' => 'Accueil - epsic.burkhalter.dev', 'no_container' => true]);
	}

	public function actualite() {
		$this->display_view('home/actualite', ['title' => 'Fil d\'actualité']);
	}

	public function todo() {
		$this->display_view('home/todo', ['title' => 'À faire']);
	}
}