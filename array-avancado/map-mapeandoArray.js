/*
	Map
	O objeto Map contém pares de chave-valor e lembra a ordem original da
	inserção das chaves. Qualquer valor (objetos e valores primitivos)
	podem ser usados como chave ou valor.

	Altera os valores do array original

	Fonte MDN url(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
*/

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]; // array de númros

// exemplo 4
const valorIndice = numeros.map( (valor, indice) => {
	return `Valor: ${valor} - Indice: ${indice}`;
});

console.log(valorIndice);
/*
 * 	Saida para valorIndice
	[
	  'Valor: 5 - Indice: 0',
	  'Valor: 50 - Indice: 1',
	  'Valor: 80 - Indice: 2',
	  'Valor: 1 - Indice: 3',
	  'Valor: 2 - Indice: 4',
	  'Valor: 3 - Indice: 5',
	  'Valor: 5 - Indice: 6',
	  'Valor: 8 - Indice: 7',
	  'Valor: 7 - Indice: 8',
	  'Valor: 11 - Indice: 9',
	  'Valor: 15 - Indice: 10',
	  'Valor: 22 - Indice: 11',
	  'Valor: 27 - Indice: 12'
	]
*/

// exemplo 3
//const numerosArray = numeros.map( (valor, indice, array) => {
    //return array;
//});

//console.log(numerosArray);

// exemplo 2
/*const numerosIndices = numeros.map((valor, indice, array) => {
    return indice; 
});

console.log(numerosIndices);
*/// exemplo 1
// const numerosValor = numeros.map( (valor, indice, array) => {
// 	return valor;
// });

// console.log(numerosValor);

// 	exemplo para numeros.map(valor)
// 	[
// 	   5, 50, 80,  1,  2,  3,
// 	   5,  8,  7, 11, 15, 22,
// 	   27
// 	]-m '''
