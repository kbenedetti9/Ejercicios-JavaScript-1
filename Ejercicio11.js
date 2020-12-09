function cambiarColor() {
    let combo = document.getElementById("color");
    let bloqueColor = document.getElementById("bloqueColor");

    var color = combo.options[combo.selectedIndex].text;

    if (color == "Blue") {
        bloqueColor.style.backgroundColor = "blue";
    } else if (color == "Red") {
        bloqueColor.style.backgroundColor = "red";
    } else {
        bloqueColor.style.backgroundColor = "green";
    }
}