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
// function Produto(nome, preco, estoque) {
// 	this.nome = nome; // publico
// 	this.preco = preco;
	
// 	Object.defineProperty(this, 'estoque', {
// 		// enumerable: true,
// 		value: estoque
// 	});
// }


// const p1 = new Produto('Camisa', 20, 3);


// console.log(p1.estoque); // 3,  


// confirmando que esta tudo ok
// console.log(p1); // Produto { nome: 'Camisa', preco: 20 }
// console.log(p1.nome); // Camisa
// console.log(p1.preco); // 20
// console.log(p1.estoque); // undefined, pois não foi tornado o acesso público com this



// exemplo 5
// function Produto(nome, preco, estoque) {
// 	// body...
// 	this.nome = nome; // público
// 	this.preco =preco; // público

// 	Object.defineProperty(this, 'estoque', {
// 		value: estoque // tornando estoque público
// 	});
// }

// const p1 = new Produto('Camiseta', 30, 3);

// console.log(p1.estoque); // 3


// exemplo 6
// function Produto(nome, preco, estoque) {
// 	// body...
// 	this.nome = nome;
// 	this.preco = preco;

// 	Object.defineProperty(this, 'estoque', {
// 		enumerable: true,
// 		value: estoque,
// 		writable: true // pode alterar o valor?
// 	});
// }

// const p1 = new Produto('Camisa', 20, 2);
// p1.estoque = 300; // 
// console.log(p1.estoque); // 300

// exemplo 7
// function Produto(nome, preco, estoque) {
// 	// body...
// 	this.nome = nome; // torna propriedade pública
// 	this.preco = preco; // torna propriedade pública

// 	Object.defineProperty(this, 'estoque', {
// 		enumerable: true,
// 		value: estoque,
// 		writable: false // pode alterar valor
// 	});
// }

// const p1 = new Produto('Camiseta', 80, 2);
// p1.estoque = 40;
// console.log(p1.estoque); // 2

// exemplo 8
function Produto(nome, preco, estoque) {
	// body...
	this.nome = nome;
	this.preco = preco;

	Object.defineProperty(this, 'estoque', {
		enumerable: true, // mostra a chave
		value: estoque, // valor da chave
		writable: true, // permissão para alterar valor
		configurable: false // alterar, configurar a chave
	});
}

const p1 = new Produto('Camiseta', '70', 5);
p1.estoque = 100;
delete p1.estoque;
console.log(p1.estoque);
