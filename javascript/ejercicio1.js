1//escribir un algoritmo que valide la suma de dos numeros es positivo , negativo
//o cero


function validarSuma (){
    let num1 = parseInt(prompt("  digite el num1"));
    
    let num2 = parseInt(prompt("  digite el num2"));
    
    let result = num1+num2;
        if(result ==0 ) {
            alert(result +"  el resultado es 0 ");
        }else if(result <0 ){
            alert(result + "  el resultado es negativo");
        }else if(result >0) {
            alert(result +"  el resultado es positivo");
        }
    
    
    }
    
    
    validarSuma(); 