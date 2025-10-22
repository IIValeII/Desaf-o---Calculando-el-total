precio = 400000 

precioSpan = document.querySelector(".precio-inicial"); 
cantidadSpan = document.querySelector(".cantidad");     
valorTotalSpan = document.querySelector(".valor-total"); 

let cantidad = 0; 

btnAumentar = document.querySelector("p button:nth-child(2)"); 
btnDisminuir = document.querySelector("p button:nth-child(3)"); 

precioSpan.innerHTML = precio;
cantidadSpan.innerHTML = cantidad;
valorTotalSpan.innerHTML = 0; 
function actualizarTotal() {
    const total = cantidad * precio;
    cantidadSpan.innerHTML = cantidad;
    valorTotalSpan.innerHTML = total;
}

btnAumentar.onclick = function() {
    cantidad++; 
    actualizarTotal();
};

btnDisminuir.onclick = function() {
    if (cantidad > 0) {
        cantidad--;
        actualizarTotal();
    }
};