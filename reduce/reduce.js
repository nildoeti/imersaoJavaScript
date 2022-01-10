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
var maxCallback = ( acc, cur ) => Math.max( acc.x, cur.x );
var maxCallback2 = ( max, cur ) => Math.max( max, cur );

// reduce() sem valores iniciais
let result1 = [ { x: 22 }, { x: 42 } ].reduce( maxCallback ); // 42
let result2 = [ { x: 22 }            ].reduce( maxCallback ); // { x: 22 }
// [                      ].reduce( maxCallback ); // TypeError 

console.log(result1, result2);

