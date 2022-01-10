/*
	Array.prototype.reduce()
	O método reduce() executa uma função reducer (fornecida por você) para cada
	elemento do array, resultando num único valor de retorno.
*/

// exemplo 1
// const array1 = [1, 2, 3, 4];
// const reducer = (previousValue, currentValue) => previousValue + currentValue;

// const result1 = array1.reduce(reducer);
// console.log(result1); // 10

// const result2 = array1.reduce(reducer, 5);
// console.log(result2); // 15

/**
 * A função reducer recebe quatro parâmetros:

    Acumulador (acc)
    Valor Atual (cur)
    Index Atual (idx)
    Array original (src)

	O valor de retorno da sua função reducer é atribuída ao acumulador. O
	acumulador, com seu valor atualizado, é repassado para cada iteração
	subsequente pelo array, que por fim, se tornará o valor resultante,
	único, final.

	Sintaxe
	array.reduce(callback( acumulador, valorAtual[, index[, array]] )[, valorInicial]))
 */

// exemplo 1
// var maxCallback = ( acc, cur ) => Math.max( acc.x, cur.x );
// var maxCallback2 = ( max, cur ) => Math.max( max, cur );

// // reduce() sem valores iniciais
// let result1 = [ { x: 22 }, { x: 42 } ].reduce( maxCallback ); // 42
// let result2 = [ { x: 22 }            ].reduce( maxCallback ); // { x: 22 }
// // [                      ].reduce( maxCallback ); // TypeError 

// console.log(result1, result2);

// exemplo 2
// // map/reduce; melhor solução, funciona para vetores vazios e tambem para vetores grandes
// [ {x: 22}, {x: 42} ].map( el => el.x );
// 										.reduce(maxCallback2, -Infinity );


// na prática
// const sum = [1, 2, 3, 4, 5].reduce(function(acumulador, valorAtual, Index, array) {
// 	return acumulador + valorAtual;
// });
// console.log(sum); // 15

/*
	O callback será invocado quatro vezes, com os argumentos e valores em cada chamada  sendo:

							acumulador 		valorAtual 	 index 		array 				valor de retorno
	primeira chamada    	0 		 			1 		 		1 			[0, 1, 2, 3, 4]    		1
	segunda chamada 		1 					2 			   2 			[0, 1, 2, 3, 4] 			3
	terceira chamada 		3 					3 			   3		 	[0, 1, 2, 3, 4] 			6
	quarta chamada 		6 					4 			   4 			[0, 1, 2, 3, 4] 			10

*/


// exemplo com arrow function
// const resultReduce = [0, 1, 2, 3, 4].reduce( ( acumulador, valorAtual ) => acumulador + valorAtual);
// console.log(resultReduce); // 10 

// // exemplo para valor valorInicial
// const resultReduce2 = [0, 1, 2, 3, 4].reduce( function(acumulador, valorAtual, indice, array) {
// 	return acumulador + valorAtual;
// }, 10);

// console.log(resultReduce2); // 20

/*
	callback 				acumulador 	valorAtual 	index 	array 				valor de retorno
	primeira chamada 			10 			0 				0 		[0, 1, 2, 3, 4] 			10
	segunda chamada 			10 			1 				1 		[0, 1, 2, 3, 4] 			11
	terceira chamada 			11 			2 				2 		[0, 1, 2, 3, 4] 			13
	quarta chamada 			13 			3 				3 		[0, 1, 2, 3, 4] 			16
	quinta chamada 			16 			4 				4 		[0, 1, 2, 3, 4] 			20
*/


/*
	Exemplo 1
	Soma todos os valores de uma array
*/

// let total = [0, 1, 2, 3].reduce( function(acumulador, valorAtual) {
// 	return valorAtual + acumulador;
// });

// console.log(total); // 6

// // usar uma arrow function para a soma de todos os valores de uma array:
// let total2 = [0, 1, 2, 3, 4].reduce(
// 		(acumulador, valorAtual) => acumulador + valorAtual, 0.6
// 	);

// console.log(total2); // 10


/*
	Soma de valores de um objeto de um array

	Para resumir os valores contidos em um array, você deve fornecer um 
	valorInicial, para que cada item passe por sua função.
*/

let valorInicial = 0;
let soma = [{x: 1}, {x: 2}, {x: 3}].reduce(function (acumulador, valorAtual) {
	return acumulador + valorAtual.x;
}, valorInicial);

console.log(soma);
