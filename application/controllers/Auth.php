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

	public function informations() {
		if(!isset($_SESSION['logged_in'])){
			$data = ['logged_in' => false];
		} else {
			$data = [
				'logged_in' => $_SESSION['logged_in'],
				'username' => $_SESSION['username'],
				'user_access' => $_SESSION['user_access'],
			];
		}
		$this->json($data);
	}

	public function login() {
		if(isset($_POST['username'], $_POST['password'])){
			return $this->json([
				'message' => 'Veuillez compléter chaque champ.'
			], 400);
		}

		$this->db->select('id, username, password, level_access');
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
		$_SESSION['user_access'] = intval($query[0]->level_access);
		$_SESSION['username'] = $query[0]->username;
		$this->informations();
	}

	public function register() {
		if(!isset($_POST['username'], $_POST['password'], $_POST['passconf'])) {
			return $this->json([
				'message' => 'Veuillez compléter les champs nécessaires.'
			], 400);
		}

		if($_POST['password'] != $_POST['passconf']) {
			return $this->json([
				'message' => 'Les mots de passe ne correspondent pas.'
			], 400);
		}

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
			if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
				return $this->json([
					'message' => 'Cette adresse e-mail est invalide.'
				], 400);
			}

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
		$_SESSION['username'] = $data['username'];
		$this->informations();
	}

	public function logout() {
		session_destroy();
	}
}