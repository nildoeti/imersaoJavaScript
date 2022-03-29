/**
 * Desafio:
 * 
 * Retorne uma string com o nome da pessoa
 * Retorne apenas a chave "nome" do objeto
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
const nomePessoa = pessoas.map(valor => {
	return valor.nome;
});

console.log(nomePessoa); // [ 'Fulano', 'Beltrano', 'Ciclano', 'Beldade', 'Fulcano', 'Citrano' ]


 
 
