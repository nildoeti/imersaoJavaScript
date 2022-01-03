// EXEMPLO 1
function minhaFuncao() {
	console.log('OI');
}

minhaFuncao('Valor'); // OI


// EXEMPLO 2
function minhaFuncao2() {
	console.log(arguments);
}

// [Arguments] { '0': 'Valor', '1': 1, '2': 2, '3': 4, '4': 5, '5': 6 }
minhaFuncao2('Valor', 1, 2, 4, 5, 6) 
