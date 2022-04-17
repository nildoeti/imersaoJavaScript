/**
 * Object.values
 * Object.entries
 * Object.assign(des, any)
 * Object.getOwnPropertyDescriptor(o, 'prop')
 * ... (spread)
 * 
 * // já visto
 * Object.keys -> retorno das chaves
 * Object.freeze -> congela o objeto
 * Object.defineProperty -> define uma propriedade
 * Object.defineProperties -> define várias propriedades
 */

// exemplo de objeto
// const produto = {nome: 'Camiseta', preco: 1.5};

// // lincar nova variável em produto
// const p1 = produto;

// // alterar o valor do produto
// p1.nome = 'Qualquer nome'

// // exibindo o nome do produto alterado
// console.log(p1.nome);


// exemplo de como espelhar as propriedades de um objeto com spread operator
// const produto = {nome: 'Camisa', preco: 3.6};

// // espelhando as propriedade e valores do objeto produto
// const copiaProduto = {
//     ...produto,
//     cor: 'Preto',
//     origem: 'Brasil'
// }; // spread operatorp

// // verificando as propriedades de valores dois dois objetos
// console.log(produto); // { nome: 'Camisa', preco: 3.6 }
// console.log(copiaProduto); // { nome: 'Camisa', preco: 3.6 }

// // alterar a propriedade nome do objeto produto, não reflete no objeto copiaProduto
// // pois a cópia foi feita com a sintáxe de espalhamento spread operator, caso
// // contrário, a cópia será alterada.
// produto.nome = 'Calça';
// console.log('\n');
// console.log(produto); // { nome: 'Calça', preco: 3.6 }
// console.log(copiaProduto);


// uso da expressão object.assign
// const produto = {nome: 'Camiseta', preco: 3.6};

// // nova cópia com uso da expresão spread operator
// // const copiaProduto = {
// //     ...produto,
// //     // adicionado novas propriedades
// //     cor: 'amarelo',
// //     origem: 'brasil' // e quantas propriedades e valors precisar
// // }

// // nova cópia do objeto produto com uso da expresão object.assign
// const copiaProduto = Object.assign({}, produto, {cor: 'amarelo', origem: 'brasil'});

// // nova cópia do objeto produto com uso somente das propriedades sem spread operator e Object.assign
// const copiaProduto2 = { nome: produto.nome, preco: produto.preco}; // chamando nosso objeto origem
//                                                                     // seguido de sua propriedade
// console.log(copiaProduto2); // { nome: 'Camiseta', preco: 3.6 }

// // listando os objetos
// console.log(produto); // { nome: 'Calça', preco: 3.6 }
// console.log(copiaProduto); // { nome: 'Camiseta', preco: 3.6, cor: 'amarelo', origem: 'brasil' }


// REVISÃO
// revisão de acesso as chaves de um objeto
// const produtos = { nome: 'Camiseta', preco: 2.9}
// console.log(Object.keys(produtos)); // [ 'nome', 'preco' ]

// // protegendo nosso objeto de ser alterado
// const copiaProduto3 = Object.assign({}, produtos);
// console.log(copiaProduto3);

// // protejendo nosso objeto de ser alterado
// Object.freeze(copiaProduto3);
// copiaProduto3.nome = 'Calça';
// console.log(copiaProduto3); // { nome: 'Camiseta', preco: 2.9 }

// trabalhanco com descrição de uma propriedade com o método getOwnPropertyDescriptor
// Sintaxe: Object.getOwnPropertyDescriptor(obj, prop)
// const produto = {nome: 'Camisa', preco: 4.8};
// // console.log(produto);

// console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
// /*
//     {
//     value: 'Camisa',
//     writable: true,
//     enumerable: true,
//     configurable: true
//     }
// */

// console.log(Object.getOwnPropertyDescriptor(produto, 'preco')); // { value: 4.8, writable: true, enumerable: true, configurable: true }

// // alterar permissões das propriedades do objeto produto
// Object.defineProperty(produto, 'nome', {
//     writable: false,
//     configurable: false
// });

// console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
// /*
//     saida do exemplo da alteração para a propriedade nome do objeto produto
//     {
//     value: 'Camisa',
//     writable: false,
//     enumerable: true,
//     configurable: false
//     }
// */

// // tentativa de alterar/deletar a propriedade nome do objeto produto
// produto.nome = 'Outra coisa';
// delete produto.nome;
// console.log(produto.nome); // camisa


// Object.values
const produto = {nome: 'Camisa', preco: 4.8, origem: 'brasil'};
// console.log(Object.values(produto)); // [ 'Camisa', 4.8 ]

// Object.entries
console.log(Object.entries(produto)); // [ [ 'nome', 'Camisa' ], [ 'preco', 4.8 ] ]

// uso do laço for para interagir com Object.entries 
for (let interagir of Object.entries(produto)) {
    console.log(interagir);
    /*
        Saida para interação do objeto com laço for e uso do método Object.entries
        [ 'nome', 'Camisa' ]
        [ 'preco', 4.8 ]
        [ 'origem', 'brasil' ]
    */
}

// novo exemplo de uso do laço for para exibir propriedades/valores com o método Object.entries
for (let [chave, valor] of Object.entries(produto)) {
    console.log(chave, valor);
    /*
        Saida da interação acima:
        nome Camisa
        preco 4.8
        origem brasil
    */
}

// novo exemplo de interação com laço for e o método Object.entries
for (let item of Object.entries(produto)) {
    console.log(item[0], item[1]);
}