//14- Escribir un algoritmo para calcular el índice de masa corporal de una
//persona.




function calcularImc (imc){

    alert ("Tu IMC es: " + imc.toFixed(2));
}

let peso = parseFloat(prompt("Ingresa tu peso en kilogramos:"));
let altura = parseFloat(prompt("Ingresa tu altura en metros:"));

let imc = peso / (altura * altura);
calcularImc(imc);