/*
	Função Callback
	Uma função callback é uma função passada a outra função como argumento, que
	é então invocado dentro da função externa para completar algum tipo de
	rotina ou ação.

	Fonte MDN - url(https://developer.mozilla.org/pt-BR/docs/Glossary/Callback_function)

*/

// exemplo 1
// function f1() {
// 	setTimeout(function() {
// 		console.log('f1');
// 	}, 500);
// }

// function f2() {
// 	setTimeout(function() {
// 		console.log('f2');
// 	}, 1000);
// }

// function f3() {
// 	setTimeout(function() {
// 		console.log('f3')
// 	}, 800);
// }

// f1();
// f2();
// f3();
// console.log('Teste...');
// /*
// 	Saida para function f1, f2, f3
// 	Teste...
// 	f1
// 	f3
// 	f2
// */

// exemplo 2
function radon(min = 1000, max = 3000) {
	let num = Math.random() * (min + max) - min;
	return Math.floor(num); // retornar o menor inteiro
}

console.log(radon());

function f1() {
	setTimeout( function() {
	console.log('f1');
	}, radon());
}
f1();

function f2(){
	setTimeout( function() {
		console.log('f2');
	}, radon());
}
f2();

function f3() {
	setTimeout( function() {
		console.log('f3');
	}, radon());
}
f3();
