/*
	instanceof
	O operador instanceof testa se um objeto tem, em seu prototype, a função
	construtora.

	Fonte MDN:
	url(https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/instanceof)
*/

// definindo construtores
function C() {}
function D() {}

var o = new C();

// true, por que C.prototype esta no prototype de o
console.log(o instanceof C); // true
console.log(Object.getPrototypeOf(o) === C.prototype); // true

// false por que D.prototype não esta no prototipo do objecto o
console.log(Object.getPrototypeOf(o) === D.prototype); // false
console.log(o instanceof D); // false 


console.log(o instanceof Object); // true

var a;
console.log(a instanceof Object); // false
console.log(typeof(a)); // undefined

console.log(C.prototype instanceof Object); // true


C.prototype = {};
var o2 = new C();

console.log(o2 instanceof C); // true
console.log(o instanceof C); //  false


D.prototype = new C(); // use inheritance
var o3 = new D();

console.log(o3 instanceof D); // true
console.log(o3 instanceof C); // true
