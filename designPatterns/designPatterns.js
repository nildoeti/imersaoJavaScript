// function Fakeuser() {
// 	return {
// 		nome: 'Fulano',
// 		sobreNome: 'Beltrano'
// 	}
// }

// const usuario = Fakeuser();
// console.log(usuario);


function Pessoa(nome) {
	return {
		nome,
		sobreNome: 'Beltrano'	
	}
}

const usuario = Pessoa('Fulano');
console.log(usuario);