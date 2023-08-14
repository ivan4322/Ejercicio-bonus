//Una distribuidora de huevos quiere contratarlo para que realice un algoritmo
//que calcule el precio de venta para una cantidad de huevos a llevar por un
//determinado cliente. Guiándose por la siguiente información:

class Distribuidora {
    constructor(cantidad) {
        this.cantidad = cantidad;
        this.PRECIO = 250;
    }

    set setCantidad(cantidad) {
        this.cantidad = cantidad;
    }

    get getCantidad() {
        return this.cantidad;
    }

    obtenerCantidad() {
        const num = this.cantidad;
        let total, descuento, totalDescuento;

        if (num >= 1 && num <= 100) {
            total = this.PRECIO * num;
            descuento = total * 0.03;
            totalDescuento = total - descuento;
            alert(
                "El precio total es de " +
                total +
                " con el descuento del 3%, quedaría en: " +
                totalDescuento
            );
        } else if (num >= 101 && num <= 200) {
            total = this.PRECIO * num;
            descuento = total * 0.05;
            totalDescuento = total - descuento;
            alert(
                "El precio total es de " +
                total +
                " con el descuento del 5%, quedaría en: " +
                totalDescuento
            );
        } else if (num >= 201 && num <= 300) {
            total = this.PRECIO * num;
            descuento = total * 0.08;
            totalDescuento = total - descuento;
            alert(
                "El precio total es de " +
                total +
                " con el descuento del 8%, quedaría en: " +
                totalDescuento
            );
        } else if (num >= 301) {
            total = this.PRECIO * num;
            descuento = total * 0.1;
            totalDescuento = total - descuento;
            alert(
                "El precio total es de " +
                total +
                " con el descuento del 10%, quedaría en: " +
                totalDescuento
            );
        } else {
            alert("Cantidad no válida.");
        }
    }
}

const descuento1 = new Distribuidora(100);
let cliente = parseInt(prompt("Digite la cantidad de huevos que va a comprar el cliente"));
descuento1.setCantidad = cliente;
descuento1.obtenerCantidad();
