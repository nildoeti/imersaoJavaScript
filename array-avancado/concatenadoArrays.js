/*
	Array.prototype.concat()
	Sumário

	O método concat() retorna um novo array contendo todos os arrays ou valores
	passados como parâmetro
	Fonte MDN url(https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)
*/

const a1 = [1, 2, 3]
const a2 = [4, 5, 6]

const a3 = a1.concat(a2);
console.log(a3); // [ 1, 2, 3, 4, 5, 6 ]


/*
	Parâmetros Rest

	A sintaxe de rest parameter (parâmetros rest)  nos permite representar um
	número indefinido de argumentos como um array.
	
	Sintaxe

	function(a, b, ...theArgs) {
	  // ...
	}


	Fonte MDN url(https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/rest_parameters)
*/ 

const a4 = [...a1, 'Teste' ...a2, ...[7, 8, 9, 0]]
console.log(a4); // [ 1, 2, 3, 4, 5, 6 ]

