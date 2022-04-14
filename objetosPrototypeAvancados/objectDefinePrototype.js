/*
    defineProperty() -> define/remove uma propriedade do objeto
    defineProperties() -> define/remove varias propriedades de um objeto

    Fonte MDN url(https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties)
*/

// exemplo 1
// var person = { // object person com a propriedade name e valor Leela
// 	id: 1, // propriedade pública pois pode ser acessado de fora do objeto
//	name: 'Leela'
// }

// console.log(person.id); // valor atual: 1
// person.id = 4; // propriedade id por ser pública, pode também ser modificada
// console.log(person.id); // novo valor: 4
// person.id = 10;
// console.log(person.id); // 10

// exemplo 2
// var person = { // object person com a propriedade name e valor Leela
// 	name: 'Leela'
// };
// console.log(person.id); // undefined, pois esta propriedade não existe
//
// Object.defineProperty(person, 'id', { // propriedade protegida id
// 	value: 1,
// });
// console.log(person.id); // 1
//
// person.id = 4; // tentando alterar o valor para a propriedade id
// console.log(person.id); // 1


// exemplo 3
// var person = { // object person com a propriedade name e valor Leela
// 	name: 'Leela'
// };
//
// Object.defineProperty(person, 'id', {
// 	value: 1,
// 	writable: true // permite que a propriedade id, possa ser alterada
// });
// console.log(person.id); // 1
//
// person.id = 10;
// console.log(person.id); // 10


// exemplo 4
function Produto(nome, preco, estoque) {
	this.nome = nome;
	this.preco = preco;
}

const p1 = new Produto('Camiseta', 50, 3);

console.log(p1); // Produto { nome: 'Camiseta', preco: 50 }
