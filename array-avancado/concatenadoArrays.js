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

