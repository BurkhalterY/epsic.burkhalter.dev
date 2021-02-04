<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Bin extends MY_Controller {

	public $description = "Module 114 : binaire et autres notions bas niveau";
	public $dir = 'bin';

	public function index() {
		$this->display_view('bin/index', ['title' => 'Menu']);
	}

	public function gen() {
		$arr = [
			"Maccaud est un connard mais c'est pour ça qu'on l'aime !",
			"Yannis est un gros bg. Il a créé ce site : epsic.burkhalter.dev",
		];

		$setence = str_pad($arr[array_rand($arr)], 76, " ");
		$text = "";
		for($i = 0; $i < strlen($setence); $i++){
			if($i % 4 == 0 && $i != 0){
				$text .= "\n";
			}
			$text .= str_pad(decbin(ord($setence[$i])), 8, "0", STR_PAD_LEFT)." ";
		}

		$im = new Imagick();
		$pixel = new ImagickPixel('black');
		$draw = new ImagickDraw();

		$im->newImage(500, 500, $pixel);
		$draw->setFillColor('green');
		$draw->setFont('consola.ttf');
		$draw->setFontSize(24);
		$im->annotateImage($draw, 20, 40, 0, $text);
		$im->setImageFormat('png');

		$controlPoints = array( 0, 0,
								10, 10,

								500, 0,
								480, 30,

								0, 500,
								75, 490,

								500, 500,
								480, 390,
		);
		$im->distortImage(Imagick::DISTORTION_PERSPECTIVE, $controlPoints, false);

		$i2 = new Imagick();
		$i2->setOption('gradient:vector', '-50,10,50,0');
		$i2->newPseudoImage(500, 500, 'gradient:grey');
		$im->compositeImage($i2, Imagick::COMPOSITE_BLEND, 0, 0);

		header("Content-Type: image/png");
		echo $im;
	}

	public function n_to_10() {
		$this->display_view('bin/n_to_10', ['title' => 'Conversion base n en base 10']);
	}

	//route: bin/10_to_n
	public function b10_to_n() {
		$this->display_view('bin/10_to_n', ['title' => 'Conversion base 10 en base n']);
	}

	public function voc() {
		$this->display_view('bin/voc', ['title' => 'Vocabulaire']);
	}

	public function bin_hex() {
		$this->display_view('bin/bin_hex', ['title' => 'Conversion binaire - hexa']);
	}

	public function gray() {
		$this->display_view('bin/gray', ['title' => 'Code Gray']);
	}

	public function bcd() {
		$this->display_view('bin/bcd', ['title' => 'BCD']);
	}

	public function x_parmi_n() {
		$this->display_view('bin/x_parmi_n', ['title' => 'Code x parmi n']);
	}

	public function ascii() {
		$this->display_view('bin/ascii', ['title' => 'Code ASCII']);
	}

	public function unicode_utf8() {
		$this->display_view('bin/unicode_utf8', ['title' => 'L\'Unicode et UTF-8']);
	}

	public function ean() {
		$this->display_view('bin/ean', ['title' => 'Les codes-barres EAN']);
	}

	public function qr_code() {
		$this->display_view('bin/qr_code', ['title' => 'Les QR codes']);
	}

	public function convertisseur() {
		$this->display_view('bin/convertisseur', ['title' => 'Convertisseur']);
	}

	public function addition() {
		$this->display_view('bin/addition', ['title' => 'Additions en binaire']);
	}

	public function negativ() {
		$this->display_view('bin/negativ', ['title' => 'Soustractions et nombres négatifs']);
	}

	public function float() {
		$this->display_view('bin/float', ['title' => 'Nombres à virgules flottantes']);
	}

	public function fonctions_logiques() {
		$this->display_view('bin/fonctions_logiques', ['title' => 'Les fonctions logiques']);
	}

	public function partie3() {
		$this->display_view('bin/partie3', ['title' => 'Partie 3']);
	}
}