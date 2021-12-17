/* 
arreglos 
 */

const comidas = ['pozole', 'quesadillas', 'tacos'];

/* 
length
 */
console.log(comidas.length);

/* 
push - agraga al final "los ordena "
 Push coloca elementos al final del arreglo. 

pop  - quita un elemento del final 
unshift - agrega al inicio "cambia el orden al inverso"
Unshift coloca los elementos al principio del arreglo.

shift  - quita un elemento del inicio 
 */

comidas.push('torta');
console.log(comidas);

comidas.unshift('pansita');
console.log(comidas);

comidas.pop();
console.log(comidas);

comidas.shift();
console.log(comidas);

/* 
forEach - nos puede servir para realizar una accion 
por cada elemento de nustro arreglo
*/
console.log([0]);
console.log([1]);
console.log([2]);
// el = elementos 
comidas.forEach(function(el){
    console.log(el)
});
// forEach * falta definicion 
const numeros = [1, 4, 7, 8];
console.log(numeros);

numeros.forEach(function(el){
    let suma = el + 1;
    console.log(suma);
})

/* ejercicio*/
const arr =[];

function suma(num){
    let sumNum = num + 1;
    return arr.unshift(sumNum);
}

suma(3);
suma(5);
suma(6);
suma(2);
suma(78);

console.log(arr);
