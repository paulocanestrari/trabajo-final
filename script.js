
function formulario1(){
  let ins= document.getElementById("formulario")
  ins.style.display = "block";

}
let nombres = document.getElementById('nombre');
let edads = document.getElementById('edad');
let emails = document.getElementById('email');
let telefonos = document.getElementById('telefono');
let nivels = document.getElementById("nivel");


function validarFormulario() {
  let nombre = nombres.value;
  let edad = edads.value;
  let email = emails.value;
  let nivel =nivels.value;
  let telefono = telefonos.value;
  let mensaje= document.getElementById("mensaje");
  let mensajeex= document.getElementById("envioexitoso");

  nombres.classList.remove("error");
  edads.classList.remove("error");
  emails.classList.remove("error");
  telefonos.classList.remove("error");
  
   let mensajeError = [];
   
   mensaje.innerHTML = "";
   mensajeex.innerHTML = "";
   

  let nombreRegu = /^[a-zA-Z]+\s+[a-zA-Z]/;
  if (nombre === ''||nombre.lenght > 30 ||!nombreRegu.test(nombre) ) {
      mensajeError.push('Por favor, ingrese carrectamente el nombre completo.');
      nombres.classList.add("error");
  }

  if (edad === '' || isNaN(edad) || edad < 18 || edad > 65) {
    mensajeError.push('Por favor, ingrese una edad válida (entre 18 y 65 años).');
    edads.classList.add("error");
  }

  let emailRegu = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === '' || !emailRegu.test(email)) {
    mensajeError.push('Por favor, ingrese un correo electrónico válido.');
    emails.classList.add("error");
  }

  let teleRegu = /^[1-9]\d{9}$/;
  if (telefono === ''|| !teleRegu.test(telefono) ) {
    mensajeError.push('Por favor, ingrese un telefono válido.');
    telefonos.classList.add("error");
  }

  if (mensajeError.length > 0) {
 
     mensajeError.forEach(err => {
      let li = document.createElement("li")
      li.innerHTML=err;
      mensaje.appendChild(li);
     });
      return false;
  }

  // Si pasa todas las validaciones, agregar HTML con los datos enviados
  let mensajeExito = [];
  mensajeExito.push('¡Inscripción exitosa!');
  mensajeExito.push( 'Nombre: ' + nombre+" ") ;
  mensajeExito.push('Edad: ' + edad + " ");
  mensajeExito.push('Telefono: ' + telefono +" ");
  mensajeExito.push( 'Correo Electrónico: ' + email +" ") ;
  mensajeExito.push( 'Nivel de Experiencia: ' + nivel +" ");
  mensajeExito.push('Nos contactaremos con usted dentro de las 72Hs.');

  mensajeExito.forEach(men => {
    let lis = document.createElement("p");
    lis.innerHTML=men;
    mensajeex.append(lis);
  });
 
  return false;
}
let nav = document.querySelector('.navbar');
document.getElementById('mobile-menu').addEventListener('click', abrir)
function abrir() {
  nav.classList.add('menu-open');
};
nav.addEventListener('mouseleave', cerrar) 
function cerrar(){
  
  nav.classList.remove('menu-open');
};
