function calcularMedia() {
    let nota1 = parseInt(document.getElementById("nota1").value);
    let nota2 = parseInt(document.getElementById("nota2").value);
    let nota3 = parseInt(document.getElementById("nota3").value);

    let total = (nota1 + nota2 + nota3) / 3;
    let resultado;
    if (total > 5) {
        resultado = "aprobado";
    } else {
        resultado = "suspendido";
    }

    alert("El estudiante ha sido "+resultado);
}