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
console.log(frutas.length); // 3

// removendo o ultimo elemento de um array
const removido = frutas.pop();
console.log(frutas ,removido); // [ 'maça', 'abacaxi' ] mamão


// removendo um elemento de um array no começo
const cores = ['azul', 'amarelo', 'cinza', 'preto'];
const comeco = cores.shift();

console.log(cores, comeco); // [ 'amarelo', 'cinza', 'preto' ] azul


// adicionado um elemento no final da array
cores.push('vermelho');
console.log(cores); // [ 'amarelo', 'cinza', 'preto', 'vermelho' ]

// adicionado um elemento no inicio da array
cores.unshift('branco');
console.log(cores); // [ 'branco', 'amarelo', 'cinza', 'preto', 'vermelho' ]

// fatiando um array
const fatiamento1 = cores.slice(1, 3);
console.log(fatiamento1); // [ 'amarelo', 'cinza' ]

const fatiamento2 = cores.slice(1, -1);
console.log(fatiamento2); // [ 'amarelo', 'cinza', 'preto' ]


// converter uma string em uma array
const comStringArray = 'Convertendo uma string em uma array';
const stringArray = comStringArray.split(' ');
console.log(stringArray); // [ 'Convertendo', 'uma', 'string', 'em', 'uma', 'array' ]

// converter array em strings
const objetos = ['chinelos', 'lapis', 'mesa', 'pedra'];
const arrayString = objetos.join(' ');
console.log(arrayString); // chinelos lapis mesa pedra

