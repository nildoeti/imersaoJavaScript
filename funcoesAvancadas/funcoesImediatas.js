/*
	Funções auto invocadas
	IIFE - Immediately invoked function expression

	IIFE (Immediately Invoked Function Expression) é uma função em JavaScript
	que é executada assim que definida.

É um Design Pattern também conhecido como Self-Executing Anonymous Function e
contém duas partes principais. A primeira é a função anônima cujo escopo léxico
é encapsulado entre parênteses. Isso previne o acesso externo às variáveis
declaradas na IIFE, bem como evita que estas variáveis locais poluam o escopo
global.

A segunda parte corresponde à criação da expressão (), por meio da qual o
interpretador JavaScript avaliará e executará a função.

Fonte MDN - url(https://developer.mozilla.org/pt-BR/docs/Glossary/IIFE)
*/

// exemplo 1 para IIFE
( function() {
	var nome = 'Beltrano'; // variável nome, não pode ser acessada fora do
							// escopo desta expressão
})();

// console.log(nome); // nome is not defined, pois não existe fora do escopo da
					// função acima
