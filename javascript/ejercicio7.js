//Escriba un algoritmo para saber si un número es par o impar.

function parEimpar (num){
    if (num % 2 === 0) {
      alert(num +" es par");
    } else {
      alert (num + " es impar")
    }
}




let paroimpart = parseInt(prompt("digite un numero"));
alert(parEimpar(paroimpart));  
 
