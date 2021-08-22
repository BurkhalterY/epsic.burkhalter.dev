<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Auth extends MY_Controller {

	public function __construct() {
		parent::__construct();
		$this->load->database();
	}

	private function json($data, $code = 200) {
		http_response_code($code);
		header('Content-Type: application/json');
		echo json_encode($data);
	}

	public function login() {
		if(isset($_POST['username'], $_POST['password'])){
			$this->db->select('id, password, level_access');
			$this->db->from('users');
			$this->db->where('username', $_POST['username']);
			$query = $this->db->get()->result();
			if(count($query) == 0 || !password_verify($_POST['password'], $query[0]->password)){
				return $this->json([
					'message' => 'Authentification impossible, vérifiez vos identifiants.'
				], 400);
			}
			$_SESSION['logged_in'] = true;
			$_SESSION['user_id'] = $query[0]->id;
			$_SESSION['user_access'] = $query[0]->level_access;
		}
	}

	public function register() {
		if(isset($_POST['username'], $_POST['password'])){

			$password = $_POST['password'];
			
			$uppercase = preg_match('@[A-Z]@', $password);
			$lowercase = preg_match('@[a-z]@', $password);
			$number    = preg_match('@[0-9]@', $password);

			if(!$uppercase || !$lowercase || !$number || strlen($password) < 8){
				return $this->json([
					'message' => 'Mot de passe trop faible ! Votre mot de passe doit mesurer 8 caractères ou plus et contenir au minimum une majuscule, une minuscule, un chiffre.'
				], 400);
			}

			$username = trim($_POST['username']);
			$email = isset($_POST['email']) ? trim($_POST['email']) : null;
			$password = password_hash($password, PASSWORD_DEFAULT);

			$this->db->where('username', $username);
			$this->db->from('users');
			if($this->db->count_all_results() != 0) {
				return $this->json([
					'message' => 'Ce nom d\'utilisateur est déjà pris.'
				], 400);
			}

			if(!is_null($email)) {
				$this->db->where('email', $email);
				$this->db->from('users');
				if($this->db->count_all_results() != 0) {
					return $this->json([
						'message' => 'Cette adresse e-mail est déjà utilisée.'
					], 400);
				}
			}

			$data = [
				'username' => $username,
				'email' => $email,
				'password' => $password,
				'level_access' => ACCESS_LVL_USER
			];
			$this->db->insert('users', $data);

			$_SESSION['logged_in'] = true;
			$_SESSION['user_id'] = $this->db->insert_id();;
			$_SESSION['user_access'] = $data['level_access'];
		}
	}
}