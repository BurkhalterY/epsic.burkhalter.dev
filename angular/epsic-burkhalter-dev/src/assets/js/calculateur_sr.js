var nbIP = 0;
var nbSR = 0;
var n_IP = 0;
var n_SR = 0;
var n_R = 0;
var classe = "";
var NET_ID = 0;
var MASK = 0;
var SR = new Array();
var pas = 0;

function calculer(){

	// STEP 1

	nbIP = parseInt(document.getElementById("ip").value);
	nbSR = parseInt(document.getElementById("sr").value);

	var calcul = nbIP;
	nbIP++;
	calcul += " + 1 (passerelle) = " + nbIP;
	calcul += "<br>" + nbIP;
	nbIP += Math.ceil(nbIP/10);
	calcul += " + 10% = " + nbIP;

	document.getElementById("step1_ip").innerHTML = calcul;

	calcul = nbSR;
	nbSR += Math.ceil(nbSR/10);
	calcul += " + 10% = " + nbSR;

	document.getElementById("step1_sr").innerHTML = calcul;

	// STEP 2

	n_IP = ln(nbIP + 2) / ln(2);
	calcul = "n = ln(" + nbIP + " + 2) / ln(2) = ~" + n_IP;
	n_IP = Math.ceil(n_IP);
	calcul += " → " + n_IP;

	document.getElementById("step2_ip").innerHTML = calcul;

	n_SR = ln(nbSR + 2) / ln(2);
	calcul = "n = ln(" + nbSR + " + 2) / ln(2) = ~" + n_SR;
	n_SR = Math.ceil(n_SR);
	calcul += " → " + n_SR;

	document.getElementById("step2_sr").innerHTML = calcul;

	// STEP 3

	if(n_IP + n_SR <= 8){
		classe = "C";
		NET_ID = ipToNumber([192, 168, 1, 0]);
		n_R = 24;
		document.getElementById("step3_classe").innerHTML = n_IP + " + " + n_SR + " ≤ 8 → Classe C";
	} else if(n_IP + n_SR <= 16){
		classe = "B";
		NET_ID = ipToNumber([172, 16, 0, 0]);
		n_R = 16;
		document.getElementById("step3_classe").innerHTML = n_IP + " + " + n_SR + " ≤ 16 → Classe B";
	} else if(n_IP + n_SR <= 24){
		classe = "A";
		NET_ID = ipToNumber([10, 0, 0, 0]);
		n_R = 8;
		document.getElementById("step3_classe").innerHTML = n_IP + " + " + n_SR + " ≤ 24 → Classe A";
	} else {

	}
	document.getElementById("step3_net_id").innerHTML = "NET_ID : " + afficherIP(numberToIp(NET_ID));

	// STEP 3.5

	calcul = n_IP;
	calcul2 = n_SR;
	if(n_IP + n_SR <= 8){
		n_IP += 8 - n_IP - n_SR;
	} else if(n_IP + n_SR <= 16){
		if(n_IP <= 8 & n_SR <= 8){
			n_IP = 8;
			n_SR = 8;
		} else {
			n_IP += 16 - n_IP - n_SR;
		}
	} else if(n_IP + n_SR <= 24){
		if(n_IP <= 8 & n_SR <= 16){
			n_IP = 8;
			n_SR = 16;
		} else if(n_IP <= 16 & n_SR <= 8){
			n_IP = 16;
			n_SR = 18;
		} else {
			n_IP += 24 - n_IP - n_SR;
		}
	}
	if(n_IP != calcul || n_SR != calcul2){
		calcul += " → " + n_IP;
		calcul2 += " → " + n_SR;
		document.getElementById("step35").innerHTML = calcul + "<br>" + calcul2;
	} else {
		document.getElementById("step35").innerHTML = "";
	}

	nbIP = Math.pow(2, n_IP) - 2;
	nbSR = Math.pow(2, n_SR) - 2;

	// STEP 4

	MASK = n_R + n_SR;
	document.getElementById("step4").innerHTML = "MASK : " + afficherIP(afficherMask(MASK));

	// STEP 5

	document.getElementById("step5").innerHTML = "";
	pas = Math.pow(2, n_IP);
	SR = new Array(nbSR + 1);
	for(i = 0; i < SR.length; i++){
		if(i == 0){
			SR[i] = NET_ID + pas;
		} else {
			SR[i] = SR[i-1] + pas;
		}
		if(i < SR.length-1){
			if(i < 9 || i == SR.length-2){
				if(i > 0){
					document.getElementById("step5").innerHTML += "<br>";
					if(i > 9 && i == SR.length-2){
						document.getElementById("step5").innerHTML += "...<br>";
					}
				}
				document.getElementById("step5").innerHTML += afficherIP(numberToIp(SR[i]));
			}
		}
	}

	// STEP 6

	table = document.getElementById("step6");
	while(table.firstChild){
		table.removeChild(table.firstChild);
	}

	tr = document.createElement("tr");
	th = document.createElement("th");
	th.appendChild(document.createTextNode("Adresse du sous-réseau"));
	tr.appendChild(th);
	th = document.createElement("th");
	th.appendChild(document.createTextNode("Première adresse IP"));
	tr.appendChild(th);
	th = document.createElement("th");
	th.appendChild(document.createTextNode("Dernière adresse IP"));
	tr.appendChild(th);
	th = document.createElement("th");
	th.appendChild(document.createTextNode("Adresse de diffusion"));
	tr.appendChild(th);
	table.appendChild(tr);
	for(i = 0; i < SR.length-1; i++){
		tr = document.createElement("tr");
		td = document.createElement("td");
		td.appendChild(document.createTextNode(afficherIP(numberToIp(SR[i]))));
		tr.appendChild(td);
		td = document.createElement("td");
		td.appendChild(document.createTextNode(afficherIP(numberToIp(SR[i]+1))));
		tr.appendChild(td);
		td = document.createElement("td");
		td.appendChild(document.createTextNode(afficherIP(numberToIp(SR[i+1]-2))));
		tr.appendChild(td);
		td = document.createElement("td");
		td.appendChild(document.createTextNode(afficherIP(numberToIp(SR[i+1]-1))));
		tr.appendChild(td);
		table.appendChild(tr);
	}
}

function ln(a){
	return Math.log(a) / Math.log(Math.E);
}

function afficherIP(ip){
	result = "";
	for(k = 0; k < ip.length; k++){
		if(k > 0){
			result += ".";
		}
		result += ip[k];
	}
	return result;
}

function afficherMask(mask){
	result = [0, 0, 0, 0];
	for(k = 0; k < mask; k++){
		result[Math.ceil((k+1)/8)-1] += Math.pow(2, 7-(k % 8));
	}
	return result;
}

function ipToNumber(ip){
	number = 0;
	for(k = 0; k < ip.length; k++){
		number += ip[k] * Math.pow(256, 3-k);
	}
	return number;
}

function numberToIp(number){
	ip = new Array(4);
	reste = 0;
	for(k = 0; k < ip.length; k++){
		reste = number % 256;
		number = Math.floor(number / 256);
		ip[3-k] = reste;
	}
	return ip;
}