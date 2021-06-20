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

	public function hypertexte() {
		$this->display_view('html/hypertexte', ['title' => 'Les liens hypertextes']);
	}

	public function image() {
		$this->display_view('html/image', ['title' => 'Les images (+ audio et vidéo)']);
	}

	public function liste() {
		$this->display_view('html/liste', ['title' => 'Les listes']);
	}

	public function table() {
		$this->display_view('html/table', ['title' => 'Les tableaux']);
	}

	public function form() {
		$this->display_view('html/form', ['title' => 'Les formulaires']);
	}

	public function iframe() {
		$this->display_view('html/iframe', ['title' => 'L\'intégration (iframe)']);
	}

	public function css_base() {
		$this->display_view('html/css_base', ['title' => 'Les bases du CSS']);
	}

	public function css_marges() {
		$this->display_view('html/css_marges', ['title' => 'Les marges']);
	}

	public function css_dom_heritage() {
		$this->display_view('html/css_dom_heritage', ['title' => 'Le DOM et l\'héritage']);
	}

	public function css_pseudo_classes() {
		$this->display_view('html/css_pseudo_classes', ['title' => 'Les pseudo-classes']);
	}

	public function css_float() {
		$this->display_view('html/css_float', ['title' => 'La propriété float']);
	}

	public function css_display() {
		$this->display_view('html/css_display', ['title' => 'La propriété display']);
	}
}