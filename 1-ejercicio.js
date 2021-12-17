/* Tomar los números de un arreglo llamado 'numeros',
 [1, 4, 7, 9, 19, 15, 46, 27, 40, 123]
- multiplicar cada numero por dos
-guardar los resultados en un arreglo llamado 'resultado'
-imprimir en consola o en el body cada elemento
 del arreglo 'resultado'
 */


 const num = [1, 4, 7, 9, 19, 15, 46, 27, 40, 123];
const resultado =[];
 for(let i = 0; i < num.length; i++){ 
     
resultado.push((num[i]*2));
 }

 resultado.forEach(function(el, i){
     document.write("<h1>El resultado del elemento "+ i + "es: "+ el + "</h1>");
 })

