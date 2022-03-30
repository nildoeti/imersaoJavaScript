//  unir filter, map e rduce

// Retornar a soma do dobro de todos os números pares
// -> filtrar pares
// -> dobrar os valores
// -> reduzir (somar tudo)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]; // array de números


// -> dobrar os valores
const dobrarValor = numeros.map( valor => valor * 2 );
console.log(dobrarValor);



// -> filtrar pares
// const numerosPares = numeros.filter( function ( valor) {
//     return valor % 2 === 0;
// });

// console.log(numerosPares); // [ 50, 80, 2, 8, 22 ]

