<?php

function recurse_copy($src,$dst) {
	$dir = opendir($src);
	@mkdir($dst);
	while(false !== ( $file = readdir($dir)) ) {
		if (( $file != '.' ) && ( $file != '..' )) {
			if ( is_dir($src . '/' . $file) ) {
				recurse_copy($src . '/' . $file,$dst . '/' . $file);
			}
			else {
				copy($src . '/' . $file,$dst . '/' . $file);
			}
		}
	}
	closedir($dir);
}

if (!file_exists('generator/output/'.$time.'/Templates/divers')) {
	mkdir('generator/output/'.$time.'/Templates/divers');
}
if (!file_exists('generator/output/'.$time.'/Templates/EtTelMaison')) {
	mkdir('generator/output/'.$time.'/Templates/EtTelMaison');
}
copy('generator/MOD_104_TUTO_OM_PYTHON_FLASK_DB_4/ConnectDB.py', 'generator/output/'.$time.'/ConnectDB.py');
copy('generator/MOD_104_TUTO_OM_PYTHON_FLASK_DB_4/GestionHome.py', 'generator/output/'.$time.'/GestionHome.py');
copy('generator/MOD_104_TUTO_OM_PYTHON_FLASK_DB_4/GestionDivers.py', 'generator/output/'.$time.'/GestionDivers.py');
copy('generator/MOD_104_TUTO_OM_PYTHON_FLASK_DB_4/Templates/divers/About.html', 'generator/output/'.$time.'/Templates/divers/About.html');
copy('generator/MOD_104_TUTO_OM_PYTHON_FLASK_DB_4/Templates/EtTelMaison/Home.html', 'generator/output/'.$time.'/Templates/EtTelMaison/Home.html');

recurse_copy('generator/MOD_104_TUTO_OM_PYTHON_FLASK_DB_4/static/', 'generator/output/'.$time.'/static/');
?>