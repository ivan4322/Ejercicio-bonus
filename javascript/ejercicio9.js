//9- Realizar un algoritmo que calcule el porcentaje de descuento que va a tener
//un cliente dependiendo de los siguientes datos:
//- Si el cliente compró un carro o una moto, el descuento será del 15%
//- Si el cliente compró una bicicleta o una patineta, el descuento será del
//10%
//- Si el cliente compró un scooter eléctrico, el descuento será del 5%



function validarVehiculo(vehiculo){


switch (vehiculo) {
    case 1:
       alert("tiene un descuento del 15%") 
        break;
        case 2: 
        alert("tiene un descuento del 10%");
        break;
        case 3:
            alert("tiene un descuento del 5%")
        break
    default:
        alert("digite un numero valido")
        break;
}
}
alert("digite el vehiculoque desea adquirir");
alert("digite 1 para carro  o moto");
alert("digite 2 para bicicleta o patineta");
alert("digite 3 para scooter electrico ");

let vehiculo = parseInt(prompt());

validarVehiculo(vehiculo);