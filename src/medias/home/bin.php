<?php

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