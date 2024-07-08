let numeroSereto = generarNumeroAleatorio();
console.log(numeroSereto)
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if(numeroDeUsuario === numeroSereto){
        alert('Acertaste')
    }
    return;
}

function generarNumeroAleatorio(){
    return Math.floor(Math.random()*10)+1;
}

asignarTextoElemento('h1','Juego del número secreto');
asignarTextoElemento('p','Elige un número del 1 al 100');