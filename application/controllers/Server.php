<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Server extends MY_Controller {

	public $description = "Module 123, configuration d'un serveur.";
	public $dir = 'server';

	public function index() {
		$this->display_view('server/index', ['title' => 'Menu']);
	}

	public function dns() {
		$this->display_view('server/dns', ['title' => 'Les DNS']);
	}

	public function ad() {
		$this->display_view('server/ad', ['title' => 'L\'Active Directory (AD)']);
	}

	public function mmc() {
		$this->display_view('server/mmc', ['title' => 'MMC']);
	}
}