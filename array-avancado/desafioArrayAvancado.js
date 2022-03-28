/*
    Desafio
    Retorne as pessoas que tem o nome com 7 letras ou mais
    Retorne as pessoas com mais de 50 anos
    Retorne as pessoas cujo nome termina com a letra e
*/
const pessoas = [
    // array de objetos
    {nome: 'Fulano', idade: 62},
    {nome: 'Beltrano', idade: 23},
    {nome: 'Ciclano', idade: 55},
    {nome: 'Beldade', idade: 19},
    {nome: 'Fulcano', idade: 32},
    {nome: 'Citrano', idade: 47}
];


// Retorne as pessoas que tem o nome com 7 letras ou mais
const nomesGrandes = pessoas.filter( (nome) => {
	return typeof(nome); // retorna todos os objetos do array
});

console.log(nomesGrandes);
