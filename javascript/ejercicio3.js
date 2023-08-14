//Escribir un algoritmo que indique cuál es el mayor de tres números ingresados


function algoritmoMay (num1,num2,num3){

    if (num1>num2 && num1>num3){
        alert("el numero " +num1 + " es mayor de los tres números");
    }else if (num2>num3 && num2>num1){
        alert("el numero " +num2 + " es mayor de los tres números");
    }else if (num3>num1 && num3>num2){
        alert("el numero" +num3 + " es mayor de los tres números");
    
    }
    
    
    }
    
    let num1 = parseInt(prompt("  digite el num1"));
    
    let num2 = parseInt(prompt("  digite el num2"));
    
    let num3 = parseInt(prompt("  digite el num3"));
    
    algoritmoMay(num1, num2, num3);