function muestraOpcion() {//Funcion comun
    var opciones = document.getElementsByName("eleccion");
    for (let i = 0; i < opciones.length; i++) {
        if (opciones[i].checked) {
            alert("Seleccionaste: " + opciones[i].value);
        }
    }
}

muestraOpcionArrow = () => {//Funcion flecha (arrow function)
    var opciones = document.getElementsByName("eleccion");
    for (let i = 0; i < opciones.length; i++) {
        if (opciones[i].checked) {
            alert("Seleccionaste: " + opciones[i].value);
        }
    }
}