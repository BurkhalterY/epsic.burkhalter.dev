function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	var expires = "expires="+d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

function changeStylesheet(darkmode) {
	setCookie('darkmode', darkmode, 360);
	if(darkmode == 1) {
		document.getElementById("stylesheet1").setAttribute("href", 'themes/darkly.min.css');
		document.getElementById("stylesheet2").setAttribute("href", 'themes/dark.css');
	} else {
		document.getElementById("stylesheet1").setAttribute("href", 'themes/bootstrap.min.css');
		document.getElementById("stylesheet2").setAttribute("href", 'themes/style.css');
	}
}

if(getCookie('darkmode') == 1) {
	changeStylesheet(1);
} else {
	changeStylesheet(0);
}