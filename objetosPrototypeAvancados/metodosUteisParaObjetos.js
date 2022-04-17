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
const produtos = { nome: 'Camiseta', preco: 2.9}
console.log(Object.keys(produtos)); // [ 'nome', 'preco' ]

