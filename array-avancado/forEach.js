// forEach


const numeros = [ 10, 20, 30, 40, 50, 60, 70, 80, 90 ];


//retornando o array do array com forEach
numeros.forEach( function (valor, indice, array ) {
    console.log(array);
});



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