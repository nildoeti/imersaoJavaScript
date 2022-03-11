// atribuição via desestruturação via array

// inverter ordem de saida
let a = 'A'; // B
let b = 'B'; // C
let c = 'C'; // A

// exemplo 1
// o que esta a esquerda do sinal de =, é a desestruturação
// [a, b, c] = [1, 2, 3]; // uso de array para atribuição entre variáveis

// exemplo 2
// const numeros = [1, 2, 3];
// [a, b, c] = numeros; // os valores a esquerda do sinal de =, é uma desestruturação

// exemplo 3
const letra = [b, c, a];
[a, b, c] = letra; // B C A

console.log(a, b, c);


// exemplo 4
//               0   1   2   3   4   5   6   7   8   9 // indíces da array
const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]; // valores da array
console.log(numeros[0]); // lendo o valor do primeiro indíces

// uso do operador ...(rest), ...(spread)
// IMPORTANTE: uso de virgua no lugar de variáveis, faz o pulo de indíces
const [primeiroNumero, segundoNumero, , quartoNumero, ...resto] = numeros; // acesso por desestruturação
console.log(primeiroNumero, segundoNumero); // 1, 2
console.log(resto); // pegou os valores restantes da array com uso de ...resto

// exemplo 5
// uso do operador ...(rest), ...(spread)
//                   0               1                2         // indíce da array
//             0     1   2      0    1    2      0    1    2    // indíce da lista
const num = [ [100, 200, 300], [400, 500, 600], [700, 800, 900] ]
console.log(num[1][2]); // array 1, indice 2 -> 600

// exemplo 6
// uso do operador ...(rest), ...(spread)
// por desestruturação
const [,[,,seiscentos]] = num;
console.log(seiscentos); // 600


// exemplo 7
// uso do operador ...(rest), ...(spread)
const [lista1, lista2, lista3] = num;
console.log(lista2); // [ 400, 500, 600 ]
console.log(lista3[0]); // 700
