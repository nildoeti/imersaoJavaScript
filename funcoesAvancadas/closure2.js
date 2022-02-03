// exemplo 1
// function retornaFuncao() {
// 	const nome = 'Fulano';
// }
// console.log(retornaFuncao()); // undefined


// exemplo 2
// escopo global
function retornaFuncao() {
	const nome = 'Fulano';

	// retornando uma função anônima
	return function() {
		return nome;
	}
}
console.log(retornaFuncao()); // [Function (anonymous)]
console.dir(retornaFuncao()); // [Function (anonymous)]

