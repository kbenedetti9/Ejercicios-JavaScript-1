function getRandomInt(min, max) {//Funcion para genrar numeros aleatorios
    return Math.floor(Math.random() * (max - min)) + min;
}

function generarNums() {//Funcion comun
    let espacioNums = document.getElementById("numeros");
    let numsAleatorios = "";
    for (let i = 0; i < 10; i++) {
        numero = getRandomInt(1, 100);
        numsAleatorios += "<option>" + numero + "</option>";
    }

    espacioNums.innerHTML = numsAleatorios;
}