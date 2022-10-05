// Inicio de la función "encriptar"
function encriptar(){
    
    // Declaración de variable "validacion_mensaje" la cual obtendrá en contenido del textarea donde el usuario ingresara su mensaje
    let validacion_mensaje = document.getElementById("texto-encriptar").value;

    //Validación para evitar se envié un mensaje vacío
    if (validacion_mensaje !== ""){

    // Código que obtiene el id de un div ubicado en la tercera fila/columna de la página, remplazando el elemento para borrarlo
    document.getElementById("sin-mensaje").innerHTML = "";
    
    // Declaración de variable con la cual con la cual se obtiene el id de un div
    let ocultarmensaje = document.getElementById('con-mensaje-div-off');

    // Se remplaza la clase original del elemento antes obtenido, con otra clase la cual hará visible al div
    ocultarmensaje.classList.replace("con-mensaje-div-off", "con-mensaje-div-on");

    // Declaración de variable, la cual se encargará de obtener el id del textarea donde se mostrará el mensaje ya encriptado
    const texto = document.getElementById("texto-encriptar").value;
    
    // Declaración de variable con la cual se obtendrá el id del textarea donde se mostrara el mensaje encriptado o desencriptado 
    const mensaje_codificado = document.getElementById("mensaje-codificado");
    
    // Declaración de variable la cual recibirá el mensaje a encriptar, a si vez mediante el uso de "split()" se separara cada palabra que pueda tener el mensaje usando la instruction de (" ")
    let palabras = texto.split(" ");

    // Creación de un array
    let palabra_a_codificar = [];

        // Declaración de un for...of donde la condición de paro es la variable palabra perteneciente al nuevo array que se creo con el split haya sido encriptada
        for (let palabra of palabras) {

            // Cuerpo del for...of en onde se llevara acabo el encriptado del mensaje
            palabra = palabra.replaceAll('e','enter');
            palabra = palabra.replaceAll('i','imes');
            palabra = palabra.replaceAll('a','ai');
            palabra = palabra.replaceAll('o','ober');
            palabra = palabra.replaceAll('u','ufat');

        // Por ultimo mediante un push se ira insertando cada palabra ya codificada en el array "palabra_a_codificar" antes creado
        palabra_a_codificar.push(palabra);
        }

        // Una vez terminado el encriptado se unirá todas las palabras en una nueva variable por medio de un join, y usando (" ") damos la instrucción de como unir el mensaje
        const resultado = palabra_a_codificar.join(' ');

        // Usando la variable "mensaje_codificado" y la orden de textContent se le asignaron el valor de la variable resultado que es la variable que contiene el mensaje ya encriptado
        mensaje_codificado.textContent = resultado;
    }
    else{
        alert("No a ingresado ningún mensaje");

    }

}// Fin de la función "encriptar"

// Inicio de la función "desencriptar"
function desencriptar(){

    // Declaración de variable "validacion_mensaje" la cual obtendrá en contenido del textarea donde el usuario ingresara su mensaje
    let validacion_mensaje = document.getElementById("texto-encriptar").value;

    //Validación para evitar se envié un mensaje vacío
    if (validacion_mensaje !== ""){

    // Código que obtiene el id de un div ubicado en la tercera fila/columna de la página, remplazando el elemento para borrarlo
    document.getElementById("sin-mensaje").innerHTML = "";
    
    // Declaración de variable con la cual con la cual se obtiene el id de un div
    let ocultarmensaje = document.getElementById('con-mensaje-div-off');

    // Se remplaza la clase original del elemento antes obtenido, con otra clase la cual hará visible al div
    ocultarmensaje.classList.replace("con-mensaje-div-off", "con-mensaje-div-on");

    // Declaración de variable, la cual se encargará de obtener el id del textarea donde se mostrará el mensaje ya encriptado
    const texto = document.getElementById("texto-encriptar").value;

    // Declaración de variable con la cual se obtendrá el id del textarea donde se mostrara el mensaje encriptado o desencriptado 
    const mensaje_salida = document.getElementById("mensaje-codificado");

    // Declaración de variable la cual recibirá el mensaje a encriptar, a si vez mediante el uso de "split()" se separara cada palabra que pueda tener el mensaje usando la instruction de (" ")
    let palabras = texto.split(" ");

    // Creación de un array
    let palabra_a_codificar = [];

        // Declaración de un for...of donde la condición de paro es la variable palabra perteneciente al nuevo array que se creo con el split haya sido desencriptado
        for (let palabra of palabras) {

            // Cuerpo del for...of en onde se llevara acabo el desencriptado del mensaje
            palabra = palabra.replaceAll('imes','i');
            palabra = palabra.replaceAll('enter','e');
            palabra = palabra.replaceAll('ai','a');
            palabra = palabra.replaceAll('ober','o');
            palabra = palabra.replaceAll('ufat','u');

        // Por ultimo mediante un push se ira insertando cada palabra ya codificada en el array "palabra_a_codificar" antes creado
        palabra_a_codificar.push(palabra);
        }

        // Una vez terminado el encriptado se unirá todas las palabras en una nueva variable por medio de un join, y usando (" ") damos la instrucción de como unir el mensaje
        const resultado = palabra_a_codificar.join(' ');

        // Usando la variable "mensaje_codificado" y la orden de textContent se le asignaron el valor de la variable resultado que es la variable que contiene el mensaje ya desencriptado
        mensaje_salida.textContent = resultado;
    }
    else{
        alert("No a ingresado ningún mensaje");

    }

}// Fin de la función "desencriptar"

// Inicio de la función copiar
function copiar(){
    
    // Instrucciones con ls cuales se copiara el mensaje encriptado u desencriptado, todo esto mediante el uso de un script llamado "Clipboard"
    document.getElementById("boton-copiar").onclick = function() {
        var text = document.getElementById("mensaje-codificado").value;
        clipboard.writeText(text);
    }
}// Fin de la función "copiar"

// Inicio de la función soloLetras
function soloLetras(e) {

    // Función con la cual se bloquea el uso de cualquier tecla que no sea una letra o un espacio, esto solo permitirá las letras minúsculas
    // *Nota: Esta función solo ha funcionado en laptop o pc*
    var key = e.keyCode || e.which,
      tecla = String.fromCharCode(key).toLowerCase(),
      letras = " abcdefghijklmnñopqrstuvwxyz",
      tecla_especial = false;

    if (letras.indexOf(tecla) == -1 && !tecla_especial) {
      return false;
    }
}// Fin de la función soloLetras