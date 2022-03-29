/**
 * Desafio:
 * 
 * Retorne uma string com o nome da pessoa
 * Remove apenas a chave "nome" do objeto
 * Adicione uma chave id em cada objeto
 * 
 * */

const pessoas = [
    // array de objetos
    {nome: 'Fulano', idade: 62},
    {nome: 'Beltrano', idade: 23},
    {nome: 'Ciclano', idade: 55},
    {nome: 'Beldade', idade: 19},
    {nome: 'Fulcano', idade: 32},
    {nome: 'Citrano', idade: 47}
]

// Retorne uma string com o nome da pessoa
const nomePessoa = pessoas.map(valor => ({Nome: valor.nome}));
console.log(nomePessoa); // [ 'Fulano', 'Beltrano', 'Ciclano', 'Beldade', 'Fulcano', 'Citrano' ]


 
//  Remove apenas a chave "nome" do objeto
 const chaveNome = pessoas.map(obj => ({Idade: obj.idade}));
 console.log(chaveNome); // [ 62, 23, 55, 19, 32, 47 ]

// Adicione uma chave id em cada objeto
//const nomePessoaId = pessoas.map( (obj, indice) => {
	//obj.id = indice; // usando o valor do índice como valor para o id
	//return obj;
//});

//console.log(nomePessoaId);

/*
 * 	Saida para nomePessoaId:
	[
	  { nome: 'Fulano', idade: 62, id: 0 },
	  { nome: 'Beltrano', idade: 23, id: 1 },
	  { nome: 'Ciclano', idade: 55, id: 2 },
	  { nome: 'Beldade', idade: 19, id: 3 },
	  { nome: 'Fulcano', idade: 32, id: 4 },
	  { nome: 'Citrano', idade: 47, id: 5 }
	]
*/


// Refazendo desafio, Adicione uma chave id em cada objeto, sem alterar o objeto origial
const nomePessoaId = pessoas.map((obj, indice) => {
	const newObj = { ...obj };
	newObj.id = indice; // adicionado novo identificador ao array de objetos
	return newObj;
});
console.log(nomePessoaId);

/*
 * 	Saida para nomePessoaId
	[
	  { nome: 'Fulano', idade: 62, id: 0 },
	  { nome: 'Beltrano', idade: 23, id: 1 },
	  { nome: 'Ciclano', idade: 55, id: 2 },
	  { nome: 'Beldade', idade: 19, id: 3 },
	  { nome: 'Fulcano', idade: 32, id: 4 },
	  { nome: 'Citrano', idade: 47, id: 5 }
	]
*/
