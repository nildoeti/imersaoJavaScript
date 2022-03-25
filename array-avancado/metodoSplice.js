/*
	Array.prototype.splice()
	Resumo

	O método splice() altera o conteúdo de uma lista, adicionando novos
	elementos enquanto remove elementos antigos.

	Sintáxe: variavel.splice(índice, delete, elem1, elem2, elem3, ...)
	
	Fonte MDN url(https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
*/



const nomes = ['Maria', 'João', 'Eduador', 'Gabriel', 'Julia'];
console.log('Lista atual: ', nomes); // Lista atual:  [ 'Maria', 'João', 'Eduador', 'Gabriel', 'Julia' ]

// const removido = nomes.splice(4, 1); // começa no índice 4 e remove 1 elemento
// console.log('Item removido: ', removido); // [ 'Julia' ]

// const removidos = nomes.splice(3, 2); // começa no índice 3 e remove dois itens
// console.log('Itens remivodos: ', removidos); // Itens remivodos:  [ 'Gabriel', 'Julia' ]


// simulando pop
// const removidos = nomes.splice(-1, 1); // começa no ultimo indíce e remove 1 item
// console.log('Lista atualizada: ', nomes, removidos); // [ 'Julia' ]


// simulando pop
// const removidos = nomes.splice(-2, 2); // remove a partir do índice -2, 2 elementos
// console.log('Lista atualizada: ', nomes, removidos); // Lista atualizada:  [ 'Maria', 'João', 'Eduador' ] [ 'Gabriel', 'Julia' ]
 

// simulando pop
// const removidos = nomes.splice(-2, Number.MAX_VALUE); // remove a partir do índice 2 até o infinito
// console.log('Lista atualizada: ', nomes, removidos); // [ 'Maria', 'João', 'Eduador' ] [ 'Gabriel', 'Julia' ]


// const removidos = nomes.splice(3, 0, 'Fulano'); // a partir do índice 3, remove 0 elemento, e adiciona Fulano ao aray
// console.log(nomes, removidos); // [ 'Maria', 'João', 'Eduador', 'Fulano', 'Gabriel', 'Julia' ] []


// const removidos = nomes.splice(3, 1, 'Ciclano'); // remove um elemento na posição 3 e adiciona Ciclano no lugar
// console.log(nomes, removidos); // [ 'Maria', 'João', 'Eduador', 'Ciclano', 'Julia' ] [ 'Gabriel' ]


// const removidos = nomes.splice(3, 2, 'Beltrano'); // remove dois ítens a partir da posição3 e adiciona Beltrano
// console.log(nomes, removidos); // [ 'Maria', 'João', 'Eduador', 'Beltrano' ] [ 'Gabriel', 'Julia' ]


// const removidos = nomes.splice(1, 2, 'Ciclano', 'Beltrano'); // remove 2 elementos a partir da posição 1 e adiciona outros dois
// console.log(nomes, removidos); // [ 'Maria', 'Ciclano', 'Beltrano', 'Gabriel', 'Julia' ] [ 'João', 'Eduador' ]


// simulando shift
// const removidos = nomes.splice(0, 1); // a partir do índice 0, remove um elemento
// console.log(nomes, removidos); // [ 'João', 'Eduador', 'Gabriel', 'Julia' ] [ 'Maria' ]


// simulando shift
const removidos = nomes.splice(0, 2, 'Beltrano', 'Ciclano'); // remove dois elementos a partir do índice 0 e adiciona outros dois
console.log(nomes, removidos); // [ 'Beltrano', 'Ciclano', 'Eduador', 'Gabriel', 'Julia' ] [ 'Maria', 'João' ]

