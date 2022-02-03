const nome = 'Beltrano';

/*
	importante entender que uma função pode acessar uma variável de fora do
	scopo da função.
	Isso se chama scopo lexico.
*/

// exemplo para escopo da variável
function falaNome() {
	console.log(nome);
}

falaNome(); // 'Beltrano'
