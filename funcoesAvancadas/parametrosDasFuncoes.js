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
// function minhaFuncao11(a, b = 2, c = 4) {
// 	console.log(a + b + c);
// }
// // undefined assume valor padrão para a variável b
// minhaFuncao11(2, undefined, 10); // 14


// exemplo 12
// function minhaFuncao12(a, b = 2, c = 4) {
// 	console.log(a + b + c);
// }
// // null, assume 0 em b
// minhaFuncao12(2, null, 20); // 22 

// exemplo 13
// argumentos por desestruturação
// function minhaFuncao13({nome, sobreNome, idade}) {
// 	console.log(nome, sobreNome, idade + ' anos de idade');
// }
// minhaFuncao13({nome: 'Fulano', sobreNome: 'de Tal', idade: 66});

// exemplo 14
// function minhaFuncao14({nome, sobreNome, idade}) {
// 	// uso de objetos como argumentos para desestruturação da função.
// 	console.log(nome, sobreNome, idade + ' anos de idade');
// }
// let obj = {nome: 'Fulano', sobreNome: ' de Tal', idade: 14};
// minhaFuncao14(obj);

// exemplo 15
// function minhaFuncao15([argumento1, argumento2, argumento3, argumento4]) {
// 	// desestruturação de array como argumentos para a função
// 	console.log(argumento1, argumento2, argumento3, argumento4);
// }

// let arr = ['Fulano', ' de Tal', 22, ' anos de idade'];
// console.log(arr);	

// exemplo 16
// function conta(operador, acumuldor, numeros) {
// 	// passando argumentos por arry's dentro de array's 
// 	console.log(operador, acumuldor, numeros);
// }
// let paramentros = ['+', 0, [10, 20, 30, 40]];
// conta(paramentros)

// exemplo 17
// function conta2(operador, acumulador, numeros) {
// 	console.log(operador, acumulador, numeros);
// }

// // passando argumentos por arry's simples 
// const arr = ['+', 0, 10, 20, 30, 40, 50]
// console.log(arr);

// exemplo 18
// function conta3(operador, contador, ...numeros) {
// 	// passando argumentos por operdor de rest
// 	console.log(operador, contador, numeros);
// }
// let arr = ['+', 0, 20, 30, 40, 50];
// console.log(arr);

// exemplo 19
// function conta4(operador, acumulador, ...numeros) {
// 	// passando argumentos com for, para retornar os índices 
// 	for (let numero in numeros) {
// 		console.log(numero);
// 	}
// }

// conta4('+', 0, 20, 30, 40, 50);

// exemplo 20
// function conta5(operador, acumulador, ...numeros) {
// 	// passando parâmetros com for, para retornar os valores dos argumentos
// 	for (let index of numeros) {
// 		console.log(index);
// 	}
// }

// conta5('+', 0, 20, 30, 40, 50);

// exemplo 21
function conta6(operador, acumulador, ...numeros) {
	// passando instruçao com o laço for e somar todos os valores do parametros da função
	for (let index of numeros) {
		acumulador += index;
	}
	console.log(acumulador);
}

conta6('+', 0, 20, 30, 40, 50);
