//6- Un maestro desea saber el porcentaje de hombres y de mujeres que hay en
//un grupo de estudiantes.

class Porcentaje {

constructor (numHombres, numMujeres, participantes){

    this.numHombres = numHombres;
    this.numMujeres= numMujeres;
    this.participantes = participantes;

}


set setnumHombres (valor){
    this.getnumHomres = valor;
}

get getnumHombres (){
     return this.numHombres
}

set getnumMujeres (numM){
    return this.numMujeres=numM
}

PorcentajeHombres (){
  let porcentajeHombres =  (this.numHombres/this.participantes)*100;
  alert ("el porcentaje de hombres que asistieron hoy fue del : " +porcentajeHombres +"%");
}


porcentajeMujeres (){
    let porcentajeMujeres = (this.numMujeres/this.participantes)*100;
    alert ("el porcentaje de mujeres que asistieron hoy fue del: " +porcentajeMujeres+ "%");
}




}

let hombres = parseInt(prompt("digite el numero de hombres que asistieron hoy"));
let mujeres = parseInt(prompt("digite el numero de mujeres que asistieron hoy"));
let estudiantes = parseInt(prompt("digite el total de  hombres y mujeres inscriptos en la escuela"))

const asistentes1 = new Porcentaje(hombres,mujeres,estudiantes);


asistentes1.PorcentajeHombres();
asistentes1.porcentajeMujeres();
