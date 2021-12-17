/* 
ciclos - bucles - loops

while
do while
for 
*/

/* 
 while
let condiction = 1; - valor inicial
while(condicion){
    tu codigo
    modificaciion a nuestro valor inicial 
}
*/

// imprimir todos los numeros del 1 - 10

let condicion = -10;

while(condicion <= 10){
    console.log(condicion);
   // condicion = condicion + 1; es lo mismo ++
   //representa sumar + 1 = ++
   condicion++; 
}

/* let numero = 1;
numero++;//2
numero++;//3
numero++;//4
numero--;//3
numero--;//2
numero--;//1

console.log(numero); */
/* let condicion = 11;

while (condicion <= 10){
    console.log(numero);
    condicion++;
}
 */
//nunca se ejecutara si no se cumple 

// do while

// imprimir todos los numeros del 1 - 10
let numero = 11;

do {
    console.log(numero);
    numero++; 
} while (numero <= 10);
// se ejecuta la primera y ve si se cumple 


/*
 for 
 utiliza un contador 
 */

 // i normalmente al iniciar. control = i , 
 // en for si o si ';'

 for (let control = 1; control <=10; control++) {
     console.log(control);
 }
 //primero verifica la condicion y luego ejecuta


 const comidas = ['pozole', 'tacos', 'tamales', 'tortas'];

 for(let i = 0; i < comidas.length; i++){//  lei i podemos elegir cual escoger 
     console.log(comidas[i]);//con[] eliges uno en expecifico

 }