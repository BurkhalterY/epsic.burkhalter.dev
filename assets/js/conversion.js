var number, baseNumber, resultat, baseResultat;

function convertir(){
	number = document.getElementById("number").value.toString();
	baseNumber = parseInt(document.getElementById("baseNumber").value);
	baseResultat = parseInt(document.getElementById("baseResultat").value);
	resultat = "";

	if(baseNumber > 1 && baseResultat > 1){
		var somme = 0;
		var neg = false;

		for(var i = 0; i < number.length; i++){
			var chiffre = number.charAt(number.length-1-i);

			if(chiffre == '-'){
				neg = true;
			} else {
				chiffre = letterToNumber(chiffre);

				somme += parseInt(chiffre) * Math.pow(parseInt(baseNumber), i);
			}
		}

		var reste = 0;
		do {
			reste = somme % baseResultat;
			somme = Math.floor(somme / baseResultat);

			resultat = numberToLetter(reste) + "" + resultat;

		} while(somme != 0);

		if(neg){
			resultat = "-" + resultat;
		}
		document.getElementById("resultat").value = resultat;
	} else {
		alert("Base incorrect.");
	}
}

function letterToNumber(letter){
	switch(letter) {
		case '0':
			letter = 0;
			break;
		case '1':
			letter = 1;
			break;
		case '2':
			letter = 2;
			break;
		case '3':
			letter = 3;
			break;
		case '4':
			letter = 4;
			break;
		case '5':
			letter = 5;
			break;
		case '6':
			letter = 6;
			break;
		case '7':
			letter = 7;
			break;
		case '8':
			letter = 8;
			break;
		case '9':
			letter = 9;
			break;
		case 'a' : case 'A':
			letter = 10;
			break;
		case 'b' : case 'B':
			letter = 11;
			break;
		case 'c' : case 'C':
			letter = 12;
			break;
		case 'd' : case 'D':
			letter = 13;
			break;
		case 'e' : case 'E':
			letter = 14;
			break;
		case 'f' : case 'F':
			letter = 15;
			break;
		case 'g' : case 'G':
			letter = 16;
			break;
		case 'h' : case 'H':
			letter = 17;
			break;
		case 'i' : case 'I':
			letter = 18;
			break;
		case 'j' : case 'J':
			letter = 19;
			break;
		case 'k' : case 'K':
			letter = 20;
			break;
		case 'l' : case 'L':
			letter = 21;
			break;
		case 'm' : case 'M':
			letter = 22;
			break;
		case 'n' : case 'N':
			letter = 23;
			break;
		case 'o' : case 'O':
			letter = 24;
			break;
		case 'p' : case 'P':
			letter = 25;
			break;
		case 'q' : case 'Q':
			letter = 26;
			break;
		case 'r' : case 'R':
			letter = 27;
			break;
		case 's' : case 'S':
			letter = 28;
			break;
		case 't' : case 'T':
			letter = 29;
			break;
		case 'u' : case 'U':
			letter = 30;
			break;
		case 'v' : case 'V':
			letter = 31;
			break;
		case 'w' : case 'W':
			letter = 32;
			break;
		case 'x' : case 'X':
			letter = 33;
			break;
		case 'y' : case 'Y':
			letter = 34;
			break;
		case 'z' : case 'Z':
			letter = 35;
			break;
		default:
			letter = -1;
			alert("Pas de merde svp.");
	}
	return letter;
}

function numberToLetter(number){
	switch(number) {
		case 0:
			number = '0';
			break;
		case 1:
			number = '1';
			break;
		case 2:
			number = '2';
			break;
		case 3:
			number = '3';
			break;
		case 4:
			number = '4';
			break;
		case 5:
			number = '5';
			break;
		case 6:
			number = '6';
			break;
		case 7:
			number = '7';
			break;
		case 8:
			number = '8';
			break;
		case 9:
			number = '9';
			break;
		case 10:
			number = 'A';
			break;
		case 11:
			number = 'B';
			break;
		case 12:
			number = 'C';
			break;
		case 13:
			number = 'D';
			break;
		case 14:
			number = 'E';
			break;
		case 15:
			number = 'F';
			break;
		case 16:
			number = 'G';
			break;
		case 17:
			number = 'H';
			break;
		case 18:
			number = 'I';
			break;
		case 19:
			number = 'J';
			break;
		case 20:
			number = 'K';
			break;
		case 21:
			number = 'L';
			break;
		case 22:
			number = 'M';
			break;
		case 23:
			number = 'N';
			break;
		case 24:
			number = 'O';
			break;
		case 25:
			number = 'P';
			break;
		case 26:
			number = 'Q';
			break;
		case 27:
			number = 'R';
			break;
		case 28:
			number = 'S';
			break;
		case 29:
			number = 'T';
			break;
		case 30:
			number = 'U';
			break;
		case 31:
			number = 'V';
			break;
		case 32:
			number = 'W';
			break;
		case 33:
			number = 'X';
			break;
		case 34:
			number = 'Y';
			break;
		case 35:
			number = 'Z';
			break;
	}
	return number;
}