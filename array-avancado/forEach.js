// forEach


const numeros = [ 10, 20, 30, 40, 50, 60, 70, 80, 90 ];

// exemplo de forEach com uso de arrow function trazendo os valores, indice e array literais
numeros.forEach( (valor, indice, array) => console.log(
    `Valor: ${valor} Índice: ${indice} Array: ${array}`
    ));


// exemplo de forEach com uso de arrow function trazendo os valores, indice e array
// numeros.forEach( (valor, indice, array) => console.log(valor, indice, array));



// exemplo de forEach com uso de arrow function trazendo os valores com indice
// numeros.forEach( (valores, indice) => console.log(valores, indice));



// exemplo de forEach com uso de arrow function trazendo os valores somente
// numeros.forEach(valor => console.log(valor));



// saida personalizada para forEach
// numeros.forEach( function (valor, indice, array) {
//     console.log(`Valor: ${valor} Índice: ${indice} Array: ${array}`);
// })



//retornando o array do array com forEach
// numeros.forEach( function (valor, indice, array ) {
//     console.log(array);
// });



//retornando os índices do array com forEach
// numeros.forEach( function (valor, indice, array) {
//     console.log(indice);
// });


// retornando os valores do array com forEach
// numeros.forEach( function (valor, indice, array) {
//     console.log(valor);
// });

// recapitulando - for of
// for (let valor of numeros) {
//     console.log(valor);
// }