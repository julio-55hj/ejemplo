

let total = 0;
let contador = 0;

const carrito = document.getElementById("carrito");
const lista = document.getElementById("lista-carrito");
const totalTexto = document.getElementById("total");
const contadorTexto = document.getElementById("contador");

// Mostrar / ocultar carrito
document.getElementById("btnCarrito").addEventListener("click", () => {
    carrito.classList.toggle("activo");
});

// Agregar producto
function agregarCarrito(nombre, precio) {

    const item = document.createElement("li");

    item.innerHTML = `
        ${nombre} - $${precio}
        <button onclick="eliminarProducto(this, ${precio})">❌</button>
    `;

    lista.appendChild(item);

    total += precio;
    contador++;

    actualizarCarrito();
}

// Eliminar producto
function eliminarProducto(boton, precio) {
    boton.parentElement.remove();
    total -= precio;
    contador--;
    actualizarCarrito();
}

// Actualizar total y contador
function actualizarCarrito() {
    totalTexto.textContent = "Total: $" + total + " MXN";
    contadorTexto.textContent = contador;
}

// Vaciar carrito
document.getElementById("vaciar").addEventListener("click", () => {
    lista.innerHTML = "";
    total = 0;
    contador = 0;
    actualizarCarrito();
});

document.getElementById("cerrarCarrito").addEventListener("click", () => {
    carrito.classList.remove("activo");
});

// Finalizar compra
document.getElementById("finalizar").addEventListener("click", () => {
    if (contador === 0) {
        alert("Tu carrito está vacío 🛒");
    } else {
        alert("¡Gracias por tu compra! 🎉");
        lista.innerHTML = "";
        total = 0;
        contador = 0;
        actualizarCarrito();
        carrito.classList.remove("activo");
    }
});


