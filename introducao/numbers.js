let numero1 = 1500; // number
let numero2 = 2.5;  // number

console.log(typeof(numero1)); //  number
console.log(typeof(numero2)); // Number

// soma de dois valores
let resultado1 = numero1 + numero2;
console.log(resultado1); // 1502.5
console.log(typeof(resultado1)); // number

// converte variável numero1 para string e concatena com o valor da variável numero2
let resultado2 = numero1.toString() + numero2;
console.log(resultado2); // 15002.5
console.log(typeof(resultado2)); // string

// converte uma variável tipo number para tipo binário
let versaoBinaria = numero1.toString(2);
console.log(versaoBinaria); // 10111011100
console.log(typeof(versaoBinaria)); // strin

// fixar um valor em quantidade de casas decimais
let resultado3 = (numero1 + 2.788987);
console.log(resultado3); // 1502.788987
console.log(resultado3.toFixed(2)); // 1502.79

// saber se um determinado valor em uma variável é do tipo inteiro
console.log(Number.isInteger(numero1)); // true

// não se calcula Number com Strin
let resultado4 = numero1 * 'teste';
console.log(resultado4); // NaN
console.log(Number.isNaN(resultado4)); // true, não é um número

let num1 = 0.7;
let num2 = 0.1;
let result = 0;
result += num1 + num2 + num2 + num2; // valor próximo de 1 inteiro

console.log(result);
console.log(Number.isInteger(result)); // não é um valor inteiro 1
