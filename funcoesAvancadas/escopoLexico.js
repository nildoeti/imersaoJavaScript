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
