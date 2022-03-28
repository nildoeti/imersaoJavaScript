/*
    Desafio
    Retorna todos os objetos do array
    Retorne as pessoas que tem o nome com 8 letras ou mais
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


// Retorne as pessoas cujo nome termina com a letra e mas com uso de arrow fuction
const pessoaTerminalLetraE = pessoas.filter( obj => obj.nome.toLowerCase().endsWith('e'));
console.log(pessoaTerminalLetraE); // [ { nome: 'Beldade', idade: 19 } ]



// Retorne as pessoas cujo nome termina com a letra e
// const pessoaTerminaComE = pessoas.filter(function(obj) {
// 	return obj.nome.toLowerCase().endsWith('e');
// });

// console.log(pessoaTerminaComE);


// 	Retorne as pessoas com mais de 50 anos
// const pessoasIdade = pessoas.filter( obj => obj.idade >= 50);
// console.log(pessoasIdade); // [ { nome: 'Fulano', idade: 62 }, { nome: 'Ciclano', idade: 55 } ]



// Retorna todos os objetos do array com nomes maior ou igual a 8 caracteres
// const nomesGrandes = pessoas.filter( (obj) => {return obj.nome.length >= 8} );
// console.log(nomesGrandes); // [ { nome: 'Beltrano', idade: 23 } ]




// Retorne todos os objetos do array
// const todosObjetos = pessoas.filter( (nome) => {
// 	return typeof(nome); // retorna todos os objetos do array
// });

// console.log(todosObjetos);
