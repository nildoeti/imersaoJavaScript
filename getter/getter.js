/*
	getter
	A sintaxe de get associa uma propriedade de um objeto a uma função que será
	chamada quando tal propriedade é acessada.
	Sintaxe

	{get prop() { ... } }
	{get [expression]() { ... } }

	Parâmetros

	prop
    	O nome da propriedade à qual a função dada será associada.
	expression
    	A partir do ECMAScript 6, você pode também utilizar expressões para um
    	nome computado de uma propriedade para associar à função dada.

	Fonte MDN url(https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/get)
*/


/*
	Definindo um getter em novos objetos em inicializadores de objetos

	O exemplo abaixo irá criar a pseudo-propriedade latest para o objeto obj,
	que irá retornar o último item do array em log.
*/
var log = ['text'];
var obj = {
	get latext () {
		if (log === 0) return undefined;
			return log[log.length -1];
	}
};

console.log(obj.latext); // text

// Removendo um getter usando o operador delete
delete obj.latext;
console.log(obj.latext); // undefined

// Definindo um getter em objetos existentes usando defineProperty
var o = { a:0 };
Object.defineProperty(o, 'b', {get: function () {return this.a + 1; } });
console.log(o.b);

// Usando uma propriedade com nome computado
var expr = 'foo';
var obj3 = {
	get [expr] () {return 'bar'}
};

console.log(expr); // foo
console.log(obj3.foo)
console.log(obj3); // { foo: [Getter] }
