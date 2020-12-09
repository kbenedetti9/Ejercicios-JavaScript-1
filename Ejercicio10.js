function calcularDescuento() {
    let marca = document.getElementById("marca").value;
    let modelo = document.getElementById("modelo").value;
    let consultaDescuento = document.getElementById("descuento");
    let descuento;
    if (marca == "ford" && modelo == "fiesta") {
        descuento = "5%";
    } else if (marca == "ford" && modelo == "focus") {
        descuento = "10%";
    }

    consultaDescuento.innerHTML = "<h3> Su descuento es de " + descuento + "</h3>";
    // document.write(`<h3>Su descuento es de ${descuento} </h3>`) Otra opcion de agregar etiqueta a html

}