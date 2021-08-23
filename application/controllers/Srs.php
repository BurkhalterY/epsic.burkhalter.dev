<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Srs extends MY_Controller {

	protected $access_level = '@';

	public function __construct() {
		parent::__construct();
		$this->load->database();
	}

	public function index() {
		
	}

	public function import_all() {
		if($_SESSION['user_access'] >= ACCESS_LVL_ADMIN && isset($_POST['export'])){
			$lines = explode("\n", $_POST['export']);
			foreach($lines as $line) {
				$words = explode("\t", $line);
				
				$data = [
					'french' => $words[0],
					'english' => $words[1],
					'german' => $words[2],
					'italian' => $words[3],
					'japanese' => $words[4],
					'page' => $words[5],
					'number' => $words[6],
				];

				$this->db->select('id');
				$this->db->from('words');
				$this->db->where('page', $data['page']);
				$this->db->where('number', $data['number']);
				$query = $this->db->get()->result();
				if(count($query) == 0){
					$this->db->insert('words', $data);
				} else {
					$this->db->where('id', $query[0]->id);
					$this->db->update('words', $data);
				}
			}
		}
	}
}