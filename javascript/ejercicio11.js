//11- Ingresar por pantalla un número entre 1 y 12, luego imprimir en letras el mes
//al que corresponde el valor ingresado y los signos del zodiaco. Ejemplo: si el
//valor ingresado es 5, entonces imprimir “Mayo”, “Tauro - Géminis”.

let num = parseInt(prompt("digite el numero del mes"));
let meses = ["enero aries" , "febrero tauro ", "marzo geminis","abril cancer " , "mayo cancer ", "junio leo", "julio virgo", "agosto aries", "septiembre liobra","octubre virgo","noviembre leo","diciembre es navidad"]

for (let  i=0;i< meses.length; i++) {
  if (i == num){

    alert(meses[i]);
  }
    
}
