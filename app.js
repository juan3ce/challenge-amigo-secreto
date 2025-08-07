//Declaracion de variables y arrays
let amigos = [];
let nombre = "";
let numeroRandom = 0;
const lista = document.getElementById("listaAmigos");

//Cuando se hace click sobre el boton Añadir, esta funcion se ejecuta
// se encarga de obtener el valor del input o sea el nombre, agrega el 
// nombre al array amigos, para luego llamar a la funcion mostralListaAmigos().
function agregarAmigo() {
    // Obtiene el valor del input con id "amigo"
    // y lo almacena en la variable nombre
    nombre = document.getElementById("amigo").value.toLowerCase();
    console.log(nombre);
    // Verifica si el input está vacío o si el nombre ya está en la lista
    // Si el input está vacío, muestra un mensaje de alerta    
    if(nombre === "") {
        // Si el input está vacío, muestra un mensaje de alerta
        alert("Por favor, ingresa un nombre.");
        return; // Sale de la función si el input está vacío
    } else if(amigos.includes(nombre)) {
        alert("El nombre ya está en la lista. Por favor, ingresa un nombre diferente.");
        document.getElementById("amigo").value = "";
        return; // Sale de la función si el nombre ya está en la lista
    } else {
        // Si el input no está vacío, agrega el nombre al array amigos
        // y llama a la función mostrarListaAmigos para actualizar la lista
        amigos.push(nombre);
        console.log(amigos);
        mostrarListaAmigos();
    }
    // Limpia el input después de agregar el nombre
    document.getElementById("amigo").value = "";
}

// Cuando se agrega un nombre por medio del input esta función se encarga 
// de mostrar el nombre del amigo que se acaba de ingresar en el HTML
function mostrarListaAmigos() {  
    lista.innerHTML = ""; // Limpiar la lista antes de mostrar los amigos
    // Recorre array 'amigos' y crear un elemento li para cada nombre
    // Luego, agrega cada nombre del array al elemento li
    for (let i = 0; i < amigos.length; i++) {
        // Crea un nuevo elemento li en la lista ul
        const nuevoLi = document.createElement("li");
        // Asigna el nombre iterado del array al elemento li
        nuevoLi.textContent = amigos[i];
        // Agrega el elemento li a la lista ul
        lista.appendChild(nuevoLi);
    } 
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Por favor, añade al menos dos amigo antes de sortear.");
        return; // Sale de la función si no hay amigos para sortear
    } else {
        numeroRandom = Math.floor(Math.random() * amigos.length);
        console.log(numeroRandom);
        document.getElementById("resultado").innerHTML = amigos[numeroRandom];
    }
}

function nuevaLista() {
    amigos = []; // Limpia el array de amigos
    lista.innerHTML = ""; // Limpia la lista en el HTML
    document.getElementById("resultado").innerHTML = ""; // Limpia el resultado del sorteo
    document.getElementById("amigo").value = ""; // Limpia el input de nombre
}
 