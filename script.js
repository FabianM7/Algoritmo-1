let precio = parseFloat(prompt("Ingrese el precio de la prenda de vestir:"));
let descuento = parseFloat(prompt("Ingrese el porcentaje de descuento:"));

let montoDescuento = (precio * descuento) / 100;
let precioFinal = precio - montoDescuento;

document.write("<h3>Resultados:</h3>");
document.write("Precio original: $" + precio.toFixed(2) + "<br>");
document.write("Descuento aplicado: " + descuento + "%<br>");
document.write("Monto de descuento: $" + montoDescuento.toFixed(2) + "<br>");
document.write("Precio final: $" + precioFinal.toFixed(2));
