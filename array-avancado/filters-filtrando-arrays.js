/*
    Filter: Filtra arrays
    Map: Modifica arrays
    Reduce: Reduz arrrays
*/

// retornando números maior que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]; // array de númros

// exemplo 2
function callbackFilter(valor, indice, array) { // indce e array não sendo usados na função
    return valor > 10; // exemplo mais adequado para este projetop
}
const numerosFiltrados = numeros.filter(callbackFilter);
console.log(numerosFiltrados);







// exemplo 1
// function callbackFilter(valor, indice, array) {
//                         // valor - representa cada númro do array
//                         // índice - representa o índice de cada elemento no array
//                         // array é o valor do array, que é o valor total dos arrays

//      // exemplo 1, não indicado                    
//      if (valor > 10) {
//         return true;
//      } else {
//         return false;
//      }
// }

// const numerosFiltrados = numeros.filter(callbackFilter);
// console.log(numerosFiltrados);

