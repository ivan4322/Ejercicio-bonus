//Escribir un programa que calcule el área de un círculo.

const PI = 3.14;

function areaCirculo(radio){
    return PI * radio * radio;
}



let radios = parseInt(prompt("digite el radio del circulo"));
alert("el area del circulo es " +areaCirculo(radios));