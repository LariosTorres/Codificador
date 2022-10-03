function encriptar(){
    
    let validacion_mensaje = document.getElementById("texto-encriptar").value;

    if (validacion_mensaje !== ""){

    document.getElementById("sin-mensaje").innerHTML = "";
    let ocultarmensaje = document.getElementById('con-mensaje-div-off');

    ocultarmensaje.classList.replace("con-mensaje-div-off", "con-mensaje-div-on");

    const texto = document.getElementById("texto-encriptar").value;
    const mensaje_codificado = document.getElementById("mensaje-codificado");

    let palabras = texto.split(" ");
    let palabra_a_codificar = [];

        for (let palabra of palabras) {
            palabra = palabra.replaceAll('e','enter');
            palabra = palabra.replaceAll('i','imes');
            palabra = palabra.replaceAll('a','ai');
            palabra = palabra.replaceAll('o','ober');
            palabra = palabra.replaceAll('u','ufat');

        palabra_a_codificar.push(palabra);
        }

        const resultado = palabra_a_codificar.join(' ');

        mensaje_codificado.textContent = resultado;
    }
    else{
        alert("No a ingresado ningun mesaje");

    }

}

function desencriptar(){

    let validacion_mensaje = document.getElementById("texto-encriptar").value;

    if (validacion_mensaje !== ""){

    document.getElementById("sin-mensaje").innerHTML = "";
    let ocultarmensaje = document.getElementById('con-mensaje-div-off');

    ocultarmensaje.classList.replace("con-mensaje-div-off", "con-mensaje-div-on");

    const texto = document.getElementById("texto-encriptar").value;
    const mensaje_salida = document.getElementById("mensaje-codificado");

    let palabras = texto.split(" ");
    let palabra_a_codificar = [];

        for (let palabra of palabras) {
            palabra = palabra.replaceAll('imes','i');
            palabra = palabra.replaceAll('enter','e');
            palabra = palabra.replaceAll('ai','a');
            palabra = palabra.replaceAll('ober','o');
            palabra = palabra.replaceAll('ufat','u');

        palabra_a_codificar.push(palabra);
        }

        const resultado = palabra_a_codificar.join(' ');

        mensaje_salida.textContent = resultado;
    }
    else{
        alert("No a ingresado ningun mesaje");

    }

}

function copiar(){
    
    document.getElementById("boton-copiar").onclick = function() {
        var text = document.getElementById("mensaje-codificado").value;
        clipboard.writeText(text);

    }
}

function soloLetras(e) {
    var key = e.keyCode || e.which,
      tecla = String.fromCharCode(key).toLowerCase(),
      letras = " abcdefghijklmnñopqrstuvwxyz",
      tecla_especial = false;

    if (letras.indexOf(tecla) == -1 && !tecla_especial) {
      return false;
    }
  }