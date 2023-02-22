
document.body.style.backgroundColor = "#F2F3F4";
document.body.style.fontFamily = "Verdana", "sans-serif";

document.getElementById("btnTema1").addEventListener("click", fTemaUno);
document.getElementById("btnTema2").addEventListener("click", fTemaDos);
document.getElementById("btnRestablecer").addEventListener("click", fRestablecer);

function fTemaUno() {

    // for (let y = 0; y < 4; y++) {
    //   document.getElementsByClassName("cDiv")[y].style.backgroundColor = "#EAC86C";
    // }

    document.body.style.backgroundColor = "#F0F392";

}

function fTemaDos() {

    // for (let y = 0; y < 4; y++) {
    //   document.getElementsByClassName("cDiv")[y].style.backgroundColor = "#EAC86C";
    // }

    document.body.style.backgroundColor = "#C0F392";

}

function fRestablecer() {

    // for (let y = 0; y < 4; y++) {
    //   document.getElementsByClassName("cDiv")[y].style.backgroundColor = "#EAC86C";
    // }

    document.body.style.backgroundColor = "#F2F3F4";

}