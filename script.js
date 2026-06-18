function saludar() {
    alert("✨¡Gracias por visitar nuestra página web !✨");
}

document
.getElementById("formulario")
.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Mensaje enviado correctamente.😁👍");
    alert("✨¡Gracias por contactarnos!✨");
    this.reset();
});

function seleccionarProducto(producto){

    document.getElementById("productoElegido").innerHTML =
    "Producto seleccionado: <strong>" + producto + "</strong>";

}

const elementos = document.querySelectorAll(".animar");

function mostrarElementos() {

    elementos.forEach(elemento => {

        const posicion = elemento.getBoundingClientRect().top;
        const pantalla = window.innerHeight;

        if (posicion < pantalla - 100) {
            elemento.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", mostrarElementos);

mostrarElementos();