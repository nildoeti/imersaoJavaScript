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
const produto = {nome: 'Camiseta', preco: 1.5};

// lincar nova variável em produto
const p1 = produto;

// alterar o valor do produto
p1.nome = 'Qualquer nome'

// exibindo o nome do produto alterado
console.log(p1.nome);