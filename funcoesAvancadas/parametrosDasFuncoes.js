// EXEMPLO 1
// function minhaFuncao() {
// 	console.log('OI');
// }

// minhaFuncao('Valor'); // OI


// EXEMPLO 2
// function minhaFuncao2() {
// 	console.log(arguments);
// }

// minhaFuncao2('Teste 2', 2, 3, 4, 5, 6, 7, 8, 9, 0, 'frase');


// exemplo 3
// function minhaFuncao3() {
// 	let total = 0;
// 	for (let argumentos of arguments) {
// 		total += argumentos;
// 	}	
// 	console.log(total);
// }

// minhaFuncao3(1, 2, 3, 4, 5, 6, 7, 8, 9, 0,);


// exemplo 4
// function minhaFuncao4(a, b, c) {
// 	let total = 0;
// 	for (let argumentos of arguments) {
// 		total += argumentos;
// 	}
// 	console.log(total, a , b, c); // 52 1 2 3
// }

// minhaFuncao4(1, 2, 3, 4, 5, 6, 7, 7, 8, 9);


/* arguments em JavaScript, sustenta todos os argumentos da linguagem. */

// exemplo 5
// function minhaFuncao5(a, b, c, d, e) {
// 	console.log(a, b, c, d, e);
// }
// // JavaScript gera o valor padrão undefined, quando faltar valores para argumentos
// minhaFuncao5(1, 2, 3); // 1 2 3 undefined undefined


// exemplo 6
// function minhaFuncao6(a, b) {
//  	console.log(a + b);
//  } 

// minhaFuncao6(2); // NaN

// exemplo 7
// function minhaFuncao7(a, b = 2) {
// 	console.log(a + b);
// }
// minhaFuncao7(2); //

// exemplo 8
// function minhaFuncao8(a, b = 4, c = 8) {
// 	console.log(a + b + c);
// }
// minhaFuncao8(2); // 14

// exemplo 9
// function minhaFuncao9(a, b = 2, c = 4) {
// 	console.log(a + b + c);
// }
// minhaFuncao9(2, 5); // b com novo valor = a 5

// exemplo 10
// function minhaFuncao10(a, b = 2, c = 4) {
// 	console.log(a + b + c);
// }
// minhaFuncao10(2, '', 20); // 220 -> variável a, passa a ser uma string
//  

// exemplo 11
function minhaFuncao11(a, b = 2, c = 4) {
	console.log(a + b + c);
}
// undefined assume valor padrão para a variável b
minhaFuncao11(2, undefined, 10); // 14