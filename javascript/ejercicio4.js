//Escribir un programa que calcule el porcentaje de un valor de un producto
//que ingresamos.
class Calcular{


    constructor(precio, producto, porcentaje){
        this.precio = precio;
        this.producto = producto;
        this.porcentaje = porcentaje;

    }

    set setPorcentaje(vale){
        this.porcentaje= vale;
    }


    get getPorcentaje(){
    return this.porcentaje;
}

    get getPrecio(){
        return this.precio;
    }
    set setPrecio (precio){
        this.precio =precio ;
    }

    set setProducto(producto){
        this.producto= producto;
    }

    get getProducto (){
        return this.producto;
    }

    obtenerPorcentaje(){
        let total = this.precio * this.porcentaje / 100;
        return total;
    }

    imprimiendo (){
        alert ("el producto " + this.producto + " con el precio de " + this.precio + " aplicando el " +this.porcentaje + "% tiene un descuento de " +this.obtenerPorcentaje())
    }

}

const producto1 = new Calcular(100000, "blusa",20);

let productos = prompt("digite el nombre del producto");

producto1.setProducto = productos;


let precio = parseInt(prompt("digite el precio del producto"));
producto1.setPrecio = precio;

let porce = parseInt(prompt("digite el porcentaje a obtener"));

producto1.setPorcentaje= porce;

producto1.imprimiendo();



