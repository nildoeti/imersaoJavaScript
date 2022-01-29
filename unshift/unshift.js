/*
	Array.prototype.unshift() MDN:
	url(https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)

	Definicao
	O método unshift() adiciona um ou mais elementos no início de um array e
	retorna o número de elementos (propriedade length) atualizado.
*/

// exemplo 1
var arr = [1, 2];
console.log('Exemplo 1: ', arr);

arr.unshift(0);
console.log('Exemplo 2: ', arr);

arr.unshift(-2, -1);
console.log('Exemplo 3', arr);
