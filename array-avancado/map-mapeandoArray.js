/*
	Map
	O objeto Map contém pares de chave-valor e lembra a ordem original da
	inserção das chaves. Qualquer valor (objetos e valores primitivos)
	podem ser usados como chave ou valor.

	Altera os valores do array original

	Fonte MDN url(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
*/

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]; // array de númros

// exemplo 7 em qu map diferente de fulter, permite alterar os valores do array
const valoresAlterados = numeros.map( valor => {
	return `${valor} * ${valor} = ${valor * 2}`;
});

console.log(valoresAlterados);

/*
 * 	Exemplo da saida para valoresAlterados
	[
	  '5 * 5 = 10',    '50 * 50 = 100',
	  '80 * 80 = 160', '1 * 1 = 2',
	  '2 * 2 = 4',     '3 * 3 = 6',
	  '5 * 5 = 10',    '8 * 8 = 16',
	  '7 * 7 = 14',    '11 * 11 = 22',
	  '15 * 15 = 30',  '22 * 22 = 44',
	  '27 * 27 = 54'
	]
*/


// exemplo 6
//const novosValoresMap = numeros.map( (valor) => {
	//return `Valores alterados pelo método map: 0`; // valores alterados pelo método map
//});

//console.log(novosValoresMap);


// Exemplo 5
//const valorIndiceArray = numeros.map( (valor, indice, array) => {
	//return `Índice: ${indice} Valor: ${valor} Array: ${array}}`;
//});

//console.log(valorIndiceArray);

/*
 * 	Saida para valorIndiceArray
	[
	  'Índice: 0 Valor: 5 Array: 5,50,80,1,2,3,5,8,7,11,15,22,27}',
	  'Índice: 1 Valor: 50 Array: 5,50,80,1,2,3,5,8,7,11,15,22,27}',
	  'Índice: 2 Valor: 80 Array: 5,50,80,1,2,3,5,8,7,11,15,22,27}',
	  'Índice: 3 Valor: 1 Array: 5,50,80,1,2,3,5,8,7,11,15,22,27}',
	  'Índice: 4 Valor: 2 Array: 5,50,80,1,2,3,5,8,7,11,15,22,27}',
	  'Índice: 5 Valor: 3 Array: 5,50,80,1,2,3,5,8,7,11,15,22,27}',
	  'Índice: 6 Valor: 5 Array: 5,50,80,1,2,3,5,8,7,11,15,22,27}',
	  'Índice: 7 Valor: 8 Array: 5,50,80,1,2,3,5,8,7,11,15,22,27}',
	  'Índice: 8 Valor: 7 Array: 5,50,80,1,2,3,5,8,7,11,15,22,27}',
	  'Índice: 9 Valor: 11 Array: 5,50,80,1,2,3,5,8,7,11,15,22,27}',
	  'Índice: 10 Valor: 15 Array: 5,50,80,1,2,3,5,8,7,11,15,22,27}',
	  'Índice: 11 Valor: 22 Array: 5,50,80,1,2,3,5,8,7,11,15,22,27}',
	  'Índice: 12 Valor: 27 Array: 5,50,80,1,2,3,5,8,7,11,15,22,27}'
	]

*/
// exemplo 4
//const valorIndice = numeros.map( (valor, indice) => {
	//return `Valor: ${valor} - Indice: ${indice}`;
//});

//console.log(valorIndice);
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
