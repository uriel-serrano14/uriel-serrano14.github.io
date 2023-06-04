const expresiones = {
	nomb: /^[a-zA-ZÀ-ÿ\s]{1,30}$/, // Letras y espacios, pueden llevar acentos.
    apell: /^[a-zA-ZÀ-ÿ\s]{1,30}$/,
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let email = document.getElementById("email");
let envio = document.getElementById("envio");

let errorNombre = document.getElementById("errorNo");
let errorApellido = document.getElementById("errorAp");
let errorCorreo = document.getElementById("errorCo");

function enviarFormulario(){
	errorNombre.classList.remove("error-activo");
	errorApellido.classList.remove("error-activo");
	errorCorreo.classList.remove("error-activo");
	nombre.classList.remove("formInput-error");
	apellido.classList.remove("formInput-error");
	email.classList.remove("formInput-error");
	nombre.classList.remove("formInput-correcto");
	apellido.classList.remove("formInput-correcto");
	email.classList.remove("formInput-correcto");
	envio.classList.remove("envio-correcto");

	envio.innerHTML = "";

	if(!(expresiones.nomb.test(nombre.value))){
		nombre.classList.add("formInput-error");
		errorNombre.classList.add("error-activo");
	}else{
		nombre.classList.add("formInput-correcto");
	}

	if(!(expresiones.apell.test(apellido.value))){
		apellido.classList.add("formInput-error");
		errorApellido.classList.add("error-activo");
		
	}else{
		apellido.classList.add("formInput-correcto");
	}

	if(!(expresiones.correo.test(email.value))){
		email.classList.add("formInput-error");
		errorCorreo.classList.add("error-activo");
	}else{
		email.classList.add("formInput-correcto");
	}

	if(expresiones.correo.test(email.value) && expresiones.apell.test(apellido.value) && expresiones.nomb.test(nombre.value)){
		envio.classList.add("envio-correcto");
		envio.innerHTML = "<b>su nombre es: </b>" + nombre.value + " " + apellido.value + ". <b>Su contacto: </b>" + email.value;
		return false;
	}

	return false;
}
