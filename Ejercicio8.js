function listar() {
    let listaNombres = document.getElementById("listaNombres");
    let nombre = document.getElementById("nombre");

    listaNombres.innerHTML += "<li>" + nombre.value + "</li>";

}