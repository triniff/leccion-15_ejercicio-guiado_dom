function translate(){
	var title = document.getElementById("form-signin-heading");
	var email = document.getElementById("inputEmail");
	var password = document.getElementById("inputPassword");
	var remember = document.getElementsByTagName("span")[0];
	var button = document.getElementsByClassName("btn")[0];
	
	title.innerHTML = "Por favor inicia sesión";
	email.placeholder = "Correo Electrónico";
	password.placeholder = "Contraseña";
	remember.innerHTML = "Recordar datos";
	button.innerHTML = "Iniciar Sesión";
}
translate();

function res(){
	var email = document.getElementById("inputEmail").value;
	var password = document.getElementById("inputPassword").value;
	user.innerHTML = "<h3>Datos de Formulario</h3>" + "El correo electrónico ingresado es:" + "<br>" + email + "<br>" + "La clave ingresada es:" + "<br>" + password;
}
