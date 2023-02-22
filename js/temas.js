
document.body.style.backgroundColor = "#D6DBDF";
document.body.style.fontFamily = "Verdana", "sans-serif";

document.getElementById("btnTema1").addEventListener("click", fTemaUno);
document.getElementById("btnTema2").addEventListener("click", fTemaDos);
document.getElementById("btnRestablecer").addEventListener("click", fRestablecer);

function fTemaUno() {

    document.body.style.backgroundColor = "#F0F392";

}

function fTemaDos() {

    document.body.style.backgroundColor = "#C0F392";

}

function fRestablecer() {


    document.body.style.backgroundColor = "#D6DBDF";

}