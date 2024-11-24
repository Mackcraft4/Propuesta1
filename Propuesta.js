document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById("mensaje2").style.display = "block";  // Mostrar el siguiente mensaje
        document.getElementById("botones").style.display = "block";  // Mostrar los botones
    }, 3000);  // Espera 3 segundos antes de mostrar la pregunta y los botones
});

function respuesta(isYes) {
    if (isYes) {
        document.getElementById("respuesta").innerText = "Gracias por aceptar, este será un nuevo comienzo mi niña :)";
        document.getElementById("botones").style.display = "none";  // Ocultar los botones
    } else {
        cambiarBoton();  // Cambiar el lugar de los botones dentro del área
    }
}

function cambiarBoton() {
    const botones = document.getElementById("botones");
    const botonesArray = Array.from(botones.children);  // Convertir los botones en un array

    // Obtener la posición aleatoria dentro de un área definida
    const maxX = botones.offsetWidth - botonesArray[0].offsetWidth;  // Ancho máximo para el movimiento
    const maxY = botones.offsetHeight - botonesArray[0].offsetHeight;  // Alto máximo para el movimiento

    const randomX = Math.floor(Math.random() * maxX);  // Posición aleatoria en X
    const randomY = Math.floor(Math.random() * maxY);  // Posición aleatoria en Y

    // Mover el botón "No" a la nueva posición
    botonesArray[1].style.position = 'absolute';
    botonesArray[1].style.left = `${randomX}px`;
    botonesArray[1].style.top = `${randomY}px`;
}
