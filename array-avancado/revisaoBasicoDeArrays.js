// básico de arrays
const nomes = ['eduardo', 'maria', 'joana'];
console.log(nomes); // [ 'eduardo', 'maria', 'joana' ]


nomes[2] = 'joão'; // alterando o terceiro elemento da array
console.log(nomes); // [ 'eduardo', 'maria', 'joão' ]

delete nomes[2]; // posição 3 da array fica vazia após delete
console.log(nomes); // [ 'eduardo', 'maria', <1 empty item> ]


// criando um array com função construtura
const numeros = new Array(1, 2, 3, 4, 5);
console.log(numeros); // [ 1, 2, 3, 4, 5 ]

const novoArray = numeros; // array por referência
console.log(novoArray); // [ 1, 2, 3, 4, 5 ]

novoArray.pop(); // alterando a referência para o array, altera também o array de origem
console.log(numeros); // [ 1, 2, 3, 4 ]
console.log(novoArray); // [ 1, 2, 3, 4 ]


/*
	Sintaxe de Espalhamento - Referência MDN
	URL(https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

	Sintaxe de Espalhamento (Spread syntax) permite que um objeto iterável,
	como uma expressão de array ou uma string seja expandido para ser usado onde
	zero ou mais argumentos (para chamadas de funções) ou elementos (para arrays
	literais) são esperados, ou que um objeto seja expandido onde zero ou mais
	pares propriedade:valor (para objetos literais) são esperados.

*/ 

function sum(x, y, z) {
	return x + y + z;
}

const num = [1, 2, 3]; // array de números

console.log(sum(...num)); // 6
console.log(sum.apply(null, num)); // 6


const novoNum = [...num];
console.log(novoNum); // [ 1, 2, 3 ]

novoNum.pop();
console.log(novoNum);  // [ 1, 2 ]


// verificando o tamanho de um array
const frutas = ['maça', 'abacaxi', 'mamão'];
console.log(frutas.length); // 