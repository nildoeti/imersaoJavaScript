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


// exemplo de como espelhar as propriedades de um objeto com sread operatorp
const produto = {nome: 'Camisa', preco: 3.6};

// espelhando as propriedade e valores do objeto produto
const copiaProduto = {...produto}; // spread operatorp

// verificando as propriedades de valores dois dois objetos
console.log(produto); // { nome: 'Camisa', preco: 3.6 }
console.log(copiaProduto); // { nome: 'Camisa', preco: 3.6 }

// alterar a propriedade nome do objeto produto, reflete no objeto copiaProduto
produto.nome = 'Calça';
console.log('\n');
console.log(produto); // { nome: 'Calça', preco: 3.6 }
console.log(copiaProduto);