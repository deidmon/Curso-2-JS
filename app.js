let numeroSereto = 0;
let intentos = 0;
let listaNumerosSorteados = 0;
let numeroMaximo = 10;

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
    asignarTextoElemento('p',`Elige un número del 1 al ${numeroMaximo}`);
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
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p',`Ya se sortearon todos los números posibles`);
    } else {
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroAleatorio();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    
    
}

condicionesIniciales();