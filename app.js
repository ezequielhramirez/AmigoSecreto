// Este código permite gestionar una lista de amigos mediante un formulario web.
// Se pueden agregar amigos, mostrar la lista actualizada, realizar un sorteo aleatorio
// entre los nombres registrados y restablecer todos los datos al estado inicial.

// Inicializamos un array vacío para almacenar los nombres de los amigos.
let amigos = [];

// Función para agregar un amigo al array.
// - Obtiene el valor del campo de entrada con ID 'amigo'.
// - Elimina espacios al inicio y al final del texto usando el método trim().
// - Verifica que el nombre no esté vacío antes de agregarlo al array.
// - Si el nombre es válido, lo añade al array y limpia el campo de entrada.
// - Si el nombre es inválido, muestra un mensaje de alerta al usuario.
// Finalmente, actualiza la lista de amigos visible en el DOM.
function agregarAmigo() {
    let nombre = document.getElementById('amigo').value.trim();

    if (nombre !== '') {
        amigos.push(nombre);
        document.getElementById('amigo').value = '';
    } else {
        alert('Por favor, ingresa un nombre válido');
    }
    actualizarLista();
};

// Función para actualizar la lista de amigos en el DOM.
// - Limpia el contenido previo del contenedor con ID 'listaAmigos'.
// - Recorre el array `amigos` y crea un elemento <li> para cada nombre.
// - Añade cada elemento <li> al contenedor de la lista en el DOM.
function actualizarLista() {
    let contenedorAmigos = document.getElementById('listaAmigos');
    contenedorAmigos.innerHTML = '';

    amigos.forEach(amigo => {
        let li = document.createElement('li');
        li.textContent = amigo;
        contenedorAmigos.appendChild(li);
    });
};

// Función para sortear un amigo aleatoriamente.
// - Verifica si la lista de amigos está vacía.
// - Si no hay nombres registrados, muestra una alerta.
// - Si hay nombres, selecciona uno al azar y muestra el resultado en el elemento
//   con ID 'resultado'.
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("¡No hay amigos para sortear!");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let aleatorio = amigos[indiceAleatorio];
    document.getElementById('resultado').innerHTML = `El amigo sorteado es: ${aleatorio}`;
};

// Función para restablecer todos los datos al estado inicial.
// - Limpia el array de amigos.
// - Limpia el contenido del campo de entrada, la lista visible y el resultado del sorteo.
// - Muestra una alerta para informar al usuario que los datos han sido reiniciados.
function restablecerTodo() {
    amigos = [];
    document.getElementById('amigo').value = '';
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
    alert('Todo ha sido restablecido.');
};
