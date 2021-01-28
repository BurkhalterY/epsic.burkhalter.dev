<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Html extends MY_Controller {

	public $description = "CIE 101 : HTML, CSS et JavaScript";
	public $dir = 'html';

	public function index() {
		$this->display_view('html/index', ['title' => 'Menu']);
	}

	public function site_web() {
		$this->display_view('html/site_web', ['title' => 'Qu\'est-ce qu\'un site web ?']);
	}

	public function html_base() {
		$this->display_view('html/html_base', ['title' => 'Les bases du HTML']);
	}

	public function types_balises() {
		$this->display_view('html/types_balises', ['title' => 'Les types de balises']);
	}

	public function structure_101() {
		$this->display_view('html/structure_101', ['title' => 'Structure attendue pour le module 101']);
	}

	public function a() {
		$this->display_view('html/a', ['title' => 'Les liens hypertextes']);
	}
}