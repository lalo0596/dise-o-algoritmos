/* 
Crea una función que calcule el descuento que se le va a hacer a un cliente 
según el valor de su compra.

Si es una compra de menos de 100, se le hará un descuento del 10%. (0-99)
Si es una compra de 100 hasta menos de 200 se le hará un descuento del 20%.(100 - 199)
y si es una compra de más de 200 se le hará un descuento del 30%. (200 =>)

Utiliza prompt, funciones, condicionales y operadores de comparación.

La función debe pedir el precio al cliente, e imprimir el resultado del precio menos el descuento
 ya sea en pantalla o en consola.

(Se guardará en un archivo nuevo llamado ejercicioFunciones.js)
 */


 const precio = parseInt(prompt('Ingresa tu compra'));

 function descuentoCliente (precio){
if(precio >= 0 && precio <=99) {
    document.write('descuento del 10%.');
} else if (descuento >=100 && descuento <= 199){
    document.write('descuento del 20%.');

} else if (descuento >= 200) {
    document.write('descuento del 30% ');
}   

/* function descuento(){
    let compra = parseInt(prompt('Ingresa tu compra'))
} */
/* 
function descuento (valorcompra)
{
    let valorFinal;
    if (valorcompra < 100){
        valorFinal  = valorcompra * 0.9;
    }
    else if (valorcompra >= 100 && valorcompra <200);
    {
    valorFinal = valorcompra*0.8;
    }
    else {
        valorFinal = valorcompra*0.7;
    }
    return valorFinal;
}
let precioUnitario = parseInt(prompt('Ingresa el presio'));
let descuento1 = descuento(precioUsuario);
document.write('<h1>'+ "El precio final es " + descuento1 + '</h1>'); */