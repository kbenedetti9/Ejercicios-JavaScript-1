function mayorNum() {//Funcion comun
    let num1 = document.getElementById("num1")
    let num2 = document.getElementById("num2")
    if (num1.value && num2.value) {//Verifica que los dos campos hayan sido rellenados
        if (num1.value > num2.value) {
            alert("El numero mayor es: " + num1.value);
        } else if (num2.value > num1.value) {
            alert("El numero mayor es: " + num2.value);
        } else {
            alert("Los numeros son iguales");
        }
    } else {
        alert("No rellenaste todos los campos");
    }
}

mayorNumArrow = () => {//Funcion flecha (arrow function)
    let num1 = document.getElementById("num1")
    let num2 = document.getElementById("num2")
    if (num1.value && num2.value) {//Verifica que los dos campos hayan sido rellenados
        if (num1.value > num2.value) {
            alert("El numero mayor es: " + num1.value);
        } else if (num2.value > num1.value) {
            alert("El numero mayor es: " + num2.value);
        } else {
            alert("Los numeros son iguales");
        }
    } else {
        alert("No rellenaste todos los campos");
    }
}

