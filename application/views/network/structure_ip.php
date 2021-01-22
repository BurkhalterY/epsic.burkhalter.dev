<?php defined('BASEPATH') OR exit('No direct script access allowed'); ?>
<h1>Structure d'une adresse IP</h1>

<p style="text-align: center;"><span style="background-color: lightgray;"><strong><span style="color: red;">[ NET_ID ]</span> <span style="color: blue;">[ HOST_ID ]</span></strong></span></p>
<p style="text-align: center;">Classe A: <span style="background-color: lightgray;"><strong><span style="color: red;">x</span>.<span style="color: blue;">x.x.x</span></strong></span></p>
<p style="text-align: center;">Classe B: <span style="background-color: lightgray;"><strong><span style="color: red;">x.x</span>.<span style="color: blue;">x.x</span></strong></span></p>
<p style="text-align: center;">Classe C: <span style="background-color: lightgray;"><strong><span style="color: red;">x.x.x</span>.<span style="color: blue;">x</span></strong></span></p>
<!--<img src="<?=base_url('medias/network/netid_hostid.png')?>" style="max-width: 100%; border: 1px solid black; padding: 10px;" />-->
<hr>
<p style="text-align: center;"><span style="background-color: lightgray;"><strong><span style="color: red;">[ NET_ID ]</span> <span style="color: green;">[ SUBNET_ID ]</span> <span style="color: blue;">[ HOST_ID ]</span></strong></span></p>
<p>S'il y a un sous-réseau, le SUBNET_ID ce calcul comme ceci : IP & MASQUE.</p>
<h4>L'opération &</h4>
<p>Revoie 1 si les deux paramètres valent 1.</p>
<p>0 & 0 = 0<br>0 & 1 = 0<br>1 & 0 = 0<br>1 & 1 = 1</p>
<h4>Exemple :</h4>
<p>IP = 172.22.66.18<br>MASQUE = 255.255.252.0</p>
<p><pre>  10101100.00011110.01000010.00010010<br>& 11111111.11111111.11111100.00000000<br>= 10101100.00011110.01000000.00000000</pre></p>
<p>NET_ID = 172.22.0.0<br>SUBNET_ID = 172.22.64.0</p>