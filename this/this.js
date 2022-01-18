/*
	this

	A palavra-chave this comporta-se um pouco diferente em Javascript se
	comparado com outras linguagens. Também possui algumas diferenças entre o
	modo estrito e o modo não estrito.

	Em muitos casos, o valor this é determinado pela forma como a função é
	chamada. Ele não pode ser assinado durante a execução, e isso pode ser
	diferente a cada vez que a função é chamada. ES5 introduziu o método bind
	para estabelecer o valor this da função, independentemente de como ela seja
	chamada, e ECMAScript 2015 introduziu o arrow functions, cujo this é
	lexicalmente delimitado (o valor this é estabelecido segundo o escopo de
	execução no qual está inserido).
	Fonte: MDN:
	url(https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/this)
*/

// Contexto global
// console.log(this.document === document); // true

// // Em navegadores web, o objeto window é também o objeto global:
// console.log(this === window); // true

// this.a = 37;
// console.log(window.a);

// Contexto de função com chamada simples
// function f1() {
// 	return this;

// 		Como o código a seguir não está no modo estrito, o valor de this não é
// 		definido pela chamada. Por padrão, this será o objeto global que no
// 		navegador é o window.
// }
// // no navegador
// f1() === winddow; // true

// Em modo restrito
// function f2() {
// 	"use strict"; // assume modo restrito
// 	return this;

// 		Portanto, em modo estrito, se this não for definido durante o contexto
// 		da execução, ele permanecerá indefinido (undefined).

// }

// f2() === undefined; // true

// Funções Arrow (seta)
// var foo = (() => this);
// console.log(foo() === globalObject)

// Chama como um método de um objeto
// var obj = {foo:foo};
// console.log(obj.foo === global); // true

// Tentativa de definir this usando call
// console.log(foo.call(obj) === globalObject) // true


// Cria obj com um método bar que retorna uma função que
// retorna seu this. A função retornada é criada como
// uma função arrow, para que seu this esteja permanentemente
// ligado ao this da função que a envolve. O valor de bar pode ser
// definido na chamada, que por sua vez define o valor da função
// retornada.
var obj = {bar : function() {
		var x = (() => this);
		return x;
	}
};

// Chama bar como método de obj, configurando seu this como obj
// Assina à variável fn uma referência para a função retornada
var fn = obj.bar();

// Chamar fn, sem definir this, por padrão, referenciaria
// ao objeto global ou undefined em modo estrito (strict mode)
console.log(fn() === obj); // true


// No exemplo a seguir, quando o.f() é invocado, o this dentro da função é vinculado ao objeto o.
var o = {
	prop: 37,
	f: function() {
		return this.prop;
	}
};

console.log(o.f);


/*
	Observe que esse comportamento não é afetado mesmo pela forma como (ou onde)
	a função foi definida. No exemplo anterior, nós definimos a função in-line
	(em linha) como o membro f durante a definição de o. No entanto, poderíamos
	ter apenas facilmente definido a função primeiro e depois anexado a o.f.
	Fazendo isso resulta no mesmo comportamento:
*/

var a = {prop:37};

function independent() {
	return this.prop;
}

a.f = independent;

console.log(o.f)