<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Switch1 extends MY_Controller {

	public $description = "Hack switch";
	public $dir = 'switch';

	public function index() {
		$this->display_view('switch/index', ['title' => 'Menu']);
	}

	public function introduction() {
		$this->display_view('switch/introduction', ['title' => 'Introduction']);
	}
}