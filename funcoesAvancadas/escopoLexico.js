/*
	Escopo

	É o contexto atual de execução, em que valores e expressões são "visíveis"
	ou podem ser referenciadas. Se uma variável ou outra expressão não estiver
	"no escopo atual", então não está disponível para uso. Os escopos também
	podem ser em camadas em uma hierarquia, de modo que os escopos filhos
	tenham acesso aos escopos pais, mas não vice-versa.

	Uma function serve como um procedimento em JavaScript, e portanto, cria um
	escopo, de modo que (por exemplo) uma variável definida exclusivamente
	dentro da função não pode ser acessada de fora da função ou dentro de
	outras funções.

	Fonte: MDN - url('https://developer.mozilla.org/pt-BR/docs/Glossary/Scope')
*/

const nome = 'Beltrano';

/*
	importante entender que uma função pode acessar uma variável de fora do
	scopo da função.
	Isso se chama scopo lexico.
*/

// exemplo 1 para escopo da variável
// function falaNome() {
// 	console.log(nome);
// }

// falaNome(); // 'Beltrano'



// exemplo 2 para escopo da variável
// function falaNome() {
// 	console.log(nome);
// }
// console.log(nome); // Beltrano

// function usarFalaNome() {
// 	// body...
// 	falaNome();
// }

// usarFalaNome(); // Beltrano


// exemplo 3 para escopo da variável
function falaNome() {
	console.log(nome);
}

falaNome(); // Beltrano

function usarFalaNome() {
	const nome = 'Fulano';
	falaNome();
}

usarFalaNome(); // Beltrano
