//Realizar un programa en el que el usuario introduzca el número del mes (1 al
  //  12) y se muestra al final si ese mes es de 30 o 31 días.

  let meses = ["enero","febrero", "marzo", "abril" ,"mayo","junio,", "julio","agosto", "septiembre", "octubre", "noviembre", "diciembre"];


  alert (meses[0])
function ano (mese){

   if (mese==1  || mese==3 || mese==5 || mese==7|| mese==8 || mese==10 || mese==12 ){
   
    alert("el mes  tiene 31 dias");

   }else if (mese == 4 || mese==6 || mese == 9|| mese == 11 ){
    alert ("el mes  tiene 30 dias")
   }

  }



  let mese = prompt("digite el numero del mes");
  ano(mese);