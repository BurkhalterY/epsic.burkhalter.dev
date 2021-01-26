<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Network extends MY_Controller {

	public $description = "Module 117 : réseau et IP";
	public $dir = 'network';

	public function index() {
		$this->display_view('network/index', ['title' => 'Menu']);
	}

	public function materiel() {
		$this->display_view('network/materiel', ['title' => 'Équipements réseaux']);
	}

	public function etendues_topologies() {
		$this->display_view('network/etendues_topologies', ['title' => 'Étendues et topologies des réseaux']);
	}

	public function modele_osi() {
		$this->display_view('network/modele_osi', ['title' => 'Modèle OSI']);
	}

	public function supports_transmission() {
		$this->display_view('network/supports_transmission', ['title' => 'Les supports de transmission']);
	}

	public function classes_ip() {
		$this->display_view('network/classes_ip', ['title' => 'Les classes d\'adresses IP']);
	}

	public function structure_ip() {
		$this->display_view('network/structure_ip', ['title' => 'Structure d\'une adresse IP']);
	}

	public function calcul_sous_reseaux() {
		$this->display_view('network/calcul_sous_reseaux', ['title' => 'Calculer les sous-réseaux']);
	}

	public function design_ethernet() {
		$this->display_view('network/design_ethernet', ['title' => 'Design Ethernet (Projet Mediatis)']);
	}

	public function calculateur_sr() {
		$this->display_view('network/calculateur_sr', ['title' => 'Calculateur de sous-réseaux']);
	}
}