//13-Escribir un programa que al ingresar un valor del 1 al 7 imprima el día de la
//semana al que corresponde.

function diaSemana(dia) {
    switch (dia) {
         case 1:
            alert("Lel dia es lunes")
case 2:
            alert("el dia es Martes");
            break;
case 3:
            alert("el dia es Miércoles");
            break;
 case 4:
            alert ("Jel dia es jueves");
         break;
case 5:
           alert("el dia es Viernes");
            break;
 case 6:
            alert(" el dia es Sábado");
            break;
 case 7:
            alert (" el dia esDomingo");
            break;
default:
         alert("Valor inválido. Debe ser un número del 1 al 7.");
    }
}

const dia = parseInt(prompt("Ingresa un valor del 1 al 7:"));
diaSemana(dia);
