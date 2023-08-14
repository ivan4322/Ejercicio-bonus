//2- Calcule el cuadrado de 2 números ingresados.


function cuadrado () {
    let num1 = parseInt(prompt("  digite el num1"));
    
    let num2 = parseInt(prompt("  digite el num2"));
    
    resultNum1 = num1*num1;
    
    resultNum2 = num2*num2;
    
    let total = resultNum1+resultNum2
    alert("el cuadrado de  los dos numeros es " +total);
    
    }
    
    cuadrado();