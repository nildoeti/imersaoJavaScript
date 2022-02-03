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

// // exemplo 2
// function radon(min = 1000, max = 3000) {
// 	let num = Math.random() * (min + max) - min;
// 	return Math.floor(num); // retornar o menor inteiro
// }

// console.log(radon());

// function f1() {
// 	setTimeout( function() {
// 	console.log('f1');
// 	}, radon());
// }
// f1();

// function f2(){
// 	setTimeout( function() {
// 		console.log('f2');
// 	}, radon());
// }
// f2();

// function f3() {
// 	setTimeout( function() {
// 		console.log('f3');
// 	}, radon());
// }
// f3();


// exemplo 3
function rand(min = 1000, max = 3000) {
	const num = Math.random() * (min - max) - min;
	return Math.floor(num); // retorna o menor inteiro
}
console.log(rand()) ;

function f1(callback) { // recebe o parâmentro callback
	setTimeout(() => {
	  console.log('f1');
	  if (callback) callback(); // checar se callback existe
	}, rand());
}

function f2(callback) { // recebe o parâmentro callback
	setTimeout( () => {
		console.log('f2')
	  	if (callback) callback(); // checar se callback existe
	}, rand());
}

function f3(callback) {// recebe o parâmentro callback
	setTimeout( () => {
		console.log('f3')
	  	if (callback) callback(); // checar se callback existe
	}, rand());
}

// chamando as funções com callback
// f1( function() { // terminado a execução da função f1, a função f2 será executada
// 	f2( function() { // terminado a execução da função f2, a função f3 será executada
// 		f3( function() { // terminado a execução da função f3, executa console.log
// 			console.log('Teste...');
// 		});
// 	});
// });



// outra forma de chamar funções com callback

f1(f1Callback);

function f1Callback() {
	f2(f2Callback);
}

function f2Callback() {
	f3(f3Callback);
}

function f3Callback() {
	console.log('Teste...');
}
