<?php

if(!defined('DB_SERVER')){
	define("DB_SERVER","localhost");
}

if(!defined('DB_NAME')){
	define("DB_NAME","normalux_prog");
}

if(!defined('DB_LOGIN')){
	define("DB_LOGIN","root");
}

if(!defined('DB_PASS')){
	define("DB_PASS","");
}

if(!defined('DB_ENC')){
	define("DB_ENC","utf8mb4");
}

$bdd = mysqli_connect(DB_SERVER, DB_LOGIN, DB_PASS, DB_NAME);
mysqli_set_charset($bdd, DB_ENC);

?>