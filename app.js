let numeroSereto = 0;
let intentos = 0;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if(numeroDeUsuario === numeroSereto){
       asignarTextoElemento('p',`Acertaste el número en ${intentos} ${intentos === 1 ? 'vez': 'veces'}`);
       document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        if(numeroDeUsuario > numeroSereto){
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        limpiarCaja();
        intentos ++;
    }
    return;
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p','Elige un número del 1 al 10');
    numeroSereto = generarNumeroAleatorio();
    intentos = 1;
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', true);
    
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
 
}

function generarNumeroAleatorio(){
    return Math.floor(Math.random()*10)+1;
}

condicionesIniciales();