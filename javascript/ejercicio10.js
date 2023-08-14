//10- Escribir un algoritmo que simule las operaciones básicas de una calculadora
//suma, resta, multiplicación y división; esto con 2 números que se ingresen.

function operaciones (operador,num1,num2){

if (operador == 1){
let resultado = num1+num2;
alert("la suma es " +resultado);

}else if(operador == 2){
    resultado = num1-num2;
    alert ("la resta es " +resultado)
}else if(operador == 3){
    resultado = num1*num2;
    alert ("la multiplicacion es " +resultado);

}else if(operador == 4){
    resultado = num1/num2;
    alert ("la division es " +resultado);
}



}


alert("digite la operacion que desea realizar1\n para suma\n 2 para resta \n 3 para multiplicar \n 4 para dividir ");
let op= prompt();
let num1 = parseInt(prompt("digite numero 1"));
let num2 = parseInt(prompt("digite numero 2"));

operaciones(op,num1,num2);