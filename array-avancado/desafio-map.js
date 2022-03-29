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

