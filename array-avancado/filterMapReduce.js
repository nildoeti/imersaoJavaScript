//  unir filter, map e rduce

// Retornar a soma do dobro de todos os números pares
// -> filtrar pares
// -> dobrar os valores
// -> reduzir (somar tudo)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]; // array de números


// reduzindo solução abaixo com arrow function
const total = numeros
.filter( valor => valor % 2 === 0)
.map( valor => valor * 2)
.reduce((acumulador, valor) => acumulador + valor);

console.log(total);



// Retornar a soma do dobro de todos os números pares e filtrar pares. dobrar os valores e reduzir e somar
// const total = numeros.filter( function (valor) {
//     return valor % 2 === 0;
// }).map(function (valor) {
//     return valor * 2;
// }).reduce( function (acumulador, valor) {
//     return acumulador + valor;
// });

// // filtrar números pares -> [ 50, 80, 2, 8, 22 ]
// // dobrar os valores dos números pares filtrados -> [ 100, 160, 4, 16, 44 ]
// // reduzir e somar todos os número -> 324
// console.log(total);



// -> reduzir (somar tudo)
//  const reduzirSomarTudo = numeros.reduce( (acumulador, valor) => {
//      return acumulador + valor;
//  });
// console.log(reduzirSomarTudo); // 236



// -> dobrar os valores
// const dobrarValor = numeros.map( valor => valor * 2 );
// console.log(dobrarValor);



// -> filtrar pares
// const numerosPares = numeros.filter( function ( valor) {
//     return valor % 2 === 0;
// });

// console.log(numerosPares); // [ 50, 80, 2, 8, 22 ]

