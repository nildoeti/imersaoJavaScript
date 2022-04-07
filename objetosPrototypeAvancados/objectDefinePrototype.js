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
var person = { // object person com a propriedade name e valor Leela
	name: 'Leela'
};
console.log(person.id); // undefined, pois esta propriedade não existe

Object.defineProperty(person, 'id', { // propriedade protegida id
	value: 1,
});
console.log(person.id); // 1

person.id = 4; // tentando alterar o valor para a propriedade id
console.log(person.id); // 1
