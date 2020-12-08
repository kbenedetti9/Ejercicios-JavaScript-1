function agregarTexto() {//Funcion comun
    var texto = document.getElementById("texto");
    var espacioParaTexto = document.getElementById("cargaTexto");

    espacioParaTexto.innerHTML = texto.value;
}

agregarTextoArrow = () => {//Funcion flecha (arrow function)
    var texto = document.getElementById("texto");
    var espacioParaTexto = document.getElementById("cargaTexto");

    espacioParaTexto.innerHTML = texto.value;
}