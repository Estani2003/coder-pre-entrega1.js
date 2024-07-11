//Pre-entrega1(Estanislao Serralunga)

//Para mi primer pre-entrega voy a realizar un mini juego, dónde tengo que adivinar un número del 1 al 100 y le agrego información que el usuario realice.

//Como llamar a un número aleatorio: Math.floor(Math.random() * 100) + 1;


function adivinarNumero(){

const numeroAleatorio = Math.floor(Math.random() * 100) + 1;


let intentos = 0;
let adivinado = false;
while(adivinado === false){
    const elegirNumero = parseInt(prompt("Ingrese un número del 1 al 100"));
    intentos++;


    if (elegirNumero === numeroAleatorio) {
        alert("Felicidades acertaste el número" + " " + numeroAleatorio + " en " + intentos + " intentos.");
        adivinado = true;
        adivinarNumero()

    }else if (elegirNumero < numeroAleatorio) {
        alert("El número es mas alto. Segui intentando")
    }else{
        alert("El número ingresado es más chico. Segui intentando")
    }

}
}

adivinarNumero();