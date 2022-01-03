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

function minhaFuncao4(a, b, c) {
	let total = 0;
	for (let argumentos of arguments) {
		total += argumentos;
	}
	console.log(total, a , b, c); // 52 1 2 3
}

minhaFuncao4(1, 2, 3, 4, 5, 6, 7, 7, 8, 9);
