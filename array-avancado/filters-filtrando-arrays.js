/*
    Filter: Filtra arrays
    Map: Modifica arrays
    Reduce: Reduz arrrays


    Filter sempre irá retornar a mesma quantidade de array ou menos.
*/

// retornando números maior que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]; // array de númros


// exemplo 11
const numerosFiltrados = numeros.filter( (valor, indice, array) => {
    console.log(`Índice: ${indice} Valor: ${valor} Array: ${array}`);
});


// exemplo 10
// const numerosFiltrados = numeros.filter( (valor, indice, array) => {
//     return array; // retorno somentes dos valores do array
// });

// console.log(numerosFiltrados);



// exemplo 9
// const numerosFiltrados = numeros.filter( (valor, indice, array) => {
//     return indice; // filter retornando somente os indices dos arrays
// } );

// console.log(numerosFiltrados);


// exemplo 8
// const numerosFiltrados = numeros.filter( (valor, indice, array) => {
    
//     console.log(valor); // retornando os valores do array em firnma de laço for 
//     return valor > 10;
// } );

// console.log(numerosFiltrados);


// exemplo 7
// const numerosFiltrados = numeros.filter(valor => valor > 10);
// console.log(numerosFiltrados);


// exemplo 6
// const numerosFiltrados = numeros.filter(valor => {
//     return valor > 10;
// });

// console.log(numerosFiltrados);



// exemplo 5
// const numerosFiltrados = numeros.filter( (valor) => {
//     return valor > 10;
// });

// console.log(numerosFiltrados);


// exemplo 4
// const numerosFiltrados = numeros.filter(function(valor) {
//     return valor > 10;
// })

// console.log(numerosFiltrados);



// exemplo 3
// function callbackFilters(valor) { // declarando somente parâmetros que for usar
//     return valor > 10;
// }

// const numerosFiltrados = numeros.filter(callbackFilters);
// console.log(numerosFiltrados);



// exemplo 2
// function callbackFilter(valor, indice, array) { // indce e array não sendo usados na função
//     return valor > 10; // exemplo mais adequado para este projetop
// }
// const numerosFiltrados = numeros.filter(callbackFilter);
// console.log(numerosFiltrados);




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

