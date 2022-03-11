
// exemplos do for in com object
const pessoa = {
    nome: 'Fulano',
    sobreNome: 'de Tal',
    idade: 500,
    pais: 'Brasil'
};

// duas formas de acessar as propriedades de um object
// console.log(pessoa.nome);
// console.log(pessoa['nome']);

// acessando propriedades do object com uso de uma variável
// const chave = 'nome';
// console.log(pessoa[chave]);

// acessando chaves do object com for in
// for (let chave in pessoa) {
//         console.log(chave);
// }

// acessando propriedades da chave do object
// for (let propriedade in pessoa) {
//     console.log(pessoa[propriedade]);
// }

// acessando propriedades e valores de um object
for (let propriedade in pessoa) {
    console.log(propriedade + ': '+  pessoa[propriedade]);
}




// exemplos do for in com array
// const frutas = ['pera', 'banana', 'maça', 'caqui'];

// lendo os índices de um array
// for (let i in frutas) {
//     console.log(i);
// }

// exibindo os valores de uma array
//
// for (let indice in frutas) {
//     console.log(frutas[indice]);
// }


// forma clássica do laço for
// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]);
// }
