var totalPlata = 0;

function vender(textoAMostrar,valor) {
    totalPlata = totalPlata + valor;
    alert('vendiste '+ textoAMostrar+' a $'+valor+". Total vendido: $"+totalPlata);
    document.getElementById("etiquetaTotal").innerHTML = totalPlata;
}
