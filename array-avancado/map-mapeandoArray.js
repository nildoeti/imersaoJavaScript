/*
	Map
	O objeto Map contém pares de chave-valor e lembra a ordem original da
	inserção das chaves. Qualquer valor (objetos e valores primitivos)
	podem ser usados como chave ou valor.

	Altera os valores do array original

	Fonte MDN url(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
*/

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]; // array de númros

// exemplo 2
const numerosIndices = numeros.map((valor, indice, array) => {
    return indice; 
});

console.log(numerosIndices);
// exemplo 1
// const numerosValor = numeros.map( (valor, indice, array) => {
// 	return valor;
// });

// console.log(numerosValor);

// 	exemplo para numeros.map(valor)
// 	[
// 	   5, 50, 80,  1,  2,  3,
// 	   5,  8,  7, 11, 15, 22,
// 	   27
// 	]
